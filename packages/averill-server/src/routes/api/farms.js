const express = require('express');
const router = express.Router();

const authMiddleware = require('../../middleware/auth');
const  farmController = require('../../controllers/farm');

router.post('/createFarm', authMiddleware, farmController.createNewFarm);
router.get('/allFarms',authMiddleware, farmController.getAllUsersFarms);

module.exports = router;