/*      
 *      Author: Ted
 *   
 *      Purpose: List news articles, export functions to modules.
 */

import { newsArticle } from "./NewsArticle.js"
import { getArticles, useArticles, deleteArticle } from "./NewsProvider.js"

const newsElement = document.querySelector(".articleCard")
const eventHub = document.querySelector(".container")

eventHub.addEventListener("articleStateChanged", () => articlesList())

export const articlesList = () => {
    getArticles()
        .then(() => {
            const articlesArray = useArticles()
            const userArticles = parseInt(sessionStorage.getItem("activeUser"))
            console.log(userArticles)
            const filteredArticles = articlesArray.filter(article => 
                article.userId === userArticles
            )
            console.log(filteredArticles)
            render(filteredArticles)
        }
        )
}

const render = (articles) => {
    let articlesHTML = ""
    for (const article of articles) {
        articlesHTML += `
        <h2>Past Article</h2>
            ${newsArticle(article)}
        `
    }
    newsElement.innerHTML = articlesHTML
}

eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id.startsWith("deleteArticle--")) {
        const [prefix, articleId] = clickEvent.target.id.split("--")

        /*
            Invoke the function that performs the delete operation.
            Once the operation is complete you should THEN invoke
            useNotes() and render the note list again.
        */
       deleteArticle(articleId).then(
           () => {
               const updatedArticles = useArticles()
               render(updatedArticles)
           }
       )
    }
})