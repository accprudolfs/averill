import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { paths } from '../../router/routes'
import logo from '../../../Public/images/logo.svg'
import logoHovered from '../../../Public/images/logo_h.svg'

export default function Logo() {
  const [isHovering, setIsHovered] = useState(false)
  const onMouseEnter = () => setIsHovered(true)
  const onMouseLeave = () => setIsHovered(false)
  return (
    <div onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      <Link to={paths.home}>
        {isHovering ? <img src={logoHovered} /> : <img src={logo} />}
      </Link>
    </div>
  )
}
