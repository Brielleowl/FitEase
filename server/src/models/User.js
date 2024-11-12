const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  age: Number,
  height: Number,
  weight: Number,
  goalWeight: Number,
  timeline: Number,
  bmi: Number,
});

module.exports = mongoose.model('User', userSchema); 