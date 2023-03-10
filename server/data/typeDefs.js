const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID!
    firstName: String
    lastName: String
    email: String
    friends: [Friends]
    phoneNumber: String
    password: String
    interest: [Interest]
    picturePath: String
  }

  type Event {
    _id: ID!
    userId: String
    name: String
    location: String
    date: String
    description: String
    userPicturePath: String
    picturePath: String
  }

  type Query {
    tech: [Tech]
    matchups(_id: String): [Matchup]
  }

  type Mutation {
    createMatchup(tech1: String!, tech2: String!): Matchup
    createVote(_id: String!, techNum: Int!): Matchup
  }
`;

module.exports = typeDefs;
