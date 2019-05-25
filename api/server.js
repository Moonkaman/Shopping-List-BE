const server = require('express')();
const authRouter = require('./auth/authRouter');

const configMiddleware = require('./middleware');

configMiddleware(server);

server.use('/api/auth', authRouter);

server.get('/', (req, res) => res.send('It\'s working'))

module.exports = server;