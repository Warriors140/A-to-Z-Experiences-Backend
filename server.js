const express = require('express');
const server = express();

const usersrouter = require('./users/users-router');

server.use(express.json());

server.use('/api/users', usersrouter);

server.get('/', (req, res) => {
  res.send(`
    <h2>Hello World</h2>
		
  `);
});

module.exports = server;