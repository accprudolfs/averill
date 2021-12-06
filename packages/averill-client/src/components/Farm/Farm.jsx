import React from 'react'
import styles from './Farm.module.css'
import Plant from '../Plant/Plant.jsx'
import soil from './tiles/soil.svg'
import soilWatered from './tiles/soil_watered.svg'
import bg from './farm_bg.svg'
import { useSelector, useDispatch } from 'react-redux'

import { addPlant } from '@averill-app/client/src/store/slices/farm'

export default function Farm(props) {
  const tiles = []

  const selectedPlant = useSelector(state => state.shop.plantInHand)
  const plants = useSelector(state => state.farm.plants)
  const dispatch = useDispatch()

  function plantPlant(x, y) {
    if (selectedPlant) {
      dispatch(
        addPlant({
          plant: selectedPlant,
          x: x,
          y: y,
          watered: true,
        }),
      )
    }
  }

  for (let i = 0; i < 64; i++) {
    const plant = plants.find(
      item => item.x === i % 8 && item.y === Math.floor(i / 8),
    )

    if (plant) {
      tiles.push(
        <div
          key={`tile-${i}`}
          className={styles['farm-tile']}
          style={{
            backgroundImage: `url(${plant.watered ? soilWatered : soil})`,
          }}
        >
          <Plant type={plant.plant} stage={0} />
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
          onClick={() => plantPlant(i % 8, Math.floor(i / 8))}
        >
          <Plant />
        </div>,
      )
    }
  }
  return (
    <div
      className={styles.farm}
      style={{
        backgroundImage: `url(${bg})`,
      }}
    >
      {tiles}
    </div>
  )
}
