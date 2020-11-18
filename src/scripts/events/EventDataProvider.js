// AUTHOR: JARON

// PURPOSE: THIS LOADS AND EXPORTS THE DATABASE STATE INTO THE APPLICATION STATE WITH A fetch() CALL.

let events = []

export const useEvents = () => events.slice()

export const getEvents = () => {
    return fetch('http://localhost:8088/events')
        .then(response => response.json())
        .then(
            parsedEvents => {
                // UNCOMMENT HERE TO CONSOLE.LOG
                // console.table(parsedEvents)
                events = parsedEvents
            }
        )
}

// NOTE: reference NoteProvider in previous NSS Glassdale project