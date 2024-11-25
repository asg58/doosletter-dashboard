// src/App.js

import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { CssBaseline } from '@mui/material';
import Home from './pages/Home';
import Sidebar from './components/Sidebar'; // Sidebar component
import AppBar from './components/AppBar'; // AppBar component

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
              <Route path="/" element={<Home />} />
              {/* Voeg hier andere routes toe, bijvoorbeeld: */}
              <Route path="/option1" element={<Option1 />} />
              <Route path="/option2" element={<Option2 />} />
            </Routes>
          </div>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;