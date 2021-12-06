import React from 'react'
import plants from './plants.js'

import styles from './Plant.module.css'

/**
 * @param type type of plant to be displayed
 * @param stage growth stage [0-2]
 * @returns image of the plant from image sprite sheet
 */
export default function Plant(props) {
  return (
    <img
      src={
        props.type && plants[props.type][props.stage]
          ? plants[props.type][props.stage]
          : plants.none
      }
      className={styles.plant}
    ></img>
  )
}
