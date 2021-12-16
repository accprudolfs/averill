import React from 'react'
import { Link } from 'react-router-dom'
import { paths } from '../../router/routes'
import HoverImageBlock from '../HoverImageBlock/HoverImageBlock.jsx'
import logo from './resources/logo.svg'
import logoHover from './resources/logo_h.svg'

export default function Logo() {
  return (
    <Link to={paths.home}>
      <HoverImageBlock src={logo} srcHover={logoHover} />
    </Link>
  )
}
