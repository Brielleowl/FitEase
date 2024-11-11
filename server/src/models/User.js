const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: String,
  email: String,
  height: Number,
  weight: Number,
  goalWeight: Number,
  timeline: Number,
  // Add other user fields as necessary
});

module.exports = mongoose.model('User', userSchema); 