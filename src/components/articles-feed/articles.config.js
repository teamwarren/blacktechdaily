import moment from 'moment';

const daysAgo = `from=${moment().subtract(29, 'days').calendar()}&`

export const blackTechArticles =
  'https://newsapi.org/v2/everything?' +
  'qinTitle="black tech" OR "blacktech" OR "blacktechtwitter" OR "black tech twitter" OR "blacks in tech" OR "black engineers" OR "black devs" OR "black developers" OR "black stem" OR "black ceo" OR "black cto" OR "african american ceo" OR "black-owned" OR "black engineering" OR "spend black" OR "shop black" OR "mogul millenial" OR "pushblack" OR "black tech pipeline" OR "blacktechpipeline" OR "ObsidianTech" OR "black tech conference" OR "black tech start-up" OR "black tech entrepreneur" OR "black-owned business"&' +
  daysAgo +
  'sortBy=publishedAt&' +
  'language=en&' +
  'apiKey=b5ba104a8a6740fd90b8c8a32126245a';