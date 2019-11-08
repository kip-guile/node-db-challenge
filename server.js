const express = require('express');

const ProjectRouter = require('./recipes/recipe-router.js');

const server = express();

server.use(logger)
server.use(express.json());
server.use('/api/projects', ProjectRouter);

function logger(req, res, next) {
    console.log(`${req.method} to ${req.originalUrl}`)
    next();
  }

module.exports = server;