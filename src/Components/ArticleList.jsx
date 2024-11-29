import React from 'react';
import ArticleItem from './ArticleItem';

const articlesData = [
  {
    id: 1,
    title: "Introduction à React",
    content: "React est une bibliothèque JavaScript pour construire des interfaces utilisateur.",
    date: "2024-11-01",
    likes: 5,
  },
  {
    id: 2,
    title: "Pourquoi utiliser React ?",
    content: "React permet de créer des applications web performantes et évolutives.",
    date: "2024-11-02",
    likes: 8,
  },
];

function ArticleList() {
  const [articles, setArticles] = React.useState(articlesData);
  const [sortOrder, setSortOrder] = React.useState("asc");

  const handleLike = (id) => {
    setArticles((prevArticles) =>
      prevArticles.map((article) =>
        article.id === id ? { ...article, likes: article.likes + 1 } : article
      )
    );
  };

  const handleSortChange = (order) => {
    setSortOrder(order);
    setArticles((prevArticles) =>
      [...prevArticles].sort((a, b) =>
        order === "asc"
          ? new Date(a.date) - new Date(b.date)
          : new Date(b.date) - new Date(a.date)
      )
    );
  };

  return (
    <div>
      <div>
        <label> Trier par date : </label>
        <button onClick={() => handleSortChange("asc")}>Ascendant</button>
        <button onClick={() => handleSortChange("desc")}>Descendant</button>
      </div>
      <ul>
        {articles.map((article) => (
          <ArticleItem key={article.id} article={article} onLike={handleLike} />
        ))}
      </ul>
    </div>
  );
}

export default ArticleList;
