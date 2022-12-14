const router = require('express').Router()
const Baker = require('../models/baker')
const Bread = require('../models/bread')
const seedData= require('../models/seedData')

//GET: all the bread
router.get('/', async (req, res) => {
    const bread = await Bread.find()
    const bakers = await Baker.find()
    res.render('index', {
        breads: bread,
        bakers
    })
})

router.get('/data/seed', async (req,res) => {
    await Bread.insertMany(seedData)
    res.redirect('/breads')
})

//get: create new bread page
router.get('/new', async (req,res) => {
    const bakers = await Baker.find()
    res.render('new', {
        bakers
    })
})

//GET edit bread page
router.get('/:id/edit', async (req,res) => {
    const { id } = req.params
    const bread = await Bread.findById(id)
    const bakers = await Baker.find()
    res.render('edit', {
        bread,
        bakers
    })
})

//get bread by its index
router.get('/:id', async(req,res) => {
    const { id } = req.params
    const bread = await Bread.findById(id).populate('baker')
    res.render('show', {
        bread
    })
})

//post: create a bread
router.post('/', async (req,res) => {
    const { hasGluten,image } = req.body
    if (!image) req.body.image = undefined
    if (hasGluten === 'on') {
        req.body.hasGluten = true
    } else {
        req.body.hasGluten = false
    }
    await Bread.create(req.body)
    res.redirect('/breads')
})

router.put('/:id', async (req,res) =>{
    const { id } = req.params
    const { image, hasGluten } = req.body
    if (!image) req.body.image = 'https://alexandracooks.com/wp-content/uploads/2021/01/simplesourdoughhalved.jpg'
    if (hasGluten === 'on') {
        req.body.hasGluten = true
    } else {
        req.body.hasGluten = false
    }

    await Bread.findByIdAndUpdate(id, req.body)
    res.redirect(`/breads/${id}`)
})

//DELETE a bread
router.delete('/:id',async (req,res) => {
    const { id } = req.params
    await Bread.findByIdAndDelete(id)
    res.status(303).redirect('/breads')
})

module.exports = router