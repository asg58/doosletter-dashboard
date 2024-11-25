// src/App.js

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import QuoteRequest from './components/QuoteRequest';
import Home from './pages/Home';
import Quotes from './pages/Quotes';
import DesignHistory from './pages/DesignHistory';
import Profile from './pages/Profile';

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/vraag-offerte" component={QuoteRequest} />
          <Route path="/quotes" component={Quotes} />
          <Route path="/ontwerphistorie" component={DesignHistory} />
          <Route path="/profiel" component={Profile} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
// src/components/Footer.js
