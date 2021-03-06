const { Conflict, NotFound, BadRequest } = require('http-errors')
const Farm = require('../models/farm')
const existPlants = require('../../../averill-common/index')

const getUserFarm = async (req, res, next) => {
  try {
    const { _id } = req.user

    const userFarm = await Farm.findOne({ owner: _id })

    if (!userFarm) {
      throw new NotFound('not found')
    }
    res.status(201).json({
      status: 'success',
      code: 201,
      ResponseBody: {
        userFarm,
      },
    })
  } catch (error) {
    next(error)
  }
}
const insertPlant = async (req, res, next) => {
  try {
    const { _id } = req.user

    const userFarm = await Farm.findOne({ owner: _id })
    if (!userFarm) {
      throw new NotFound('not found')
    }

    const isPositionNotAvailable = userFarm.vegetables.find(plant => {
      return plant.position === Number(req.body.position)
    })

    if (isPositionNotAvailable) {
      throw new Conflict('this position is already taken')
    }

    const isPlantAllow = existPlants.find(item => item.plant === req.body.type)
    if (!isPlantAllow) {
      throw new NotFound('this plant isnt available')
    }

    const plant = {
      type: req.body.type,
      created: new Date(),

      position: req.body.position,
    }
    userFarm.vegetables.push(plant)
    await userFarm.save()

    res.status(201).json({
      status: 'success',
      code: 201,
      ResponseBody: {
        userFarm,
      },
    })
  } catch (error) {
    next(error)
  }
}

const waterPlant = async (req, res, next) => {
  try {
    const { _id } = req.user
    const { position } = req.body

    const result = await Farm.findOneAndUpdate(
      { owner: _id, 'vegetables.position': position },
      {
        $set: {
          'vegetables.$.watered': new Date(),
        },
      },
      {
        runValidators: true,
      },
    )
    if (!result) {
      throw new NotFound('not found')
    }
    res.status(201).json({
      status: 'success',
      code: 201,
      ResponseBody: {
        result,
      },
    })
  } catch (error) {
    next(error)
  }
}

const harvestPlant = async (req, res, next) => {
  try {
    const { _id } = req.user
    const { position } = req.body

    const farm = await Farm.findOne({
      owner: _id,
      'vegetables.position': position,
    })

    if (!farm) {
      throw new NotFound('not found')
    }

    const plant = farm.vegetables[0]
    const plantType = existPlants.find(p => p.plant === plant.type)

    const canHarvest =
      plant.harvests === 'undefined' ||
      Number(plant.harvests) < plantType.harvests

    if (!canHarvest) {
      throw new BadRequest('Not allowed')
    }

    const newHarvest = plant.harvests === 'undefined' ? 1 : plant.harvests + 1

    const result = await Farm.findOneAndUpdate(
      { owner: _id, 'vegetables.position': position },
      {
        $set: {
          'vegetables.$.harvestedAt': new Date(),
          'vegetables.$.harvests': newHarvest,
        },
      },
      {
        runValidators: true,
      },
    )
    await result.save()

    res.status(201).json({
      status: 'success',
      code: 201,
      ResponseBody: {
        result,
      },
    })
  } catch (error) {
    next(error)
  }
}

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

module.exports = {
  // createNewFarm,
  getUserFarm,
  insertPlant,
  waterPlant,
  harvestPlant,
}
