// AUTHOR: JARON

// PURPOSE: THIS DISPLAYS THE BUTTON TO THE DOM 

const eventContentTarget = document.querySelector(".addEventButton")
const eventHub = document.querySelector(".container")

export const renderNewEventButton = () => {
    // DISPLAYS STATIC BUTTON TO DOM
    eventContentTarget.innerHTML = `
    <button id="add-new-event-button">New Event</button>
    `
} 

eventHub.addEventListener("click", (clickEvent) => {
    // DISPATCHES CLICK EVENT / VISIBLE IN CONSOLE
    if (clickEvent.target.id === "add-new-event-button") {
        const customEvent = new CustomEvent("newEventButtonClicked")
        eventHub.dispatchEvent(customEvent)
        console.log("Add event button is listening")
    }
})