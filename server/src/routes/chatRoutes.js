const express = require('express');
const router = express.Router();
const { GoogleGenerativeAI } = require('@google/generative-ai'); // Hypothetical Gemini API module
const User = require('../models/User'); // Assuming you have a User model

// POST endpoint to handle chat interactions
router.post('/conversation', async (req, res) => {
    try {
        const { chatContent, userInfo } = req.body;

        // Interact with Gemini
        const geminiResponse = await GoogleGenerativeAI.interact(chatContent);

        // Save user info to MongoDB
        const user = new User(userInfo);
        await user.save();

        // Send response back to frontend
        res.json({ geminiResponse });
    } catch (error) {
        res.status(500).json({ error: 'An error occurred' });
    }
});

module.exports = router; 