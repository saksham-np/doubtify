// src/components/Footer.js
import React from 'react';
import { Typography, Container, Box } from '@mui/material';

function Footer() {
  return (
    <Box mt={8} py={4} bgcolor="#f5f5f5">
      <Container maxWidth="lg">
        <Typography variant="body2" color="textSecondary" align="center">
          © {new Date().getFullYear()} Doubtify. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
}

export default Footer;
