const express = require('express');

const ProjectRouter = require('./projects/project-router');
const ResourceRouter = require('./projects/resource-router')

const server = express();

server.use(logger)
server.use(express.json());
server.use('/api/projects', ProjectRouter);
server.use('/api/resources', ResourceRouter)

function logger(req, res, next) {
    console.log(`${req.method} to ${req.originalUrl}`)
    next();
  }

module.exports = server;