const express = require('express'); // importing a CommonJS module
const helmet = require('helmet');
const cors = require('cors');
const logger = require('./middleware/logger');
const oktaClient = require('../lib/oktaClient');
const tempDb = require('../temp-db');

const app = express();

// global middleware
app.use(express.json());
app.use(helmet());
app.use(logger);
app.use(cors());

// enpoints need to be moved into routes
app.get('/', (req, res, next) => {
  res.status(200).json(tempDb);
});

app.post('/register', (req, res, next) => {
  if (!req.body) {
    return res.status(400);
  }

  const newUser = {
    profile: {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      login: req.body.email,
    },
    credentials: {
      password: {
        value: req.body.password,
      },
    },
  };

  oktaClient
    .createUser(newUser)
    .then(user => {
      // tempDb is just an object. 
      // TODO: Create actual db/migrations and decide what parts
      // of the okta User model we want to store in our database.
      // (probably everything other than User._links)
      tempDb.users[user.id] = user;
      res.status(201).json({ user });
    })
    .catch(err => {
      console.log('ERROR: ', err);
      res.status(400).json({ err });
    });
});

module.exports = app;
