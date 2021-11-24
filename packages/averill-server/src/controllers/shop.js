const Plant = require('../models/shop')

const getAllPlants = async (req, res, next) => {
  Plant.find(function (error, result) {
    res.json(result)
    return error // for js LINT -  TODO
  })
}

module.exports = {
  getAllPlants,
}
