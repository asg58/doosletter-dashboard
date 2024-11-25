// src/App.js

import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { CssBaseline } from '@mui/material';
import Home from './pages/Home';
import Sidebar from './components/Sidebar'; // Zorg ervoor dat dit overeenkomt met je bestand
import AppBar from './components/AppBar'; // Zorg ervoor dat dit overeenkomt met je bestand

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2', // Primaire kleur
    },
    secondary: {
      main: '#dc004e', // Secundaire kleur
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <div style={{ display: 'flex' }}>
          <Sidebar /> {/* Zijbalk */}
          <div style={{ flexGrow: 1 }}>
            <AppBar /> {/* AppBar */}
            <Switch>
              <Route path="/" exact component={Home} />
              {/* Voeg hier andere routes toe */}
            </Switch>
          </div>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
