const sqlite3 = require('sqlite3').verbose();
const fs = require('fs');
const { PDF } = require('../model/classes');


// Create a new instance of the sqlite3.Database class
const db = new sqlite3.Database('prototype.db', sqlite3.OPEN_READWRITE, (error) => {
  if (error) {
    console.error('Database connection failed:', error);
  } else {
    console.log('Connected to the database.');
  }
});


/*
  // Create the 'pdfTable' table if it doesn't exist
  db.run(`CREATE TABLE IF NOT EXISTS pdfTable (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT,
    subject TEXT,
    keywords TEXT,
    createdDate TEXT,
    deletedDate TEXT,
    numberOfPages INTEGER,
    pdfData BLOB,
    link TEXT
  )`, (err) => {
    if (err) {
      console.error(err.message);
    } else {
      console.log('pdfTable created successfully.');
    }
  });
  */

    // Create a new PDF object 
    /*
    const pdf = new PDF('Vejledningsoversigt', 'vejledning ', 'assistent, banan', '2023-05-24', '2023-05-30', 8);
    pdf.pdfData = 'PDF binary data'; // Set the PDF binary data (you need to replace this with actual binary data)
    pdf.link = 'https://oes.dk/media/44798/m33-effekthaandtering-for-personaleledere.pdf'; // Set the PDF link
  
    // Prepare the INSERT statement
    const insertQuery = `INSERT INTO pdfTable (title, subject, keywords, createdDate, deletedDate, numberOfPages, pdfData, link) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`;
    const values = [pdf.title, pdf.subject, pdf.keywords, pdf.createdDate, pdf.deletedDate, pdf.numberOfPages, pdf.pdfData, pdf.link];
  
    // Execute the INSERT statement
    db.run(insertQuery, values, function(err) {
      if (err) {
        console.error(err.message);
      } else {
        console.log(`Inserted PDF with ID: ${this.lastID}`);
      }
    });
*/
    




// Export the database connection
module.exports = {
  db: db
};