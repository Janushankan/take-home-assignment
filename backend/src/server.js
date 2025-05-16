const express = require('express');
const cors = require('cors');
require('dotenv').config();

const loginRoutes = require('./routes/login');
const accountRoutes = require('./routes/account');

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api/login', loginRoutes);
app.use('/api/account', accountRoutes);

// Basic route
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to the backend API' });
});


// Start server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
}); 