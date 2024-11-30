import React from 'react';

function CommentList({ comments }) {
  return (
    <div>
      <h3>Commentaires :</h3>
      {comments.length > 0 ? (
        <ul>
          {comments.map((comment, index) => (
            <li key={index}>
              <strong>{comment.author}:</strong> {comment.content}
            </li>
          ))}
        </ul>
      ) : (
        <p>Aucun commentaire pour le moment.</p>
      )}
    </div>
  );
}

export default CommentList;
