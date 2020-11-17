// AUTHOR: JARON

// PURPOSE: THIS LOADS AND EXPORTS THE DATABASE STATE INTO THE APPLICATION STATE WITH A fetch() CALL.

let events = []

export const useEvents = () => events.slice()

export const getEvents = () => {
    return fetch()
        .then(response => response.json())
        .then(
            parsedEvents => {
                console.log(parsedEvents)
                events = parsedEvents
            }
        )
}

// NOTE: reference NoteProvider in previous NSS Glassdale project