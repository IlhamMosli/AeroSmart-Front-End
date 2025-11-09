import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './views/Home';
import FlightList from './views/FlightList';
import ConfirmationReservations from './views/ConfirmationReservations';
import './App.css';
import AjouteVol from './views/AjouteVol';
import Register from './pages/Register';
import Login from './pages/Login';
import Formulaire from './formulaire/Formulaire';
import BagageSelection from './components/BagageSelection';

// URL de votre backend Spring Boot
const API_URL = 'http://localhost:9090/api/users';

// cette fonction permet de basculer entre register et login 
function AuthApp() {
  const [currentPage, setCurrentPage] = useState('login');

  const renderPage = () => {
    switch(currentPage) {
      case 'register':
        return <Register onNavigate={setCurrentPage} />;
      case 'login':
      default:
        return <Login onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="App">
      {renderPage()}
    </div>
  );
}

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Route d'authentification par défaut */}
          <Route path="/" element={<AuthApp />} />
          <Route path="/auth" element={<AuthApp />} />
          
          {/* Route pour le formulaire */}
          <Route path="/formulaire" element={<Formulaire/>} />
          
          {/* Route pour bagage */}
          <Route path="/bagage" element={<BagageSelection />} />
          
          {/* Redirections optionnelles */}
          <Route path="/login" element={<Navigate to="/" replace />} />
          <Route path="/register" element={<Navigate to="/" replace />} />
          
          {/* Autres routes de l'application */}
          <Route path="/home" element={<Home />} />
          <Route path="/flights" element={<FlightList />} />
          <Route path="/confirmation" element={<ConfirmationReservations />} />
          <Route path="/addvol" element={<AjouteVol />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;