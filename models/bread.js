const mongoose = require('mongoose')

const breadSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  hasGluten: {
    type: Boolean,
    required: true
  },
  image: {
    type: String,
    default: 'https://suebeehomemaker.com/wp-content/uploads/2021/10/sliced-french-bread.jpg'

  }
})

module.exports = mongoose.model('Bread', breadSchema)
