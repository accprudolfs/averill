const express = require('express')
const cors = require('cors')
const app = express()
const authRouter = require('./routes/api/users')
const shopRouter = require('./routes/api/shop')

app.use(cors())
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.use('/api/users', authRouter)
app.use('/api/shop', shopRouter)

app.use((req, res) => {
  res.status(404).json({ message: 'Not found' })
})

app.use((err, req, res, next) => {
  const { status = 500, message = 'server error' } = err
  res.status(status).json({ message })
})

module.exports = app
