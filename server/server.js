require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const contactRoutes = require('./routes/contact');

const app = express();
const PORT = process.env.PORT || 5000;
// Default to local MongoDB if no env variable is set
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/portfolio';

// Middleware
app.use(cors()); // Allow requests from React frontend
app.use(express.json()); // Parse JSON bodies

// Connect to MongoDB
mongoose.connect(MONGODB_URI)
  .then(() => console.log('✅ MongoDB Connected Successfully'))
  .catch(err => {
    console.error('❌ MongoDB Connection Error:', err.message);
    console.log('   Ensure MongoDB is running locally on port 27017');
  });

// API Routes
app.use('/api/contact', contactRoutes);

// Base route for connectivity test
app.get('/', (req, res) => {
  res.send('Portfolio Backend is running. POST to /api/contact to send messages.');
});

// Start Server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});