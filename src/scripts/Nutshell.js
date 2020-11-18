import { articleForm } from "./news/NewsForm.js"
import { articlesList } from "./news/NewsList.js"

const contentTarget = document.querySelector(".dashboard");
const eventHub = document.querySelector(".container")

eventHub.addEventListener("userAuthenticated", () => {
    Nutshell()
})

export const Nutshell = () => {
    // Render all your UI components here
    articlesList()
    articleForm()

};