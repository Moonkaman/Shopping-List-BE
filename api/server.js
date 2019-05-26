const server = require('express')();
const authRouter = require('./auth/authRouter');
const houseRouter = require('./houseRouter');

const configMiddleware = require('./middleware');

configMiddleware(server);

server.use('/api/auth', authRouter);
server.use('/api/houses', houseRouter);

server.get('/', (req, res) => res.send('It\'s working'))

module.exports = server;