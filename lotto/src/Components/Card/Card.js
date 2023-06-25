import React from "react"; 
import "./card.css";

const Card = () => {
  return (
    <div className="card">
      <h2>Card Title</h2>
      <p>This is the card content.</p>
      <input className="name-field" type="text" placeholder="Gimme your name"/>
    </div>
  );
};

export default Card;
