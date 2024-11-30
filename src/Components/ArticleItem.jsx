import React, { useState } from 'react';
import CommentList from './CommentList';

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
  const [errors, setErrors] = useState({}); // État pour les erreurs

  // Gérer les changements dans le formulaire
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
    // Effacer l'erreur dès que l'utilisateur tape
    setErrors((prevErrors) => ({ ...prevErrors, [name]: '' }));
  };

  // Valider les données du formulaire
  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = 'Le nom est obligatoire.';
    }
    if (!formData.comment.trim()) {
      newErrors.comment = 'Le commentaire est obligatoire.';
    }
    return newErrors;
  };

  // Gérer la soumission du formulaire
  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors); // Afficher les erreurs
    } else {
      setComments((prevComments) => [...prevComments, formData]);
      setFormData({ name: '', comment: '' }); // Réinitialiser le formulaire
      setErrors({}); // Réinitialiser les erreurs
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
      <CommentList comments={comments}/>


      {/* Formulaire pour ajouter un commentaire */}
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            name="name"
            placeholder="Votre nom"
            value={formData.name}
            onChange={handleInputChange}
          />
          {errors.name && <p style={{ color: 'red' }}>{errors.name}</p>}
        </div>
        <div>
          <textarea
            name="comment"
            placeholder="Votre commentaire"
            value={formData.comment}
            onChange={handleInputChange}
          ></textarea>
          {errors.comment && <p style={{ color: 'red' }}>{errors.comment}</p>}
        </div>
        <button type="submit">Ajouter un commentaire</button>
      </form>
    </div>
  );
}

export default ArticleItem;
