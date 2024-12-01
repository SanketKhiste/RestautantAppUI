import React, { useState } from 'react';
import { TextField, Button, Grid, Typography, Container } from '@mui/material';

const RestaurantForm = () => {
  const [formData, setFormData] = useState({
    RestaurantID: '',
    Name: '',
    Address: '',
    City: '',
    State: '',
    ZipCode: '',
    PhoneNumber: '',
    CreatedAt: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here (e.g., send data to an API)
    console.log("Submitted Data:", formData);
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" align="center" gutterBottom>
        Create Restaurant
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              label="Restaurant ID"
              name="RestaurantID"
              variant="outlined"
              fullWidth
              value={formData.RestaurantID}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Name"
              name="Name"
              variant="outlined"
              fullWidth
              value={formData.Name}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Address"
              name="Address"
              variant="outlined"
              fullWidth
              value={formData.Address}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="City"
              name="City"
              variant="outlined"
              fullWidth
              value={formData.City}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="State"
              name="State"
              variant="outlined"
              fullWidth
              value={formData.State}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Zip Code"
              name="ZipCode"
              variant="outlined"
              fullWidth
              value={formData.ZipCode}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Phone Number"
              name="PhoneNumber"
              variant="outlined"
              fullWidth
              value={formData.PhoneNumber}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Created At"
              name="CreatedAt"
              type="datetime-local"
              variant="outlined"
              fullWidth
              InputLabelProps={{
                shrink: true,
              }}
              value={formData.CreatedAt}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" variant="contained" color="primary" fullWidth>
              Submit
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};

export default RestaurantForm;