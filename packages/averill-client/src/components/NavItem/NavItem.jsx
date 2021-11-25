import React from 'react'
import { Link } from 'react-router-dom'

export default function NavItem({ title, to }) {
  return <Link to={to}>{title}</Link>
}
