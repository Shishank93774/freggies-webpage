//Deals.jsx
import "../offers/Offers.css";

const Deals = ({ title }) => {
  return (
    <>
      <div className="slider-container">
        <div className="slider-title">{title}</div>
        <hr />
        <div className="offers-container">
          <img src="src\assets\deals1.jpg" alt="image1"></img>
          <img src="src\assets\deals2.jpg" alt="image2"></img>
          <img src="src\assets\deals3.jpg" alt="image3"></img>
          <img src="src\assets\deals4.jpg" alt="image4"></img>
        </div>
      </div>
    </>
  );
};
export default Deals;
