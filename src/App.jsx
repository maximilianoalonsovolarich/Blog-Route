import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import ArticleList from './components/ArticleList';
import { ButtonList } from './components/ButtonList';
import ArticleDetailsComponent from './components/ArticleDetails';
import data from './data/data';
import './App.css';

function ArticleListView() {
  const allCategoriesArray = [
    'All',
    ...new Set(data.map((article) => article.category)),
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
      <div className="title">
        <h1>
          Filter <span>Blog</span> Basics
        </h1>
        <img
          src="https://blogfilterbasics.netlify.app/static/media/img-portada.8261f3883a73550017d1.png"
          alt="imagen-header"
        />
      </div>
      <ButtonList categories={categories} filterCategory={filterCategory} />

      <ArticleList articles={articles} />
    </>
  );
}

function ArticleDetailsView() {
  return (
    <>
      <ArticleDetailsComponent />
    </>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<ArticleListView />} />
      <Route path="/article/:id" element={<ArticleDetailsView />} />
    </Routes>
  );
}

export default App;
