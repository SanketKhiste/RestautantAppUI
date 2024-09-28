import React, { useState } from 'react';
import { TextField, Button, Grid, Typography, Paper, Link, FormControlLabel, Checkbox } from '@mui/material';
import { NavLink } from 'react-router-dom';

const LoginForm = () => {

    const [formData, setFormData] = useState({
        email: '',
        password: ''
      });

      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        // Handle login logic
        console.log('Form data submitted:', formData);
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
          Login
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            margin="normal"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <TextField
            label="Password"
            variant="outlined"
            fullWidth
            margin="normal"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
            {/* Grid to align Remember me and Forgot password on the same line */}
            <Grid container alignItems="center" justifyContent="space-between">
              <Grid item>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={formData.rememberMe}
                      onChange={handleChange}
                      name="rememberMe"
                      color="primary"
                    />
                  }
                  label="Remember me"
                />
              </Grid>
              <Grid item>
                <NavLink to="/ForgetPassword" className="tab-link" activeClassName="active">Forgot password?</NavLink>
              </Grid>
            </Grid>

            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              style={{ marginTop: '20px' }}
            >
              Login
            </Button>
          </form>

          <Typography
            align="center"
            style={{ marginTop: '20px' }}
          >
            Don't have an account?{' '}
            {/* <Link href="#" underline="hover">
              Sign up
            </Link> */}
            <NavLink to="/SignUpForm" className="tab-link" activeClassName="active">Sign up</NavLink>
          </Typography>
      </Paper>
    </Grid>
  </Grid>
  )
}

export default LoginForm