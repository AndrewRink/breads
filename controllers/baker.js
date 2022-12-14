const router = require ('express').Router()
const Baker = require('../models/baker')
const bakerSeedData = require('../models/bakerSeedData')

router.get ('/data/seed', async (req,res) => {
    await Baker.insertMany(bakerSeedData)
    res.redirect('/breads')
})

router.get('/', async (req, res) => {
    const bakers = await Baker.find().populate('breads')
    res.json(bakers)
})
//Get baker by id
router.get('/:id', async(req,res) => {
    const { id } = req.params
    const baker = await Baker.findById(id).populate('breads')

    res.render('bakerShow', {
        baker
    })
})

module.exports = router