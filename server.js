const express = require('express');
const path = require('path');
const app = express();

// Serve static files from public folder
app.use(express.static(path.join(__dirname, 'public')));

// Add headers to allow iframe (Embedded SDK)
app.use((req, res, next) => {
  res.setHeader('X-Frame-Options', 'ALLOWALL');
  res.setHeader('Content-Security-Policy', "frame-ancestors *");
  next();
});

// Listen on Render's port or local port 3000
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});