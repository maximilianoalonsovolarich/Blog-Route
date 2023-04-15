import React, { useState } from 'react';
import ArticleList from './ArticleList';
import { ButtonList } from './ButtonList';
import data from '../data/data';
import Navbar from './Navbar';

function BlogPage() {
  const allCategoriesArray = [
    'All',
    'Technology',
    'Travel',
    'Lifestyle',
  ];

  const [categories, setCategories] = useState(allCategoriesArray);
  const [articles, setArticles] = useState(data);

  const filterCategory = (category) => {
    if (category === 'All') {
      setArticles(data);
      return;
    }
    const filteredArticles = data.filter(
      (article) => article.category === category
    );
    setArticles(filteredArticles);
  };

  return (
    <>
      <Navbar />
      <div className="container mb-5">
        <ButtonList categories={categories} filterCategory={filterCategory} />
      </div>
      <div className="container">
        <ArticleList articles={articles} />
      </div>
    </>
  );
}

export default BlogPage;
