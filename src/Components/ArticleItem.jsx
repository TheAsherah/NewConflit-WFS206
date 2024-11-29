import React, { useState } from 'react';

function ArticleItem({ article, onLike }) {
  // État pour gérer l'affichage complet ou partiel du contenu
  const [isExpanded, setIsExpanded] = useState(false);

  // Fonction pour gérer le clic sur le bouton
  const toggleContent = () => {
    setIsExpanded(!isExpanded);
  };
 
  // États pour capturer les données du formulaire
  const [formData, setFormData] = useState({ name: '', comment: '' });
  const [comments, setComments] = useState([]);  

  // Gérer les changements dans le formulaire
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  // Gérer la soumission du formulaire
  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.comment) {
      setComments((prevComments) => [...prevComments, formData]);
      setFormData({ name: '', comment: '' }); // Réinitialiser le formulaire
    }
  };

  return (
    <div>
      <h2>{article.title}</h2>
      <p>{article.content.substring(0, 100)}...</p>
      <p>Date : {article.date}</p>
      <button onClick={toggleContent}>
        {isExpanded ? 'Réduire' : 'Lire la suite'}
      </button>

      {/* Affichage des commentaires */}
      <div>
        <h3>Commentaires :</h3>
        {comments.length > 0 ? (
          <ul>
            {comments.map((comment, index) => (
              <li key={index}>
                <strong>{comment.name} :</strong> {comment.comment}
              </li>
            ))}
          </ul>
        ) : (
          <p>Aucun commentaire pour le moment.</p>
        )}
      </div>

      {/* Formulaire pour ajouter un commentaire */}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Votre nom"
          value={formData.name}
          onChange={handleInputChange}
        />
        <textarea
          name="comment"
          placeholder="Votre commentaire"
          value={formData.comment}
          onChange={handleInputChange}
        ></textarea>
        <button type="submit">Ajouter un commentaire</button>
      </form>
    </div>
  );
}

export default ArticleItem;
