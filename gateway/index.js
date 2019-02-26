const { ApolloServer, gql } = require('apollo-server')

const typeDefs = gql`
  type Query {
    healthz: String
  }
`

const resolvers = {
  Query: {
    healthz: () => 'Hello world!'
  }
}

const server = new ApolloServer({ typeDefs, resolvers })

server
  .listen()
  .then(({ url }) =>
    console.log(`gateway up and running at ${url}`)
  )
