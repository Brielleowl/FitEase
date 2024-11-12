const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const userRoutes = require('./routes/userRoutes');
const chatRoutes = require('./routes/chatRoutes');

const app = express();


app.use(cors());
app.use(express.json());


app.use((req, res, next) => {
    console.log(`Incoming ${req.method} request to ${req.path}`);
    next();
});


app.use('/users', userRoutes);
app.use('/chat', chatRoutes);

// 404 handler
app.use('*', (req, res) => {
    console.log('404 hit for path:', req.originalUrl);
    res.status(404).json({ error: 'Not found' });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('MongoDB connection error:', err));