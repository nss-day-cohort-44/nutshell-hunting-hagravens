import {taskList} from './Task/taskList.js'
taskList()









const contentTarget = document.querySelector(".dashboard");
const eventHub = document.querySelector(".container")

eventHub.addEventListener("userAuthenticated", () => {
    Nutshell()
})

export const Nutshell = () => {
  // Render all your UI components here

}
