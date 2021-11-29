const express = require('express');
const router = express.Router();

const authMiddleware = require('../../middleware/auth');
const  farmController = require('../../controllers/farm');

router.get('/myFarm', authMiddleware, farmController.getUserFarm);
// router.get('/allFarms',authMiddleware, farmController.getAllUsersFarms);

module.exports = router;