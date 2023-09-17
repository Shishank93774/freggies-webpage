//Offers.jsx

import "./Offers.css";
const Offers = ({ title }) => {
  return (
    <>
      <div className="slider-container">
        <div className="slider-title">{title}</div>
        <hr />
        <div className="offers-container">
          <a href="/fruits">
            <img src="src\assets\offer1.jpg" alt="image1"></img>
          </a>
          <img src="src\assets\offer2.jpg" alt="image2"></img>
          <img src="src\assets\offer3.jpg" alt="image3"></img>
          <img src="src\assets\offer4.jpg" alt="image4"></img>
        </div>
      </div>
    </>
  );
};
export default Offers;
