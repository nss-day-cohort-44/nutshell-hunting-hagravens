const contentTarget = document.querySelector(".button__addTask")
const eventHub = document.querySelector(".container")

export const renderAddTaskButton = () => {
    contentTarget.innerHTML = `
    <button id = "addTaskButton">ADD NEW TASK</button>
    `
}


eventHub.addEventListener("click", (clickEvent) =>{
    if(clickEvent.target.id === "addTaskButton"){
        const addTaskButtonClicked = new CustomEvent("addTaskClicked")
        eventHub.dispatchEvent(addTaskButtonClicked)
    }
})
eventHub.addEventListener("addTaskClicked",() =>{
    taskForm()
})


import {useTask} from "./taskProvider.js"

const taskFormTarget = document.querySelector(".taskForm")

const taskForm = () =>{
    const taskArray = useTask()
    render(taskArray)
}

const render = () =>{
    taskFormTarget.innerHTML =`
    <div class="task">
        <p>TASK</p><input id="task__name" type = "text"/>
        <p>COMPLETE BY DATE</p><input id="task__date" type = "date"/>
        <button id = "saveTask"><b>SAVE TASK</b></button>
    </div>
    
    `
}