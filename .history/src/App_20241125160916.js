// src/App.js

import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Update hier
import { CssBaseline } from '@mui/material';
import Home from './pages/Home';
import Sidebar from './components/Sidebar';
import AppBar from './components/AppBar';

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
            <Routes>
              {' '}
              {/* Gebruik Routes in plaats van Switch */}
              <Route path="/" element={<Home />} /> {/* Update hier */}
              {/* Voeg hier andere routes toe */}
            </Routes>
          </div>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
