const express = require('express');
const router = express.Router();
const Doubt = require('../models/Doubt');
const Bid = require('../models/Bid');

// Post a new doubt
router.post('/', async (req, res) => {
  const { title, description } = req.body;
  const userId = req.user.userId;

  if (!title || !description) {
    return res.status(400).json({ error: 'Title and description are required' });
  }

  const doubt = new Doubt({ title, description, user: userId });
  await doubt.save();
  
  res.status(201).json({ message: 'Doubt posted successfully', doubt });
});

// Get all doubts
router.get('/', async (req, res) => {
  const doubts = await Doubt.find().populate('user', 'email');
  res.status(200).json(doubts);
});

// Place a bid
router.post('/:id/bids', async (req, res) => {
  const { amount } = req.body;
  const expertId = req.user.userId;
  const doubtId = req.params.id;

  if (!amount) {
    return res.status(400).json({ error: 'Bid amount is required' });
  }

  const bid = new Bid({ amount, expert: expertId, doubt: doubtId });
  await bid.save();
  
  res.status(201).json({ message: 'Bid placed successfully', bid });
});

// Accept a bid
router.patch('/:id/accept', async (req, res) => {
  const doubtId = req.params.id;
  const { bidId } = req.body;

  const doubt = await Doubt.findById(doubtId);
  doubt.acceptedBid = bidId;
  await doubt.save();

  res.status(200).json({ message: 'Bid accepted successfully' });
});

module.exports = router;
