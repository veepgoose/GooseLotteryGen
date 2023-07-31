import React, { useState } from "react";
import "./App.css";
import Header from "./Components/Header/Header.js";
import Footer from "./Components/Footer/Footer.js";
import Questions from "./Components/Questions/Questions.js";

function App() {
  const [showFooter, setShowFooter] = useState(false);

  const handleSubmission = () => {
    setShowFooter(true);
  };

  return (
    <div className="App">
      <Header className="header" />
      <div className="content">
        <Questions onSubmission={handleSubmission} />
      </div>
      {showFooter && <Footer className="footer" />}
    </div>
  );
}

// testing 123

export default App;
