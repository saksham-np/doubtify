// src/components/Navbar.js

import React from 'react';
import { AppBar, Toolbar, IconButton, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';

const Navbar = () => {
  const handleLogout = () => {
    localStorage.removeItem('token'); // Clear token on logout
    window.location.href = '/login';  // Redirect to login page
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>Doubtify</Link>
        </Typography>

        <Link to="/user-dashboard">
          <IconButton color="inherit" aria-label="user dashboard">
            <AccountCircleIcon />
          </IconButton>
        </Link>

        <Link to="/expert-dashboard">
          <IconButton color="inherit" aria-label="expert dashboard">
            <AccountCircleIcon />
          </IconButton>
        </Link>

        <IconButton color="inherit" aria-label="search">
          <SearchIcon />
        </IconButton>

        <IconButton color="inherit" aria-label="logout" onClick={handleLogout}>
          <ExitToAppIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
