const express = require('express');
const router = express.Router();
const User = require('../models/User'); // Adjust path if needed

// Middleware to verify authentication
const authorize = require('../middleware/authorization'); // Adjust path if needed

// @route   GET /api/users/:id
// @desc    Get user by ID
// @access  Private
router.get('/:id', authorize('basic'), async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).json({ error: 'User not found' });
    res.json(user);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

// @route   PUT /api/users/:id
// @desc    Update user information
// @access  Private
router.put('/:id', authorize('basic'), async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true, // Return the updated document
      runValidators: true, // Ensure validation rules are enforced
    });

    if (!user) return res.status(404).json({ error: 'User not found' });
    res.json(user);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

// @route   GET /api/users
// @desc    Get all users (Admin access)
// @access  Admin
router.get('/', authorize('admin'), async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
