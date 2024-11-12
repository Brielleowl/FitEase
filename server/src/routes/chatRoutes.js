const express = require('express');
const router = express.Router();
const chatController = require('../controllers/chatController');

// Simplified route that delegates to controller
router.post('/chat', chatController.generateResponse);


module.exports = router; 