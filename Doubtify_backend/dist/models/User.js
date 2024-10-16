"use strict";

var mongoose = require('mongoose');
var userSchema = new mongoose.Schema({
  username: String,
  password: String,
  email: String,
  role: {
    type: String,
    "enum": ['basic', 'expert'],
    "default": 'basic'
  },
  verified: Boolean
});
module.exports = mongoose.model('User', userSchema);