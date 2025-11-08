import React from 'react';
import './Header.css';

const Header = ({ currentStep = 1 }) => {
  return (
    <header className="header">
      <nav className="navbar">
        <div className="logo-container">
          <img 
            src="/images/logo.png" 
            alt="AeroSmart Logo" 
            className="logo-image"
          />
          <div className="logo">AeroSmart</div>
        </div>
        
        <div className="steps-container">
          <div className={`step ${currentStep === 1 ? 'active' : ''}`}>
            <div className="step-number">1</div>
            <div className="step-label">Sélectionnez les vols</div>
          </div>
          <div className={`step ${currentStep === 2 ? 'active' : ''}`}>
            <div className="step-number">2</div>
            <div className="step-label">Informations du vol</div>
          </div>
          <div className={`step ${currentStep === 3 ? 'active' : ''}`}>
            <div className="step-number">3</div>
            <div className="step-label">Compléter la réservation</div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;