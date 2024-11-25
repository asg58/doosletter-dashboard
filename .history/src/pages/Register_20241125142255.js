import React from 'react';
import { Container, TextField, Button, Typography, Grid } from '@mui/material';

const Register = () => {
  return (
    <Container maxWidth="sm" sx={{ marginTop: 5 }}>
      <Typography variant="h4" gutterBottom align="center">
        Registreer je Account
      </Typography>
      <form>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField fullWidth label="Naam" variant="outlined" required />
          </Grid>
          <Grid item xs={12}>
            <TextField fullWidth label="E-mail" variant="outlined" type="email" required />
          </Grid>
          <Grid item xs={12}>
            <TextField fullWidth label="Wachtwoord" variant="outlined" type="password" required />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Bevestig Wachtwoord"
              variant="outlined"
              type="password"
              required
            />
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" color="primary" fullWidth>
              Registreer
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};

export default Register;
