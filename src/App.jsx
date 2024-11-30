import React from 'react'
import ArticleList from './Components/ArticleList'
import CommentForm from './Components/CommentForm'
import CommentList from './Components/CommentList'

function App() {
  const [comments, setComments] = useState([]);

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
  )
}

export default App