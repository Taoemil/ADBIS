const sqlite3 = require('sqlite3').verbose();
const fs = require('fs');
const { PDF } = require('../model/classes');


const databaseFile = 'prototype.db'; // Specificer database navn



// Opret database forbindelse
const db = new sqlite3.Database(databaseFile, sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE, (error) => {
  if (error) {
    console.error('Database connection failed:', error);
  } else {
    console.log('Connected to the database.');
  }
});


  // Opret "pdfTable", hvis den ikke eksisterer
  db.run(`CREATE TABLE IF NOT EXISTS pdfTable (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT,
    subject TEXT,
    keywords TEXT,
    createdDate TEXT,
    deletedDate TEXT,
    numberOfPages INTEGER,
    version INTEGER,
    pdfData BLOB,
    link TEXT
  )`, (err) => {
    if (err) {
      console.error(err.message);
    } else {
      console.log('pdfTable created successfully.');
    }
  });
  

  /*
    // nyt PDF object 
    const pdf = new PDF('Elementoversigt - kompensation', 'Løn', 'kompensation, lønning, aflønning', '2023-05-24', 'null', 37, 1);
    pdf.pdfData = 'PDF binary data'; // Set the PDF binary data (you need to replace this with actual binary data)
    pdf.link = 'https://oes.dk/media/45507/elementoversigt-kompensation.pdf'; // Set the PDF link
  
    // INSERT statement
    const insertQuery = `INSERT INTO pdfTable (title, subject, keywords, createdDate, deletedDate, numberOfPages, version, pdfData, link) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`;
    const values = [pdf.title, pdf.subject, pdf.keywords, pdf.createdDate, pdf.deletedDate, pdf.numberOfPages, pdf.version, pdf.pdfData, pdf.link];
  
    // kør INSERT statement
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