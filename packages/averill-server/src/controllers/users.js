const bcrypt = require('bcryptjs');
const { Conflict, NotFound, BadRequest } = require('http-errors');
const dotenv = require('dotenv');
dotenv.config();
const User  = require('../models/user');
const { userSchema } = require('../schemas/newUser');
const jwt = require('jsonwebtoken');
const { SECRET_KEY } = process.env;

const signup = async (req, res, next) => {

  try {
   
    const { error } = userSchema.validate(req.body);

    if (error) {
  const err = new BadRequest(error.message);
      throw err;
    }
    const { email, password } = req.body;
    const hashPassword = bcrypt.hashSync(password, bcrypt.genSaltSync(10));
    const newUser = {
      email,
      password: hashPassword,
    };
    const user = await User.findOne({ email });
    if (user) {
      throw new Conflict('already exist');

    }
    await User.create(newUser);
    res.status(201).json({
      status: 'success',
      code: 201,
      ResponseBody: {
        user: {
          email: email,
    
        },
      },
    });
  } catch (error) {
    next(error);
  }
};

const login = async (req, res, next) => {
  try {
    const { error } = userSchema.validate(req.body);

    if (error) {
      const err = new BadRequest(error.message);
      throw err;
    }
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      throw new NotFound(`email ${email} not found`);
    }
    if (!bcrypt.compareSync(password, user.password)) {
      throw new BadRequest('failed');
    }
    const payload = {
      id: user.id,
    };
    const token = jwt.sign(payload, SECRET_KEY);
    await User.findByIdAndUpdate(user.id, { token });

    res.json({
      status: 'success',
      token,
      user: {
        email,
       
      },
    });
  } catch (error) {
    next(error);
  }
};

const logout = async (req, res, next) => {
  try {
    const { id } = req.user;
  await User.findByIdAndUpdate(id, { token: null });

    res.status(200).json({
      status: 'success logout',
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  signup,
  login,
  logout,
};
