const eventContentTarget = document.querySelector(".addEventButton")
const eventHub = document.querySelector(".container")

export const renderNewEventButton = () => {
    eventContentTarget.innerHTML = `
    <button id="add-new-event-button">Add New Event</button>
    `
    // DISPLAYS BUTTON TO DOM
} 