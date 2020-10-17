import React, { useState, useEffect } from 'react';
import axios from 'axios';
import moment from 'moment';
import { blackTechArticles } from './articles.config';
import './articles-feed.css';

const ArticleFeed = props => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    axios.get(blackTechArticles).then(res => {
      setArticles(res.data.articles)
    })
  }, []);

  return articles.length > 0 ? (
    <ul>
      {articles
        .map((article, index) => {
          return (
            <li className="article-li" key={index}>
              <span className={`article-header-${props.mode}`}>
                Pushlished {article.author ? `by ${article.author}` : null} {moment(article.publishedAt).fromNow()}
              </span>
              <br />
              <a className={`article-title-${props.mode}`} href={article.url} target="_blank" rel="noopener noreferrer">
                {article.title}
              </a>
            </li>
          )
        })}
    </ul>
  ) : 'Loading...'
}

export default ArticleFeed;
