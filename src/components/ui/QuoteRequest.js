import React from 'react';
import { Container, TextField, Button, Typography, Grid } from '@mui/material';

const QuoteRequest = () => {
  return (
    <Container maxWidth="sm" sx={{ marginTop: 5 }}>
      <Typography variant="h4" gutterBottom align="center">
        Vraag een Offerte Aan
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
            <TextField fullWidth label="Telefoonnummer" variant="outlined" type="tel" required />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Projectdetails"
              variant="outlined"
              multiline
              rows={4}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Deadline"
              variant="outlined"
              type="date"
              InputLabelProps={{
                shrink: true,
              }}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField fullWidth label="Budget (optioneel)" variant="outlined" type="number" />
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" color="primary" fullWidth>
              Verstuur Offerteaanvraag
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};

export default QuoteRequest;
