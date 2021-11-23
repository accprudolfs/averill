import React from 'react'
import styles from './Farm.module.css'

export default function Farm(props) {
  const tiles = []
  for (let i = 0; i < 64; i++) {
    const plant = props.farmData.find(
      item => item.x === i % 8 && item.y === Math.floor(i / 8),
    )
    if (plant) {
      tiles.push(
        <div
          key={`tile-${i}`}
          className={[
            styles['farm-tile'],
            styles[plant.watered ? 'farm-tile-watered' : 'farm-tile-unwatered'],
          ].join(' ')}
        >
          {plant.plant}
        </div>,
      )
    } else {
      tiles.push(<div className={styles['farm-tile']}>empty</div>)
    }
  }
  return <div className={styles.farm}> {tiles}</div>
}
