const eventData = [
    {
        title: "Car Show Extravaganza",
        date: "August 20, 2023",
        location: "Convention Center",
        details: "An exciting car show featuring classic and modern vehicles.",
        registerLink: "https://example.com/carshow"
    },
    {
        title: "Car Show Extravaganza",
        date: "August 20, 2023",
        location: "Convention Center",
        details: "An exciting car show featuring classic and modern vehicles.",
        registerLink: "https://example.com/carshow"
    },
    {
        title: "Car Show Extravaganza",
        date: "August 20, 2023",
        location: "Convention Center",
        details: "An exciting car show featuring classic and modern vehicles.",
        registerLink: "https://example.com/carshow"
    },
    {
        title: "Car Show Extravaganza",
        date: "August 20, 2023",
        location: "Convention Center",
        details: "An exciting car show featuring classic and modern vehicles.",
        registerLink: "https://example.com/carshow"
    },
    {
        title: "Tech Conference",
        date: "September 10, 2023",
        location: "Tech Hub",
        details: "A conference showcasing the latest trends in technology.",
        registerLink: "https://example.com/techconference"
    },
    {
        title: "Food Festival",
        date: "July 5, 2023",
        location: "City Park",
        details: "Experience a variety of delicious cuisines from around the world.",
        registerLink: "https://example.com/foodfest"
    },
    {
        title: "Art Exhibition",
        date: "October 15, 2023",
        location: "Art Gallery",
        details: "Explore stunning artworks from local and international artists.",
        registerLink: "https://example.com/artexhibition"
    },
    {
        title: "Fitness Workshop",
        date: "August 5, 2023",
        location: "Fitness Center",
        details: "Learn new fitness techniques and strategies for a healthier lifestyle.",
        registerLink: "https://example.com/fitnessworkshop"
    },
    {
        title: "Art Exhibition",
        date: "October 15, 2023",
        location: "Art Gallery",
        details: "Explore stunning artworks from local and international artists.",
        registerLink: "https://example.com/artexhibition"
    },
    {
        title: "Art Exhibition",
        date: "October 15, 2023",
        location: "Art Gallery",
        details: "Explore stunning artworks from local and international artists.",
        registerLink: "https://example.com/artexhibition"
    },
    {
        title: "Art Exhibition",
        date: "October 15, 2023",
        location: "Art Gallery",
        details: "Explore stunning artworks from local and international artists.",
        registerLink: "https://example.com/artexhibition"
    },
    {
        title: "Art Exhibition",
        date: "October 15, 2023",
        location: "Art Gallery",
        details: "Explore stunning artworks from local and international artists.",
        registerLink: "https://example.com/artexhibition"
    },
    
    // Add more event objects as needed
];

// ... (rest of the code remains the same) ...


function createEventCard(event) {
    const eventCard = document.createElement("div");
    eventCard.classList.add("event-card");

    eventCard.innerHTML = `
        <h2>${event.title}</h2>
        <p>Date: ${event.date}</p>
        <p>Location: ${event.location}</p>
        <p>${event.details}</p>
        <a href="${event.registerLink}" target="_blank"><button>Register</button></a>
    `;

    return eventCard;
}

const eventList = document.getElementById("event-list");

// Calculate the total width of all event cards
const eventCardWidth = 320; // Adjust based on your design
const totalEventCards = eventData.length;
const totalListWidth = eventCardWidth * totalEventCards;

// Set the width of the event list container
const eventListContainer = document.getElementById("event-list-container");
eventListContainer.style.width = `${totalListWidth}px`;

function scrollEventCards() {
    const firstEventCard = eventList.children[0];
    eventList.style.transition = "transform 0.5s ease-in-out"; // Apply the transition

    // Shift the first card to the end of the list
    eventList.style.transform = "translateX(-100%)";
    setTimeout(() => {
        eventList.style.transition = "none"; // Remove the transition temporarily
        eventList.appendChild(firstEventCard);
        eventList.style.transform = "translateX(0)";
    }, 500); // Match the transition duration
}

// Scroll the event cards every 5 seconds
setInterval(scrollEventCards, 2000); // Change the interval as needed

eventData.forEach(event => {
    const eventCard = createEventCard(event);
    eventList.appendChild(eventCard);
});