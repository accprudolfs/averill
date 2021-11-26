import React from 'react'
import { Link } from 'react-router-dom'
import { paths } from '../../router/routes'

export default function Logo() {
  return (
    <>
      <Link to={paths.home} className="hover:opacity-50 focus:opacity-50">
        Logo here
      </Link>
    </>
  )
}
