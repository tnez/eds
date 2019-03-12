const { ApolloServer } = require('apollo-server')
const schema = require('./schema')

function start() {
  const server = new ApolloServer({ schema })

  server
    .listen()
    .then(({ url }) => console.log(`gateway running at: ${url}`))
}

start()
