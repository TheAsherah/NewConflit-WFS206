import React, { useEffect, useContext } from "react";
import ArticleList from "./Components/ArticleList";
import CommentForm from "./Components/CommentForm";
import CommentList from "./Components/CommentList";
import RealTimeComments from "./Components/RealTimeComments";
import { CommentsContext } from "./context/CommentsContext"; // Importing the context

const App = () => {
  const { comments, setComments } = useContext(CommentsContext); // Using global state

  // Charger les commentaires depuis le fichier JSON
  useEffect(() => {
    fetch("/data/comments.json")
      .then((response) => response.json())
      .then((data) =>
        setComments(data.map((comment) => ({ ...comment, isNew: false })))
      )
      .catch((error) => console.error("Erreur de chargement :", error));
  }, [setComments]);

  // Supprimer un commentaire
  const deleteComment = (index) => {
    setComments((prevComments) => prevComments.filter((_, i) => i !== index));
  };

  // Ajouter un nouveau commentaire
  const addComment = (newComment) => {
    setComments((prevComments) => [
      ...prevComments,
      { ...newComment, isNew: true },
    ]);

    // Réinitialiser le statut `isNew` après 5 secondes
    setTimeout(() => {
      setComments((prevComments) =>
        prevComments.map((comment) =>
          comment.isNew ? { ...comment, isNew: false } : comment
        )
      );
    }, 5000);
  };

  return (
    <div>
      <h1>Blog Interactif</h1>
      <ArticleList />
      <CommentForm addComment={addComment} />
      <RealTimeComments comments={comments} />
      <CommentList comments={comments} deleteComment={deleteComment} />
      <RealTimeComments initialComments={comments} />
      <CommentList
        comments={comments}
        deleteComment={deleteComment}
        markCommentAsOld={markCommentAsOld}
      />
    </div>
  );
};

export default App;
