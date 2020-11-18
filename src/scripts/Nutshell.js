//import {useTask} from "./Task/taskProvider.js"
import {taskList} from "./Task/taskList.js"




taskList()



//useTask




const contentTarget = document.querySelector(".dashboard");
const eventHub = document.querySelector(".container")

eventHub.addEventListener("userAuthenticated", () => {
    Nutshell()
})

export const Nutshell = () => {
  // Render all your UI components here
  contentTarget.innerHTML = `
<div class="articles-tasks">
    <div class="articles"></div>
    <div class="tasks"></div>
</div>
<div class="chat">
type something here
</div>
<div class="friends-events">
    <div class="friends"></div>
    <div class="events"></div>
</div> `
};
