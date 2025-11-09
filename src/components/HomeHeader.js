import React from 'react';
import './HomeHeader.css';

function HomeHeader() {
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
        
        <ul className="nav-links">
          <li><a href="#accueil">Accueil</a></li>
          <li><a href="#login">Se Connecter</a></li>
          <li><a href="#signin">S'inscrire</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default HomeHeader;