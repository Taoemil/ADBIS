// frontend.js

// Function to search for PDFs by query
function searchPDFs(query) {
  // Make an HTTP GET request to the search endpoint
  fetch(`/search?query=${query}`)
    .then(response => response.json())
    .then(data => {
      // Handle the response data
      displayPDFs(data);
    })
    .catch(error => {
      console.error('An error occurred:', error);
    });
}

// Function to display the PDFs
function displayPDFs(pdfs) {
  // Clear the existing results
  const resultsContainer = document.getElementById('results');
  resultsContainer.innerHTML = '';

  // Loop through the PDFs and create HTML elements to display them
  /*
  for (const pdf of pdfs) {
    const pdfElement = document.createElement('div');
    pdfElement.textContent = pdf.link; // You can customize how you want to display the PDF information
    resultsContainer.appendChild(pdfElement);
  }
  */

  for (const pdf of pdfs) {
    const pdfLink = document.createElement('a');
    pdfLink.textContent = pdf.link;
    pdfLink.href = pdf.link;
    pdfLink.target = '_blank'; // Open the link in a new tab

    const pdfElement = document.createElement('div');
    pdfElement.appendChild(pdfLink);
    resultsContainer.appendChild(pdfElement); }

}

// Example usage: search for PDFs when a button is clicked
const searchButton = document.getElementById('search-button');
const searchInput = document.getElementById('search-input');

searchButton.addEventListener('click', () => {
  const query = searchInput.value;
  searchPDFs(query);
});