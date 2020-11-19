const articleElement = document.querySelector(".newArticleButton")
const eventHub = document.querySelector(".container")

export const newArticleButton = () => {

articleElement.innerHTML = `
    <button id="new-article-button">New Article</button>
    `
}
    
eventHub.addEventListener("click", (clickEvent) => {
    if (clickEvent.target.id === "new-article-button") {
        const newArticleButtonClicked = new CustomEvent("newArticleButtonClicked") 
        eventHub.dispatchEvent(newArticleButtonClicked)
    }
}
)