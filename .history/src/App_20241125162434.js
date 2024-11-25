// src/App.js

import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { CssBaseline } from '@mui/material';
import Home from './pages/Home'; // Zorg ervoor dat Home.js ook bestaat
import Sidebar from './components/layout/Sidebar';
import AppBar from './components/layout/AppBar';
import Option1 from './pages/Option1';
import Option2 from './pages/Option2';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <div style={{ display: 'flex' }}>
          <Sidebar />
          <div style={{ flexGrow: 1 }}>
            <AppBar />
            <Routes>
              <Route path="/" element={<Home />} />
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
