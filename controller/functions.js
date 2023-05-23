const {
    Role,
    Administrator,
    EndUser,
    InstructionGuide,
    Video,
    PDF,
    UpdatedVideo,
    UpdatedPDF,
    Notification,
    Favorite,
    Subject
  } = require('./classes.js.js');

  const db = require('./db.js.js');

// Function to search for PDFs by keyword or title
function searchPDFs(keyword, title) {
  let sql = `SELECT * FROM pdfs WHERE 1=1`;
  const params = [];

  if (keyword) {
    sql += ` AND keywords LIKE ?`;
    params.push(`%${keyword}%`);
  }

  if (title) {
    sql += ` AND title LIKE ?`;
    params.push(`%${title}%`);
  }

  db.all(sql, params, function (error, rows) {
    if (error) {
      console.error('Failed to search PDFs:', error);
    } else {
      console.log('Search results:');
      rows.forEach((row) => {
        console.log(`Title: ${row.title}, Subject: ${row.subject}`);
      });
    }
  });
}

// Example usage
const searchKeyword = 'sample';
const searchTitle = 'guide';

searchPDFs(searchKeyword, searchTitle);

export function searchPDFs(searchKeyword, searchTitle);