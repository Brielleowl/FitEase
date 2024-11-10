const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true
  },
  height: {
    type: Number,
    required: true
  },
  weight: {
    type: Number,
    required: true
  },
  goalWeight: {
    type: Number,
    required: true
  },
  timeline: {
    type: Number,
    required: true
  },
  bmi: {
    type: Number,
    required: true
  },
  healthConditions: {
    heartCondition: Boolean,
    jointIssues: Boolean,
    diabetes: Boolean,
    highBloodPressure: Boolean,
    other: Boolean
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('User', userSchema); 