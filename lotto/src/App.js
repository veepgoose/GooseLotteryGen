import React, { useState } from 'react';
import './App.css';
import Header from './Components/Header/Header.js';
import Footer from './Components/Footer/Footer.js';
import Results from './Components/Results/Results.js';

function App() {
  const [showFooter, setShowFooter] = useState(true);

  const handleSubmission = () => {
    setShowFooter(true);
  };

  return (
    <div className="App">
      <Header className="header" />
      <body>
      <div className="content">
        <Results onSubmission={handleSubmission} />
      </div>
      </body>
      {showFooter && <Footer className="footer" />}
    </div>
  );
}

export default App;




