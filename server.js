const express = require('express');
const path = require('path');

const app = express();
const PORT = 5000;

// Disable caching for development
app.use((req, res, next) => {
  res.header('Cache-Control', 'no-cache, no-store, must-revalidate');
  res.header('Pragma', 'no-cache');
  res.header('Expires', '0');
  next();
});

// Serve static files
app.use(express.static('.'));

// Route for the main page
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Start server
app.listen(PORT, '0.0.0.0', () => {
  console.log(`RedTrex Technologies website running on http://0.0.0.0:${PORT}`);
});