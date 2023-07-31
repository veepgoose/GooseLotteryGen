import React, { useState } from "react";
import "./Questions.css";
import LotteryGenerator from "../LotteryGenerator";

const Questions = ({ onSubmission }) => {
  const [showResults, setShowResults] = useState(false);
  const [lotteryNumbers, setLotteryNumbers] = useState([]);
  const [userName, setUserName] = useState("");

  const handleSubmission = (name) => {
    setUserName(name);
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
            <h2>{userName}, Behold! Your winning Lottery Numbers:</h2>
            <img
              className="goose"
              src="https://gifdb.com/images/high/dancing-skipping-goose-b9qr0lip9qejhuls.webp"
              alt="goose"
            />
            {lotteryNumbers.length > 0 && (
              <ul className="results-list">
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

export default Questions;
