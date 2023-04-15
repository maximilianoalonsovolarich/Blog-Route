import React from 'react';
import { Link } from 'react-router-dom';

function ArticleList({ articles }) {
  return (
    <div className="row row-cols-1 row-cols-md-3 g-4">
      {articles.map((article) => (
        <div className="col" key={article.id}>
          <div className="card h-100">
            <img src={article.image} className="card-img-top" alt={article.title} />
            <div className="card-body">
              <h5 className="card-title">{article.title}</h5>
              <p className="card-text">{article.description}</p>
              <Link to={`/article/${article.id}`} className="btn btn-primary">
                Read More
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ArticleList;
