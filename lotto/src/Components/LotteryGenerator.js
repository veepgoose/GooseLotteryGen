import React, { useState } from 'react';
import './LotteryGenerator.css';

const LotteryGenerator = ({ onSubmission, onLotteryNumbers }) => {
  const [name, setName] = useState('');
  const [answer, setAnswer] = useState(false);
  const [generatingNumbers, setGeneratingNumbers] = useState(false);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleAnswerChange = (event) => {
    setAnswer(event.target.checked);
  };

  const handleGeneratingNumbersChange = (event) => {
    setGeneratingNumbers(event.target.checked);
  };

  const generateLotteryNumbers = () => {
    const numBalls = 6;
    const ballRange = 59;
    const generatedNumbers = [];

    while (generatedNumbers.length < numBalls) {
      const randomNumber = Math.floor(Math.random() * ballRange) + 1;

      if (generatedNumbers.includes(randomNumber)) {
        continue;
      } else {
        generatedNumbers.push(randomNumber);
      }
    }

    generatedNumbers.sort((a, b) => a - b);
    onLotteryNumbers(generatedNumbers);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (name && answer && generatingNumbers) {
      generateLotteryNumbers();
      onSubmission();
    }
  };

  return (
    <div className="generator-container">
      <form onSubmit={handleSubmit}>
        <label>
          <input
            className="name-input"
            type="text"
            placeholder="Gimme your name!"
            value={name}
            onChange={handleNameChange}
          />
        </label>
        <br />
        <label className="q1">
          Are you ready to bow down to The High Goose?
          <input
            type="checkbox"
            className="checkbox"
            checked={answer}
            onChange={handleAnswerChange}
          />
        </label>
        <br />
        <br />
        <label className="q2">
          Do you agree to give up your first born child?
          <input
            type="checkbox"
            className="checkbox"
            checked={generatingNumbers}
            onChange={handleGeneratingNumbersChange}
          />
        </label>
        <br />
        <br />
        <button className="submit-button" type="submit">
          SUBMIT TO THE HIGH GOOSE
        </button>
      </form>
    </div>
  );
};

export default LotteryGenerator;
