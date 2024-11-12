const User = require("../models/User");

const summarizeUserInfo = async (userId) => {
  try {
    console.log("userId", userId);
    const user = await User.findById(userId);

    if (!user) {
      return "";
    }

    const weightDiff = user.weight - user.goalWeight;
    const weeklyGoal = weightDiff / user.timeline;

    return `Name: ${user.name}
Age: ${user.age}
Current Weight: ${user.weight} lbs
Goal Weight: ${user.goalWeight} lbs
Timeline: ${user.timeline} weeks
Weekly Goal: ${weeklyGoal.toFixed(1)} lbs`;
  } catch (error) {
    console.error("Error in summarizeUserInfo:", error);
    return "";
  }
};

module.exports = {
  summarizeUserInfo,
};
