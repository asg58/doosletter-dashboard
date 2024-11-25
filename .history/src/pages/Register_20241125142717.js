// src/pages/Register.js
import React, { useState } from 'react';
import { Container, TextField, Button, Typography, Grid } from '@mui/material';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebaseConfig'; // Importeer de Firebase-configuratie

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert('Registratie succesvol!');
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <Container maxWidth="sm" sx={{ marginTop: 5 }}>
      <Typography variant="h4" gutterBottom align="center">
        Registreer je Account
      </Typography>
      <form onSubmit={handleRegister}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="E-mail"
              variant="outlined"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Wachtwoord"
              variant="outlined"
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" color="primary" fullWidth type="submit">
              Registreer
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};

export default Register;
