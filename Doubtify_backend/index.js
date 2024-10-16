require('dotenv').config();
const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes');

const app = express();
const server = http.createServer(app);
const io = socketIo(server, {
  cors: {
    origin: '*',
  },
});

const PORT = process.env.PORT || 8081;

if (!process.env.MONGODB_URI) {
  throw new Error('MONGODB_URI environment variable is required');
}

app.use(express.json());
app.use(cors());

mongoose.connect(process.env.MONGODB_URI, {
  serverSelectionTimeoutMS: 5000,
})
  .then(() => console.log('Connected to MongoDB'))
  .catch((error) => console.error('MongoDB connection failed:', error));

app.use('/api', routes);

io.on('connection', (socket) => {
  console.log('New client connected:', socket.id);

  socket.on('newBid', (data) => {
    socket.broadcast.emit('newBid', data);
  });

  socket.on('newDoubt', (data) => {
    io.emit('newDoubt', data);
  });

  socket.on('disconnect', () => {
    console.log('Client disconnected:', socket.id);
  });
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send({ error: 'Something went wrong!' });
});

server.listen(PORT, () => {
  console.log(`Backend server running on port ${PORT}`);
});