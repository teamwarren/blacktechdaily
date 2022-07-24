import React, { useState, useEffect } from 'react';
import axios from 'axios';
import moment from 'moment';
import ErrorModal from '../error-modal/error-modal';
import { articlesQuery } from './articles.config';
import './articles-feed.css';

const ArticleFeed = props => {
  const [articles, setArticles] = useState([]);
  const [isError, setIsError] = useState(false);

  const getArticles = () => {
    setTimeout(() => {
      axios
        .get(articlesQuery)
        .then(res => {
          if (res.data.articles.length > 0) {
            setArticles(res.data.articles);
          } else {
            setIsError(true);
          }
        })
        .catch(err => {
          console.error(err);
          if (err) {
            setIsError(true);
          }
        });
    }, 1000);
  };

  useEffect(() => {
    getArticles();
  }, []);

  const uniqueArticles = Array.from(
    new Set(articles.map(article => article.title))
  ).map(title => {
    return articles.find(article => article.title === title);
  });

  const onClose = () => {
    setIsError(false);
    getArticles();
  };

  return (
    <>
      {articles.length > 0
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
        : 'Loading...'}
      {isError && <ErrorModal onClose={onClose} />}
    </>
  );
};

export default ArticleFeed;
