export const taskAsHTML = (taskObject) => {
    return `
    <div class="task">
    <p><b>${taskObject.task}</b></p>
    <P>${taskObject.completeByDate}</p>
    <p>Completed:<b>YES</b><input class="completedBox" type ="checkbox"/><b>NO</b><input class="completedBox" type ="checkbox"/></p>
    <button id = "deleteTask--${taskObject.id}"><b>DELETE</b></button>
    `
}



