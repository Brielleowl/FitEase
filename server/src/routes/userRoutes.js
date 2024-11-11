const express = require('express');
const router = express.Router();
const User = require('../models/User');

router.post('/', async (req, res) => {
    console.log('Received user creation request:', req.body);
    try {
        const userInfo = req.body;
        const user = new User(userInfo);
        await user.save();
        
        res.status(201).json({ 
            message: 'User information saved successfully', 
            userId: user._id 
        });
    } catch (error) {
        console.error('Error saving user:', error);
        res.status(500).json({ error: 'An error occurred while saving user information' });
    }
});

function summarizeUserInfo(userInfo) {
    const weightDiff = userInfo.userInfo.weight - userInfo.userInfo.goalWeight;
    const weeklyGoal = (weightDiff / userInfo.userInfo.timeline).toFixed(2);
    
    return `Name: ${userInfo.username}, Age: ${userInfo.userInfo.age}, Height: ${userInfo.userInfo.height} inches, Current Weight: ${userInfo.userInfo.weight} lbs, Goal Weight: ${userInfo.userInfo.goalWeight} lbs, Timeline: ${userInfo.userInfo.timeline} weeks, BMI: ${userInfo.userInfo.bmi}. They want to ${weightDiff > 0 ? 'lose' : 'gain'} ${Math.abs(weightDiff)} lbs at a rate of ${Math.abs(weeklyGoal)} lbs per week.`;
}

module.exports = router; 