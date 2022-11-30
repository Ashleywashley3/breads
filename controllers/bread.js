const router = require('express').Router()
const Bread = require('../models/bread')

//get all bread
router.get('/', (req, res) => {
    res.render('index', {
        breads: Bread
    })
})

// query parameter :, this gets a bread by its index
router.get('/:index', (req, res) => {
    const { index } = req.params
    res.send(Bread[index])
})

module.exports = router