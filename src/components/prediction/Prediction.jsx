import axios from "axios";
import { useState } from "react";
import CommonSection from "../commonsection/CommonSection";
import "./Prediction.css"; // Import your CSS file

const Prediction = () => {
  const [commodity_name, setCommodity_name] = useState("");
  const [minimum_price, setMinimumPrice] = useState(0);
  const [maximum_price, setMaximumPrice] = useState(0);
  const [average_price, setAveragePrice] = useState(0);
  const [predictionResult, setPredictionResult] = useState("-");

  const handlePredictClick = async () => {
    const resp = await axios.post("http://127.0.0.1:5000/predict", {
      commodity_name,
      minimum_price,
      maximum_price,
      average_price,
    });
    const pred_res = resp.data;
    setPredictionResult(pred_res.prediction.toFixed(2));
  };
  return (
    <>
      <CommonSection title="Price Prediction" />
      <div className="price-prediction-container">
        <h1>Price Prediction</h1>
        <div className="input-container">
          Product Name :-{" "}
          <input
            type="text"
            name="commodity_name"
            value={commodity_name}
            onChange={(e) => {
              setCommodity_name(e.target.value);
            }}
          />
          Minimum Price :-{" "}
          <input
            type="number"
            name="minimum_price"
            value={minimum_price}
            onChange={(e) => {
              setMinimumPrice(e.target.value);
            }}
          />
          Maximum Price :-{" "}
          <input
            type="number"
            name="maximum_price"
            value={maximum_price}
            onChange={(e) => {
              setMaximumPrice(e.target.value);
            }}
          />
          Average Price :-{" "}
          <input
            type="number"
            name="average_price"
            value={average_price}
            onChange={(e) => {
              setAveragePrice(e.target.value);
            }}
          />
          <button onClick={handlePredictClick}>Predict</button>
        </div>
        <div className="prediction-result">
          <b> Prediction Result: </b> Rs. {predictionResult}
        </div>
      </div>
    </>
  );
};

export default Prediction;
