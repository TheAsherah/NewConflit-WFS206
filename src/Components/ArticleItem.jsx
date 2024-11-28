import React, { useState } from 'react';

function ArticleItem({ article, onLike }) {
  // État pour gérer l'affichage complet ou partiel du contenu
  const [isExpanded, setIsExpanded] = useState(false);

  // Fonction pour gérer le clic sur le bouton
  const toggleContent = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div>
      <h2>{article.title}</h2>
      <p>{article.content.substring(0, 100)}...</p>
      <p>Date : {article.date}</p>
      <button onClick={toggleContent}>
        {isExpanded ? 'Lire moins' : 'Lire la suite'}
      </button>
      <p>{article.likes} J'aime</p>
      <button onClick={() => onLike(article.id)}>J'aime</button>

    </div>
  );
}

export default ArticleItem;