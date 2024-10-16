"use strict";

// backend/models/Doubt.js
var DoubtSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    minlength: 5
  },
  description: {
    type: String,
    required: true,
    minlength: 10
  },
  postedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  answer: {
    type: String,
    "default": null
  }
});
module.exports = mongoose.model('Doubt', DoubtSchema);