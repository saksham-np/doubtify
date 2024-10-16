import React, { useState, useEffect } from 'react';
import { Container, Grid, Typography } from '@mui/material';
import DoubtList from './DoubtList';
import DoubtForm from './DoubtForm';
import axiosInstance from '../axiosConfig';

const Dashboard = () => {
  const [doubts, setDoubts] = useState([]);

  useEffect(() => {
    fetchDoubts();
  }, []);

  const fetchDoubts = async () => {
    try {
      const response = await axiosInstance.get('/doubts');
      setDoubts(response.data);
    } catch (error) {
      console.error('Error fetching doubts:', error);
    }
  };

  const handleDoubtSubmit = async (newDoubt) => {
    try {
      await axiosInstance.post('/doubts', newDoubt);
      fetchDoubts(); // Refresh the doubt list
    } catch (error) {
      console.error('Error submitting doubt:', error);
    }
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>Dashboard</Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={8}>
          <DoubtList doubts={doubts} />
        </Grid>
        <Grid item xs={12} md={4}>
          <DoubtForm onSubmit={handleDoubtSubmit} />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Dashboard;