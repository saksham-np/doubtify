// backend/models/Doubt.js
const mongoose = require('mongoose');

const DoubtSchema = new mongoose.Schema({
  title: { 
    type: String, 
    required: true, 
    minlength: 5, 
    trim: true 
  },
  description: { 
    type: String, 
    required: true, 
    minlength: 10, 
    trim: true 
  },
  postedBy: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'User', 
    required: true 
  },
  answer: { 
    type: String, 
    default: null 
  },
  createdAt: { 
    type: Date, 
    default: Date.now 
  },
  updatedAt: { 
    type: Date 
  }
});

// Middleware to set the `updatedAt` field on document updates
DoubtSchema.pre('findOneAndUpdate', function (next) {
  this.set({ updatedAt: new Date() });
  next();
});

module.exports = mongoose.model('Doubt', DoubtSchema);
