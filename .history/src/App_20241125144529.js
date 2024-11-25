// src/App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar'; // Nu alleen tonen als de gebruiker ingelogd is
import Footer from './components/Footer'; // Nu alleen tonen als de gebruiker ingelogd is
import QuoteRequest from './components/QuoteRequest';
import Home from './pages/Home';
import Quotes from './pages/Quotes';
import DesignHistory from './pages/DesignHistory';
import Profile from './pages/Profile';
import Register from './pages/Register';
import Login from './pages/Login';

const App = () => {
  return (
    <Router>
      <div>
        {/* Routes zonder Navbar en Footer */}
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} /> {/* Redirect naar login */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          {/* Na inloggen pas Navbar en Footer tonen */}
          <Route
            path="/dashboard"
            element={
              <>
                <Navbar />
                <Home /> {/* Ik neem aan dat dit de dashboardpagina is */}
                <Footer />
              </>
            }
          />
          <Route path="/vraag-offerte" element={<QuoteRequest />} />
          <Route path="/quotes" element={<Quotes />} />
          <Route path="/ontwerphistorie" element={<DesignHistory />} />
          <Route path="/profiel" element={<Profile />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
