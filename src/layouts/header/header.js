import React, { useState,useEffect  } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Brightness4 from '@mui/icons-material/Brightness4';
import Brightness7 from '@mui/icons-material/Brightness7';
import { useTheme } from './ThemeProvider';  // Import the useTheme hook

const Header = () => {
  debugger;
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isRestaurantSubmenuOpen, setIsRestaurantSubmenuOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);  // State for the login menu
  const isLoginMenuOpen = Boolean(anchorEl);
  const { isDarkMode, toggleDarkMode } = useTheme(); // Get the theme context
  //const userData = JSON.parse(sessionStorage.getItem("user"));
  const [userData, setUserData] = useState(null);
  const [icon, setIcon] = useState(false);

  useEffect(() => {
    const storedUserData = sessionStorage.getItem("user");
    if (storedUserData) {
      setUserData(JSON.parse(storedUserData));
      setIcon(true);
    }
  });

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleRestaurantToggle = () => {
    setIsRestaurantSubmenuOpen(!isRestaurantSubmenuOpen);
  };

  const handleLoginMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);  // Opens the login menu
  };

  const handleLoginMenuClose = () => {
    setAnchorEl(null);  // Closes the login menu
  };

  const handleLogout = () => {
    console.log('Logout clicked');
    // Implement logout functionality here
    sessionStorage.clear();
    setAnchorEl(null);
  };

  return (
    <>
      {/* AppBar containing MenuIcon, title, and Login icon */}
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={handleMenuToggle}
          >
            {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Restaurant App
          </Typography>

          {/* Dark mode toggle button */}
          <IconButton
            color="inherit"
            onClick={toggleDarkMode}
            aria-label="toggle dark mode"
          >
            {isDarkMode ? <Brightness7 /> : <Brightness4 />}
          </IconButton>

          {/* Login Icon Button on the top-right corner */}
          {icon && <IconButton
            edge="end"
            color="inherit"
            aria-label="account"
            onClick={handleLoginMenuOpen}  // Opens the login menu on click
          >
            <AccountCircle />
          </IconButton>}
        </Toolbar>
      </AppBar>

      {/* Login Menu displaying username and logout option */}
      {userData && (
        <Menu
          anchorEl={anchorEl}
          open={isLoginMenuOpen}
          onClose={handleLoginMenuClose}
        >
          <MenuItem>{userData.firstName || userData.lastName}</MenuItem>
          <MenuItem onClick={handleLogout}>Logout</MenuItem>
        </Menu>
      )}

      {/* Drawer that slides in from the left */}
      <Drawer anchor="left" open={isMenuOpen} onClose={handleMenuToggle}>
        <List>
          <ListItem button onClick={handleMenuToggle}>
            <ListItemText primary="Dashboard" />
          </ListItem>
          <ListItem button onClick={handleRestaurantToggle}>
            <ListItemText primary="Restaurant" />
            {isRestaurantSubmenuOpen ? <ExpandLess /> : <ExpandMore />}
          </ListItem>

          {/* Submenu under Restaurant */}
          <Collapse in={isRestaurantSubmenuOpen} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem button sx={{ pl: 4 }} onClick={handleMenuToggle}>
                <ListItemText primary="Menu" />
              </ListItem>
              <ListItem button sx={{ pl: 4 }} onClick={handleMenuToggle}>
                <ListItemText primary="Reservations" />
              </ListItem>
            </List>
          </Collapse>

          <ListItem button onClick={handleMenuToggle}>
            <ListItemText primary="Orders" />
          </ListItem>
        </List>
      </Drawer>
    </>
  );
};

export default Header;
