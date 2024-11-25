import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import QuoteRequest from './components/QuoteRequest';
import Home from './pages/Home';
import Quotes from './pages/Quotes';
import DesignHistory from './pages/DesignHistory';
import Profile from './pages/Profile';
import Register from './pages/Register'; // Import de Register-pagina

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} /> {/* Voeg de registratie route toe */}
          <Route path="/vraag-offerte" element={<QuoteRequest />} />
          <Route path="/quotes" element={<Quotes />} />
          <Route path="/ontwerphistorie" element={<DesignHistory />} />
          <Route path="/profiel" element={<Profile />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
