import React, { useState } from 'react';

function ArticleItem({ article }) {
  // État pour gérer l'affichage complet ou partiel du contenu
  const [isExpanded, setIsExpanded] = useState(false);

  // Fonction pour gérer le clic sur le bouton
  const toggleContent = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div>
      <h2>{article.title}</h2>
      <p>{isExpanded ? article.content : ${article.content.substring(0, 100)}...}</p> {/* Correct string interpolation */}
      <p>Date : {article.date}</p>
      <button onClick={toggleContent}>
        {isExpanded ? 'Lire moins' : 'Lire la suite'}
      </button>
    </div>
  );
}

export default ArticleItem;