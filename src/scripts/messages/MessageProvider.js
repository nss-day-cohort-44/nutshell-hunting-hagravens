//AUTHOR: Shawn
//PURPOSE OF MODULE: to get messages from json




//event listener used in sendMessage
const eventHub = document.querySelector(".container")



//empty array to hold messages
let message = []

//getting messages from json
export const getMessage = () => {
    return fetch('http://localhost:8088/messages', {
        method: "GET"
    })
    //making it readable in json 
        .then(response => response.json())
    //
        .then(parsedMessages => {
            message = parsedMessages
        })
}

export const useMessage = () => {
    return message.slice()
}


