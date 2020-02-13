// const { gql } = require('apollo-server-express');

// These are just placeholders. Need to be updated with our actual database models.
const typeDefs = `
  type Query {
    greet: String!
    users: [User]
  }

  type User {
    id: String
    email: String
    password: String
    companyId: String
  }
`;

module.exports = typeDefs;
