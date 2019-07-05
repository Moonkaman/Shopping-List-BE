const server = require('express')();
const authRouter = require('./auth/authRouter');
const houseRouter = require('./houseRouter');
const listRouter = require('./listRouter');
const itemRouter = require('./itemRouter');
const houseListRouter = require('./houseListRouter');
const houseUsersRouter = require('./houseUsersRouter');
const userRouter = require('./userRouter');

const configMiddleware = require('./middleware');

configMiddleware(server);

server.use('/api/auth', authRouter);
server.use('/api/houses', houseRouter);
server.use('/api/lists', listRouter);
server.use('/api/items', itemRouter);
server.use('/api/houselists', houseListRouter);
server.use('/api/houseusers', houseUsersRouter);
server.use('/api/users', userRouter);

server.get('/', (req, res) => res.send('It\'s working'))

module.exports = server;