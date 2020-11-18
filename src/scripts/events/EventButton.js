const contentTarget = document.querySelector(".addEventButton")
const eventHub = document.querySelector(".container")

export const renderNewEventButton = () => {
    contentTarget.innerHTML = `
    <button id="add-new-event-button">Add New Event</button>
    `
} 