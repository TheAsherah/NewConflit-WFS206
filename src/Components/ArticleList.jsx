import React from 'react';
import ArticleItem from './ArticleItem';

const articlesData = [
  {
    "id": 1,
    "title": "Introduction à React",
    "content": "React est une bibliothèque JavaScript pour construire des interfaces utilisateur.",
    "date": "2024-11-01",
    "likes": 5
  },
  {
    "id": 2,
    "title": "Pourquoi utiliser React ?",
    "content": "React permet de créer des applications web performantes et évolutives.",
    "date": "2024-11-02",
    "likes": 8
  }
];

function ArticleList() {
  const [articles, setArticles] = React.useState(articlesData);

  const handleLike = (id) => {
    setArticles(prevArticles =>
      prevArticles.map(article =>
        article.id === id ? { ...article, likes: article.likes + 1 } : article
      )
    );
  };

  return (
    <div>
      <ul>
        {articles.map((article) => (
          <ArticleItem key={article.id} article={article} onLike={handleLike} />
        ))}
      </ul>
    </div>
  );
}

export default ArticleList;

