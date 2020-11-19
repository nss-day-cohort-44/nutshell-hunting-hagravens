// AUTHOR: JARON LANE

// PURPOSE: CREATE THE FORM FOR ADDING A NEW EVENT, AND DISPATCH EVENTS TO THE EVENT PROVIDER
import { addEvent, useEvents } from "./EventDataProvider.js"
import { renderNewEventButton } from "./EventButton.js"

const eventHub = document.querySelector(".container")


eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "newEventButtonClicked") {
        // GRABS INPUT VALUES
        const nameOfEvent = document.querySelector("#createEventForm__eventName").value
        const dateOfEvent = document.querySelector("#createEventForm__eventDat").value
        const locationOfEvent = document.querySelector("#createEventForm__eventLocation").value
        
        const newEvent = {
            // MAKE A NEW EVENT OBJECT
            nameOfEvent,
            dateOfEvent,
            locationOfEvent,
        }    
        
        addEvent(newEvent)
        // POST OBJECT TO DATABASE / API / JSON FILE
    }
})


export const EventForm = () => {
    const eventTarget = document.querySelector("#createEventForm")
    
    let htmlRep = `<h2>Add New Event</h2>
    <input type="text" id="createEventForm__eventName" placeholder="Event Name"/>
    <input type="date" id="createEventForm__eventDate"/>
    <input type="text" id="createEventForm__eventLocation" placeholder="Event Location"/>
    <button id="createEventForm__addEventButton">Add New Event</button>
    `;
    eventTarget.innerHTML = htmlRep;
}
