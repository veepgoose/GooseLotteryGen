import React from 'react';
import './Social.css';
import SocialLinks from './SocialLinks.js'

function Social () {

    return (
      <section id="Social">
         <div className="Social">
         <div classsName="Social-container">
          
         </div>
            <div className='social-row'>
             <div>
                <div className='social-content'>
                    <div className='social-slider'>
                        {SocialLinks.map((social, index) => (
                            <div className='social-card' key={index}>
                            <a href = {social.link} target="_blank" rel="noopener noreferrer">
                                <img src={social.icon} alt={social.name} />
                                </a>
                                 <div className="social-name">
                                    <h3>{social.name}</h3>
                                </div>
                             </div>
                        ))}     
                    </div>
                </div>
             </div>
        </div>
    </div>
 
    </section>
    );

}

export default Social;