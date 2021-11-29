import React from 'react'
import { Link } from 'react-router-dom'

export default function NavItem({ title, to }) {
  return (
    <Link
      to={to}
      className="flex items-center hover:opacity-50 focus:opacity-50"
    >
      {title}
    </Link>
  )
}
