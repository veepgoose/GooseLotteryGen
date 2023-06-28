import React from 'react';
import './Header.css'
import gooseLogo from './gooseLogo.png';

function Header(props) {
    return (
      <div className="Header-container">
      <header className={props.className}>
      <img src={gooseLogo} alt="Goose logo" className="gooseLogo"/>
       
      </header>
      </div>
    );
  }
  
  export default Header; 