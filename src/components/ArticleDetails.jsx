import React from 'react';
import data from '../data/data';
import { useParams } from 'react-router-dom';

function ArticleDetailsComponent() {
  // Cambiar nombre de la función
  const { id } = useParams();
  const article = data.find((article) => article.id === parseInt(id));

  return (
    <div>
      <h1>{article.title}</h1>
      <img src={article.image} alt={article.title} />
      <p>{article.description}</p>
      <p>{article.date}</p>
      <p>{article.readingTime}</p>
    </div>
  );
}

export default ArticleDetailsComponent;
