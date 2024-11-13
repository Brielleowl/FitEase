import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import HealthCheck from './pages/HealthCheck';
import UserInfo from './pages/UserInfo';
import Dashboard from './pages/Dashboard';
import AboutUs from './pages/AboutUs';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />  
        <Route path="/health-check" element={<HealthCheck />} />
        <Route path="/user-info" element={<UserInfo />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/goals" element={<Dashboard />} />
        <Route path="/about" element={<AboutUs />} />
      </Routes>
    </Router>
  );
}

export default App; 