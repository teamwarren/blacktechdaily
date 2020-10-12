import React, { useState, useEffect } from 'react';
import Footer from './components/footer/footer';
import './App.css';

import ArticlesFeed from './components/articles-feed/articles-feed'

const App = () => {
  const [mode, setMode] = useState(localStorage.getItem('cachedMode') || '');
  const modeText = mode === 'light' ? 'dark' : 'light';

  useEffect(() => {
    localStorage.setItem('cachedMode', mode)
  }, [mode])

  const toggleMode = () => mode === 'light' ? setMode('dark') : setMode('light');

  return (
    <div className={`container ${mode}-container`}>
      <div className={`content ${mode}-content`}>
        <h1 className="header"> Black Tech Daily </h1>
        <button onClick={toggleMode}>{modeText} mode</button>
        <h2 className="subheader"> Your Daily Source for News on Blacks in IT </h2>
        <ArticlesFeed />
      </div>
      <Footer />
    </div>
  );
}

export default App;
