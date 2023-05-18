// Import required modules
const express = require('express');

// Create an instance of Express
const app = express();

// Define routes
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});