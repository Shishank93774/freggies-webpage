import "./Sliders.css";
import Card from "../card/Card";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/effect-fade";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { NavLink } from "react-router-dom";

const Sliders = ({ type, title, setNumberOfProducts }) => {
  const [data, setdata] = useState([]);
  // const [currentFirstIndex, setCurrentFirstIndex] = useState(0);
  // function rotateCards() {
  //   setCurrentFirstIndex(currentFirstIndex+1);
  // }
  const showLoginFailure = () => toast.warning("Please login first!");
  const showAddingSuccess = () => toast.success(`Item added successfully`);
  useEffect(() => {
    const getAllProducts = async () => {
      const vals = (
        await axios.get(`http://localhost:3001/api/products/${type}`)
      ).data;
      function shuffle(array) {
        array.sort(() => Math.random() - 0.5);
      }
      shuffle(vals);
      setdata(vals);
    };
    getAllProducts();
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <div className="slider-container">
        <div className="slider-title">
          {type === "fruits" || type === "vegetables" ? (
            <NavLink to={`/${type}`}> {title}</NavLink>
          ) : (
            <p> {title} </p>
          )}
          <hr></hr>
        </div>
        <div className="cards-container">
          <Swiper
            navigation={true}
            modules={[Navigation]}
            spaceBetween={0}
            slidesPerView={4}
          >
            {data.map((card, idx) => {
              return (
                <SwiperSlide key={idx}>
                  <Card
                    name={card.name}
                    price={card.price}
                    url={card.photoArray[0].url}
                    discount={card.discount}
                    desc={card.desc}
                    category={card.category}
                    productId={card._id}
                    showLoginFailure={showLoginFailure}
                    showAddingSuccess={showAddingSuccess}
                    setNumberOfProducts={setNumberOfProducts}
                  ></Card>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default Sliders;
