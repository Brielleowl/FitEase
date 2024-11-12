const { GoogleGenerativeAI } = require('@google/generative-ai');
const mongoose = require('mongoose');
const User = require('../models/User');
const { summarizeUserInfo } = require('../routes/userRoutes');
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

exports.generateResponse = async (req, res) => {
    // get user info prompt
    const userInfoPrompt = summarizeUserInfo(req.body.userInfo);
  try {
    const { prompt, chatContent, userInfo } = req.body;

    // Save user info to MongoDB
    const user = new User(userInfo);
    await user.save();

    const contextualPrompt = `As a fitness and health expert: ${prompt} ${chatContent}`;

    const model = genAI.getGenerativeModel({ model: "gemini-pro" });
    const result = await model.generateContent(contextualPrompt);
    const response = await result.response;
    const text = response.text();

    res.json({ response: text });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}; 