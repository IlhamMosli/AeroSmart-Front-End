import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
// import FlightList from './FlightList';
import './App.css';
import AjouteVol from './AjouteVol';
// import VolsDisponibles from './VolsDisponible';

function App() {
  return (
    <Router>
  <div className="App">
    <Routes>
      <Route path="/" element={<Home />} />
      {/* <Route path="/flights" element={<FlightList />} /> */}
      <Route path="/Formulaire" element={<AjouteVol />} />
      {/* <Route path="/DisponibleVol" element={<VolsDisponibles />} /> */}
    </Routes>
  </div>
</Router>
    
  );
}


export default App;