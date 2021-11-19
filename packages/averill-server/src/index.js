const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')
dotenv.config()
const { DB_HOST } = process.env
const mongoose = require('mongoose')
// const { clearConfigCache } = require('prettier')

mongoose.connect(DB_HOST, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

const app = express()
app.use(cors())
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.get('/test', (req, res) => {
  res.json({ message: `hey, ho, let's go!` })
})

app.listen(3000)
