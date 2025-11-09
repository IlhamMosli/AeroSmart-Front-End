import React, { useState } from 'react';
import '../styles/ConfirmationReservations.css';

const ConfirmationReservations = () => {
  const [flights, setFlights] = useState([
    {
      id: 1,
      flightNumber: "V12B",
      date: "19/10/2025",
      time: "12:45",
      pendingReservations: 3
    },
    {
      id: 2,
      flightNumber: "V12B",
      date: "19/10/2025",
      time: "12:45",
      pendingReservations: 10
    },
    {
      id: 3,
      flightNumber: "V12C",
      date: "19/10/2025",
      time: "12:45",
      pendingReservations: 9
    },
    {
      id: 4,
      flightNumber: "V12B",
      date: "19/10/2025",
      time: "12:45",
      pendingReservations: 7
    }
  ]);

  const [searchTerm, setSearchTerm] = useState('');

  const handleViewReservations = (flightId) => {
    console.log('Voir réservations pour le vol:', flightId);
    // Navigation vers la page détaillée des réservations
  };

  const handleAddFlight = () => {
    console.log('Ajouter un nouveau vol');
    // Logique pour ajouter un vol
  };

  // Filtrer les vols basé sur la recherche
  const filteredFlights = flights.filter(flight =>
    flight.flightNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
    flight.date.includes(searchTerm) ||
    flight.time.includes(searchTerm)
  );

  return (
    <div className="confirmation-reservations">
      {/* Header */}
      <header className="confirmation-header">
        <nav className="confirmation-nav">
        <div className="logo-container">
          <img 
            src="/images/logo.png" 
            alt="AeroSmart Logo" 
            className="logo-image"
          />
          <div className="logo">AeroSmart</div>
        </div>
          <div className="nav-section">
            <a href="#vols" className="nav-link">Vols disponibles</a>
            <a href="#addVols" className="nav-link">Ajouter vol</a>
            <a href="#confirmation" className="nav-link">Confirmation</a>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main className="confirmation-main">
        <div className="confirmation-container">
          
          {/* Page Title */}
          <div className="page-title-section">
            <h2>Confirmation des réservations</h2>
          </div>

          {/* Search Bar */}
          <div className="search-bar-section">
            <div className="search-bar">
              <svg className="search-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                type="text"
                placeholder="Rechercher un vol par numéro, date ou heure..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-input"
              />
              {searchTerm && (
                <button 
                  className="clear-search"
                  onClick={() => setSearchTerm('')}
                >
                  ✕
                </button>
              )}
            </div>
            <div className="search-results">
              {searchTerm && (
                <span className="results-count">
                  {filteredFlights.length} vol(s) trouvé(s)
                </span>
              )}
            </div>
          </div>

          {/* Flights Table */}
          <div className="flights-table-section">
            <table className="flights-table">
              <thead>
                <tr>
                  <th>Numéro vol</th>
                  <th>Date Départ</th>
                  <th>Heure départ</th>
                  <th>Réservation en attente</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredFlights.length > 0 ? (
                  filteredFlights.map(flight => (
                    <tr key={flight.id}>
                      <td className="flight-number">{flight.flightNumber}</td>
                      <td className="flight-date">{flight.date}</td>
                      <td className="flight-time">{flight.time}</td>
                      <td className="pending-reservations">
                        <span className="reservation-count">
                          {flight.pendingReservations}
                        </span>
                      </td>
                      <td className="actions">
                        <button 
                          className="view-reservations-btn"
                          onClick={() => handleViewReservations(flight.id)}
                        >
                          Voir réservations
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="5" className="no-results">
                      Aucun vol trouvé pour "{searchTerm}"
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

        </div>
      </main>
    </div>
  );
};

export default ConfirmationReservations;