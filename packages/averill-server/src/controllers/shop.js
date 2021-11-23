const Plant = require('../models/shop')

const getAllPlants = async (req, res, next) => {
  try {
    Plant.find(function (result) {
      return res.json(result)
    })
  } catch (error) {}
}

module.exports = {
  getAllPlants,
}
