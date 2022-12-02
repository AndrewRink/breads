const router = require('express').Router()
const Bread = require('../models/bread')

//GET: all the bread
router.get('/', (req, res) => {
    res.render('index', {
        breads: Bread
    })
})

//get: create new bread page
router.get('/new', (req,res) => {
    res.render('new')
})

//get bread by its index
router.get('/:index', (req,res) => {
    const { index } = req.params
    res.render('show', {
        bread: Bread[index]
    })
})

//post: create a bread
router.post('/', (req,res) => {
    const { hasGluten,image } = req.body
    if (!image) req.body.image = 'https://alexandracooks.com/wp-content/uploads/2021/01/simplesourdoughhalved.jpg'
    if (hasGluten === 'on') {
        req.body.hasGluten = true
    } else {
        req.body.hasGluten = false
    }
    Bread.push(req.body)
    res.redirect('/breads')
})

module.exports = router