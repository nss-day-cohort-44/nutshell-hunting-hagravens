//AUTHOR: Shawn
//PURPOSE: provides functionality to populate messages on the DOM

const contentTarget = document.querySelector(".chat")

import { getMessage, useMessage } from "./MessageProvider.js"
import { messageAsHTML } from "./Messages.js"

export const MessageList = () => {
    getMessage()
        .then(() => {
           const messages = useMessage()

            console.log("MESSAGES FROM MESSAGE LIST", messages)
            renderMessages(messages)
        })
    
}

const renderMessages = (messages) => {
    let messageHTMLRepresentations = ""
    messages.forEach((newMessage) => {
        messageHTMLRepresentations += messageAsHTML(newMessage)
    })
    contentTarget.innerHTML = `

    <div>${messageHTMLRepresentations}</div>`
}