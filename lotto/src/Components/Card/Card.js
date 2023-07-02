import React from "react"; 
import "./card.css";
import LotteryGenerator from "../LotteryGenerator";

const Card = () => {
  return (
    <div className="card-container">
    <div className="card">
      <h2>WELCOME</h2>
      <p>To The High Goose Lottery Number Generator</p>
      <input className="name-field" type="text" placeholder="Gimme your name"/>
      <LotteryGenerator />
    </div>
  </div>
  );
};

export default Card;
