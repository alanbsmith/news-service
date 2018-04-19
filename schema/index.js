const { buildSchema } = require('graphql');

const { category, country, language, sortBy } = require('./enums');

const everythingParams = 'domains: String, language: Language, sortBy: SortBy, sources: [String], q: String';
const sourceParams = 'category: Category, language: Language, country: Country';
const topParams = 'country: Country, category: Category, sources: [String], q: String';

module.exports = buildSchema(`
  type Query {
    getEverything(${everythingParams}): [Article],
    getTop(${topParams}): [Article],
    getSources(${sourceParams}): [Source],
  }

  type Article {
    source: Source,
    author: String,
    title: String,
    description: String,
    url: String,
    urlToImage: String,
    publishedAt: String,
  }

  type Source {
    id: String,
    name: String,
    description: String,
    url: String,
    category: String,
    language: String,
    country: String,
  }

  ${category}
  ${country}
  ${language}
  ${sortBy}
`);
