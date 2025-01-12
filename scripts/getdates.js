// Get the current year dynamically
const currentYear = new Date().getFullYear();

// Get the copyright year element and set its content
document.getElementById('copyrightYear').textContent = currentYear;

// Get the last modified date of the document
const lastModifiedDate = document.lastModified;

// Get the last modified date element and set its content
document.getElementById('lastModifiedDate').textContent = lastModifiedDate;

// Course data
const courses = [
        {
            subject: 'CSE',
            number: 110,
            title: 'Introduction to Programming',
            credits: 2,
            certificate: 'Web and Computer Programming',
            description: 'This course will introduce students to programming. It will introduce the building blocks of programming languages (variables, decisions, calculations, loops, array, and input/output) and use them to solve problems.',
            technology: [
                'Python'
            ],
            completed: true
        },
        {
            subject: 'WDD',
            number: 130,
            title: 'Web Fundamentals',
            credits: 2,
            certificate: 'Web and Computer Programming',
            description: 'This course introduces students to the World Wide Web and to careers in web site design and development. The course is hands on with students actually participating in simple web designs and programming. It is anticipated that students who complete this course will understand the fields of web design and development and will have a good idea if they want to pursue this degree as a major.',
            technology: [
                'HTML',
                'CSS'
            ],
            completed: true
        },
        {
            subject: 'CSE',
            number: 111,
            title: 'Programming with Functions',
            credits: 2,
            certificate: 'Web and Computer Programming',
            description: 'CSE 111 students become more organized, efficient, and powerful computer programmers by learning to research and call functions written by others; to write, call , debug, and test their own functions; and to handle errors within functions. CSE 111 students write programs with functions to solve problems in many disciplines, including business, physical science, human performance, and humanities.',
            technology: [
                'Python'
            ],
            completed: true
        },
        {
            subject: 'CSE',
            number: 210,
            title: 'Programming with Classes',
            credits: 2,
            certificate: 'Web and Computer Programming',
            description: 'This course will introduce the notion of classes and objects. It will present encapsulation at a conceptual level. It will also work with inheritance and polymorphism.',
            technology: [
                'C#'
            ],
            completed: false
        },
        {
            subject: 'WDD',
            number: 131,
            title: 'Dynamic Web Fundamentals',
            credits: 2,
            certificate: 'Web and Computer Programming',
            description: 'This course builds on prior experience in Web Fundamentals and programming. Students will learn to create dynamic websites that use JavaScript to respond to events, update content, and create responsive user experiences.',
            technology: [
                'HTML',
                'CSS',
                'JavaScript'
            ],
            completed: true
        },
        {
            subject: 'WDD',
            number: 231,
            title: 'Frontend Web Development I',
            credits: 2,
            certificate: 'Web and Computer Programming',
            description: 'This course builds on prior experience with Dynamic Web Fundamentals and programming. Students will focus on user experience, accessibility, compliance, performance optimization, and basic API usage.',
            technology: [
                'HTML',
                'CSS',
                'JavaScript'
            ],
            completed: false
        }
    
];

// Function to display courses
function displayCourses(category = 'all') {
    const courseContainer = document.getElementById('courses');
    const totalCreditsElement = document.getElementById('totalCredits'); // Add an element for displaying total credits
    courseContainer.innerHTML = ''; // Clear the existing courses

    const filteredCourses = category === 'all' ? courses : courses.filter(course => course.subject === category);

    // Loop through the courses and display them
    filteredCourses.forEach(course => {
        const courseButton = document.createElement('button');
        courseButton.classList.add('course');
        courseButton.setAttribute('data-category', course.subject);

        // Check if the course is completed and apply a class accordingly
        if (course.completed) {
            courseButton.classList.add('completed');
        }

        // Add the credits to the displayed text
        courseButton.innerHTML = `${course.subject} ${course.number}: ${course.title} (Credits: ${course.credits})`;

        courseButton.onclick = () => alert(course.description); // Show description on click
        courseContainer.appendChild(courseButton);
    });

    // Calculate the total credits using reduce
    const totalCredits = filteredCourses.reduce((total, course) => total + course.credits, 0);

    // Display the total credits
    totalCreditsElement.textContent = `Total Credits: ${totalCredits}`;
}

// Function to filter courses based on the category
function filterCourses(category) {
    displayCourses(category);
}

// Initial Load: Display all courses
displayCourses("all");



  



