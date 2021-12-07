import plantDefinitions from '@averill-app/common'

export function createPlant(plantName, position) {
  return {
    type: plantName,
    created: Date.now(),
    watered: Date.now(),
    harvests: plantDefinitions.find(item => item.plant === plantName).harvests,
    harvestedAt: 0,
    position: position,
  }
}

export function calculatePlantStage(plant) {
  const plantDefinition = plantDefinitions.find(
    item => item.plant === plant.type,
  )
  let stage = 0
  if (plantDefinition) {
    let plantTime = Date.now() - plant.created

    for (const time of plantDefinition.stageTime) {
      plantTime -= time
      if (plantTime < 0) break
      stage++
    }
  }
  return stage > 2 ? 2 : stage // stage 3 would be dead plant, not implemented yet
}

export function calculateWateredState(plant) {
  // will return true if watered last 5 secs
  // short arbitrary number for development
  return Date.now() < plant.watered + 5000
}
