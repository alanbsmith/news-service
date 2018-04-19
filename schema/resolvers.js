const fetchNews = require('../services/news');

module.exports = {
  getEverything: async (data) => {
    const response = await fetchNews('everything', data);
    return response ? response.articles : [];
  },

  getSources: async (data) => {
    const response = await fetchNews('sources', data);
    return response ? response.sources : [];
  },

  getTop: async (data) => {
    const response = await fetchNews('top-headlines', data);
    return response ? response.articles : [];
  }
};
