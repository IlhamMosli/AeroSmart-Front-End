import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './views/Home';
import FlightList from './views/FlightList';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/flights" element={<FlightList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;