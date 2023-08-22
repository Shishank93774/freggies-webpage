import "./Sliders.css";
import Card from "../card/Card";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/effect-fade";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const Sliders = ({ title, data }) => {
  // const [currentFirstIndex, setCurrentFirstIndex] = useState(0);
  // function rotateCards() {
  //   setCurrentFirstIndex(currentFirstIndex+1);
  // }
  return (
    <div className="slider-container">
      <div className="slider-title">{title}</div>
      <div className="cards-container">
        <Swiper
          navigation={true}
          modules={[Navigation]}
          spaceBetween={10}
          slidesPerView={4}
        >
          {data.map((card, idx) => {
            return (
              <SwiperSlide key={idx}>
                <Card name={card.name} price={card.price} url={card.url} discount={card.discount}></Card>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default Sliders;
