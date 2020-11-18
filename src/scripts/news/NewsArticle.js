/*
 * Author: Ted 
 * Purpose: To render a single article as a
 *            HTML representation of the data
 */

export const newsArticle = (articleObj) => {
    return `
    <div id="article-${articleObj.id}" class="news__card">
    <p class="news__title">Title: ${articleObj.title}</p>
    <p class="news__url">URL: ${articleObj.url}</p>
    <p class="news__date">Date Posted: ${new Date(articleObj.datePosted).toLocaleDateString('en-US')}</p>
    <p class="news__synopsis">Synopsis: ${articleObj.synopsis}</p>
    <input type="hidden" name="articleId" id="articleId">
    <button class="news__delete" id="deleteArticle--${articleObj.id}">Delete Article</button>
    </div>
    `
}