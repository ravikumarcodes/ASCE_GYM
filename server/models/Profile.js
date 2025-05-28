const mongoose = require('mongoose');

const profileSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  age: Number,
  gender: String,
  height: Number, // in cm
  weight: Number, // in kg
  fitnessGoal: String, // e.g., weight loss, muscle gain
  joinedAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Profile', profileSchema);