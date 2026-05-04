const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to serve static files from the "public" folder
app.use(express.static(path.join(__dirname, 'public')));

// Example API endpoint for sequence processing (optional expansion)
app.get('/api/health', (req, res) => {
  res.json({ status: 'Engine Online', version: '2.0.0' });
});

// Send index.html for any other requests
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`HelixForge Engine running on port ${PORT}`);
});
