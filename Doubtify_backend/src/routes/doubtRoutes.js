// backend/routes/doubtRoutes.js
const express = require('express');
const router = express.Router();
const DoubtController = require('../controllers/DoubtController');
const authorize = require('../middleware/authorization'); // Ensure middleware is correctly configured

// Public routes (accessible without authorization)
router.get('/doubts', DoubtController.getAllDoubts);      // Get all doubts
router.get('/doubts/:id', DoubtController.getDoubtById);  // Get a specific doubt by ID

// Protected routes (only accessible by authorized users)
router.post('/doubts', authorize('basic'), DoubtController.createDoubt); // Create a doubt
router.put('/doubts/:id', authorize('basic'), DoubtController.updateDoubt); // Update a specific doubt
router.delete('/doubts/:id', authorize('basic'), DoubtController.deleteDoubt); // Delete a specific doubt

module.exports = router;
