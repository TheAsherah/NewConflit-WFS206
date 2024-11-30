import React, { useEffect } from 'react';

const CommentList = ({ comments, deleteComment, markCommentAsOld }) => {
  useEffect(() => {
    // Met à jour les commentaires pour qu'ils ne soient plus considérés comme nouveaux après 5 secondes
    const timeoutIds = comments.map((comment, index) => {
      if (comment.isNew) {
        return setTimeout(() => markCommentAsOld(index), 5000);
      }
      return null;
    });

    // Nettoie les timeouts à la désactivation du composant
    return () => timeoutIds.forEach((id) => clearTimeout(id));
  }, [comments, markCommentAsOld]);

  return (
    <div>
      <h3>Commentaires :</h3>
      <p>Nombre total de commentaires : {comments.length}</p> {/* Affiche le nombre total de commentaires */}
      {comments.length > 0 ? (
        <ul>
          {comments.map((comment, index) => (
            <li
              key={index}
              style={{
                backgroundColor: comment.isNew ? '#d1f7c4' : 'transparent', // Met en surbrillance si c'est nouveau
                padding: '8px',
                margin: '5px 0',
                borderRadius: '4px',
                transition: 'background-color 0.5s ease',
              }}
            >
              <strong>{comment.author}:</strong> {comment.content}
              <button
                onClick={() => deleteComment(index)}
                style={{
                  marginLeft: '10px',
                  backgroundColor: 'red',
                  color: 'white',
                  border: 'none',
                  borderRadius: '4px',
                  padding: '5px',
                  cursor: 'pointer',
                }}
              >
                Supprimer
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p>Aucun commentaire pour le moment.</p>
      )}
    </div>
  );
};

export default CommentList;
