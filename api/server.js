const express = require('express'); // importing a CommonJS module
const helmet = require('helmet');
const cors = require('cors');
const session = require('express-session');
const { ApolloServer, makeExecutableSchema } = require('apollo-server-express');
const logger = require('./middleware/logger');
const typeDefs = require('./schema/schema');
const resolvers = require('./resolvers/resolvers');

const schema = makeExecutableSchema({ typeDefs, resolvers });

// const sessionConfig = {
//   name: 'Leedle', //default is server ID.. changing it protects hackers from knowing what library you are using
//   secret: 'Leedle Lee', //encrypt and decrtypt cookie
//   cookie: {
//       maxAge: 1000 * 60 * 10,// max time in seconds * 60 = one minute * 10 = ten minutes
//       secure: true, /// false only during development, send cookie only over https
//       httpOnly: true, //always true...only http can read.. not JS
//   },
//   resave: false, //if no changes, don't save
//   saveUnitialized: false,// GDPR laws forbid-- must check with user to run cookies, FALSE in production
//   store: new KnexSessionStore({ //must use new
//       knex: require('../data/dbConfig.js'),// what file to connect to
//       tablename: 'sessions', //creates a table of sessions
//       sidfieldname: 'sid',
//       createtable: true,
//       clearInterval: 1000 * 60 * 60
//     }),
// }

const app = express();

//global middleware
app.use(express.json());
app.use(helmet());
app.use(logger);
app.use(cors());

// app.use(session(sessionConfig))
// const KnexSessionStore = require('connect-session-knex')(session)

const server = new ApolloServer({ schema });

server.applyMiddleware({ app, path: '/graphql' });

app.get('/', (req, res) => {
  res.status(200).json({ message: 'server is working' });
});

module.exports = app;
