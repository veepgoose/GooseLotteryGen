import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './Components/Header/Header.js';
import Footer from './Components/Footer/Footer.js';
import Card from './Components/Card/Card.js';
import LotteryGenerator from './Components/LotteryGenerator.js';

function App() {
  const [showFooter, setShowFooter] = useState(false);
  const [step, setStep] = useState(0);
  const questions = [
    { question: 'Question 1', answer: '' },
    { question: 'Question 2', answer: '' },
    { question: 'Question 3', answer: '' },
  ];
  const [userAnswers, setUserAnswers] = useState([]);

  const handleAnswerChange = (index, answer) => {
    setUserAnswers((prevAnswers) => {
      const updatedAnswers = [...prevAnswers];
      updatedAnswers[index] = answer;
      return updatedAnswers;
    });
  };

  const handleNextStep = () => {
    setStep((prevStep) => prevStep + 1);
  };

  useEffect(() => {
    const handleScroll = () => {
      const isAtBottom =
        window.innerHeight + window.pageYOffset >= document.body.offsetHeight;
      setShowFooter(isAtBottom);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const renderStep = () => {
    switch (step) {
      case 0: // Landing page
        return (
          <Card>
            <h2>Welcome to the Lottery App!</h2>
            <p>Please enter your name to continue:</p>
            {/* Text input for entering name */}
            {/* Next button to advance to the next step */}
          </Card>
        );

      case 1: // Questions
        return (
          <Card>
            {questions.map((question, index) => (
              <div key={index}>
                <h3>{question.question}</h3>
                {/* Text input or options for answering the question */}
                {/* Next button to advance to the next question */}
              </div>
            ))}
          </Card>
        );

      case 2: // Display lottery numbers
        return (
          <Card>
            <LotteryGenerator />
          </Card>
        );

      default:
        return null;
    }
  };

  return (
    <div className="App">
      <Header className="header" />
      <div className="content">{renderStep()}</div>
      {showFooter && <Footer className="footer" />}
    </div>
  );
}

export default App;



