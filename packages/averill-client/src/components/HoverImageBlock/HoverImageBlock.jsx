import React, { useState } from 'react'
import styles from './HoverImageBlock.module.css'

/**
 * Image block that shows different image when hovered over. Can have child elements.
 * @param src Default image
 * @param srcHover Hover state image
 * @returns
 */
export default function HoverImageBlock(props) {
  const [hovering, setHovering] = useState(false)
  return (
    <div className={styles['content-wrapper']}>
      <img src={hovering ? props.srcHover : props.src} />
      <div
        onMouseEnter={() => setHovering(true)}
        onMouseLeave={() => setHovering(false)}
        className={styles['children-container-wrapper']}
      >
        <div className={styles['children-container']}>{props.children}</div>
      </div>
    </div>
  )
}
