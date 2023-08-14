import "./Sliders.css";
import { useState } from "react";

const cardsData = [
  {
    label: "Handbag",
    alt: "image3",
    url: "https://static.wixstatic.com/media/22e53e_efc1552d8050407f82ea158302d0debd~mv2.jpg/v1/fill/w_663,h_663,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/22e53e_efc1552d8050407f82ea158302d0debd~mv2.jpg",
    price: "499"
  },
  {
    label: "Sweater",
    alt: "image4",
    url: "https://static.wixstatic.com/media/22e53e_01575d792adb43a6a16595bd74a1cc8d~mv2.jpg/v1/fill/w_663,h_663,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/22e53e_01575d792adb43a6a16595bd74a1cc8d~mv2.jpg",
    price: "2,099"
  },
  {
    label: "Flower Vase",
    alt: "image5",
    url: "https://static.wixstatic.com/media/22e53e_2fee033b2eca46cab4eec7fa74e99c31~mv2.jpg/v1/fill/w_663,h_663,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/22e53e_2fee033b2eca46cab4eec7fa74e99c31~mv2.jpg",
    price: "1,099"
  },
  {
    label: "T-Shirt",
    alt: "image6",
    url: "https://static.wixstatic.com/media/22e53e_8adb0d7018b047e0a998acf987fd3fd6~mv2.jpg/v1/fill/w_663,h_663,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/22e53e_8adb0d7018b047e0a998acf987fd3fd6~mv2.jpg",
    price: "449"
  },
];

const Sliders = ({ title }) => {
  // const [currentFirstIndex, setCurrentFirstIndex] = useState(0);
  // function rotateCards() {
  //   setCurrentFirstIndex(currentFirstIndex+1);
  // }
  return (
    <div className="slider-container">
      <div className="slider-title">{title}</div>
      <div className="cards-container">
        {cardsData.map((card) => {
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
