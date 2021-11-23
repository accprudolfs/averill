import React from 'react'
import plants from './plants.png'

const plantTypes = ['none', 'potato', 'carrot', 'apple', 'banana']
const cellSize = 72

/**
 * @param type type of plant to be displayed
 * @param stage growth stage [0-2]
 * @returns image of the plant from image sprite sheet
 */
export default function Plant(props) {
  return (
    <img
      src={plants}
      style={{
        'object-fit': 'none',
        'object-position': `${props.stage * cellSize * -1}px ${
          plantTypes.indexOf(props.type) * cellSize * -1
        }px`,
        width: cellSize,
        height: cellSize,
      }}
    ></img>
  )
}
