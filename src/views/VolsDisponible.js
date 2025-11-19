// import React, { useState, useEffect } from 'react';
// import '../styles/VolsDisponible.css';
// import { useNavigate } from 'react-router-dom';
// const API_URL = 'http://localhost:8080/api/flights';

// const PlaneIcon = () => (
//   <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//     <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"/>
//   </svg>
// );
 

// const SearchIcon = () => (
//   <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#666" strokeWidth="2">
//     <circle cx="11" cy="11" r="8"/>
//     <path d="m21 21-4.35-4.35"/>
//   </svg>
// );

// export default function VolsDisponibles() {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [flights, setFlights] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   // ✅ FONCTION POUR CHARGER LES VOLS DEPUIS LE BACKEND
//   const fetchFlights = async () => {
//     setLoading(true);
//     setError(null);
    
//     try {
//       console.log('🔄 Chargement des vols depuis:', API_URL);
//       const response = await fetch(API_URL);
      
//       if (!response.ok) {
//         throw new Error(`Erreur HTTP: ${response.status}`);
//       }
      
//       const data = await response.json();
//       console.log('✅ Vols chargés:', data);
//       setFlights(data);
//     } catch (err) {
//       console.error('❌ Erreur lors du chargement:', err);
//       setError('Impossible de charger les vols. Vérifiez que le serveur est démarré.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   // ✅ CHARGER LES VOLS AU DÉMARRAGE DE LA PAGE
//   useEffect(() => {
//     fetchFlights();
//   }, []);

//   // Fonction pour formater l'heure
//   const formatTime = (dateString) => {
//     if (!dateString) return 'N/A';
//     const date = new Date(dateString);
//     return date.toLocaleTimeString('fr-FR', {
//       hour: '2-digit',
//       minute: '2-digit'
//     });
//   };

//   // Fonction pour formater la date
//   const formatDate = (dateString) => {
//     if (!dateString) return 'N/A';
//     const date = new Date(dateString);
//     return date.toLocaleDateString('fr-FR', {
//       day: '2-digit',
//       month: '2-digit',
//       year: 'numeric'
//     });
//   };

//   // Filtrer les vols selon la recherche
//   const filteredFlights = flights.filter(flight =>
//     flight.departureAirport?.toLowerCase().includes(searchTerm.toLowerCase()) ||
//     flight.arrivalAirport?.toLowerCase().includes(searchTerm.toLowerCase()) ||
//     flight.flightNumber?.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <div className="admin-container">
//       <header className="admin-header">
//         <div className="admin-logo">
//           <div className="admin-plane-icon">
//             <PlaneIcon />
//           </div>
//           <span className="admin-logo-text">Aero Smart</span>
//         </div>
//         <nav className="admin-nav">
//           <a href="/DisponibleVol" className="admin-nav-link admin-nav-link-active">vols disponibles</a>
//           <a href="/addvol" className="admin-nav-link">ajouter vol</a>
//           <a href="#" className="admin-nav-link">Confirmation</a>
//         </nav>
//         <button className="admin-power-button">⏻</button>
//       </header>

//       <main className="admin-main">
//         <h1 className="admin-title">Bienvenue dans votre espace d'administration</h1>

//         <div className="admin-search-container">
//           <div className="admin-search-wrapper">
//             <div className="admin-search-icon">
//               <SearchIcon />
//             </div>
//             <input
//               type="text"
//               placeholder="Recherche"
//               value={searchTerm}
//               onChange={(e) => setSearchTerm(e.target.value)}
//               className="admin-search-input"
//             />
//           </div>
//           <button 
//             onClick={fetchFlights}
//             className="admin-add-button"
//             style={{ marginRight: '10px', backgroundColor: '#6c757d' }}
//           >
//             🔄 Actualiser
//           </button>
//           <a href="/addvol" className="admin-add-button" style={{ textDecoration: 'none' }}>
//             Ajouter vol
//           </a>
//         </div>

//         {/* ÉTAT DE CHARGEMENT */}
//         {loading && (
//           <div style={{ textAlign: 'center', padding: '40px', color: '#666' }}>
//             <p style={{ fontSize: '18px' }}>⏳ Chargement des vols...</p>
//           </div>
//         )}

//         {/* ÉTAT D'ERREUR */}
//         {error && (
//           <div style={{
//             padding: '20px',
//             margin: '20px 0',
//             backgroundColor: '#fee',
//             border: '1px solid #fcc',
//             borderRadius: '8px',
//             color: '#c00'
//           }}>
//             ❌ {error}
//             <button 
//               onClick={fetchFlights}
//               style={{
//                 marginLeft: '15px',
//                 padding: '8px 16px',
//                 backgroundColor: '#c00',
//                 color: 'white',
//                 border: 'none',
//                 borderRadius: '5px',
//                 cursor: 'pointer'
//               }}
//             >
//               Réessayer
//             </button>
//           </div>
//         )}

//         {/* LISTE DES VOLS */}
//         {!loading && !error && (
//           <>
//             <div className="admin-flights-list">
//               {filteredFlights.length > 0 ? (
//                 filteredFlights.map((flight) => (
//                   <div key={flight.id} className="admin-flight-card">
//                     <div className="admin-flight-info">
//                       <div className="admin-flight-route">
//                         {flight.departureAirport} → {flight.arrivalAirport}
//                       </div>
//                       <div className="admin-flight-details">
//                         Départ: {formatTime(flight.departureTime)} | 
//                         Arrivée: {formatTime(flight.arrivalTime)} | 
//                         Vol: {flight.flightNumber}
//                       </div>
//                       <div className="admin-flight-date">{formatDate(flight.departureTime)}</div>
//                       <div style={{ marginTop: '5px', fontSize: '14px', color: '#666' }}>
//                         Places: {flight.availableSeats}/{flight.capacity} | 
//                         Prix: {flight.price} MAD | 
//                         Statut: {flight.flightStatus}
//                       </div>
//                     </div>
//                     <button className="admin-consult-button" onClick={handleConsultClick}>Consulter</button>
//                   </div>
//                 ))
//               ) : (
//                 <div style={{ textAlign: 'center', padding: '40px', color: '#666' }}>
//                   <p style={{ fontSize: '18px' }}>
//                     {searchTerm ? 'Aucun vol trouvé pour cette recherche' : 'Aucun vol disponible'}
//                   </p>
//                 </div>
//               )}
//             </div>

//             {/* STATISTIQUES */}
//             {flights.length > 0 && (
//               <div style={{
//                 marginTop: '30px',
//                 padding: '20px',
//                 backgroundColor: '#f0f8ff',
//                 borderRadius: '8px',
//                 textAlign: 'center'
//               }}>
//                 <strong>Total des vols: {flights.length}</strong> | 
//                 <strong> Affichés: {filteredFlights.length}</strong> | 
//                 <strong> Places disponibles: {flights.reduce((sum, f) => sum + f.availableSeats, 0)}</strong>
//               </div>
//             )}
//           </>
//         )}
//       </main>
//     </div>
//   );
// }



import React, { useState, useEffect } from 'react';
import '../styles/VolsDisponible.css';
import { useNavigate } from 'react-router-dom';

const API_URL = 'http://localhost:8080/api/flights';

const PlaneIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"/>
  </svg>
);

const SearchIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#666" strokeWidth="2">
    <circle cx="11" cy="11" r="8"/>
    <path d="m21 21-4.35-4.35"/>
  </svg>
);

export default function VolsDisponibles() {
  const [searchTerm, setSearchTerm] = useState('');
  const [flights, setFlights] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  // ✅ FONCTION POUR CHARGER LES VOLS DEPUIS LE BACKEND
  const fetchFlights = async () => {
    setLoading(true);
    setError(null);
    
    try {
      console.log('🔄 Chargement des vols depuis:', API_URL);
      const response = await fetch(API_URL);
      
      if (!response.ok) {
        throw new Error(`Erreur HTTP: ${response.status}`);
      }
      
      const data = await response.json();
      console.log('✅ Vols chargés:', data);
      setFlights(data);
    } catch (err) {
      console.error('❌ Erreur lors du chargement:', err);
      setError('Impossible de charger les vols. Vérifiez que le serveur est démarré.');
    } finally {
      setLoading(false);
    }
  };

  // ✅ CHARGER LES VOLS AU DÉMARRAGE DE LA PAGE
  useEffect(() => {
    fetchFlights();
  }, []);

  // ✅ FONCTION DE NAVIGATION POUR LE BOUTON CONSULTER
  const handleConsultClick = (flight) => {
    navigate('/flightDetails', { state: { flight } });
    // Ou si vous voulez passer l'ID dans l'URL :
    // navigate(`/flightDetails/${flight.id}`);
  };

  // Fonction pour formater l'heure
  const formatTime = (dateString) => {
    if (!dateString) return 'N/A';
    const date = new Date(dateString);
    return date.toLocaleTimeString('fr-FR', {
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  // Fonction pour formater la date
  const formatDate = (dateString) => {
    if (!dateString) return 'N/A';
    const date = new Date(dateString);
    return date.toLocaleDateString('fr-FR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    });
  };

  // Filtrer les vols selon la recherche
  const filteredFlights = flights.filter(flight =>
    flight.departureAirport?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    flight.arrivalAirport?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    flight.flightNumber?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="admin-container">
      <header className="admin-header">
        <div className="admin-logo">
          <div className="admin-plane-icon">
            <PlaneIcon />
          </div>
          <span className="admin-logo-text">Aero Smart</span>
        </div>
        <nav className="admin-nav">
          <a href="/DisponibleVol" className="admin-nav-link admin-nav-link-active">vols disponibles</a>
          <a href="/addvol" className="admin-nav-link">ajouter vol</a>
          <a href="#" className="admin-nav-link">Confirmation</a>
        </nav>
        <button className="admin-power-button" >⏻</button>
      </header>

      <main className="admin-main">
        <h1 className="admin-title">Bienvenue dans votre espace d'administration</h1>

        <div className="admin-search-container">
          <div className="admin-search-wrapper">
            <div className="admin-search-icon">
              <SearchIcon />
            </div>
            <input
              type="text"
              placeholder="Recherche"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="admin-search-input"
            />
          </div>
          <button 
            onClick={fetchFlights}
            className="admin-add-button"
            style={{ marginRight: '10px', backgroundColor: '#6c757d' }}
          >
            🔄 Actualiser
          </button>
          <a href="/addvol" className="admin-add-button" style={{ textDecoration: 'none' }}>
            Ajouter vol
          </a>
        </div>

        {/* ÉTAT DE CHARGEMENT */}
        {loading && (
          <div style={{ textAlign: 'center', padding: '40px', color: '#666' }}>
            <p style={{ fontSize: '18px' }}>⏳ Chargement des vols...</p>
          </div>
        )}

        {/* ÉTAT D'ERREUR */}
        {error && (
          <div style={{
            padding: '20px',
            margin: '20px 0',
            backgroundColor: '#fee',
            border: '1px solid #fcc',
            borderRadius: '8px',
            color: '#c00'
          }}>
            ❌ {error}
            <button 
              onClick={fetchFlights}
              style={{
                marginLeft: '15px',
                padding: '8px 16px',
                backgroundColor: '#c00',
                color: 'white',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer'
              }}
            >
              Réessayer
            </button>
          </div>
        )}

        {/* LISTE DES VOLS */}
        {!loading && !error && (
          <>
            <div className="admin-flights-list">
              {filteredFlights.length > 0 ? (
                filteredFlights.map((flight) => (
                  <div key={flight.id} className="admin-flight-card">
                    <div className="admin-flight-info">
                      <div className="admin-flight-route">
                        {flight.departureAirport} → {flight.arrivalAirport}
                      </div>
                      <div className="admin-flight-details">
                        Départ: {formatTime(flight.departureTime)} | 
                        Arrivée: {formatTime(flight.arrivalTime)} | 
                        Vol: {flight.flightNumber}
                      </div>
                      <div className="admin-flight-date">{formatDate(flight.departureTime)}</div>
                      <div style={{ marginTop: '5px', fontSize: '14px', color: '#666' }}>
                        Places: {flight.availableSeats}/{flight.capacity} | 
                        Prix: {flight.price} MAD | 
                        Statut: {flight.flightStatus}
                      </div>
                    </div>
                    <button 
                      className="admin-consult-button" 
                      onClick={() => handleConsultClick(flight)}
                    >
                      Consulter
                    </button>
                  </div>
                ))
              ) : (
                <div style={{ textAlign: 'center', padding: '40px', color: '#666' }}>
                  <p style={{ fontSize: '18px' }}>
                    {searchTerm ? 'Aucun vol trouvé pour cette recherche' : 'Aucun vol disponible'}
                  </p>
                </div>
              )}
            </div>

            {/* STATISTIQUES */}
            {flights.length > 0 && (
              <div style={{
                marginTop: '30px',
                padding: '20px',
                backgroundColor: '#f0f8ff',
                borderRadius: '8px',
                textAlign: 'center'
              }}>
                <strong>Total des vols: {flights.length}</strong> | 
                <strong> Affichés: {filteredFlights.length}</strong> | 
                <strong> Places disponibles: {flights.reduce((sum, f) => sum + f.availableSeats, 0)}</strong>
              </div>
            )}
          </>
        )}
      </main>
    </div>
  );
}