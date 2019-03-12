const { gql, ApolloError } = require('apollo-server')
const createClient = require('../utils/create-grpc-client')
const { SignupRequest } = require('./grpc/user_pb')
const { UserClient } = require('./grpc/user_grpc_pb')

const client = createClient(UserClient, 'localhost', '50051')

const typeDefs = gql`
  type User {
    id: ID!
    email: String!
  }

  extend type Mutation {
    signup (email: String!): User!
  }
`

const resolvers = {
  Mutation: {
    signup: async (parent, args, ctx, info) => {
      const req = new SignupRequest()
      req.setEmail(args.email)

      try {
        const res = await client.signup().sendMessage(req)
        const { user } = res.toObject()

        return user
      } catch (err) {
        throw new ApolloError(err.details, err.details)
      }
    }
  }
}

module.exports = {
  typeDefs,
  resolvers
}
