import React from 'react';
import './comment.css'


const CommentList = ({ comments, deleteComment }) => {
  return (
    <div className='container'>
      <h3 className='headreComment'>Commentaires :</h3>
      <p>Nombre total de commentaires : {comments.length}</p> {/* Affiche le nombre total de commentaires */}
      {comments.length > 0 ? (
        <ul>
          {comments.map((comment, index) => (
            <li key={index}>
              <strong>{comment.author}:</strong> {comment.content}
              <button className='btn' onClick={() => deleteComment(index)}>Supprimer</button>
            </li>
          ))}
        </ul>
      ) : (
        <p className='paragraph'>Aucun commentaire pour le moment.</p>
      )}
    </div>
  );
};

export default CommentList;
