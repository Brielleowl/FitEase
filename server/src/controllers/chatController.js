const { GoogleGenerativeAI } = require("@google/generative-ai");
const mongoose = require("mongoose");
const User = require("../models/User");
const { summarizeUserInfo } = require('../utils/userUtils');
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

const conversationHistory = [];
const GOODBAY_MSG = "Goodbye! Take care and keep going strong 💪😊";

exports.generateResponse = async (req, res) => {
  // get user info prompt
  const userInfoPrompt = await summarizeUserInfo(req.body.userId);
  console.log("userInfoPrompt", userInfoPrompt);
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  // Initialize conversation history
  try {
    const { prompt, chatContent, userInfo } = req.body;

    // Save user info to MongoDB
    const user = new User(userInfo);
    await user.save();
    conversationHistory.push(`User: ${chatContent}`);

    if (chatContent.toLowerCase() === "bye") {
      
      res.json({ response: GOODBAY_MSG });
    }
    const contextualPrompt = `User info is: ${userInfoPrompt ?? ''}.Don't mention user's goal in your response and Respond directly to user's name by using their name in greetings or when applicable. Be a nice, encouraging and gentleman exercise coach, who always supports women that  want to lose their weight.  Use emoji rather than () in replying. Unless a knowledgeable question, please reply under 2-3 sentences.
                        Here is the conversation so far:\n${conversationHistory.join(
                          "\n"
                        )}\nGemini:`;

    const result = await model.generateContent(contextualPrompt);
    const geminiResponse = await result.response;
    const text = geminiResponse.text();

    res.json({ response: text });
    conversationHistory.push(`Gemini: ${geminiResponse}`);
  } catch (error) {
    res.status(500).json({ error: error.message });
    console.error("Error in conversation:", error);
  }
};