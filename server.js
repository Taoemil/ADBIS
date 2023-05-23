// Import required modules
const express = require('express');
const path = require('path');
const mime = require('mime');
const fs = require('fs');



// Create an instance of Express
const app = express();





// Middleware
app.get('/', (req, res) => {
  res.sendFile('searchTemplate.html', {root: 'view'});
});

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});