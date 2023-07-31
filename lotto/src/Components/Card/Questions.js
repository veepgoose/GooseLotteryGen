import React, { useState } from "react";
import "./Questions.css";
import LotteryGenerator from "../LotteryGenerator";

const Card = ({ onSubmission }) => {
  const [showResults, setShowResults] = useState(false);
  const [lotteryNumbers, setLotteryNumbers] = useState([]);

  const handleSubmission = () => {
    setShowResults(true);
    onSubmission();
  };

  const handleLotteryNumbers = (numbers) => {
    setLotteryNumbers(numbers);
  };

  return (
    <div className="card-container">
      <div className="card">
        {!showResults ? (
          <div>
            <h2>WELCOME</h2>
            <p>To The High Goose Lottery Number Generator</p>
            <LotteryGenerator
              onSubmission={handleSubmission}
              onLotteryNumbers={handleLotteryNumbers}
            />
          </div>
        ) : (
          <div className="results">
            <h2>Lottery Numbers</h2>
            {lotteryNumbers.length > 0 && (
              <ul>
                {lotteryNumbers.map((number) => (
                  <li key={number}>{number}</li>
                ))}
              </ul>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;
