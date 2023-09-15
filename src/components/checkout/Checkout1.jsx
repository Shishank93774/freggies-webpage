import { useState } from "react";
import "./Checkout1.css"; // Import your CSS file
import Cookies from "js-cookie";
import axios from "axios";
import { useNavigate } from "react-router";
import { useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";

const STRIPE_KEY ="pk_test_51NqgctSJNVDmGaidyxFsc083hMIezFYZWwKik7w1yaDqxcMy9SBUXTitce1S9Cm6ePScXTw7G3NrheqiDXSyva0400HumaHFDv";

function Checkout1({ setNumberOfProducts }) {
  const userEmailString = Cookies.get("_auth_state");
  const [cartItems, setCartItems] = useState([]);
  const navigate = useNavigate();
  const [activeStep, setActiveStep] = useState("shipping");
  const [shippingData, setShippingData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    address: "",
    phone: "",
    city: "",
    state: "",
    zipCode: "",
  });
  const [paymentData, setPaymentData] = useState({
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    nameOnCard: "",
  });

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price * item.qty, 0);
  };

  const getTotalSavings = () => {
    return cartItems.reduce(
      (total, item) =>
        total + item.price * (Math.max(5, item.discount) / 100) * item.qty,
      0
    );
  };

  const getTotalItems = () => {
    let num = cartItems.reduce((total, item) => total + item.qty, 0);
    setNumberOfProducts(num);
    return num;
  };

  const getUserId = async () => {
    if (userEmailString) {
      const userEmail = JSON.parse(userEmailString).email;
      try {
        const userIdResponse = await axios.get(
          "http://localhost:3001/api/users/getUserId/" + userEmail
        );
        const userId = userIdResponse.data;
        return userId;
      } catch (err) {
        console.log(err);
      }
    } else {
      navigate("/login");
    }
  };

  const getUserProducts = async (userId) => {
    const userProductsResponse = await axios.get(
      "http://localhost:3001/api/users/" + userId + "/products"
    );
    return userProductsResponse.data;
  };

  const getUserData = async (userId) => {
    const userDataResponse = await axios.get(
      "http://localhost:3001/api/users/" + userId
    );
    return userDataResponse.data;
  };

  useEffect(() => {
    const initialCall = async () => {
      if (userEmailString) {
        try {
          const userId = await getUserId();
          const userData = await getUserData(userId);
          // console.log(userData);
          setShippingData({
            firstname: userData.firstname,
            lastname: userData.lastname,
            email: userData.email,
            address: userData.address,
            phone: userData.phone,
          });
          // console.log(shippingData);
          const userProducts = await getUserProducts(userId);
          const getProductInfo = async (productId) => {
            const response = await axios.get(
              "http://localhost:3001/api/products/getInfo/" + productId
            );
            return response.data;
          };

          const items = await Promise.all(
            userProducts.map(async ({ id, qty }) => {
              const productInfo = await getProductInfo(id);
              const { name, price, discount, photoArray, _id } = productInfo;
              return {
                name,
                price,
                discount,
                photoArray,
                qty,
                _id,
              };
            })
          );
          setCartItems(items);
        } catch (err) {
          console.log(err);
        }
      } else {
        navigate("/login");
      }
    };
    initialCall();
  }, []);

  const handleBack = () => {
    setActiveStep("shipping");
  };

  const makePayment = async () => {
    const stripe = await loadStripe(STRIPE_KEY);

    const resp = await axios.post(
      "http://localhost:3001/api/create-checkout-session",
      {
        products: cartItems,
      }
    );

    // console.log(resp);

    const session = resp.data;


    const result = stripe.redirectToCheckout({
      sessionId: session.id,
    });
  };

  return (
    <div className="checkout-container">
      <div className="checkout-page">
        <div className="timeline">
          <div className={`step ${activeStep === "shipping" ? "active" : ""}`}>
            Shipping
          </div>
          <div className={`step ${activeStep === "payment" ? "active" : ""}`}>
            Payment
          </div>
        </div>
        {activeStep === "shipping" && (
          <div className="shipping-section">
            <div className="myacc-form-row">
              <input
                type="text"
                value={shippingData.firstname}
                onChange={(e) => {
                  setShippingData({
                    ...shippingData,
                    firstname: e.target.value,
                  });
                }}
              />
              <input
                type="text"
                value={shippingData.lastname}
                onChange={(e) => {
                  setShippingData({
                    ...shippingData,
                    lastname: e.target.value,
                  });
                }}
              />
            </div>
            <div className="myacc-form-row">
              <input disabled type="email" value={shippingData.email} />
              <input
                type="tel"
                value={shippingData.phone}
                onChange={(e) => {
                  setShippingData({ ...shippingData, phone: e.target.value });
                }}
              />
            </div>
            <input
              className="myacc-form-row-address"
              type="text"
              value={shippingData.address}
              onChange={(e) => {
                setShippingData({ ...shippingData, address: e.target.value });
              }}
            />
            <div className="myacc-form-row-three">
              <input type="number" placeholder="Zip" />
              <input type="text" placeholder="City" />
              <select required>
                <option value="" disabled selected hidden>
                  State
                </option>
                <option>Rajasthan</option>
                <option>Hariyana</option>
                <option>Uttar Pradesh</option>
                <option>Uttarakhand</option>
              </select>
            </div>
            {/* Use shippingData state to populate form fields */}
            <button className="next-button" onClick={makePayment}>
              <p>Pay Now</p>
            </button>
          </div>
        )}
        {activeStep === "payment" && (
          <div className="payment-section">
            {/* Payment form */}
            {/* Use paymentData state to populate form fields */}
            <button onClick={handleBack}>Back</button>
          </div>
        )}
      </div>
      <div className="order-summarry">
        <h2>Cart Summary</h2>
        <hr></hr>
        <div className="order-summary-details">
          <div className="detail-titles">
            <div className="details">
              <p>No. of Items</p>
            </div>
            <div className="details">
              {" "}
              <p>Subtotal</p>
            </div>
            <div className="details">
              {" "}
              <p>You Saved</p>
            </div>
            <div className="details">
              <p>Delivery Charges</p>
            </div>
          </div>
          <div className="detail-values">
            <div className="details">
              <p>{getTotalItems()}</p>
            </div>
            <div className="details">
              {" "}
              <p>Rs. {getTotalPrice().toFixed(2)} </p>
            </div>
            <div className="details">
              {" "}
              <p>
                Rs.
                <span
                  style={{
                    color: "green",
                  }}
                >
                  {" "}
                  {getTotalSavings().toFixed(2)}{" "}
                </span>{" "}
              </p>
            </div>
            <div className="details">
              <p>
                Rs.{" "}
                <span
                  style={{
                    color: "red",
                  }}
                >
                  {cartItems.length ? Math.round(getTotalPrice() * 0.02) : "0"}{" "}
                </span>
              </p>
            </div>
          </div>
        </div>
        <hr></hr>
        <div className="order-summary-details">
          <div className="detail-titles">
            <p className="details">Total </p>
          </div>
          <div className="detail-values">
            <p className="price-details">
              Rs.{" "}
              {(
                getTotalPrice() -
                getTotalSavings() +
                Math.round(getTotalPrice() * 0.02)
              ).toFixed(2)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout1;
