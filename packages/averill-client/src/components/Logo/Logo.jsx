import React from 'react'
import { Link } from 'react-router-dom'
import { paths } from '../../router/routes'
import logo from './logo.svg'

export default function Logo() {
  return (
    <>
      <Link to={paths.home} className="hover:opacity-50 focus:opacity-50">
        <img src={logo} width="50%" />
      </Link>
    </>
  )
}
