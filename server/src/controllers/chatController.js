const { GoogleGenerativeAI } = require('@google/generative-ai');
const mongoose = require('mongoose');
const User = require('../models/User'); // Assuming you have a User model

// Initialize Gemini
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

exports.generateResponse = async (req, res) => {
  try {
    const { prompt, chatContent, userInfo } = req.body; // Receive chat content and user info

    // Save user info to MongoDB
    const user = new User(userInfo);
    await user.save();

    // Add context to the prompt
    const contextualPrompt = `As a fitness and health expert: ${prompt} ${chatContent}`; // Include chat content

    const model = genAI.getGenerativeModel({ model: "gemini-pro" });
    const result = await model.generateContent(contextualPrompt);
    const response = await result.response;
    const text = response.text();

    res.json({ response: text });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}; 