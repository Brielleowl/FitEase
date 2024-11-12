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

module.exports = router; 