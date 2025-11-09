import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './views/Home';
import FlightList from './views/FlightList';
import ConfirmationReservations from './views/ConfirmationReservations';
import './App.css';
import AjouteVol from './views/AjouteVol';


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/flights" element={<FlightList />} />
          <Route path="/confirmation" element={<ConfirmationReservations />} />
          <Route path="/addvol" element={<AjouteVol />} />
        </Routes>
      </div>
    </Router>
  );
}


export default App;