import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header.js';
import Footer from './Components/Footer/Footer.js';
import Card from './Components/Card/Card.js';

function App() {
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
      </div>
      <Footer />
    </div>
  );
}

export default App;
