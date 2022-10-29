import { isDev } from '../../globals';

/**
 * Keywords for retrieve articles from gnews api
 * @type {string}
 */
const query = `"black engineer" OR "black founders" OR "support black business" OR "black ceo" OR "black-owned" OR "hbcu" OR "spend black" OR "shop black" OR "black startup" OR "black entrepreneur"`;
// console.log('query.length:', query.length);

/**
 * Object with query params for gnews GET request.
 * Note: Gnews limits the query to 200 characters.
 * @type {{country: string, lang: string, query: string, sorted: string, token: string}}
 */
const param = {
  country: 'country=us',
  lang: 'lang=en',
  query: `https://gnews.io/api/v4/search?q=${query}`,
  sorted: 'sortBy=publishedAt',
  token: 'token=593f009a6b270061a6eab180bb3e5f3a',
};

/**
 * Determines endpoint based on node env
 * @type {string}
 */
export const articlesQuery = isDev
  ? 'http://localhost:8000/articles'
  : `${param.query}&${param.token}&${param.lang}&${param.country}&${param.sorted}`;
