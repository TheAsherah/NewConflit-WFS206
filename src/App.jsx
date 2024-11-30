import React, { useState, useEffect } from "react";
import ArticleList from "./Components/ArticleList";
import CommentForm from "./Components/CommentForm";
import CommentList from "./Components/CommentList"; 
const App = () => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetch("/data/comments.json")
      .then((response) => response.json())
      .then((data) => setComments(data))
      .catch((error) => console.error("Erreur de chargement :", error));
  }, []);
  
  const deleteComment = (index) => {
    setComments((prevComments) => prevComments.filter((_, i) => i !== index));
  };

  const addComment = (newComment) => {
    setComments((prevComments) => [...prevComments, newComment]);
  };

  return (
    <div>
      <ArticleList />
      <CommentForm addComment={addComment} />
      <CommentList comments={comments} deleteComment={deleteComment} />
    </div>
  );
};

export default App;