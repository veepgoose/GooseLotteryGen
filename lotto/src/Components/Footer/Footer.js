import React from 'react';
import './footer.css';
import Social from '../Social/Social.js';

const Footer = () => {
  return (
    <div>
      <footer className="footer">
        <div className="footer-inner">
          <p className="coffee">If you win the Jackpot, you're welcome to Buy Me A Coffee ;)</p> 
          <Social />
        </div>
      </footer>
    </div>
  );
}

export default Footer;