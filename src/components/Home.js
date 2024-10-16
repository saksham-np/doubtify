import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Container, Typography, Box } from '@mui/material';

const Home = () => {
  return (
    <Container maxWidth="sm" style={{ textAlign: 'center', padding: '2rem' }}>
      <Box sx={{ mt: 8 }}>
        <Typography variant="h4" gutterBottom>
          Welcome to Doubtify
        </Typography>
        <Typography variant="h6" paragraph>
          Choose your role to continue.
        </Typography>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <Link to="/user">
            <Button variant="contained" color="primary" fullWidth>
              User
            </Button>
          </Link>
          <Link to="/expert">
            <Button variant="contained" color="secondary" fullWidth>
              Expert
            </Button>
          </Link>
        </Box>
      </Box>
    </Container>
  );
};

export default Home;
  