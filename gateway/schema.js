const { gql, makeExecutableSchema } = require('apollo-server')
const { mergeDeepLeft } = require('ramda')
const user = require('./user')

const initialTypeDefs = gql`
 type Query {
    _empty: String
  }

  type Mutation {
    _empty: String
  }
`

const initialResolvers = {
  Query: {},
  Mutation: {},
}

module.exports = makeExecutableSchema({
  typeDefs: [
    initialTypeDefs,
    user.typeDefs,
  ],
  resolvers: mergeDeepLeft(
    initialResolvers,
    user.resolvers
  )
})
