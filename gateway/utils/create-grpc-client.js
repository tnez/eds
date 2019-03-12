const grpc = require('grpc')
const { promisifyAll } = require('grpc-promise')

module.exports = function (service, host, port) {
  const creds = grpc.credentials.createInsecure()
  const client = new service(`${host}:${port}`, creds)

  promisifyAll(client)

  return client
}
