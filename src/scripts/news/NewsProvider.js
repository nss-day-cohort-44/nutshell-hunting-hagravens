/*      
 *      Author: Ted
 *   
 *      Purpose: Raw data about each news entry, export functions to modules.
 */
const eventHub = document.querySelector(".container")

const dispatchStateChangeEvent = () => {
    const entryStateChangedEvent = new CustomEvent("articleStateChanged")
    eventHub.dispatchEvent(entryStateChangedEvent)
}


let articlesDB = []

/*
    Make a copy, get the data.
*/

export const useArticles = () => {
    return articlesDB.slice()
}

export const getArticles = () => {
    return fetch("http://localhost:8088/articles") // Fetch from the API
        .then(response => response.json())
        .then(articles => {
            articlesDB = articles
            console.table(articlesDB)
        })
}

export const saveArticle = (article) => {
    return fetch("http://localhost:8088/articles", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(article)
    })
    .then(getArticles)
    .then(dispatchStateChangeEvent)
}

export const editArticle = article => {
    return fetch("http://localhost:8088/articles", {
        method: "PUT",
        headers: {
            "Content-type": "application/json"
    },
    body: JSON.stringify(article)

})
        .then(() => {
            const updatedArticles = useArticles()
        })}

export const deleteArticle = articleId => {
    return fetch(`http://localhost:8088/articles/${articleId}`, {
        method: "DELETE"
    })
        .then(getArticles)
}