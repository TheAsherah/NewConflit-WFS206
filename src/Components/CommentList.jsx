import React, { useContext, useEffect } from "react";
import { CommentsContext } from "../context/CommentsContext"; // Importing the context
import './comment.css'

const CommentList = ({ deleteComment, markCommentAsOld, addNewComment }) => {
  const { comments } = useContext(CommentsContext); // Using global state

  // Simulate fetching new comments from a fictitious API
  useEffect(() => {
    const simulateApiFetch = setInterval(() => {
      const newComment = {
        author: `User${Math.floor(Math.random() * 100)}`,
        content: `This is a new comment added at ${new Date().toLocaleTimeString()}`,
        isNew: true,
      };

      addNewComment(newComment);
    }, 10000); 
    return () => clearInterval(simulateApiFetch);
  }, [addNewComment]);

  useEffect(() => {
    // Mark comments as old after 5 seconds
    const timeoutIds = comments.map((comment, index) => {
      if (comment.isNew) {
        return setTimeout(() => markCommentAsOld(index), 5000);
      }
      return null;
    });

    return () => timeoutIds.forEach((id) => clearTimeout(id));
  }, [comments, markCommentAsOld]);

  return (
    <div className='container'>
      <h3 className='headreComment'>Commentaires :</h3>
      <p>Nombre total de commentaires : {comments.length}</p> {/* Affiche le nombre total de commentaires */}
      {comments.length > 0 ? (
        <ul>
          {comments.map((comment, index) => (
            <li
              key={index}
              style={{
                backgroundColor: comment.isNew ? "#d1f7c4" : "transparent", 
                padding: "8px",
                margin: "5px 0",
                borderRadius: "4px",
                transition: "background-color 0.5s ease",
              }}
            >
              <strong>{comment.author}:</strong> {comment.content}
              <button className='btn' onClick={() => deleteComment(index)}>Supprimer</button>
              <button
                onClick={() => deleteComment(index)}
                style={{
                  marginLeft: "10px",
                  backgroundColor: "red",
                  color: "white",
                  border: "none",
                  borderRadius: "4px",
                  padding: "5px",
                  cursor: "pointer",
                }}
              >
                Supprimer
              </button>
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
