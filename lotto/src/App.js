import React, { useEffect, useState } from 'react';
import './App.css';
import Header from './Components/Header/Header.js';
import Footer from './Components/Footer/Footer.js';
import Questions from './Components/Questions/Questions.js';

function App() {
  const [showFooter, setShowFooter] = useState(false);

  const handleSubmission = () => {
    setShowFooter(true);
  };

  useEffect(() => {
    const handleScroll = () => {
      const isAtBottom = window.innerHeight + window.pageYOffset >= document.body.offsetHeight;
      setShowFooter(isAtBottom);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <div className="App">
        <Header className="header" />
        <div className="content-wrapper">
          <div className="fixed-height-container">
            <Questions onSubmission={handleSubmission} />
          </div>
        </div>
        <Footer className={`footer ${showFooter ? 'show' : ''}`} />
      </div>
    </>
  );
}

export default App;




