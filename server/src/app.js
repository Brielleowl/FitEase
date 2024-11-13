const express = require('express');
const cors = require('cors');
const configSecurity = require('./middleware/security');
const errorHandler = require('./middleware/errorHandler');
const chatRoutes = require('./routes/chatRoutes');
const userRoutes = require('./routes/userRoutes');
const app = express();

// Security configuration
configSecurity(app);

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use('/api', chatRoutes);
app.use('/users', userRoutes);


// Error handling
app.use(errorHandler);

module.exports = app; 