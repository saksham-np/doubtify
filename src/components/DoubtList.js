// src/components/DoubtList.js
import React, { useEffect, useState } from 'react';
import axios from '../axiosConfig';
import { io } from 'socket.io-client';
import { Link } from 'react-router-dom';
import { Button, Typography, Container, Grid, Box, Paper } from '@mui/material';
import { toast } from 'react-toastify';

function DoubtList() {
  const [doubts, setDoubts] = useState([]);
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    // Initialize Socket.IO connection
    const newSocket = io('http://localhost:8081'); // Adjust the URL as needed
    setSocket(newSocket);

    // Fetch initial doubts
    async function fetchDoubts() {
      try {
        const response = await axios.get('/doubt');
        setDoubts(response.data);
      } catch (error) {
        console.error('Error fetching doubts:', error);
        toast.error('Failed to load doubts.');
      }
    }

    fetchDoubts();

    // Listen for new doubts
    newSocket.on('newDoubt', (newDoubt) => {
      setDoubts((prevDoubts) => [...prevDoubts, newDoubt]);
      toast.info('A new doubt has been posted.');
    });

    // Listen for new bids
    newSocket.on('newBid', (updatedDoubt) => {
      setDoubts((prevDoubts) =>
        prevDoubts.map((doubt) =>
          doubt._id === updatedDoubt._id ? updatedDoubt : doubt
        )
      );
      toast.info('A new bid has been placed.');
    });

    // Clean up the socket connection on unmount
    return () => {
      newSocket.disconnect();
    };
  }, []);

  return (
    <Container maxWidth="lg">
      <Typography variant="h4" component="h2" gutterBottom>
        Doubts Available for Bidding
      </Typography>
      <Grid container spacing={4}>
        {doubts.map((doubt) => (
          <Grid item xs={12} md={6} key={doubt._id}>
            <Paper
              elevation={3}
              style={{
                padding: '20px',
                borderRadius: '10px',
                transition: 'transform 0.3s, box-shadow 0.3s',
              }}
              className="doubt-box"
            >
              <Typography variant="h6" component="h3">
                {doubt.title}
              </Typography>
              <Typography variant="body1" gutterBottom>
                {doubt.description}
              </Typography>
              <Button
                variant="contained"
                color="primary"
                component={Link}
                to={`/doubts/${doubt._id}`}
              >
                View Details
              </Button>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default DoubtList;
