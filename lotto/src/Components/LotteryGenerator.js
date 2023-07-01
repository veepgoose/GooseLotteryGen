import React, { useState } from 'react';

const LotteryGenerator = () => {
  const [name, setName] = useState('');
  const [answer, setAnswer] = useState(false);
  const [generatingNumbers, setGeneratingNumbers] = useState(false);
  const [lotteryNumbers, setLotteryNumbers] = useState([]);

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
    setLotteryNumbers(generatedNumbers);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (generatingNumbers) {
      generateLotteryNumbers();
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={handleNameChange} />
        </label>
        <br />
        <label>
          Are you ready?
          <input type="checkbox" checked={answer} onChange={handleAnswerChange} />
        </label>
        <br />
        <label>
          Generate numbers?
          <input type="checkbox" checked={generatingNumbers} onChange={handleGeneratingNumbersChange} />
        </label>
        <br />
        <button type="submit">Submit to the High Goose</button>
      </form>
      {/* Render the lottery numbers if the user has checked the box */}
      {lotteryNumbers.length > 0 && (
        <div className="results">
          <h2>Lottery Numbers</h2>
          <ul>
            {lotteryNumbers.map((number) => (
              <li key={number}>{number}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default LotteryGenerator;
