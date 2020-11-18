// AUTHOR: JARON

// PURPOSE: THIS DISPLAYS THE BUTTON TO THE DOM 

const eventContentTarget = document.querySelector(".addEventButton")
const eventHub = document.querySelector(".container")

export const renderNewEventButton = () => {
    eventContentTarget.innerHTML = `
    <button id="add-new-event-button">Add New Event</button>
    `
    // DISPLAYS STATIC BUTTON TO DOM
} 