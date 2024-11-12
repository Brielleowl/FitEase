const express = require('express');
const router = express.Router();
const { GoogleGenerativeAI } = require('@google/generative-ai');
const User = require('../models/User');
const { summarizeUserInfo } = require('../utils/userUtils');

router.post('/conversation', async (req, res) => {
    try {
        const { chatContent, userId } = req.body;

        // Find the user by ID
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        // Generate user summary
        const userSummary = summarizeUserInfo(user);

        const fullPrompt = `User Context: ${userSummary}\n\nUser Question: ${chatContent}`;

        const genAI = new GoogleGenerativeAI('YOUR_API_KEY');
        const model = genAI.getGenerativeModel({ model: "gemini-pro" });

        const result = await model.generateContent(fullPrompt);
        const response = await result.response;
        const text = response.text();

        res.json({ 
            response: text,
            userSummary
        });

    } catch (error) {
        console.error('Error in conversation:', error);
        res.status(500).json({ error: 'An error occurred during the conversation' });
    }
});

module.exports = router; 