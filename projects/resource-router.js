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

module.exports = router;