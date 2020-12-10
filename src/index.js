const { ApolloServer } = require('apollo-server');
const userSchema = require('./user/schema/user.graphql')

const users = [
  {
    name: 'Leo',
    active: true,
  },
  {
    name: 'Jessica',
    active: false,
  }
];

const typeDefs = [userSchema]
const resolvers = {}

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({url}) => (
  console.log(`Server on ${url}`)
))