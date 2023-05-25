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
 
 
 // Display funktion
function displayPDFs(pdfs) {
  // Fjern eksisterende resultater
  const resultsContainer = document.getElementById('results');
  resultsContainer.innerHTML = '';

  // Returner totalt antal objekter 
  const totalObjects = pdfs.length;
  const totalCountElement = document.createElement('p');
  totalCountElement.textContent = `Antal vejledninger fundet: ${totalObjects}
  
  `; 
  resultsContainer.appendChild(totalCountElement);

  // Loop gennem pdfs og lav HTML
  for (const pdf of pdfs) {
    const titleElement = document.createElement('h3');
    titleElement.textContent = `Titel: ${pdf.title}`;
    resultsContainer.appendChild(titleElement);

    const subjectElement = document.createElement('h4');
    subjectElement.textContent = `Emne: ${pdf.subject}`;
    resultsContainer.appendChild(subjectElement);

    const numberOfPagesElement = document.createElement('b');
    subjectElement.textContent = `antal sider: ${pdf.numberOfPages}`;
    resultsContainer.appendChild(numberOfPagesElement);

    const linkElement = document.createElement('a');
    linkElement.textContent = `Åbn PDF - ny fane`;
    linkElement.href = pdf.link;
    linkElement.target = '*'; // Open the link in a new tab
    resultsContainer.appendChild(linkElement);

    const separatorElement = document.createElement('hr');
    resultsContainer.appendChild(separatorElement);
  }
}

// Brugsmønster: Søge-button
const searchButton = document.getElementById('search-button');
const searchInput = document.getElementById('search-input');

searchButton.addEventListener('click', () => {
  const query = searchInput.value;
  searchPDFs(query);
});