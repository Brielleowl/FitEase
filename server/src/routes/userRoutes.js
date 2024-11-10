const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.post('/health-check', userController.saveHealthCheck);
router.post('/user-info', userController.saveUserInfo);
router.get('/progress/:userId', userController.getUserProgress);

module.exports = router; 