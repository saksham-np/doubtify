const mongoose = require('mongoose');

const bidSchema = new mongoose.Schema({
  amount: { type: Number, required: true },
  expert: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  createdAt: { type: Date, default: Date.now },
  doubt: { type: mongoose.Schema.Types.ObjectId, ref: 'Doubt', required: true }
});

module.exports = mongoose.model('Bid', bidSchema);
