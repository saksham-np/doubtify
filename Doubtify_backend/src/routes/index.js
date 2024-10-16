// src/routes/index.js

const express = require('express');
const router = express.Router();

// Import controllers
const dashboardController = require('../controllers/DashBoardController');
const doubtController = require('../controllers/DoubtController');
const bidController = require('../controllers/BidController');
const authorize = require('../middleware/authorization'); // Ensure the correct path

// Define routes with proper callback functions
router.get('/dashboard', authorize('basic'), dashboardController.getDashboard);
router.post('/doubts', authorize('basic'), doubtController.createDoubt);  // Line 14 (potential issue)
router.get('/expert-dashboard', authorize('expert'), dashboardController.getExpertDashboard);
router.post('/bids', authorize('expert'), bidController.placeBid);

module.exports = router;
