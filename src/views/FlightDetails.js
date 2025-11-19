import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../styles/FlightDetails.css";

const PlaneIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"/>
  </svg>
);

export default function FlightDetails() {
  const location = useLocation();
  const navigate = useNavigate();
  
  // ✅ Récupérer les données du vol passées depuis VolsDisponibles
  const flight = location.state?.flight;

  // Si aucun vol n'est passé, rediriger vers la liste des vols
  if (!flight) {
    return (
      <div style={{ padding: '40px', textAlign: 'center' }}>
        <h2>❌ Aucun vol sélectionné</h2>
        <button 
          onClick={() => navigate('/DisponibleVol')}
          style={{
            marginTop: '20px',
            padding: '10px 20px',
            backgroundColor: '#003d82',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer'
          }}
        >
          Retour à la liste des vols
        </button>
      </div>
    );
  }

  // ✅ Fonctions pour formater les dates et heures
  const formatTime = (dateString) => {
    if (!dateString) return 'N/A';
    const date = new Date(dateString);
    return date.toLocaleTimeString('fr-FR', {
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const formatDate = (dateString) => {
    if (!dateString) return 'N/A';
    const date = new Date(dateString);
    return date.toLocaleDateString('fr-FR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    });
  };

  // ✅ Calculer la durée du vol
  const calculateDuration = (departure, arrival) => {
    if (!departure || !arrival) return 'N/A';
    const diff = new Date(arrival) - new Date(departure);
    const hours = Math.floor(diff / 3600000);
    const minutes = Math.floor((diff % 3600000) / 60000);
    return `${hours} heure${hours > 1 ? 's' : ''} ${minutes} minutes`;
  };

  // ✅ Fonction pour supprimer le vol
  const handleDelete = async () => {
    if (!window.confirm(`Êtes-vous sûr de vouloir supprimer le vol ${flight.flightNumber} ?`)) {
      return;
    }

    try {
      const response = await fetch(`http://localhost:8080/api/flights/${flight.id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        alert('✅ Vol supprimé avec succès !');
        navigate('/DisponibleVol');
      } else {
        alert('❌ Erreur lors de la suppression du vol');
      }
    } catch (error) {
      console.error('Erreur:', error);
      alert('❌ Erreur de connexion au serveur');
    }
  };

  // ✅ Fonction pour modifier le vol (à implémenter selon vos besoins)
  const handleModify = () => {
    navigate('/editvol', { state: { flight } });
    // Ou si vous n'avez pas encore de page d'édition :
    // alert('Fonctionnalité de modification à venir');
  };

  return (
    <div className="flight-details-fullpage">
      {/* 🔵 Header similaire à VolsDisponibles */}
      <header className="admin-header">
        <div className="admin-logo">
          <div className="admin-plane-icon">
            <PlaneIcon />
          </div>
          <span className="admin-logo-text">Aero Smart</span>
        </div>
        <nav className="admin-nav">
          <a href="/DisponibleVol" className="admin-nav-link">vols disponibles</a>
          <a href="/addvol" className="admin-nav-link">ajouter vol</a>
          <a href="#" className="admin-nav-link admin-nav-link-active">Détails du vol</a>
        </nav>
        <button className="admin-power-button">⏻</button>
      </header>
      
      {/* 🕑 En-tête horaires avec fond blanc pour plus de clarté */}
      <div className="flight-header-fullpage" style={{ 
        backgroundColor: '#ffffff', 
        padding: '30px 20px',
        marginTop: '50px',
        marginBottom: '30px',
        boxShadow: '0 2px 4px rgba(0,0,0,0.08)'
      }}>
        <div className="flight-time-main" style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '80px',
          maxWidth: '1000px',
          margin: '0 auto'
        }}>
          <div className="flight-time-large" style={{
            fontSize: '56px',
            fontWeight: 'bold',
            color: '#003d82',
            minWidth: '150px',
            textAlign: 'center'
          }}>
            {formatTime(flight.departureTime)}
          </div>
          <div className="flight-info" style={{ 
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '12px'
          }}>
            <div className="flight-duration-large" style={{
              fontSize: '16px',
              color: '#666',
              fontWeight: '500'
            }}>
              {calculateDuration(flight.departureTime, flight.arrivalTime)}
            </div>
            <div className="flight-type-large" style={{
              backgroundColor: '#ff7675',
              color: 'white',
              padding: '10px 32px',
              borderRadius: '25px',
              fontSize: '15px',
              fontWeight: '600',
              boxShadow: '0 2px 8px rgba(255,118,117,0.3)'
            }}>
              Vol direct
            </div>
          </div>
          <div className="flight-time-large" style={{
            fontSize: '56px',
            fontWeight: 'bold',
            color: '#003d82',
            minWidth: '150px',
            textAlign: 'center'
          }}>
            {formatTime(flight.arrivalTime)}
          </div>
        </div>
      </div>

      {/* 🧳 Contenu principal */}
      <div className="main-content-fullpage">

        {/* Détails du vol */}
        <div className="content-card">
          <h2 className="section-title-large">Détails du vol</h2>
          <div className="detail-grid-fullpage">
            <div className="detail-label-large">Numéro de vol:</div>
            <div className="detail-value-large">{flight.flightNumber}</div>
            <div className="detail-label-large">Capacité (passagers):</div>
            <div className="detail-value-large">{flight.capacity}</div>
            <div className="detail-label-large">Places disponibles:</div>
            <div className="detail-value-large">{flight.availableSeats}</div>
            <div className="detail-label-large">Prix:</div>
            <div className="detail-value-large">{flight.price} MAD</div>
          </div>
        </div>

        {/* Itinéraire */}
        <div className="content-card">
          <h2 className="section-title-large">Itinéraire</h2>
          <div className="detail-grid-fullpage">
            <div className="detail-label-large">Aéroport de départ:</div>
            <div className="detail-value-large">{flight.departureAirport}</div>
            <div className="detail-label-large">Aéroport d'arrivée:</div>
            <div className="detail-value-large">{flight.arrivalAirport}</div>
            <div className="detail-label-large">Date de départ:</div>
            <div className="detail-value-large">{formatDate(flight.departureTime)}</div>
            <div className="detail-label-large">Date d'arrivée:</div>
            <div className="detail-value-large">{formatDate(flight.arrivalTime)}</div>
            <div className="detail-label-large">Heure de départ:</div>
            <div className="detail-value-large">{formatTime(flight.departureTime)}</div>
            <div className="detail-label-large">Heure d'arrivée:</div>
            <div className="detail-value-large">{formatTime(flight.arrivalTime)}</div>
          </div>
        </div>

        {/* Informations d'embarquement */}
        <div className="content-card">
          <h2 className="section-title-large">Informations d'embarquement</h2>
          <table className="info-table-fullpage">
            <tbody>
              <tr>
                <td className="info-label-large">Poste d'embarquement:</td>
                <td className="info-data-large">{flight.boardingGate || 'N/A'}</td>
              </tr>
              <tr>
                <td className="info-label-large">Statut du vol:</td>
                <td className={`info-data-large ${
                  flight.flightStatus === 'SCHEDULED' ? 'status-scheduled' :
                  flight.flightStatus === 'DELAYED' ? 'status-delayed-large' :
                  flight.flightStatus === 'CANCELLED' ? 'status-cancelled' :
                  'status-completed'
                }`}>
                  {flight.flightStatus === 'SCHEDULED' ? 'Prévu' :
                   flight.flightStatus === 'DELAYED' ? 'Retardé' :
                   flight.flightStatus === 'CANCELLED' ? 'Annulé' :
                   flight.flightStatus === 'COMPLETED' ? 'Terminé' :
                   flight.flightStatus}
                </td>
              </tr>
              <tr>
                <td className="info-label-large">Porte d'embarquement:</td>
                <td className="info-data-large">{flight.gate || 'À définir'}</td>
              </tr>
              <tr>
                <td className="info-label-large">Fin d'embarquement:</td>
                <td className="info-data-large">
                  {flight.boardingTime ? formatTime(flight.boardingTime) : 'À définir'}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* 🔘 Boutons */}
      <div className="buttons-container-fullpage">
        <button className="btn-large btn-modify-large" onClick={handleModify}>
          Modifier
        </button>
        <button className="btn-large btn-delete-large" onClick={handleDelete}>
          Supprimer
        </button>
        <button 
          className="btn-large" 
          onClick={() => navigate('/DisponibleVol')}
          style={{ backgroundColor: '#6c757d' }}
        >
          Retour
        </button>
      </div>
    </div>
  );
}