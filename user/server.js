const Mali = require('mali')
const services = require('./grpc/user_grpc_pb')
const commands = require('./commands')

const HOST = process.env.HOST || '0.0.0.0'
const PORT = process.env.PORT || 50051

function start() {
  const app = new Mali(services, 'UserService')
  app.use(commands)
  app.start(`${HOST}:${PORT}`)
  console.log(`User service running at: ${HOST}:${PORT}`)
}

start()
