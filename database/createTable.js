const db = require('./db.js');

// Create a table for storing PDF files
db.run(`
  CREATE TABLE IF NOT EXISTS pdfs (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT,
    subject TEXT,
    keywords TEXT,
    createdDate TEXT,
    deletedDate TEXT,
    pageNumbers TEXT,
    data BLOB
  )
`, (error) => {
  if (error) {
    console.error('Failed to create the PDF table:', error);
  } else {
    console.log('PDF table created successfully!');
  }
});