const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const authenticate = require('../auth/restricted-middleware');
const authRouter = require('../auth/auth-rv-router');
const userRouter = require('../users/users-router');

const server = express();

server.use(express.json());
server.use(cors());
server.use(helmet());

server.use('/api/auth', authRouter);
server.use('/api/users', authenticate, userRouter);

server.get('/', (req, res) => {
    res.send("IT's Alive!")
})

module.exports = server;