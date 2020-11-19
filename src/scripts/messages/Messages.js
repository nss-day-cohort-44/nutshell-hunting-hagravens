export const MessageAsHTML = (chatObject) => {
    return `
    <div class="chat">
        <h5>${chatObject.message.Userid}</h5>
        <p>Note: ${chatObject.message}</p>
        <button id="deleteNote--${chatObject.id}">Delete</button>
    </div>
    `
    }