// src/pages/Home.js

import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="dashboard">
      <h1>Welkom bij de Doosletters Fabriek!</h1>
      <p>Hier kun je 3D-modellen uploaden en beheren.</p>
      <Link to="/upload">
        <button>Upload 3D-model</button>
      </Link>
      <Link to="/vraag-offerte">
        <button style={{ margin: '10px' }}>Vraag Offerte</button>
      </Link>
      <Link to="/quotes">
        <button style={{ margin: '10px' }}>Bekijk Offertes</button>
      </Link>
      <Link to="/ontwerphistorie">
        <button style={{ margin: '10px' }}>Ontwerphistorie</button>
      </Link>
      <Link to="/profiel">
        <button style={{ margin: '10px' }}>Profiel</button>
      </Link>
      <p>Gebruik de navigatie om door het dashboard te bladeren.</p>
      <footer>
        <p>© 2023 Doosletters Fabriek. Alle rechten voorbehouden.</p>
      </footer>
    </div>
  );
};

export default Home;
