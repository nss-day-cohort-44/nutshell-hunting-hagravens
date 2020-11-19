// AUTHOR: TRENT SISSON
// PURPOSE: CREATES THE HTML FOR EACH CARD

export const taskAsHTML = (taskObject) => {
    return `
    <div id="task-${taskObject.id}" class="task">
    <p><b>${taskObject.task}</b></p>
    <p>${taskObject.completeByDate}</p>
    <p>Completed:<input class="completedBox" type ="checkbox"/></p>
    <button id = "deleteTask--${taskObject.id}"><b>DELETE</b></button>
    </div>
    `
}