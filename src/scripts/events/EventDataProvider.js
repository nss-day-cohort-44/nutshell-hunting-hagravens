// AUTHOR: JARON

// PURPOSE: THIS LOADS AND EXPORTS THE DATABASE STATE INTO THE APPLICATION STATE WITH A fetch() CALL.

const eventHub = document.querySelector(".container")

const dispatchEventChange = () => {
    const eventStateWasChanged = new CustomEvent("eventStateChanged")
    eventHub.dispatchEvent(eventStateWasChanged)
}


let events = []

export const useEvents = () => events.slice()

export const getEvents = () => {
    return fetch('http://localhost:8088/events', {
        method: "GET"
    })
        .then(response => response.json())
        .then(
            parsedEvents => {
                console.table(parsedEvents)
                events = parsedEvents
            }
        )
}

export const addEvent = (event) => {
    return fetch('http://localhost:8088/events', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(event)
    }).then(getEvents)
    .then(dispatchEventChange)
}

// NOTE: reference NoteProvider in previous NSS Glassdale project