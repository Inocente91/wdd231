// Dynamic Footer Content
document.getElementById('copyrightYear').textContent = new Date().getFullYear();
document.getElementById('lastModifiedDate').textContent = document.lastModified;

// Hamburger Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
});

// Close menu when clicking outside
document.addEventListener('click', (event) => {
    if (!event.target.closest('.main-nav') && navLinks.classList.contains('active')) {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
    }
});

// Close menu when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
    });
});

// View Toggle Functionality
const gridButton = document.getElementById('gridView');
const listButton = document.getElementById('listView');
const container = document.getElementById('membersContainer');

gridButton.addEventListener('click', () => {
    container.classList.remove('list');
    container.classList.add('grid');
    gridButton.classList.add('active');
    listButton.classList.remove('active');
});

listButton.addEventListener('click', () => {
    container.classList.remove('grid');
    container.classList.add('list');
    listButton.classList.add('active');
    gridButton.classList.remove('active');
});

// Fetch and Display Members
async function fetchMembers() {
    try {
        const response = await fetch('data/members.json');
        const data = await response.json();
        const membersContainer = document.getElementById('membersContainer');
        
        // Clear existing content
        membersContainer.innerHTML = '';

        data.members.forEach(member => {
            const card = document.createElement('article');
            card.className = 'card';
            card.innerHTML = `
                <img src="images/${member.image}" alt="${member.name}" class="card-img">
                <div class="card-content">
                    <h3 class="card-title">${member.name}</h3>
                    <p class="card-address">${member.address}</p>
                    <p class="card-phone">${member.phone}</p>
                    <p class="card-level">Membership Level: ${getMembershipLevel(member.membershipLevel)}</p>
                    <a href="${member.website}" class="card-btn" target="_blank" rel="noopener">Visit Website</a>
                </div>
            `;
            membersContainer.appendChild(card);
        });
    } catch (error) {
        console.error('Error loading member data:', error);
        membersContainer.innerHTML = '<p>Error loading member directory. Please try again later.</p>';
    }
}

// Helper function for membership levels
function getMembershipLevel(level) {
    const levels = {
        1: 'Member',
        2: 'Silver',
        3: 'Gold'
    };
    return levels[level] || 'Basic';
}

// Initial Load
document.addEventListener('DOMContentLoaded', fetchMembers);
