import { articlesList } from "./news/NewsList.js"
import { newArticleButton } from "./news/NewsNewArticleButton.js";
import "./news/NewsForm.js"

const eventHub = document.querySelector(".container")

eventHub.addEventListener("userAuthenticated", () => {
    Nutshell()
})

export const Nutshell = () => {
    // Render all your UI components here
    articlesList()
    newArticleButton()

};