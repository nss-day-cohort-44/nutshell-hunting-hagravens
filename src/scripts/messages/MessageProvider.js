//AUTHOR: Shawn
//PURPOSE OF MODULE: to get messages from json





const eventHub = document.querySelector(".container")

let message = []

export const getMessage = () => {
    return fetch('http://localhost:8088/notes', {
        method: "GET"
    })
        .then(response => response.json())
        .then(parsedMessages => {
            notes = parsedNotes
        })
}

export const useMessage = () => {
    return message.slice()
}

export const sendMessage = (chat) => {

}
