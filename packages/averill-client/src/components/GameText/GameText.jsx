import React from 'react'
import styles from './GameText.module.css'

export default function GameText(props) {
  return <div className={styles.text}>{props.children}</div>
}
