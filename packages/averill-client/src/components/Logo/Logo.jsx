import React from 'react'
import { Link } from 'react-router-dom'
import { paths } from '../../router/routes'
import styles from './Logo.module.css'

export default function Logo() {
  return (
    <>
      <Link to={paths.home}>
        <div className={styles.logo} />
      </Link>
    </>
  )
}
