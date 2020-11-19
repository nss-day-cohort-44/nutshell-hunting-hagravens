//AUTHOR: Shawn
//PURPOSE OF MODULE: to get messages from json




//event listener used in sendMessage
const eventHub = document.querySelector(".container")



//empty array to hold messages
let message = []


export const getMessage = () => {
    return fetch('http://localhost:8088/messages', {
        method: "GET"
    })
        .then(response => response.json())
        .then(parsedMessages => {
            message = parsedMessages
        })
}

export const useMessage = () => {
    return message.slice()
}

export const sendMessage = (chat) => {
return fetch('http://localhost:8088/messages', {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify(chat) 
})
    .then(getNotes)
    .then(dispatchStateChangeEvent)
}
