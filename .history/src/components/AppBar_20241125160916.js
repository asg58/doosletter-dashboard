// src/components/AppBar.js

import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const MyAppBar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          Doosletters Fabriek
        </Typography>
        <Button color="inherit" component={Link} to="/login">
          Inloggen
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default MyAppBar;
