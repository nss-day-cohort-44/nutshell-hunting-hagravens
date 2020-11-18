import { getTask, useTask } from "./taskProvider.js"
import {taskAsHTML} from "./taskHTMLconverter.js"

const contentTarget = document.querySelector(".task")
export const taskList = () => {
getTask()
.then(() => {
    const taskArray = useTask()
    render(taskArray)
})
}

const render = (allTask) => {
    let taskHTMLRepresentations = ""
    for (const task of allTask){
        taskHTMLRepresentations += taskAsHTML(task)
    }
    contentTarget.innerHTML = `
    <h3>To Do List</h3>
    ${taskHTMLRepresentations}
    `
}