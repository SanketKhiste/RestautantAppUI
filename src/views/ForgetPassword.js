import React, { useState } from 'react';
import { TextField, Button, Grid, Typography, Paper, Link } from '@mui/material';
import { NavLink } from 'react-router-dom';

const ForgetPassword = () => {

    const [email, setEmail] = useState('');

    const handleChange = (e) => {
      setEmail(e.target.value);
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // Handle password reset logic here
      console.log('Password reset requested for:', email);
    };

  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      style={{ minHeight: '100vh' }} // Full height of the viewport
    >
      <Grid item xs={10} sm={8} md={6} lg={4}>
        <Paper elevation={3} style={{ padding: '20px' }}>
          <Typography variant="h4" align="center" gutterBottom>
            Forgot Password
          </Typography>
          <Typography variant="body1" align="center" gutterBottom>
            Enter your email address to receive a password reset link.
          </Typography>
          <form onSubmit={handleSubmit}>
            <TextField
              label="Email"
              variant="outlined"
              fullWidth
              margin="normal"
              name="email"
              value={email}
              onChange={handleChange}
              required
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              style={{ marginTop: '20px' }}
            >
              Submit
            </Button>
          </form>

          {/* Back to login link */}
          <Typography align="center" style={{ marginTop: '20px' }}>
            <NavLink to="/" className="tab-link" activeClassName="active">Back to login</NavLink>
          </Typography>
        </Paper>
      </Grid>
    </Grid>
  )
}

export default ForgetPassword