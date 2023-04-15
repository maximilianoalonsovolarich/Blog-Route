import React from "react";
import { useParams } from "react-router-dom";
import data from "../data/data";

function ArticleDetailsComponent() {
  const { id } = useParams();
  const article = data.find((article) => article.id === parseInt(id));

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-8">
          <h1>{article.title}</h1>
          <img
            src={article.image}
            className="img-fluid small-image"
            alt={article.title}
          />
          <p className="mt-4">{article.description}</p>
        </div>
        <div className="col-md-4 mt-4 mt-md-0">
          <div className="card bg-primary">
            <div className="card-body">
              <p className="card-text text-white">{article.date}</p>
              <p className="card-text text-white">{article.readingTime}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ArticleDetailsComponent;
