// Visit message functionality
const visitMessage = document.getElementById('visit-message');
const lastVisit = localStorage.getItem('lastVisit');
const currentDate = Date.now();
const oneDay = 86400000; // milliseconds in a day

if (!lastVisit) {
    visitMessage.textContent = "Welcome! Let us know if you have any questions.";
} else {
    const daysSince = Math.floor((currentDate - lastVisit) / oneDay);

    if (daysSince < 1) {
        visitMessage.textContent = "Back so soon! Awesome!";
    } else {
        visitMessage.textContent = `You last visited ${daysSince} day${daysSince !== 1 ? 's' : ''} ago.`;
    }
}

localStorage.setItem('lastVisit', currentDate);