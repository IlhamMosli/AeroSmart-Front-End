import React from 'react';
import '../styles/Home.css';
import HomeHeader from '../components/HomeHeader';
import HomeFooter from '../components/HomeFooter';

function App() {
  return (
    <div className="App">
      {/* Header */}
      <HomeHeader />

      {/* Hero Section */}
      <section className="hero">
        <h1>L'aéroport intelligent, dans votre poche</h1>
        <p>Découvrez des vols exceptionnels vers les plus belles destinations du Maroc</p>
      </section>

      {/* Flight Search Section */}
      <section className="flight-search">
        <h2 className="section-title">Où Voulez-vous aller ?</h2>
        <div className="search-form">
          <div className="form-group">
            <label>Vol</label>
            <div className="form-value">1 Adulte</div>
          </div>
          <div className="form-group">
            <label>Depuis</label>
            <div className="form-value">Casablanca</div>
          </div>
          <div className="form-group">
            <label>Jusqu'à</label>
            <div className="form-value">Agadir</div>
          </div>
          <div className="form-group">
            <label>Départ</label>
            <div className="form-value">--/--/----</div>
          </div>
          <div className="form-group">
            <label>Retour</label>
            <div className="form-value">--/--/----</div>
          </div>
          <button className="search-button">
            Rechercher des vols
          </button>
        </div>
      </section>

      {/* Best Offers Section */}
      <section className="best-offers">
        <h2 className="section-title">Meilleurs offres en ce moment</h2>
        <div className="offers-grid">
          <div className="offer-card">
            <img 
              src="/images/Taghazout.jpg" 
              alt="Taghazout" 
              className="offer-image"
            />
            <div className="offer-content">
              <h3 className="offer-title">Taghazout</h3>
              <p className="offer-location">Sous-Massa, Maroc</p>
            </div>
          </div>

          <div className="offer-card">
            <img 
              src="/images/Essaouira.jpg" 
              alt="Essaouira" 
              className="offer-image"
            />
            <div className="offer-content">
              <h3 className="offer-title">Essaouira</h3>
              <p className="offer-location">Marrakech-Safi, Maroc</p>
            </div>
          </div>

          <div className="offer-card">
            <img 
              src="/images/Agadir.jpg" 
              alt="Agadir" 
              className="offer-image"
            />
            <div className="offer-content">
              <h3 className="offer-title">Agadir</h3>
              <p className="offer-location">Sous-Massa, Maroc</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about">
        <div className="about-content">
          <h2>A propos</h2>
          <p>Votre compagnie aérienne de confiance pour des voyages sécurisés</p>
          
          <div className="contact-info">
            <h3>Contacter-nous</h3>
            <ul className="contact-details">
              <li>📞 +212 6748392614</li>
              <li>✉️ Aerosmart@gmail.com</li>
              <li>📍 Aéroport Mohammed V, Casablanca</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Footer */}
      <HomeFooter />
    </div>
  );
}

export default App;