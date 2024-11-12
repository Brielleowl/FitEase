const User = require('../models/User');

exports.saveHealthCheck = async (req, res) => {
  try {
    const healthConditions = req.body;
    // Store in session or temporary storage until user info is complete
    // For now, we'll just send success response
    res.status(200).json({ message: 'Health check saved successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.saveUserInfo = async (req, res) => {
  try {
    console.log("req.body", req.body);
    const {
      name,
      age,
      height,
      weight,
      goalWeight,
      timeline,
    } = req.body;

    // Calculate BMI
    const heightInMeters = height * 0.0254; // Convert inches to meters
    const weightInKg = weight * 0.453592; // Convert pounds to kg
    const bmi = weightInKg / (heightInMeters * heightInMeters);

    const user = new User({
      name,
      age,
      height,
      weight,
      goalWeight,
      timeline,
      bmi,
    });

    await user.save();
    res.status(201).json({ userId: user._id });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getUserProgress = async (req, res) => {
  try {
    const user = await User.findById(req.params.userId);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Calculate progress
    const totalWeightToLose = user.weight - user.goalWeight;
    const currentWeightLost = user.weight - user.weight; // You'll need to update current weight regularly
    const progress = (currentWeightLost / totalWeightToLose) * 100;

    res.json({
      currentWeight: user.weight,
      goalWeight: user.goalWeight,
      timelineWeeks: user.timeline,
      progress: Math.max(0, Math.min(100, progress))
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}; 