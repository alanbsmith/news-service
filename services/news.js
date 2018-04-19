const fetch = require('node-fetch');

const urlRoot = 'https://newsapi.org/v2';
const apiKey = process.env.NEWS_API_KEY;

function toUrlParams(data) {
  return Object.keys(data)
    .map(key => `${key}=${data[key]}`)
    .join('&');
}

async function fetchNews(type, data) {
  const params = toUrlParams(data);
  const url = `${urlRoot}/${type}?${params}&apiKey=${apiKey}`;
  const response = await fetch(url);
  const json = await response.json();
  return json.status === 'ok' ? json : null;
}

module.exports = fetchNews;
