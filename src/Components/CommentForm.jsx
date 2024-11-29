import React from 'react'

function CommentForm() {
    const [comments, setComments] = useState([]); // Array to store submitted comments
    const [formData, setFormData] = useState({ author: '', content: '' }); // State for form input values
  
    const handleSubmit = (e) => {
      e.preventDefault(); 
  
      if (formData.author && formData.content) {
        setComments([...comments, formData]);

        setFormData({ author: '', content: '' });
      }
    };
  
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value }); // Update form data dynamically
    };
  return (
    <div>
        <form >
            <div >
                <label htmlFor="author">Nom :</label>
                <input
                    type="text"
                    id="author"
                    name="author"
                    placeholder='votre nom'
                   
                />
            </div>
            <div>
                <label htmlFor="content">Commentaire :</label>
                <textarea
                    id="content"
                    name="content"
                    rows="3"
                ></textarea>
            </div>
            <button type="submit">
                Envoyer le commentaire
            </button>

        </form>
        <div>
        <h3>Commentaires :</h3>
        <ul>
          {comments.map((comment, index) => (
            <li key={index}>
              <strong>{comment.author}:</strong> {comment.content}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default CommentForm