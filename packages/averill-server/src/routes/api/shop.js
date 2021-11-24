const express = require('express')
const router = express.Router()
const shopController = require('../../controllers/shop')

// GET All Plants
router.post('/getPlants', shopController.getAllPlants)

module.exports = router
