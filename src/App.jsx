import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import ArticleList from './components/ArticleList';
import { ButtonList } from './components/ButtonList';
import ArticleDetailsComponent from './components/ArticleDetails';
import data from './data/data';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from './components/Navbar';
import BlogPage from './components/Blog';


function ArticleListView() {
  const allCategoriesArray = ['All', 'Technology', 'Travel', 'Lifestyle'];

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
      <div className="container my-5">
        <div className="row align-items-center">
          <div className="col-md-6">
            <h1>
              Filter <span>Blog</span> Basics
            </h1>
          </div>
          <div className="col-md-6 text-center">
            <img
              src="https://blogfilterbasics.netlify.app/static/media/img-portada.8261f3883a73550017d1.png"
              alt="imagen-header"
              className="img-fluid"
            />
          </div>
        </div>
      </div>
      <div className="container mb-5">
        <ButtonList categories={categories} filterCategory={filterCategory} />
      </div>
      <div className="container">
        <ArticleList articles={articles} />
      </div>
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
    <div className="app-container">
      <Routes>
        <Route path="/" element={<ArticleListView />} />
        <Route path="/article/:id" element={<ArticleDetailsView />} />
        <Route path="/blog" element={<BlogPage />} />
        
      </Routes>
    </div>
  );
}

export default App;
