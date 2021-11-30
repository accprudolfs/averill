import React from 'react'
import styles from './Farm.module.css'
import Plant from '../Plant/Plant.jsx'
import soil from './tiles/soil.svg'
import soilWatered from './tiles/soil_watered.svg'
import bg from './farm_bg.svg'

export default function Farm(props) {
  const tiles = []
  for (let i = 0; i < 64; i++) {
    const plant = props.farmData.find(
      item => item.x === i % 8 && item.y === Math.floor(i / 8),
    )
    if (plant) {
      tiles.push(
        // TODO: add click and drop events to this div
        <div
          key={`tile-${i}`}
          className={styles['farm-tile']}
          style={{
            'background-image': `url(${plant.watered ? soilWatered : soil})`,
          }}
        >
          <Plant type={plant.plant} stage={2} />
        </div>,
      )
    } else {
      tiles.push(
        <div
          className={styles['farm-tile']}
          style={{
            'background-image': `url(${soil})`,
          }}
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
        'background-image': `url(${bg})`,
      }}
    >
      {tiles}
    </div>
  )
}
