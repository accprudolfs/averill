// General imports
import React, { useState } from 'react'
import './css/ShopStyle.css'

// components
import Trader from './components/Trader.jsx'
import ShopHeader from './components/ShopHeader.jsx'
import ShopSlider from './components/ShopSlider.jsx'

function ShopComponent() {
  const [traderDialogs, setSpeech] = useState('Hello')

  return (
    <div className="shop-wrapper flex">
      <Trader traderDialogs={traderDialogs} />
      <div
        className="flex-1 , Shop-right-bar"
        style={{ backgroundImage: 'url("./images/ShopImg/shopBg.png")' }}
      >
        <ShopHeader />
        <ShopSlider setSpeech={setSpeech} />
      </div>
    </div>
  )
}

export default ShopComponent
