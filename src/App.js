import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './views/Home';
import FlightList from './views/FlightList';
import ConfirmationReservations from './views/ConfirmationReservations';
import './App.css';
import AjouteVol from './views/AjouteVol';
import FlightDetails from './views/FlightDetails';
import ReservationTicket from './views/ReservationTicket';
import PassengerList from './views/PassengerList';


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/flights" element={<FlightList />} />
          <Route path="/confirmation" element={<ConfirmationReservations />} />
          <Route path="/addvol" element={<AjouteVol />} />
          <Route path="/flightDetails" element={<FlightDetails/>}/>
          <Route path="/reservationTicket" element={<ReservationTicket/>}/>
          <Route path="/passengerList" element={<PassengerList/>}/>
        </Routes>
      </div>
    </Router>
  );
}


export default App;