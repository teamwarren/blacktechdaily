import React, { useState, useEffect } from 'react';
import Footer from './components/footer/footer';
import ModeSwitch from './components/mode-switch/mode-switch';
import './App.css';
import CssBaseline from '@mui/material/CssBaseline';

import ArticlesFeed from './components/articles-feed/articles-feed';

const App = () => {
  const [mode, setMode] = useState(localStorage.getItem('cachedMode'));
  if (!(mode === 'light' || mode === 'dark')) {
    setMode('light');
  }

  const modeText = mode === 'light' ? 'dark' : 'light';

  useEffect(() => {
    localStorage.setItem('cachedMode', mode);
  }, [mode]);

  const toggleMode = () =>
    mode === 'light' ? setMode('dark') : setMode('light');

  return (
    <>
      <CssBaseline />
      <div className={`container ${mode}-container`}>
        <div className={`content ${mode}-content`}>
          <div className='header-top-row'>
            <h1 className='header-title'> Black Tech Daily </h1>
            <ModeSwitch toggleMode={toggleMode} modeText={modeText} />
          </div>
          <h2 className='header-subtitle'>
            {' '}
            Your Daily Source for News on Blacks in Tech and Business{' '}
          </h2>
          <ArticlesFeed mode={mode} />
        </div>
        <Footer mode={mode} />
      </div>
    </>
  );
};

export default App;
