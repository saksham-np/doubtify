const express = require('express');
const router = express.Router();
const Bid = require('../models/Bid');
const Doubt = require('../models/Doubt');
const authMiddleware = require('../middleware/authMiddleware');

// Post a Bid
router.post('/:doubtId/bids', authMiddleware, async (req, res) => {
  try {
    const { amount } = req.body;
    const bid = new Bid({ amount, expert: req.user.id, doubt: req.params.doubtId });
    await bid.save();
    res.status(201).json(bid);
  } catch (error) {
    res.status(500).json({ error: 'Failed to place bid' });
  }
});

module.exports = router;
    