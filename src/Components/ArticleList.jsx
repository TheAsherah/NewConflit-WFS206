import React, { useEffect, useState } from 'react';
import axios from 'axios';

function ArticleList() {
    const [data, setData] = useState([]); 

    useEffect( () => {
       
          axios
            .get('/data/articles.json')
            .then(response => setData(response.data))
            .catch(error => console.error("Error fetching articles:", error));
    }, []);

    return (
        <div>
            <h1>Article List</h1>
            <ul>
                
                {data.length > 0 ? (
                    data.map((article, index) => (
                        <li key={index}>{article.title}</li>
                    ))
                ) : (
                    <li>Loading...</li> 
                )}
            </ul>
        </div>
    );
}

export default ArticleList;
