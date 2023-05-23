// Import the searchPDFs function
const searchPDFs = require('../controller/functions').searchPDFs;

// Function to handle the search form submission
function handleSearchFormSubmit(event) {
  event.preventDefault();

  // Get the keyword and title values from the form
  const keyword = document.getElementById('keyword').value;
  const title = document.getElementById('title').value;

  // Call the searchPDFs function and display the results
  searchPDFs(keyword, title);
}

// Attach event listener to the search form
const searchForm = document.getElementById('search-form');
searchForm.addEventListener('submit', handleSearchFormSubmit);