/* eslint-disable no-console */
'use strict';

require('babel/register')({
  stage: 0
});

const server = require('./server/index')

server.start(function () {
  console.log('Server running at:', server.info.uri)
});

