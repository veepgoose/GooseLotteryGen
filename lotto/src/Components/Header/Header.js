import React from 'react';
import './Header.css'
import gooseLogo from './gooseLogo.png';

function Header() {
    return (
      <header className="header">
      <img src={gooseLogo} alt="Goose logo" className="gooseLogo"/>
       
      </header>
    );
  }
  
  export default Header; 