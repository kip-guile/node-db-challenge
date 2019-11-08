const db = require('../data/db-config')

module.exports = {
    getProjects,
    getResources
}

function getProjects() {
    return db('project')
}

function getResources() {
    return db('resource')
}