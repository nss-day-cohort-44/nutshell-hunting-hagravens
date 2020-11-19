// AUTHOR: JARON LANE

// PURPOSE: CREATE THE FORM FOR ADDING A NEW EVENT, AND DISPATCH EVENTS TO THE EVENT PROVIDER

const eventHub = document.querySelector(".container")


eventHub.addEventListener("newEventButtonClicked", () => {
    
})


export const EventForm = () => {
    const eventTarget = document.querySelector("#createEventForm")

    let [month, date, year] = new 
    
    let htmlRep = `<h2>Add New Event</h2>
    <input type="date" id="createEventForm__eventDate"/>
    <input type="text" id="createEventForm__eventName" placeholder="Event Name"/>
    <input type="text" id="createEventForm__eventLocation" placeholder="Event Location"/>
    <button id="createEventForm__addEventButton">Add New Event</button>
    `;
    eventTarget.innerHTML = htmlRep;
}
