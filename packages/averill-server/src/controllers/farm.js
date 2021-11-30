// const { Conflict, NotFound, BadRequest } = require('http-errors');
const Farm = require('../models/farm');

// const createNewFarm = async (req, res, next) => {

//   try {
   
//       const { _id}=req.user
//       const newfarm = {
      
//           owner: _id,
//       }
//       const isExist = await Farm.findOne({_id,name});
//          if (isExist) {
//       throw new Conflict('already exist');
//     }
//     await Farm.create(newfarm);
//     res.status(201).json({
//       status: 'success',
//       code: 201,
//       ResponseBody: {
//         newfarm,
//       },
//     });
//   } catch (error) {
//     next(error);
//   }
// };
const getUserFarm = async (req, res, next) => {

  try {
     
      const { _id}=req.user
 
      const userFarm = await Farm.findOne({ owner: _id});
    res.status(201).json({
      status: 'success',
      code: 201,
      ResponseBody: {
   
          userFarm,
       
      },
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
    // createNewFarm,
    getUserFarm,

};