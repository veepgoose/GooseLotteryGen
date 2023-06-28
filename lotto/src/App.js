import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header.js';
import Footer from './Components/Footer/Footer.js';
import Card from './Components/Card/Card.js';
import Results from './Components/Results/Results.js';
import { useEffect, useState } from 'react';


function App() {
  const [showFooter, setShowFooter] = useState(false);
  const lotteryNumbers = [1, 2, 3, 4, 5, 6];

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
    <div className="App">
      <Header className="header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          I swear to god why is this so hard. FML
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Fucking React
        </a>
      </Header>
    
      <div className="content">
        <Card/>
        <Results numbers={lotteryNumbers}/>
      </div>
      {showFooter && <Footer className="footer" />}
      
    </div>
  );
}

export default App;
