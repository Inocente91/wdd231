// Get the current year dynamically
const currentYear = new Date().getFullYear();

// Get the copyright year element and set its content
document.getElementById('copyrightYear').textContent = currentYear;

// Get the last modified date of the document
const lastModifiedDate = document.lastModified;

// Get the last modified date element and set its content
document.getElementById('lastModifiedDate').textContent = lastModifiedDate;

