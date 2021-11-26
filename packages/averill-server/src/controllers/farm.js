
const { Conflict, NotFound, BadRequest } = require('http-errors');
const Farm  = require('../models/farm');

const createNewFarm = async (req, res, next) => {

  try {
      const { name } = req.body;
      const { id}=req.user
      const newfarm = {
          name,
          owner: id,
      }
      const isExist = await Farm.findOne({id,name});
         if (isExist) {
      throw new Conflict('already exist');
    }
    await Farm.create(newfarm);
    res.status(201).json({
      status: 'success',
      code: 201,
      ResponseBody: {
        farm: {
          name,
        },
      },
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createNewFarm,

};
