import React from 'react'
import { Link } from 'react-router-dom'
import GameText from '../GameText/GameText.jsx'
import GameButton from '../HoverImageBlock/GameButton.jsx'

export default function NavItem({ title, to }) {
  return (
    <Link to={to} className="flex items-center">
      <GameButton>
        <GameText>{title}</GameText>
      </GameButton>
    </Link>
  )
}
