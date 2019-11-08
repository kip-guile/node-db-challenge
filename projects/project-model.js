const db = require('../data/db-config')

module.exports = {
    getProjects,
    getResources,
    getTasks,
    getResourceById,
    addResource,
    getProjectById,
    addProject
}

function getProjects() {
    return db('project')
}

function getResourceById(id) {
    return db('resource')
        .where({id})
        .first()
}

function getProjectById(id) {
    return db('project')
        .where({id})
        .first()
}

function getResources() {
    return db('resource')
}

function getTasks(project_id) {
    return db('task as t')
    .join('project as p', 'p.id', 't.project_id')
    .select('t.description', 't.notes', 't.completed', 'p.name as project_name', 'p.description as project_descripton')
    .where('p.id', project_id)
}

function addResource(resource) {
    return db('resource')
    .insert(resource)
    .then(ids => {
        return getResourceById(ids[0])
    })
}

function addProject(project) {
    return db('project')
    .insert(project)
    .then(ids => {
        return getProjectById(ids[0])
    })
}