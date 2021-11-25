import React from 'react'
import { Link } from 'react-router-dom'

export default function Logo() {
  return (
    <>
      <Link to="/" className="hover:opacity-50 focus:opacity-50">
        Logo here
      </Link>
    </>
  )
}
