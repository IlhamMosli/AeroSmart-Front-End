import React, { useState } from 'react';
import '../styles/FlightList.css';
import Header from '../components/Header';

const FlightList = () => {
  const [selectedFlight, setSelectedFlight] = useState(null);

  // Données mockées des vols
  const flights = [
    {
      id: 1,
      departure: { 
        time: "12:45",
        city: "Casablanca",
        airport: "CMN"
      },
      arrival: { 
        time: "14:30",
        city: "Agadir",
        airport: "AGA"
      },
      duration: "1h 25min",
      type: "Vol direct",
      temperature: "26°C",
      weather: "Ensoleillé",
      priceOptions: [
        { seats: 2, price: "MAD 1200" }
      ]
    },
    {
      id: 2,
      departure: { 
        time: "14:30",
        city: "Casablanca",
        airport: "CMN"
      },
      arrival: { 
        time: "18:45",
        city: "Agadir",
        airport: "AGA"
      },
      duration: "2h 45min",
      type: "Vol direct",
      temperature: "18°C",
      weather: "Nuageux",
      priceOptions: [
        { seats: 4, price: "MAD 999" },
      ]
    }
  ];

  // Function to get weather icon
  const getWeatherIcon = (weather) => {
    if (weather.toLowerCase().includes('ensoleillé')) {
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="weather-icon sun-icon">
          <circle cx="12" cy="12" r="5" strokeWidth="2"/>
          <path strokeLinecap="round" strokeWidth="2" d="M12 2v2m0 16v2M4 12H2m20 0h-2m-2.5-5.5l-1.5 1.5m-7-7L7.5 7.5m9 9l1.5 1.5m-11 0l1.5-1.5"/>
        </svg>
      );
    } else if (weather.toLowerCase().includes('nuageux')) {
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="weather-icon cloud-icon">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4 4 0 003 15z"/>
        </svg>
      );
    } else {
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="weather-icon default-icon">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m-8-9H3m16 0h-1M6.343 6.343l-.707.707m12.728 12.728l-.707.707M6.343 17.657l-.707-.707m12.728-12.728l-.707-.707"/>
        </svg>
      );
    }
  };

  const handleSelectFlight = (flight) => {
    setSelectedFlight(flight);
    console.log('Vol sélectionné:', flight);
  };

  return (
    <div className="flight-list-page">
      {/* Header avec navigation et étapes */}
      <Header currentStep={1} />

      {/* Carte d'informations de recherche */}
      <div className="search-info-card">
        <div className="search-info-header">
          <button className="back-button">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <div className="route-info">
            <div className="route-main">
              <span className="cities">Casablanca → Agadir</span>
              <span className="separator">|</span>
              <span className="travel-date">Lun. 15 oct. 2025</span>
              <span className="separator">|</span>
              <span className="passengers">1 Adulte</span>
            </div>
          </div>
        </div>
      </div>

      <div className="flight-list-container">
        <div className="flights-container">
          {flights.map(flight => (
            <div key={flight.id} className="flight-card">
              <div className="flight-main-info">
                
                {/* Colonne Départ */}
                <div className="flight-column departure-column">
                  <div className="time-section">
                    <div className="time">{flight.departure.time}</div>
                    <div className="airport">{flight.departure.airport}</div>
                  </div>
                  <div className="weather-section">
                    <div className="weather-display">
                      {getWeatherIcon(flight.weather)}
                      <span className="temperature">{flight.temperature}</span>
                    </div>
                    <div className="weather-condition">{flight.weather}</div>
                  </div>
                </div>

                {/* Colonne Vol */}
                <div className="flight-column flight-route-column">
                  <div className="duration">{flight.duration}</div>
                  <div className="flight-type">{flight.type}</div>
                  <div className="flight-route">
                    <div className="route-line">
                      <div className="departure-dot"></div>
                      <div className="flight-path">
                        <div className="dashed-line"></div>
                      </div>
                      <div className="arrival-dot"></div>
                    </div>
                  </div>
                </div>

                {/* Colonne Arrivée */}
                <div className="flight-column arrival-column">
                  <div className="time-section">
                    <div className="time">{flight.arrival.time}</div>
                    <div className="airport">{flight.arrival.airport}</div>
                  </div>
                  <div className="weather-section">
                    <div className="weather-display">
                      {getWeatherIcon(flight.weather)}
                      <span className="temperature">{flight.temperature}</span>
                    </div>
                    <div className="weather-condition">{flight.weather}</div>
                  </div>
                </div>

                {/* Colonne Prix et Détails */}
                <div className="flight-column details-column">
                  <div className="price-section">
                    <div className="price-option">
                      <div className="seats-available">{flight.priceOptions[0].seats} sièges disponibles</div>
                      <div className="price">{flight.priceOptions[0].price}</div>
                    </div>
                  </div>
                  <div className="actions-section">
                    <button 
                      className="select-btn"
                      onClick={() => handleSelectFlight(flight)}
                    >
                      Sélectionner
                    </button>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FlightList;