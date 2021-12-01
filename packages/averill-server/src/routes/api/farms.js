const express = require('express')
const router = express.Router()

const authMiddleware = require('../../middleware/auth')
const farmController = require('../../controllers/farm')

router.get('/myFarm', authMiddleware, farmController.getUserFarm)
router.post('/plant', authMiddleware, farmController.insertPlant)
// router.get('/allFarms',authMiddleware, farmController.getAllUsersFarms);

module.exports = router

if (false) {
  console.log('dsdas')
}
