//AUTHOR: Shawn
//PURPOSE OF MODULE: html representation of the messages input.


export const messageAsHTML = (chatObject) => {
    return `
    <div class="chat__card">
        <h5>${chatObject.id}</h5>
        <p>${chatObject.message}</p>
        
    </div>
    `
    }