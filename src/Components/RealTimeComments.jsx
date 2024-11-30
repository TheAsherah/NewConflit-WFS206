import React, { useEffect } from "react";

const RealTimeComments = ({ comments }) => {
  useEffect(() => {
    const handleNewComments = () => {
      console.log("Les commentaires ont été mis à jour :", comments);
    };

    // Détecter les changements dans la liste des commentaires
    handleNewComments();

    // L'effet sera réexécuté lorsque la liste des commentaires change
  }, [comments]); // Dépendance sur `comments`

  return (
    <div>
      <h2>Commentaires en Temps Réel</h2>
      {comments.map((comment, index) => (
        <div
          key={comment.id}
          style={{
            padding: "10px",
            margin: "10px 0",
            border: "1px solid #ddd",
            backgroundColor: comment.isNew ? "#e8f5e9" : "#fff",
          }}
        >
          <strong>{comment.name}</strong>
          <p>{comment.comment}</p>
          <small>{comment.date}</small>
        </div>
      ))}
    </div>
  );
};

export default RealTimeComments;
