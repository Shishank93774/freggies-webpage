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
import Description from "./components/description/Description";
import Vegetable from "./components/vegetables/Vegetable";
import Cartpage from "./components/cartpage/Cartpage";
// import LoginReg from "./components/auth/LoginReg";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Helper from "./components/helper/Helper";

const router = createBrowserRouter([
  {
    path: "/myaccount",
    element: (
      <>
        <Myaccount></Myaccount>,<Footer2></Footer2>
      </>
    ),
  },
  {
    path: "/fruits",
    element: (
      <>
        <Fruits></Fruits>,<Footer></Footer>
      </>
    ),
  },
  {
    path: "/about",
    element: (
      <>
        <Helper></Helper>
        <Description></Description>,<Footer></Footer>
      </>
    ),
  },
  {
    path: "/vegetables",
    element: (
      <>
        <Vegetable></Vegetable>
      </>
    ),
  },
  {
    path: "/cart",
    element: (
      <>
        <Cartpage></Cartpage>
      </>
    ),
  },
  // {
  //   path: "/login",
  //   element: (
  //     <>
  //       <Navbar></Navbar>
  //       <LoginReg></LoginReg>
  //     </>
  //   ),
  // },
  {
    path: "/*",
    element: (
      <>
        <Hero></Hero>
        <Sliders type={"fruits"} title={"BEST SELLERS"}></Sliders>
        <Sliders type={"vegetables"} title={"BEST OFFERS"}></Sliders>
        {/* <Sliders data={cardsData} type={"Fruits"} title={"KITCHEN MUST HAVE's"}></Sliders> */}
        <Events></Events>
        <Contact></Contact>
        <Footer></Footer>
      </>
    ),
  },
]);

function App() {
  return (
    <>
      <Navbar></Navbar>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
