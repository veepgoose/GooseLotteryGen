import React from 'react';
import './Header.css'
import gooseLogo from './gooseLogo.png';

function Header(props) {
    return (
      <header className={props.className}>
      <img src={gooseLogo} alt="Goose logo" className="gooseLogo"/>
       
      </header>
    );
  }
  
  export default Header; 