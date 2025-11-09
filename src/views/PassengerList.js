import React, { useState } from 'react';
import '../styles/PassengerList.css';

const PassengerList = () => {
  const [passengers, setPassengers] = useState([
    {
      id: 1,
      name: "Asma idbaba",
      identityNumber: "SE666",
      payment: "Payé",
      status: "En attente"
    },
    {
      id: 2,
      name: "Itham akarid",
      identityNumber: "JY56",
      payment: "Non payé",
      status: "En attente"
    },
    {
      id: 3,
      name: "sophia kama!",
      identityNumber: "GH45",
      payment: "Payé",
      status: "En attente"
    },
    {
      id: 4,
      name: "Aissam kama!",
      identityNumber: "DY54",
      payment: "Non payé",
      status: "En attente"
    }
  ]);

  const [searchTerm, setSearchTerm] = useState('');

  const handleCheck = (passengerId) => {
    console.log('Vérifier le passager:', passengerId);
    // Logique pour vérifier le passager
  };

  const handleDelete = (passengerId) => {
    console.log('Supprimer le passager:', passengerId);
    // Logique pour supprimer le passager
    setPassengers(passengers.filter(passenger => passenger.id !== passengerId));
  };

  const handleBackToFlights = () => {
    console.log('Retour à la liste des vols');
    // Navigation vers la page précédente
  };

  // Filtrer les passagers basé sur la recherche
  const filteredPassengers = passengers.filter(passenger =>
    passenger.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    passenger.identityNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
    passenger.payment.toLowerCase().includes(searchTerm.toLowerCase())
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
          
          {/* Page Title and Back Button */}
          <div className="page-title-section">
            
            
            {/* Flight Information Card */}
            <div className="flight-info-card">
              <div className="flight-info-content">
                <div className="flight-info-item">
                  <span className="flight-info-label">Vol</span>
                  <span className="flight-info-value">Y12B</span>
                </div>
                <div className="flight-info-item">
                  <span className="flight-info-label">Date</span>
                  <span className="flight-info-value">19/10/2025</span>
                </div>
                <div className="flight-info-item">
                  <span className="flight-info-label">Heure</span>
                  <span className="flight-info-value">12:45</span>
                </div>
              </div>
            </div>
          </div>

          {/* Search Bar */}
          <div className="search-bar-section">
            <div className="search-bar">
              <svg className="search-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                type="text"
                placeholder="Rechercher un passager par nom, numéro d'identité ou statut de paiement..."
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
                  {filteredPassengers.length} passager(s) trouvé(s)
                </span>
              )}
            </div>
          </div>

          {/* Passengers Table */}
          <div className="flights-table-section">
            <table className="flights-table">
              <thead>
                <tr>
                  <th>Nom du passager</th>
                  <th>Numéro d'identité</th>
                  <th>Paiement</th>
                  <th>Statut</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredPassengers.length > 0 ? (
                  filteredPassengers.map(passenger => (
                    <tr key={passenger.id}>
                      <td className="passenger-name">{passenger.name}</td>
                      <td className="identity-number">{passenger.identityNumber}</td>
                      <td className={`payment-status ${passenger.payment === 'Payé' ? 'paid' : 'not-paid'}`}>
                        {passenger.payment}
                      </td>
                      <td className="reservation-status">{passenger.status}</td>
                      <td className="actions">
                        <button 
                          className="action-btn check"
                          onClick={() => handleCheck(passenger.id)}
                          title="Vérifier"
                        >
                          ✓
                        </button>
                        <button 
                          className="action-btn delete"
                          onClick={() => handleDelete(passenger.id)}
                          title="Supprimer"
                        >
                          ✕
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="5" className="no-results">
                      Aucun passager trouvé pour "{searchTerm}"
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

export default PassengerList;