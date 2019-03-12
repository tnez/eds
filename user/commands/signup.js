const uuid = require('uuid')
const { SignupResponse, UserEntity } = require('../grpc/user_pb')
const { getUser } = require('../queries')

module.exports = async function (ctx) {
  const email = ctx.request.req.getEmail()

  if (await getUser(email)) {
    throw new Error('USER_ALREADY_EXISTS')
  }

  const user = new UserEntity()
  user.setId(uuid())
  user.setEmail(email)

  const response = new SignupResponse()
  response.setUser(user)

  ctx.response.res = response
}
