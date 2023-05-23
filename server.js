const express = require('express');
const path = require('path');
const { getPDFByQuery } = require('./controller/endpoints');

// Create an Express application
const app = express();
const port = 3000; // Change this to the desired port number

// Serve static files from the "view" directory
app.use(express.static('view'));

// Define the default route to serve the frontend.html file
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'view', 'frontend.html'));
});

// Define the search endpoint
app.get('/search', getPDFByQuery);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

module.exports = app;