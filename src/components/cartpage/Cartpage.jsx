import { useState } from "react";
import "./Cartpage.css"; // Import your CSS file
import Cookies from "js-cookie";
import axios from "axios";
import { useNavigate } from "react-router";
import { useEffect } from "react";

function Cartpage() {
  const userEmailString = Cookies.get("_auth_state");
  const [cartItems, setCartItems] = useState([]);
  const navigate = useNavigate();
  // const addToCart = (product) => {
  //   setCartItems([...cartItems, { ...product, quantity: 1 }]);
  // };

  const increaseQuantity = async (productId) => {
    let newItems = cartItems.map((product) => {
      if (product._id === productId) {
        return { ...product, qty: product.qty + 1 };
      }
      return product;
    });
    const newUserProducts = newItems.map((item) => {
      return { id: item._id, qty: item.qty };
    });
    const userId = await getUserId();
    await axios.patch("http://localhost:3001/api/users/" + userId, {
      boughtProducts: newUserProducts,
    });
    setCartItems(newItems);
  };

  const decreaseQuantity = async (productId) => {
    let newItems = cartItems.map((product) => {
      if (product._id === productId) {
        return { ...product, qty: product.qty - 1 };
      }
      return product;
    });
    newItems = newItems.filter((item) => item.qty > 0);
    const newUserProducts = newItems.map((item) => {
      return { id: item._id, qty: item.qty };
    });
    const userId = await getUserId();
    await axios.patch("http://localhost:3001/api/users/" + userId, {
      boughtProducts: newUserProducts,
    });
    setCartItems(newItems);
  };

  const removeProduct = async (productId) => {
    let newItems = cartItems.filter((item) => item._id !== productId);
    const newUserProducts = newItems.map((item) => {
      return { id: item._id, qty: item.qty };
    });
    const userId = await getUserId();
    await axios.patch("http://localhost:3001/api/users/" + userId, {
      boughtProducts: newUserProducts,
    });
    setCartItems(newItems);
  };

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price * item.qty, 0);
  };

  const getTotalSavings = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * (item.discount / 100) * item.qty,
      0
    );
  };

  const getTotalItems = () => {
    return cartItems.reduce((total, item) => total + item.qty, 0);
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

  useEffect(() => {
    const initialCall = async () => {
      console.log("Intializing Cart");
      if (userEmailString) {
        try {
          const userId = await getUserId();
          const userProducts = await getUserProducts(userId);
          console.log(userId);
          console.log(userProducts);

          const getProductInfo = async (productId) => {
            const response = await axios.get(
              "http://localhost:3001/api/products/getInfo/" + productId
            );
            console.log("respone", response);
            return response.data;
          };

          const items = await Promise.all(
            userProducts.map(async ({ id, qty }) => {
              const productInfo = await getProductInfo(id);
              console.log("product info", productInfo);
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

  return (
    <>
      <div className="cart-product">
        <div className="cart-page">
          <div className="cart-items">
            <h1>Cart</h1>
            {cartItems.map((item, index) => (
              <div className="cart-item" key={item._id}>
                <div className="product-image">
                  <img
                    src={item.photoArray[0].url}
                    alt={item.name}
                    className="card-image"
                  />
                </div>
                <div className="product-info">
                  <p>{item.name}</p>
                  <p>Rs.{item.price}</p>
                </div>

                <div className="quantity-controls">
                  <button onClick={() => decreaseQuantity(item._id)}>-</button>
                  <p>{item.qty}</p>
                  <button onClick={() => increaseQuantity(item._id)}>+</button>
                </div>
                <button
                  className="remove-button"
                  onClick={() => removeProduct(item._id)}
                >
                  Remove
                </button>
              </div>
            ))}
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
                  <p>Rs.{getTotalPrice().toFixed(2)} </p>
                </div>
                <div className="details">
                  {" "}
                  <p>Rs.{getTotalSavings().toFixed(2)}</p>
                </div>
                <div className="details">
                  <p>Rs.0</p>
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
                  Rs.{(getTotalPrice() - getTotalSavings()).toFixed(2)}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="total-price">
          <p>Checkout Now!</p>
        </div>
      </div>
    </>
  );
}

export default Cartpage;
