import React from 'react'

function ArticleItem({article}) {
  return (
    <div>
    <h2>{article.title}</h2>
    <p>{article.content.substring(0, 100)}...</p>
    <p>Date : {article.date}</p>
  </div>
  )
}

export default ArticleItem