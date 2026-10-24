const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const leadRoutes = require('./routes/lead.routes');
require('dotenv').config();

const app = express();

// Security & Middlewares
app.use(helmet());
app.use(cors({ origin: process.env.CLIENT_URL || '*' }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Database connection placeholder (config/db.js)
// require('./config/db')();

// API Routes
app.use('/api/lead', leadRoutes);

// Health Check
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'OK', message: 'PBNMarket Server is running.' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running in ${process.env.NODE_ENV || 'development'} mode on port ${PORT}`);
});