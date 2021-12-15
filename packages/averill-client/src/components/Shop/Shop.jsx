// General imports
import React, { useState } from 'react'
import './css/shopStyle.css'
// components
import Trader from './components/Trader.jsx'
import ShopHeader from './components/ShopHeader.jsx'
import ShopSlider from './components/ShopSlider/ShopSlider.jsx'

function ShopComponent() {
  const [speech, setSpeech] = useState('Hello')
  const [dialogState, setDialogState] = useState(true)
  const props = {
    setSpeech,
    setDialogState,
    dialogState,
    speech,
  }

  return (
    <div className="shop-wrapper flex">
      <Trader {...props} />
      {/* Shop RightBar */}
      <div
        className="flex-1 , Shop-right-bar"
        style={{ backgroundImage: 'url("./images/ShopImg/shopBg.png")' }}
      >
        <ShopHeader />
        <ShopSlider {...props} />
      </div>
    </div>
  )
}

export default ShopComponent
