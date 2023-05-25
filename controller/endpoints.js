const { db } = require('../database/db');

// Funktion getPDFByQuery
function getPDFByQuery(req, res) {
  const { query } = req.query; // Get the search query from the request parameters

  // SELECT statement
  const selectQuery = `SELECT * FROM pdfTable WHERE keywords LIKE ? OR title LIKE ? OR subject LIKE ?`;
  const searchQuery = `%${query}%`; // Surround the query with '%' to match partial matches

  // Kør SELECT statement
  db.all(selectQuery, [searchQuery, searchQuery, searchQuery], (err, rows) => {
    if (err) {
      console.error(err.message);
      res.status(500).json({ error: 'An error occurred while searching for PDFs.' });
    } else {
      res.json(rows); // Returner rows som JSON
    }
  });
}

// eksporter getPDFByQuery
module.exports = {
  getPDFByQuery
};