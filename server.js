const express = require('express');
const server = express();
const cors = require('cors');
const helmet = require('helmet');
require('dotenv').config();

const usersRouter = require('./users/users-router');
const experiencesRouter = require('./experiences/experiences-router');

server.use(express.json());
server.use(helmet());
server.use(cors());

server.use('/api/users', usersRouter);
server.use('/api/experiences', experiencesRouter);

server.get('/', (req, res) => {
  res.send(`
    <h2>Hello World</h2>
  `);
});

module.exports = server;