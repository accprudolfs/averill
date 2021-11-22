import React from 'react'
import styles from './Farm.module.css'

export default function Farm(props) {
  return (
    <div className={styles.farm}>
      {props.farmData.map((item, index) => (
        <div
          key={`tile-${index}`}
          className={[
            styles['farm-tile'],
            styles[item.watered ? 'farm-tile-watered' : 'farm-tile-unwatered'],
          ].join(' ')}
        >
          {item.plant}
        </div>
      ))}
    </div>
  )
}
