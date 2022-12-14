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
  baker: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Baker'
  },
  image: {
    type: String,
    default: 'https://suebeehomemaker.com/wp-content/uploads/2021/10/sliced-french-bread.jpg'
  }
})

breadSchema.methods.getBakedBy = function () {
  return `${this.name} was baked with love by ${this.baker.name} who has been with us since ${this.baker.startDate.getFullYear()}`
}

breadSchema.statics.getBread = function(bakerName) {
  return this.find ({ baker: bakerName })
}

module.exports = mongoose.model('Bread', breadSchema)
