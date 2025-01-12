// Get the current year dynamically
const currentYear = new Date().getFullYear();

// Get the copyright year element and set its content
document.getElementById('copyrightYear').textContent = currentYear;

// Get the last modified date of the document
const lastModifiedDate = document.lastModified;

// Get the last modified date element and set its content
document.getElementById('lastModifiedDate').textContent = lastModifiedDate;


function filterCourses(category) {
    // Get all course buttons
    const courses = document.querySelectorAll('.course');
    
    // Loop through each course and check its category
    courses.forEach(course => {
      const courseCategory = course.getAttribute('data-category');
      
      // Show or hide the course button based on the filter category
      if (category === 'all' || courseCategory === category) {
        course.style.display = 'inline-block'; // Show the course button
      } else {
        course.style.display = 'none'; // Hide the course button
      }
    });
  }
  

// Initial Load
filterCourses("all");

