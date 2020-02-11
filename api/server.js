const express = require('express'); // importing a CommonJS module
const helmet = require('helmet');
const cors = require('cors');
const session = require('express-session');
const { ApolloServer } = require('apollo-server-express');

const app = express();

//global middleware
app.use(express.json());
app.use(helmet());
app.use(logger);
app.use(cors());
// server.use(session(sessionConfig))

// const KnexSessionStore = require('connect-session-knex')(session)

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

const schema = `
  type Query {
    greet: String!,
    users :[User],
  }

  type User {
    id:String,
    email:String,
    password:String,
    companyId:String
  }
`;
const resolvers = {
  Query: {
    greet: () => {
      return 'Hello from GraphQl side';
    },
    users: () => {
      return fetchData();
    },
  },
};

const server = new ApolloServer({ typeDefs: schema, resolvers });

server.applyMiddleware({ app, path: '/graphql' });

// app.get('/', (req, res) => {
//   res.status(200).json({ message: 'server is working' });
// });

async function logger(req, res, next) {
  console.log(
    `${req.method} was requested at ${req.url} on [${new Date().toISOString()}]`
  );
  next();
}

module.exports = app;
