import React, { useEffect } from 'react'
import styles from './Farm.module.css'
import Plant from '../Plant/Plant.jsx'
import soil from './tiles/soil.svg'
import soilWatered from './tiles/soil_watered.svg'
import bg from './farm_bg.svg'
import { useSelector, useDispatch } from 'react-redux'
import {
  calculatePlantStage,
  calculateWateredState,
  createPlant,
} from './farmLogic.js'

import {
  addPlant,
  removePlant,
  updateFarm,
  toggleWaterMode,
  waterPlant,
} from '@averill-app/client/src/store/slices/farm'

export default function Farm() {
  const tiles = []

  const selectedPlant = useSelector(state => state.shop.plantInHand)
  const plants = useSelector(state => state.farm.plants)
  const waterMode = useSelector(state => state.farm.waterMode)

  const dispatch = useDispatch()

  // this feels like very dirty solution, update if you know any better
  // intended to refresh component to redraw plant growth stages
  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(updateFarm())
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  for (let i = 0; i < 64; i++) {
    const plant = plants.find(item => item.position === i)

    if (plant) {
      tiles.push(
        <div
          key={`tile-${i}`}
          className={styles['farm-tile']}
          style={{
            backgroundImage: `url(${
              calculateWateredState(plant) ? soilWatered : soil
            })`,
          }}
          onClick={() => {
            waterMode ? dispatch(waterPlant(i)) : dispatch(removePlant(i))
          }}
        >
          <Plant type={plant.type} stage={calculatePlantStage(plant)} />
        </div>,
      )
    } else {
      tiles.push(
        <div
          key={`tile-${i}`}
          className={styles['farm-tile']}
          style={{
            backgroundImage: `url(${soil})`,
          }}
          onClick={() =>
            selectedPlant
              ? dispatch(addPlant(createPlant(selectedPlant, i)))
              : null
          }
        >
          <Plant />
        </div>,
      )
    }
  }
  return (
    <div className="flex flex-col">
      <div
        className={styles.farm}
        style={{
          backgroundImage: `url(${bg})`,
        }}
      >
        {tiles}
      </div>
      <div className="flex flex-row">
        <button
          className={styles['farm-button']}
          onClick={() => {
            dispatch(toggleWaterMode())
          }}
        >
          WaterMode
        </button>
        <div className="p-1">{waterMode ? 'on' : 'off'}</div>
        <div className="p-1">
          {
            useSelector(state => state.farm.tick)
            // had to be displayed as part of refreshing solution, see above
          }
        </div>
      </div>
    </div>
  )
}
