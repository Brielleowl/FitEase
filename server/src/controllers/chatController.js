const { GoogleGenerativeAI } = require('@google/generative-ai');

// Initialize Gemini
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

exports.generateResponse = async (req, res) => {
  try {
    const { prompt } = req.body;
    
    // Add context to the prompt
    const contextualPrompt = `As a fitness and health expert: ${prompt}`;
    
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });
    const result = await model.generateContent(contextualPrompt);
    const response = await result.response;
    const text = response.text();
    
    res.json({ response: text });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}; 