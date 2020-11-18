// AUTHOR: TRENT SISSON
//PURPOSE: CONTAINS DATA ABOUT EACH TASK, EXPORT FUNCTIONS TO MODULES.

let task = []
//this slices the data making it so no one else can change our data.
export const useTask = () => {
    return task.slice()
}
//this grabs the task data stored in the database.json
export const getTask = () => {
    return fetch(`http://localhost:8088/tasks`)
    .then(response => response.json())
    .then(parsedTask => {
        task = parsedTask
        console.table(task)

    })
}