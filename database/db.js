const sqlite3 = require('sqlite3').verbose();

// Create a new database connection
const db = new sqlite3.Database('PDFstorage.db', (error) => {
  if (error) {
    console.error('Database connection failed:', error);
  } else {
    console.log('Connected to the database.');
  }
});

// Export the database connection
module.exports = db;