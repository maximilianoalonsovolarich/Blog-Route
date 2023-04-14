import React from 'react';
import { Link } from 'react-router-dom';

function ArticleList({ articles }) {
  return (
    <div className="article-list">
      {articles.map((article) => (
        <div key={article.id}>
          <Link to={`/article/${article.id}`}>
            <img src={article.image} alt="" />
            <h2>{article.title}</h2>
          </Link>
          <p>{article.description}</p>
          <p>{article.date}</p>
          <p>{article.readingTime}</p>
        </div>
      ))}
    </div>
  );
}

export default ArticleList;
