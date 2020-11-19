//AUTHOR: Shawn
//PURPOSE: provides functionality to populate messages on the DOM


import { getMessage, useMessage } from "./MessageProvider.js"
import { messageAsHTML } from "./Messages.js"

export const MessageList = () => {
    getMessage()
        .then(() => {
           const messages = useMessage()

            console.log("MESSAGES FROM MESSAGE LIST", messages)
            renderMessages()
        })
    
}

const renderMessages = () => {
    const contentTarget = document.querySelector(".chat")
    contentTarget.innerHTML = `
    HELLO`
}