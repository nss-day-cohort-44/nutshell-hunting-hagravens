const contentTarget = document.querySelector(".buttons__events")
const eventHub = document.querySelector(".container")

export const renderNewEventButton = () => {
    contentTarget.innerHTML = `
    <button id="add-new-event-button">Add New Event</button>
    `
}