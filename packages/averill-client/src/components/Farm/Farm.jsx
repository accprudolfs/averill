import React from 'react'
import styles from './Farm.module.css'
import Plant from '../Plant/Plant.jsx'
import soil from './tiles/soil.svg'
import soilWatered from './tiles/soil_watered.svg'
import bg from './farm_bg.svg'
import { useSelector, useDispatch } from 'react-redux'
// import plants from '@averill-app/common'

import { addPlant } from '@averill-app/client/src/store/slices/farm'

export default function Farm(props) {
  const tiles = []

  const selectedPlant = useSelector(state => state.shop.plantInHand)
  const plants = useSelector(state => state.farm.plants)
  const dispatch = useDispatch()

  //   type: String,
  //   created: Date,
  //   watered: Date,
  //   harvesrs: Number,
  //   harvestedAt: Date,
  //   position: Number,

  function plantPlant(position) {
    if (selectedPlant) {
      dispatch(
        addPlant({
          type: selectedPlant,
          created: Date.now(),
          watered: Date.now(),
          harvests: 1,
          harvestedAt: Date.now(),
          position: position,
        }),
      )
    }
  }

  for (let i = 0; i < 64; i++) {
    const plant = plants.find(item => item.position === i)

    if (plant) {
      tiles.push(
        <div
          key={`tile-${i}`}
          className={styles['farm-tile']}
          style={{
            backgroundImage: `url(${plant.watered ? soilWatered : soil})`,
          }}
        >
          <Plant type={plant.type} stage={0} />
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
          onClick={() => plantPlant(i)}
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
