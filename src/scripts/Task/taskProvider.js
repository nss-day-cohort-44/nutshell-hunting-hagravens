/*AUTHOR:  Trent
*
* PURPOSE; Contains data about each task, export functions to modules. 
*/

let task = []

export const useTask = () => {
    return task.slice()
}

export const getTask = () => {
    return fetch(`http://localhost:8088/tasks`)
    .then(response => response.json())
    .then(parsedTask => {
        task = parsedTask
        console.table(task)

    })
}