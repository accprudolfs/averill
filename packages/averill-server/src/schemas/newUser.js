const Joi = require('joi');

const userSchema = Joi.object({
email: Joi.string().min(3).required(),
password: Joi.string().min(5),
name:Joi.string().min(3),
});

module.exports = { userSchema };