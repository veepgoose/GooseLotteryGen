import React from "react"; 
import "./card.css";

const Card = () => {
  return (
    <div className="card-container">
    <div className="card">
      <h2>WELCOME</h2>
      <p>To The High Goose Lottery Number Generator</p>
      <input className="name-field" type="text" placeholder="Gimme your name"/>
    </div>
  </div>
  );
};

export default Card;
