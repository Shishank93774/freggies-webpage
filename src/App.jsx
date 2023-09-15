import "./App.css";
import Contact from "./components/contact/Contact";
import Events from "./components/Events/Events";
import Footer from "./components/footer/Footer";
import Footer2 from "./components/footer/Footer2";
import Hero from "./components/hero/Hero";
import Myaccount from "./components/myaccount/Myaccount";
import Navbar from "./components/navbar/navbar";
import Sliders from "./components/sliders/Sliders";
import Fruits from "./components/fruits/Fruits";
import Vegetable from "./components/vegetables/Vegetable";
import Cartpage from "./components/cartpage/Cartpage";
import LoginReg from "./components/login/LoginReg";
import ResetPassword from "./components/login/ResetPassword";
import SendPasswordResetEmail from "./components/login/SendPasswordResetEmail";
import Prediction from "./components/prediction/Prediction";
import { Routes, Route } from "react-router";
import { RequireAuth } from "react-auth-kit";
import { useState, useEffect } from "react";
import Cookies from "js-cookie";
import axios from "axios";
import Checkout1 from "./components/checkout/Checkout1";

function App() {
  const [numberOfProducts, setNumberOfProducts] = useState(0);
  const userEmailString = Cookies.get("_auth_state");
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
    }
  };

  const getUserProducts = async (userId) => {
    const userProductsResponse = await axios.get(
      "http://localhost:3001/api/users/" + userId + "/products"
    );
    return userProductsResponse.data;
  };

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    const initialCall = async () => {
      if (userEmailString) {
        try {
          const userId = await getUserId();
          const userProducts = await getUserProducts(userId);
          let num = userProducts.reduce((total, item) => total + item.qty, 0);
          setNumberOfProducts(num);
        } catch (err) {
          console.log(err);
        }
      } else {
        setNumberOfProducts(0);
      }
    };
    initialCall();
  }, []);
  return (
    <>
      <Routes>
        <Route
          path="/login"
          element={
            <>
              <Navbar numberOfProducts={numberOfProducts}></Navbar>
              <LoginReg></LoginReg>
              <Footer></Footer>
            </>
          }
        ></Route>
        <Route
          path="/sendpasswordresetemail"
          element={
            <>
              <Navbar numberOfProducts={numberOfProducts}></Navbar>
              <SendPasswordResetEmail></SendPasswordResetEmail>
              <Footer></Footer>
            </>
          }
        ></Route>
        <Route
          path="/reset-password"
          element={
            <>
              <Navbar numberOfProducts={numberOfProducts}></Navbar>
              <ResetPassword></ResetPassword>
              <Footer></Footer>
            </>
          }
        ></Route>
        <Route
          path="/cart"
          element={
            <RequireAuth loginPath="/login">
              <Navbar numberOfProducts={numberOfProducts}></Navbar>
              <Cartpage setNumberOfProducts={setNumberOfProducts}></Cartpage>
              <Footer></Footer>
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/myaccount"
          element={
            <RequireAuth loginPath="/login">
              <>
                <Navbar numberOfProducts={numberOfProducts}></Navbar>
                <Myaccount></Myaccount>
                <Footer2></Footer2>
              </>
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/vegetables"
          element={
            <>
              <Navbar numberOfProducts={numberOfProducts}></Navbar>
              <Vegetable setNumberOfProducts={setNumberOfProducts}></Vegetable>
              <Footer></Footer>
            </>
          }
        ></Route>
        <Route
          path="/fruits"
          element={
            <>
              <Navbar numberOfProducts={numberOfProducts}></Navbar>
              <Fruits setNumberOfProducts={setNumberOfProducts}></Fruits>
              <Footer></Footer>
            </>
          }
        ></Route>
        <Route
          path="/prediction"
          element={
            <>
              <Navbar numberOfProducts={numberOfProducts}></Navbar>
              <Prediction></Prediction>
              <Footer></Footer>
            </>
          }
        ></Route>
        <Route
          path="/checkout"
          element={
            <>
              <Navbar numberOfProducts={numberOfProducts}></Navbar>
              <Checkout1 setNumberOfProducts={setNumberOfProducts}></Checkout1>
              <Footer></Footer>
            </>
          }
        ></Route>
        <Route
          path="/*"
          element={
            <>
              <Navbar numberOfProducts={numberOfProducts}></Navbar>
              <Hero></Hero>
              <Sliders
                setNumberOfProducts={setNumberOfProducts}
                type={"all"}
                title={"BEST SELLERS"}
              ></Sliders>
              <Sliders
                setNumberOfProducts={setNumberOfProducts}
                type={"all"}
                title={"BEST OFFERS"}
              ></Sliders>
              <Sliders
                setNumberOfProducts={setNumberOfProducts}
                type={"fruits"}
                title={"FRUITS"}
              ></Sliders>
              <Sliders
                setNumberOfProducts={setNumberOfProducts}
                type={"vegetables"}
                title={"VEGETABLES"}
              ></Sliders>
              <Events></Events>
              <Contact></Contact>
              <Footer></Footer>
            </>
          }
        ></Route>
      </Routes>
    </>
  );
}

export default App;
