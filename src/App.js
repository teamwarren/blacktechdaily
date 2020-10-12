import React from 'react';
import './App.css';

import ArticlesFeed from './components/articles-feed/articles-feed'

const App = () => {
  return (
    <div className="container">
      <h1 className="title"> Black Tech Daily </h1>
      <h2 className="subtitle"> Your Daily Source for News on Blacks in IT </h2>
      <ArticlesFeed/>
    </div>
  );
}

export default App;
