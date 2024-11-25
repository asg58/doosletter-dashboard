// src/App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar'; // Toont als de gebruiker ingelogd is
import Footer from './components/Footer'; // Toont als de gebruiker ingelogd is
import QuoteRequest from './components/QuoteRequest';
import Home from './pages/Home';
import Quotes from './pages/Quotes';
import DesignHistory from './pages/DesignHistory';
import Profile from './pages/Profile';
import Register from './pages/Register';
import Login from './pages/Login';

const App = () => {
  // Voor de eenvoud, gebruik een lokale staat om inlogstatus te simuleren
  const isLoggedIn = true; // Dit zou normaliter uit je auth system komen

  return (
    <Router>
      <div>
        <Routes>
          {/* Redirect naar login als niet ingelogd */}
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/* Dashboard Routes, inclusief Navbar en Footer */}
          {isLoggedIn ? (
            <>
              <Route
                path="/dashboard"
                element={
                  <>
                    <Navbar />
                    <Home /> {/* Dashboard homepage */}
                    <Footer />
                  </>
                }
              />
              <Route path="/vraag-offerte" element={<QuoteRequest />} />
              <Route path="/quotes" element={<Quotes />} />
              <Route path="/ontwerphistorie" element={<DesignHistory />} />
              <Route path="/profiel" element={<Profile />} />
            </>
          ) : (
            // Redirect naar login bij niet ingelogd
            <Route path="*" element={<Navigate to="/login" />} />
          )}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
