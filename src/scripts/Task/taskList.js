import { getTask, useTask } from "./taskProvider.js"

export const taskList = () => {
getTask()
.then(() => {
    const taskArray = useTask()
    render(taskArray)
})
}

const render = () => {
    letTaskHTMLRepresentations = ""
    for (const task of taskArray){
        
    }
}