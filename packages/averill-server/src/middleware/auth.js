const jwt = require('jsonwebtoken')
const dotenv = require('dotenv')
dotenv.config()

const User = require('../models/user')
const { SECRET_KEY } = process.env

const auth = async (req, res, next) => {
  const { authorization } = req.headers
  const [bearer, token] = authorization.split(' ')
  if (bearer !== 'Bearer') {
    res.status(401).json({
      status: 'error',
      code: 401,
      message: 'not authorize',
    })
    return
  }
  try {
    const { id } = jwt.verify(token, SECRET_KEY)
    const user = await User.findById(id)
    req.user = user
    next()
  } catch (error) {
    res.status(401).json({
      status: 'error',
      code: 401,
      message: 'not authorize',
    })
  }
}

module.exports = auth
