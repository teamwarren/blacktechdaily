import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { apiKey } from '../../env';
import './articles-feed.css';

const url =
  'http://newsapi.org/v2/everything?' +
  'q="black tech" OR "black engineer" OR "black stem" OR "african american ceo" OR "black tech twitter" OR "black engineering" OR "black-owned business"&' +
  'from=2020-09-11&' +
  'sortBy=popularity&' +
  apiKey;

const ArticleFeed = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    axios.get(url).then(res => {
      setArticles(res.data.articles)
    })
  }, []);

  return (
    <ul>
      {articles.map((article, index) => {
        return <li key={index}><a href={article.url} target="_blank" rel="noopener noreferrer">{article.title}</a></li>
      })}
    </ul>
  )
}

export default ArticleFeed;
