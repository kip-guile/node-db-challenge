const db = require('../data/db-config')

module.exports = {
    getProjects,
    getResources,
    getTasks
}

function getProjects() {
    return db('project')
}

function getResources() {
    return db('resource')
}

function getTasks(project_id) {
    return db('task as t')
    .join('project as p', 'p.id', 't.project_id')
    .select('t.description', 't.notes', 't.completed', 'p.name')
    .where('p.id', project_id)
}