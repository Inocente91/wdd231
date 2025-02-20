document.addEventListener("DOMContentLoaded", () => {
    const eventsContainer = document.querySelector(".events-list");
    const filterCheckbox = document.getElementById("filter-upcoming");

    // Function to Fetch Events
    async function fetchEvents() {
        try {
            const response = await fetch("data/events.json"); // Adjust path if needed

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const events = await response.json();
            displayEvents(events);
        } catch (error) {
            console.error("Error fetching events:", error);
            eventsContainer.innerHTML = `<p class="error-message">⚠️ Failed to load events. Try again later.</p>`;
        }
    }

    // Function to Display Events
    function displayEvents(events) {
        if (!events.length) {
            eventsContainer.innerHTML = `<p>No events available.</p>`;
            return;
        }

        eventsContainer.innerHTML = events
            .map(event => `
                <div class="event-card">
                    <h3>${event.title}</h3>
                    <p><strong>Date:</strong> ${event.date}</p>
                    <p><strong>Location:</strong> ${event.location}</p>
                    <button class="details-btn" onclick="showEventDetails('${event.id}')">More Details</button>
                </div>
            `)
            .join("");
    }

    // Filter Upcoming Events
    filterCheckbox.addEventListener("change", async () => {
        try {
            const response = await fetch("data/events.json");
            const events = await response.json();

            const now = new Date();
            const filteredEvents = filterCheckbox.checked
                ? events.filter(event => new Date(event.date) >= now)
                : events;

            displayEvents(filteredEvents);
        } catch (error) {
            console.error("Error filtering events:", error);
        }
    });

    fetchEvents();
});

// Function to Show More Details (Can be expanded)
function showEventDetails(eventId) {
    alert(`More details about event ID: ${eventId}`);
}

document.getElementById('filter-upcoming').addEventListener('change', function () {
    const events = document.querySelectorAll('.event-card');
    const currentDate = new Date();

    events.forEach(event => {
        const eventDateText = event.querySelector('p').textContent.split(': ')[1];
        const eventDate = new Date(eventDateText);

        if (this.checked) {
            // Show only upcoming events
            if (eventDate >= currentDate) {
                event.style.display = 'block';
            } else {
                event.style.display = 'none';
            }
        } else {
            // Show all events
            event.style.display = 'block';
        }
    });
});

document.getElementById('clear-filter').addEventListener('click', function () {
    document.getElementById('filter-upcoming').checked = false;
    const events = document.querySelectorAll('.event-card');
    events.forEach(event => {
        event.style.display = 'block';
    });
});
