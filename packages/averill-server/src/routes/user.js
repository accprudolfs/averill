const crypto = require('crypto')
const express = require('express')
const jwt = require('jsonwebtoken')
const { promisify } = require('util')
const { User } = require('../models/user')
const router = express.Router()
const scrypt = promisify(crypto.scrypt)

const secret = 'NpBVn0e647xtnKJQouh8'

async function verify(req, res, next) {
  const token = req.headers.token

  if (token) {
    try {
      await jwt.verify(token, secret)
      next()
    } catch {
      res.status(401).send({ message: 'Unauthorized access' })
    }
  } else {
    res.status(401).send({ message: 'Unauthorized access' })
  }
}

router.post('/sign-up', async (req, res) => {
  const { body } = req

  if (!(body.username && body.password)) {
    return res.status(400).send({ message: 'Data not formatted properly' })
  }

  const salt = crypto.randomBytes(8).toString('hex')
  const hash = await scrypt(body.password, salt, 64)
  const user = new User(body)
  user.password = `${salt}:${hash.toString('hex')}`
  try {
    const { id, username } = await user.save()
    res.status(200).json({
      id,
      username,
      token: jwt.sign({ id }, secret),
    })
  } catch {
    res.status(409).send({ message: 'User already exist' })
  }
})

router.post('/sign-in', async (req, res) => {
  const { body } = req

  if (!(body.username && body.password)) {
    return res.status(400).send({ message: 'Data not formatted properly' })
  }

  const user = await User.findOne({ username: body.username })

  if (user) {
    const [salt, hash] = user.password.split(':')
    const hashBuffer = Buffer.from(hash, 'hex')
    const deliveredHash = await scrypt(body.password, salt, 64)
    const validPassword = await crypto.timingSafeEqual(
      hashBuffer,
      deliveredHash,
    )
    if (validPassword) {
      res.status(200).json({
        id: user.id,
        username: user.username,
        token: jwt.sign({ id: user.id }, secret),
      })
    } else {
      res.status(400).send({ message: 'Invalid password' })
    }
  } else {
    res.status(401).send({ message: 'User does not exist' })
  }
})

module.exports = { router, verify }
