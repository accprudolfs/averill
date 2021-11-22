const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const user = require('./routes/user')
const test = require('./routes/test')

const app = express()

const url = 'mongodb://localhost:27017/averill'
mongoose
  .connect(url)
  .then(() => {
    // eslint-disable-next-line
    console.log(`👍 Connected to mongo at ${url}`)
  })
  .catch(e => {
    // eslint-disable-next-line
    console.log(`🙈 Error ${e}`)
  })

app.use(cors())
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use('/', user.router)
app.use('/', user.verify, test.router)

const port = 3001
app.listen({ port }, () => {
  // eslint-disable-next-line
  console.log(`🚀 Server ready at http://localhost:${port}`)
})
