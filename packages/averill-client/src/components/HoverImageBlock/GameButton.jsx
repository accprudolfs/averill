import React from 'react'
import HoverImageBlock from './HoverImageBlock.jsx'
import button from './resources/button.svg'
import buttonHover from './resources/button_h.svg'

export default function GameButton(props) {
  return (
    <HoverImageBlock src={button} srcHover={buttonHover}>
      {props.children}
    </HoverImageBlock>
  )
}
