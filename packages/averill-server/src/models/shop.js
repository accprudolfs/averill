const { Schema, model } = require('mongoose')

const PlantsShema = Schema({
  id: {
    type: Number,
    unique: true,
  },
  img: {
    type: String,
  },
  price: {
    type: Number,
    default: 30000,
  },
})
const Plant = model('myNewPlants', PlantsShema)

module.exports = Plant
