import { isDev } from '../../globals';

const query = `"black engineer" OR "black founders" OR "buy black" OR "black ceo" OR "black-owned" OR "hbcu" OR "spend black" OR "shop black" OR "black startup" OR "black entrepreneur" OR "black excellence"`;

// console.log('query.length:', query.length);

const param = {
  country: 'country=us',
  lang: 'lang=en',
  query: `https://gnews.io/api/v4/search?q=${query}`, // 200 char limit
  sorted: 'sortBy=publishedAt',
  token: 'token=593f009a6b270061a6eab180bb3e5f3a',
};

export const articlesQuery = isDev
  ? 'http://localhost:8000/articles'
  : `${param.query}&${param.token}&${param.lang}&${param.country}&${param.sorted}`;
