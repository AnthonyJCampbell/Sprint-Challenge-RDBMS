const express = require('express')
const server = express();

// Import routes
const projectRoutes = require('./projects/projectsRoutes');
const actionsRoutes = require('./actions/actionsRoutes');

server.use(express.json())

server.use('/api/projects', projectRoutes);
server.use('/api/actions', actionsRoutes);

module.exports = server