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

const cardsData = [
  {
    name: "Tomatoes",
    alt: "image3",
    url: "https://www.collinsdictionary.com/images/full/tomato_281240360.jpg",
    price: "70",
    discount: "50",
  },
  {
    name: "Potatoes",
    alt: "image4",
    url: "https://m.media-amazon.com/images/I/313dtY-LOEL.jpg",
    price: "30",
  },
  {
    name: "Lady Finger",
    alt: "image4",
    url: "https://m.media-amazon.com/images/I/61M7ZbTTlVL._AC_UF1000,1000_QL80_.jpg",
    price: "50",
  },
  {
    name: "Beetroot",
    alt: "image6",
    url: "https://m.media-amazon.com/images/I/616PXhYj8iL._AC_UF1000,1000_QL80_.jpg",
    price: "80",
  },
  {
    name: "Carrot",
    alt: "image6",
    url: "https://kiranacompare.com/wp-content/uploads/2020/11/The-lost-plot-growing-carrots-iStock-471680420.jpg",
    price: "30",
  },
  {
    name: "Carrot",
    alt: "image6",
    url: "https://kiranacompare.com/wp-content/uploads/2020/11/The-lost-plot-growing-carrots-iStock-471680420.jpg",
    price: "30",
  },
  {
    name: "Carrot",
    alt: "image6",
    url: "https://kiranacompare.com/wp-content/uploads/2020/11/The-lost-plot-growing-carrots-iStock-471680420.jpg",
    price: "30",
  },
  {
    name: "Carrot",
    alt: "image6",
    url: "https://kiranacompare.com/wp-content/uploads/2020/11/The-lost-plot-growing-carrots-iStock-471680420.jpg",
    price: "30",
  },
  {
    name: "Carrot",
    alt: "image6",
    url: "https://kiranacompare.com/wp-content/uploads/2020/11/The-lost-plot-growing-carrots-iStock-471680420.jpg",
    price: "30",
  },
];

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
        <Sliders data={cardsData} title={"BEST SELLERS"}></Sliders>
        <Sliders data={cardsData} title={"BEST OFFERS"}></Sliders>
        <Sliders data={cardsData} title={"KITCHEN MUST HAVE's"}></Sliders>
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
