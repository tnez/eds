#!/usr/bin/env sh

NODE_BIN='./node_modules/.bin'
service='user'

$NODE_BIN/protoc-gen-grpc \
  --js_out=import_style=commonjs,binary:. \
  --grpc_out=. \
  ./$service/grpc/user.proto
