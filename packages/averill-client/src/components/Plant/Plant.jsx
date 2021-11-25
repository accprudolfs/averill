import React from 'react'
import plants from './plants.png'
import empty from './empty.png'
import styles from './Plant.module.css'

/**
 * @param type type of plant to be displayed
 * @param stage growth stage [0-2]
 * @returns image of the plant from image sprite sheet
 */
export default function Plant(props) {
  return (
    <img
      src={empty}
      style={{
        'background-image': `url(${plants})`,
      }}
      className={styles[`${props.type}${props.stage ? `-${props.stage}` : ''}`]}
    ></img>
  )
}
