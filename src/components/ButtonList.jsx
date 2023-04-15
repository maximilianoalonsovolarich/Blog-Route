import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export const ButtonList = ({ categories, filterCategory }) => {
  return (
    <div className="container">
      <div className="row justify-content-center">
        {categories.map((category) => (
          <div className="col-md-auto mb-3" key={category}>
            <button
              type="button"
              className="btn btn-category"
              onClick={() => filterCategory(category)}
            >
              {category}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
