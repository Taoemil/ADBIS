const fs = require('fs');
const db = require('./db.js');

// Function to store a PDF file in the database
function storePDF(title, subject, keywords, createdDate, deletedDate, pageNumbers, filePath) {
  const data = fs.readFileSync(filePath);

  const sql = `INSERT INTO pdfs (title, subject, keywords, createdDate, deletedDate, pageNumbers, data)
               VALUES (?, ?, ?, ?, ?, ?, ?)`;

  db.run(sql, [title, subject, keywords, createdDate, deletedDate, pageNumbers, data], function (error) {
    if (error) {
      console.error('Failed to store the PDF:', error);
    } else {
      console.log('PDF stored successfully!');
    }
  });
}

// Example usage
const pdfTitle = 'Oversigt';
const pdfSubject = 'emneEksempel';
const pdfKeywords = 'soegeord';
const pdfCreatedDate = '2023-05-22';
const pdfDeletedDate = null; // Set to null if the PDF is not deleted
const pdfPageNumbers = 5;
const pdfFilePath = '/Users/emil/Downloads/vejledningsoversigt.pdf';

storePDF(pdfTitle, pdfSubject, pdfKeywords, pdfCreatedDate, pdfDeletedDate, pdfPageNumbers, pdfFilePath);

/* Create a table for storing PDF files
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
*/