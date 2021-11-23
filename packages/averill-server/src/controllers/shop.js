const Plant = require('../models/shop')

const getAllPlants = async (req, res, next) => {
  try {
    Plant.find(function (result) {
      res.json(result)
      return result // For js ling TODO
    })
  } catch (error) {}
}

module.exports = {
  getAllPlants,
}
