const express = require('express')

const Resource = require('./project-model.js')

const router = express.Router()

router.get('/', (req, res) => {
    Resource.getResources()
        .then(resources => {
            res.json(resources)
        })
        .catch(err => {
            res.status(500).json({message: 'Failed to get resources'})
        })
})

router.post('/', (req, res) => {
    const resource = req.body

    Resource.addResource(resource)
    .then(resource => {
        res.status(201).json(resource)
    })
    .catch (err => {
        res.status(500).json({ message: 'Failed to create new scheme' });
      });
})

module.exports = router;