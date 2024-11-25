// src/pages/Register.js

import React, { useEffect, useState } from 'react';
import { Container, TextField, Button, Typography, Grid } from '@mui/material';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebaseConfig';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert('Account succesvol aangemaakt!');
      navigate('/login'); // Navigeer naar inlogpagina na registratie
    } catch (error) {
      alert(error.message);
    }
  };

  useEffect(() => {
    // Reset invoervelden bij montage van de component
    setEmail('');
    setPassword('');
  }, []);

  return (
    <Container maxWidth="xs" sx={{ marginTop: '100px', padding: 3, borderRadius: 2, boxShadow: 2 }}>
      <Typography variant="h5" gutterBottom align="center">
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
              inputProps={{ autoComplete: 'new-email' }} // Specifieke waarde
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
              inputProps={{ autoComplete: 'new-password' }} // Specifieke waarde
            />
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" color="primary" fullWidth type="submit">
              REGISTREER
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};

export default Register;
