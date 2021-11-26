
const { Conflict, NotFound, BadRequest } = require('http-errors');
const Farm = require('../models/farm');

const createNewFarm = async (req, res, next) => {

  try {
      const { name } = req.body;
      const { _id}=req.user
      const newfarm = {
          name,
          owner: _id,
      }
      const isExist = await Farm.findOne({_id,name});
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
const getAllUsersFarms = async (req, res, next) => {

  try {
     
      const { _id}=req.user
 
      const allUsersFarms = await Farm.find({ owner: _id});
    res.status(201).json({
      status: 'success',
      code: 201,
      ResponseBody: {
   
          allUsersFarms,
       
      },
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
    createNewFarm,
    getAllUsersFarms,

};
