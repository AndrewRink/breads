const express = require('express')
require('dotenv').config()

const breadRoutes = require('./controllers/bread')
//intialize
const app = express()

// MIDDLEWARE
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

//routes
app.use('/breads', breadRoutes)

app.get('/', (req, res) => {
    res.send('<h1>Hello!</h1>')
})

const PORT = process.env.PORT || 8080

app.listen(PORT, console.log(`listening on port ${PORT}`))