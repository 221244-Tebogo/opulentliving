import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './Login';
import Dashboard from './Dashboard';
import Home from './Home';
import Products from './Products'; 
import PrivateRoute from './components/PrivateRoute';
import Navbar from './components/Navbar';

import Footer from './components/Footer';

///import './App.css';
import './theme.css';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  return (
    <div className="app">
      <Router>
        <Navbar />
    
        <Routes>
          <Route path="/login" element={<Login onLogin={handleLogin} />} />
          <Route path="/dashboard" element={<PrivateRoute component={Dashboard} isAuthenticated={isAuthenticated} />} />
          <Route path="/home" element={<Home />} /> 
          <Route path="/product" element={<Products />} /> 
          <Route path="/" element={<Navigate to="/login" />} />
        </Routes>
        <Footer />  
      </Router>
    </div>
  );
};

export default App;
