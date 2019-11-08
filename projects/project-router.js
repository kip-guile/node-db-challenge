const express = require('express')

const Projects = require('./project-model.js')

const router = express.Router()

router.get('/', (req, res) => {
    Projects.getProjects()
        .then(projects => {
            res.json(projects)
        })
        .catch(err => {
            res.status(500).json({message: 'Failed to get projects'})
        })
})

router.get('/:id/tasks', (req, res) => {
    const {id} = req.params

    Projects.getTasks(id)
        .then(tasks => {
            if (tasks.length) {
                res.json(tasks)
            } else {
                res.status(404)
            }
        })
        .catch(err => {
            res.status(500).json({ message: 'Failed to get tasks' })
        })
})

module.exports = router;