const express = require('express')
const cors = require('cors')

const app = express()
app.use(cors())
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.get('/test', (req, res) => {
  res.json({ message: `hey, ho, let's go!` })
})
