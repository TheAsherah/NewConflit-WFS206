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

  return (
    <div>
      <ArticleList />
      <CommentForm />
      { }
      <CommentList comments={comments} />
    </div>
  );
};

export default App;