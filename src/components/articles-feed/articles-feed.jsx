import React, { useState, useEffect } from 'react';
import axios from 'axios';
import moment from 'moment';
import Link from '@mui/material/Link';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';
import Spinner from '../spinner/spinner';
import ErrorModal from '../error-modal/error-modal';
import { articlesQuery } from './articles.config';

/**
 * Displays a list of news articles.
 * @returns object
 */
const ArticlesFeed = () => {
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
    <List
      sx={{
        width: '100%',
        bgcolor: 'background.paper',
      }}
    >
      {articles.length > 0
        ? uniqueArticles.map((article, index) => {
            return (
              <div key={index}>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar
                      alt={`${article.title} `}
                      src={article.image}
                    ></Avatar>
                  </ListItemAvatar>
                  <Link
                    data-cy='article-link'
                    underline='none'
                    href={article?.source?.url}
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <ListItemText
                      primary={article?.source?.name}
                      secondary={`${moment(article.publishedAt).fromNow()}`}
                    />
                  </Link>
                </ListItem>
                <ListItem data-cy={`article-${index}`}>
                  <Link
                    data-cy='article-link'
                    underline='none'
                    href={article.url}
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <ListItemText
                      primary={article?.title}
                      secondary={article?.description}
                    />
                  </Link>
                </ListItem>
                <Divider />
              </div>
            );
          })
        : !isError && <Spinner />}
      {isError && <ErrorModal onClose={onClose} />}
    </List>
  );
};

export default ArticlesFeed;
