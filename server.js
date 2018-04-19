require('dotenv').load();
const path = require('path');
const express = require('express');
const server = express();
const graphqlHTTP = require('express-graphql');

const PORT = process.env.PORT || 8080;

// const db = require('./database');
const schema = require('./schema');
const resolvers = require('./schema/resolvers');

server.use(express.static(path.join(__dirname, 'dist')));

server.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: resolvers,
  graphiql: (process.env.NODE_ENV !== 'production'),
  // context: { db: db },
}));

server.listen(PORT, error => (
  error
    ? console.error(error)
    : console.info(`Listening on port ${PORT}. Visit http://localhost:${PORT}/ in your browser.`)
));
