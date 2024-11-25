// src/pages/Home.js

import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="dashboard">
      <h1>Welkom bij de Doosletters Fabriek!</h1>
      <p>Hier kun je 3D-modellen uploaden en beheren.</p>
      <div className="card">
        <h2>Upload je Model</h2>
        <Link to="/upload">
          <button>Upload 3D-model</button>
        </Link>
      </div>
      <div className="card">
        <h2>Vraag Offerte</h2>
        <Link to="/vraag-offerte">
          <button>Vraag Offerte</button>
        </Link>
      </div>
      <div className="card">
        <h2>Bekijk Offertes</h2>
        <Link to="/quotes">
          <button>Bekijk Offertes</button>
        </Link>
      </div>
      <div className="card">
        <h2>Ontwerphistorie</h2>
        <Link to="/ontwerphistorie">
          <button>Bekijk Historie</button>
        </Link>
      </div>
      <div className="card">
        <h2>Profiel</h2>
        <Link to="/profiel">
          <button>Bekijk Profiel</button>
        </Link>
      </div>
      <footer className="footer">
        <p>© 2023 Doosletters Fabriek. Alle rechten voorbehouden.</p>
      </footer>
    </div>
  );
};

export default Home;
