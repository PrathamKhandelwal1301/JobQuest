require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const {authenticate} = require('./middlewares/authMiddleware');

// Protect the resume upload route


const app = express();
const PORT = process.env.PORT ;

console.log('MONGO_URI:', process.env.MONGO_URI);

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));


// Routes
app.use('/auth', authRoutes);
app.use('/resume', authenticate, require('./routes/resumeRoutes'));
app.use('/ats', authenticate,require('./routes/atsRoutes'));
app.use('/storage',authenticate, require('./routes/storageRoutes'));
app.use('/recommendation',authenticate, require('./routes/recommendationRoutes'));

// Start server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));