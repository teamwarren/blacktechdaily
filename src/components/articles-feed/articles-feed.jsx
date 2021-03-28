import React, { useState, useEffect } from 'react';
import axios from 'axios';
import moment from 'moment';
import { articlesQuery } from './articles.config';
import './articles-feed.css';
import { isDev } from '../../globals';

const ArticleFeed = props => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      axios.get(articlesQuery).then(res => {
        console.log(res.status);
        setArticles(isDev ? res.data : res.data.articles);
      });
    }, 1000);
  }, []);

  const uniqueArticles = Array.from(
    new Set(articles.map(article => article.title))
  ).map(title => {
    return articles.find(article => article.title === title);
  });

  return articles.length > 0
    ? uniqueArticles.map((article, index) => {
        return (
          <p className='article' key={index}>
            <span className={`article-header-${props.mode}`}>
              Published{' '}
              {article.source.name ? `by ${article.source.name}` : null}{' '}
              {moment(article.publishedAt).fromNow()}
            </span>
            <br />
            <a
              className={`article-title-${props.mode}`}
              href={article.url}
              target='_blank'
              rel='noopener noreferrer'
            >
              {article.title}
            </a>
          </p>
        );
      })
    : 'Loading...';
};

export default ArticleFeed;
