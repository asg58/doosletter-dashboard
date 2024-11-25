// src/App.js

import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Sidebar from './components/Sidebar';

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
      <Router>
        <Sidebar />
        <Switch>
          <Route path="/" exact component={Home} />
          {/* Andere routes hier */}
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
