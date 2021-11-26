// feel free to change the params, they are very, very arbitrary
// add any other fields you might need

const plants = [
  {
    plant: 'potato', // identifier for storage, logic, selecting graphic resource
    shopName: 'Potato', // for display to player
    buyPrice: 10,
    sellPrice: [5, 5, 20], // prices per growth stage
    stageTime: [10000, 20000, 60000], // how long time plant exists in stage
    harvests: 1,
  },
  {
    plant: 'carrot',
    shopName: 'Carrot',
    buyPrice: 20,
    sellPrice: [0, 15, 40],
    stageTime: [10000, 20000, 60000],
    harvests: 1,
  },
  {
    plant: 'apple',
    shopName: 'Apple Tree',
    buyPrice: 5000,
    sellPrice: [1000, 300, 400],
    stageTime: [10000, 20000, 60000],
    harvests: 50,
  },
  {
    plant: 'banana',
    shopName: 'Banana Tree',
    buyPrice: 10000,
    sellPrice: [2000, 600, 1000],
    stageTime: [10000, 20000, 60000],
    harvests: 50,
  },
]

export default plants
