// backend/routes/index.js
const express = require('express');
const router = express.Router();

// Controllers
const dashboardController = require('../controllers/DashBoardController');
const doubtController = require('../controllers/DoubtController');
const bidController = require('../controllers/BidController');

// Middleware
const authorize = require('../middleware/authorization');

// ========== Dashboard Routes ==========
router.get('/dashboard', authorize('basic'), dashboardController.getDashboard);          // Basic user dashboard
router.get('/expert-dashboard', authorize('expert'), dashboardController.getExpertDashboard); // Expert user dashboard

// ========== Doubt Routes ==========
router.post('/doubts', authorize('basic'), doubtController.createDoubt); // Create a new doubt

// ========== Bid Routes ==========
router.post('/bids', authorize('expert'), bidController.placeBid); // Place a bid

module.exports = router;
