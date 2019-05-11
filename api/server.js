const server = require('express')();

const configMiddleware = require('./middleware');

configMiddleware(server);

server.get('/', (req, res) => res.send('It\'s working'))

module.exports = server;