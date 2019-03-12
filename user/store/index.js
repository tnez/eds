const { dispatch, start, stop, spawn } = require('nact')
const TYPE = require('./message-types')
const command = require('../commands')
// const query = require('../queries')

modules.exports = spawn(
  system,
  (state = { users:{} }, msg, ctx) => {
    switch(msg.type) {
    case TYPE.SIGNED_UP:


    }
  },
  'user'
)

