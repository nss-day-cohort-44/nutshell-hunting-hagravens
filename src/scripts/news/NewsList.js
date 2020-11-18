/*      
 *      Author: Ted
 *   
 *      Purpose: List news articles, export functions to modules.
 */

import { newsArticle } from "./NewsArticle.js"
import { getArticles, useArticles, editArticle, deleteArticle } from "./NewsProvider.js"

const newsElement = document.querySelector(".articleCard")
const eventHub = document.querySelector(".container")

eventHub.addEventListener("articleStateChanged", () => articlesList())

export const articlesList = () => {
    getArticles()
        .then(() => {
            const articlesArray = useArticles()
            render(articlesArray)
})
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
    if (clickEvent.target.id.startsWith("editArticle--")) {
        const [prefix, articleId] = clickEvent.target.id.split("--")

         /*
            Let all other components know that the user chose
            to edit an entry, and attach data to the message
            so that any listeners know which entry should be
            edited.
        */
       const message = new CustomEvent(articleId)
       editArticle(message).then(
           () => {
               const updatedArticle = useArticles()
               render(updatedArticle)
           }
       )
    }
})

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