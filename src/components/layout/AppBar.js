// src/components/AppBar.js

import React from 'react';
import { AppBar, Toolbar, Typography, Button, Snackbar } from '@mui/material';
import { Link } from 'react-router-dom';

const MyAppBar = () => {
  const [openSnackbar, setOpenSnackbar] = React.useState(false);

  const handleSnackbarClick = () => {
    setOpenSnackbar(true);
  };

  const handleSnackbarClose = () => {
    setOpenSnackbar(false);
  };

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            Doosletters Fabriek
          </Typography>
          <Button color="inherit" component={Link} to="/login" onClick={handleSnackbarClick}>
            Inloggen
          </Button>
        </Toolbar>
      </AppBar>
      <Snackbar
        open={openSnackbar}
        onClose={handleSnackbarClose}
        message="Je bent ingelogd!"
        autoHideDuration={3000}
      />
    </>
  );
};

export default MyAppBar;
