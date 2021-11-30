import React from 'react'
import styles from './Farm.module.css'
import Plant from '../Plant/Plant.jsx'

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
          className={styles[plant.watered ? 'farm-tile-watered' : 'farm-tile']}
        >
          <Plant type={plant.plant} stage={2} />
        </div>,
      )
    } else {
      tiles.push(
        <div className={styles['farm-tile']}>
          <Plant />
        </div>,
      )
    }
  }
  return <div className={styles.farm}> {tiles}</div>
}
