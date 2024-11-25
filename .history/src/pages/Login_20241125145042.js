// src/pages/Login.js

import React, { useState } from 'react';
import { Container, TextField, Button, Typography, Grid, Link } from '@mui/material';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebaseConfig';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert('Inloggen succesvol!');
      navigate('/dashboard'); // Navigeer naar het dashboard na succesvolle inlog
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <Container maxWidth="xs" sx={{ marginTop: '100px', padding: 3, borderRadius: 2, boxShadow: 2 }}>
      <Typography variant="h5" gutterBottom align="center">
        Inloggen
      </Typography>
      <form onSubmit={handleLogin}>
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
              autoComplete="off" // Voorkom automatisch invullen
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
              autoComplete="off" // Voorkom automatisch invullen
            />
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" color="primary" fullWidth type="submit">
              Inloggen
            </Button>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body2" align="center">
              Nog niet geregistreerd?{' '}
              <Link href="/register" underline="hover" color="primary">
                Registreer hier
              </Link>
            </Typography>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};

export default Login;
