// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var user_grpc_user_pb = require('../../user/grpc/user_pb.js');

function serialize_SignupRequest(arg) {
  if (!(arg instanceof user_grpc_user_pb.SignupRequest)) {
    throw new Error('Expected argument of type SignupRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_SignupRequest(buffer_arg) {
  return user_grpc_user_pb.SignupRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_SignupResponse(arg) {
  if (!(arg instanceof user_grpc_user_pb.SignupResponse)) {
    throw new Error('Expected argument of type SignupResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_SignupResponse(buffer_arg) {
  return user_grpc_user_pb.SignupResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var UserService = exports.UserService = {
  signup: {
    path: '/User/signup',
    requestStream: false,
    responseStream: false,
    requestType: user_grpc_user_pb.SignupRequest,
    responseType: user_grpc_user_pb.SignupResponse,
    requestSerialize: serialize_SignupRequest,
    requestDeserialize: deserialize_SignupRequest,
    responseSerialize: serialize_SignupResponse,
    responseDeserialize: deserialize_SignupResponse,
  },
};

exports.UserClient = grpc.makeGenericClientConstructor(UserService);
