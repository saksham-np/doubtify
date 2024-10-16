const mongoose = require('mongoose');

const doubtSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  createdAt: { type: Date, default: Date.now },
  status: { type: String, default: 'open' },
  acceptedBid: { type: mongoose.Schema.Types.ObjectId, ref: 'Bid' }
});

module.exports = mongoose.model('Doubt', doubtSchema);
