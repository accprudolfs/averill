const express = require('express')
const router = express.Router()

router.get('/test', async (req, res) => {
  res.json({ message: `hey, ho, let's go!` })
})

module.exports = { router }
