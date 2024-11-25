// src/pages/Home.js

import React from 'react';
import { Container, Grid, Typography, Card, CardContent, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <Container maxWidth="lg" style={{ marginTop: '20px' }}>
      <Typography variant="h4" align="center" gutterBottom>
        Welkom bij de Doosletters Fabriek!
      </Typography>
      <Typography variant="h6" align="center" gutterBottom>
        Hier kun je 3D-modellen uploaden en beheren.
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h5" align="center">
                Upload je Model
              </Typography>
              <Link to="/upload" style={{ textDecoration: 'none' }}>
                <Button variant="contained" color="primary" fullWidth>
                  Upload 3D-model
                </Button>
              </Link>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h5" align="center">
                Vraag Offerte
              </Typography>
              <Link to="/vraag-offerte" style={{ textDecoration: 'none' }}>
                <Button variant="contained" color="primary" fullWidth>
                  Vraag Offerte
                </Button>
              </Link>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h5" align="center">
                Bekijk Offertes
              </Typography>
              <Link to="/quotes" style={{ textDecoration: 'none' }}>
                <Button variant="contained" color="primary" fullWidth>
                  Bekijk Offertes
                </Button>
              </Link>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <footer style={{ textAlign: 'center', marginTop: '20px' }}>
        <Typography variant="body2" color="textSecondary">
          © 2023 Doosletters Fabriek. Alle rechten voorbehouden.
        </Typography>
      </footer>
    </Container>
  );
};

export default Home;
