/*      
*      Author: Ted
*   
*      Purpose: List news articles, export functions to modules.
*/

import { saveArticle, useArticles } from "./NewsProvider.js"

const articleTarget = document.querySelector(".articleForm")
const eventHub = document.querySelector(".container")

export const articleForm = () => {
       render()
}

const render = () => {
    articleTarget.innerHTML = `
    <h2>New Article</h2> 
    <div class="news__items">
                <fieldset>
                    <label>Title</label>
                    <input id="article--Title" type="text"/>
                </fieldset>
                <fieldset>
                    <label>URL</label>
                    <input id="article--URL" type="text"/>
                </fieldset>
                <fieldset>
                    <label>Date</label>
                    <input id="article--Date" type="date"/>
                </fieldset>
                <fieldset>
                    <label>Synopsis</label>
                    <textarea id="article--Synopsis" rows="3" cols="20"></textarea>
                </fieldset>
                <fieldset>
                    <button id="submitArticle">Submit Article</button>
                </fieldset>
    </div>
    `
}


eventHub.addEventListener("click", clickEvent => {
    if(clickEvent.target.id === "submitArticle"){
        const userId = parseInt(sessionStorage.getItem("activeUser"))
        const title = document.querySelector("#article--Title").value
        const url = document.querySelector("#article--URL").value
        const datePosted = document.querySelector("#article--Date").value
        const synopsis = document.querySelector("#article--Synopsis").value
        

        const newsArticle = {
            userId,
            title,
            url,
            datePosted,
            synopsis
        }
        saveArticle(newsArticle)
    }
})