import * as React from 'react';
import { Box, TextField, Button, Typography, Card, CardContent, CardActions, Grid } from '@mui/material';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
const APIBaseUrl = process.env.REACT_APP_APIBASEURL;
const AppBaseUrl = process.env.REACT_APP_BASEURL;


const SignUpForm = () => {

      // State for form fields (optional for future use)
  const [formData, setFormData] = React.useState({
    firstName: '',
    lastName: '',
    email: '',
    ContactNumber: '',
    password: '',
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
    console.log(formData);
    // Handle form submission logic here, like calling an API
  };

  const SubmitData = () => {
    debugger;
    console.log("data:",formData);
    const data = {
      "customerID":0,
      "firstName": formData.firstName,
      "lastName": formData.lastName,
      "email": formData.email,
      "contactNumber": formData.ContactNumber,
      "password": formData.password
    }
    axios.post(`${APIBaseUrl}Customer/CustomerDetail`,data)
    .then((result) => {
     console.WriteLine(result.data);
    }).catch((error) => {
      console.log(error.message);
    });
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
      }}
    >
      <Card sx={{ maxWidth: 600 }}> {/* Increase maxWidth for two-column layout */}
        <CardContent>
          <Typography variant="h5" align="center" gutterBottom>
            Customer Registration
          </Typography>

          {/* Form inside the card */}
          <Box
            component="form"
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: 2,
            }}
            onSubmit={handleSubmit}
          >
            <Grid container spacing={2}>
              {/* First Name Field */}
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  label="First Name"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  variant="outlined"
                  fullWidth
                />
              </Grid>

              {/* Last Name Field */}
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  label="Last Name"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  variant="outlined"
                  fullWidth
                />
              </Grid>

              {/* Email Field */}
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  type="email"
                  label="Email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  variant="outlined"
                  fullWidth
                  helperText="Please enter a valid email address"
                />
              </Grid>

              {/* Phone Number Field */}
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  label="Contact Number"
                  name="ContactNumber"
                  value={formData.ContactNumber}
                  onChange={handleChange}
                  variant="outlined"
                  fullWidth
                />
              </Grid>

              {/* Password Field */}
              <Grid item xs={12}>
                <TextField
                  label="Password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  type="password"
                  variant="outlined"
                  fullWidth
                />
              </Grid>
            </Grid>
          </Box>
        </CardContent>

        {/* Card Actions for the Submit Button */}
        <CardActions>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{ margin: 2 }}
            onClick={()=>SubmitData()}
          >
            Sign Up
          </Button>
        </CardActions>

        <Typography align="center" style={{ marginTop: '1px' }}>
          Already have an account?{' '}
          <NavLink to="/" className="tab-link" activeClassName="active">
            Sign in
          </NavLink>
        </Typography>
      </Card>
    </Box>
  )
}

export default SignUpForm