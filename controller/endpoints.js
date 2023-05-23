const { db } = require('../database/db');

// Function to search for PDFs by keywords, title, or subject
function getPDFByQuery(req, res) {
  const { query } = req.query; // Get the search query from the request parameters

  // Prepare the SELECT statement
  const selectQuery = `SELECT * FROM pdfTable WHERE keywords LIKE ? OR title LIKE ? OR subject LIKE ?`;
  const searchQuery = `%${query}%`; // Surround the query with '%' to match partial matches

  // Execute the SELECT statement
  db.all(selectQuery, [searchQuery, searchQuery, searchQuery], (err, rows) => {
    if (err) {
      console.error(err.message);
      res.status(500).json({ error: 'An error occurred while searching for PDFs.' });
    } else {
      res.json(rows); // Return the found rows as JSON
    }
  });
}

// Export the getPDFByQuery function
module.exports = {
  getPDFByQuery
};