const db = require('../data/db-config')

module.exports = {
    getProjects,
    getResources,
    getTasks,
    getResourceById,
    addResource
}

function getProjects() {
    return db('project')
}

function getResourceById(id) {
    return db('resource')
        .where({id})
        .first()
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

function addResource(resource) {
    return db('resource')
    .insert(resource)
    .then(ids => {
        return getResourceById(ids[0])
    })
}