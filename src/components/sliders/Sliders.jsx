import "./Sliders.css";
import { useState } from "react";


const Sliders = ({ title, data }) => {
  // const [currentFirstIndex, setCurrentFirstIndex] = useState(0);
  // function rotateCards() {
  //   setCurrentFirstIndex(currentFirstIndex+1);
  // }
  return (
    <div className="slider-container">
      <div className="slider-title">{title}</div>
      <div className="cards-container">
        {data.map((card) => {
          return (
            <div className="card" key={card}>
              <div className="card-img-container">
                <img src={card.url} alt={card.alt} />
              </div>
              <div className="card-desc">
                <p className="name">{card.label}</p>
                <p className="price">Rs. {card.price}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Sliders;
