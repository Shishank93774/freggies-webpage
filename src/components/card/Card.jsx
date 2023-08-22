import "./Card.css";
import { useState } from "react";
const Card = ({
  name = "Name",
  desc = "This is a fabulous product and you should buy this asap because...",
  url = "https://www.bigbasket.com/media/uploads/p/l/10000150_19-fresho-onion.jpg",
  price = 599,
  discount = 20,
}) => {
  const [qty, setQty] = useState(1);

  return (
    <div className="card-container">
      <div className="card-img-container">
        <div className="card-discount-overlay">
          <p className="card-discount">Get {discount}%&nbsp;Off</p>
        </div>
        <img src={url} alt="prod" />
      </div>
      <div className="card-body">
        <h3 className="card-title">{name ? name : "Name"}</h3>
        <p className="card-price">
          Rs.&nbsp;<del>{price}</del>&nbsp;{Math.floor(price * (1 - discount / 100))}&nbsp;per&nbsp;Kg
        </p>
        <p className="card-desc">{desc}</p>
      </div>
      <div className="card-bottom">
        <div className="card-maths">
          <button className="card-operator" onClick={(e) => {
            e.preventDefault();
            console.log(qty);
            if(qty > 1) setQty(qty-1);
          }} >-</button>
          <input className="card-qty-show" placeholder="1" type="text" value={qty} />
          <button className="card-operator" onClick={(e) => {
            e.preventDefault();
            console.log(qty);
            if(qty < 99) setQty(qty+1);
          }}>+</button>
        </div>
        <button className="card-add" onClick={(e) => {
          e.preventDefault();
          // request to user API to update his cart's data
          
          // reset current qty
          setQty(1);
        }} >ADD</button>
      </div>
    </div>
  );
};

export default Card;
