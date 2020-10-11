import React from 'react';
import './App.css';

import ArticlesFeed from './components/articles-feed/articles-feed'

const App = () => {
  return (
    <div>
      <h1> Black Tech Daily </h1>
      <h2> Your Daily Source for News on Blacks in IT </h2>
      <ArticlesFeed />
    </div>
  );
}

export default App;
