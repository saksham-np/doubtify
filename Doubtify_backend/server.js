// server.js

require('dotenv').config(); // Load environment variables from .env
const express = require('express');
const http = require('http');
const cors = require('cors');
const mongoose = require('mongoose');
const routes = require('./src/routes'); // Adjust path if needed

const app = express(); // Initialize express app
const server = http.createServer(app); // Create HTTP server

const PORT = process.env.PORT || 5000;

// Apply middleware
app.use(cors());
app.use(express.json()); 

// Use your routes from the `routes` folder
app.use('/api', routes);

// MongoDB connection setup
mongoose
  .connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch((error) => console.error('MongoDB connection failed:', error));

// Start the server
server.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
