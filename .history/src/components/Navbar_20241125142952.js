// src/components/Navbar.js

import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">
        Doosletters
      </Link>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/vraag-offerte">
              Vraag Offerte
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/quotes">
              Offertes
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/ontwerphistorie">
              Ontwerphistorie
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/profiel">
              Profiel
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/login">
              Inloggen
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/register">
              Registreer
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
