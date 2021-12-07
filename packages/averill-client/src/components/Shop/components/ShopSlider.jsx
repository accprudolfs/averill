import React, { useEffect, useState } from 'react'
import allPlants from '@averill-app/common'
import PlantsImages from '../../Plant/Plant.jsx'
import buyPlant from '../js/buyPlant'
import { useDispatch } from 'react-redux'
// functions
import { Shownext, ShowPrew, OnLoad } from '../js/Slider'

function ShopSlider(props) {
  const dispatch = useDispatch()
  const [TraderHintState, setHintStatus] = useState(true)

  useEffect(() => {
    OnLoad()
  }, [])

  // Trader Hint how to buy plants , will be called just once
  function TraderHint() {
    const traderSpeech = document.getElementById('traderSpeech')
    traderSpeech.style.display = 'block'
    props.setSpeech(`Select plant , and plant it on the field`)
    setHintStatus(false)
  }

  return (
    <div
      id="product-wrapper"
      className="flex product-wrapper"
      onMouseEnter={() => (TraderHintState ? TraderHint() : '')}
    >
      <div className="Chevrons" onClick={() => ShowPrew()}>
        <img src="/images/ShopImg/left.png" alt="" />
      </div>
      <div
        className="flex flex-wrap flex-1 wra"
        style={{ justifyContent: 'center', display: 'flex' }}
      >
        {allPlants.map((plant, index) => {
          return (
            <div
              className="Shop-cell"
              key={index}
              onClick={() =>
                buyPlant(plant.plant, index, props.setSpeech, dispatch)
              }
            >
              <div className="Shop-cell-inner">
                <div className="Product-title"> {plant.shopName}</div>
                <div className="Shop-product-img">
                  <PlantsImages
                    className="Shop-product-img"
                    type={plant.plant}
                    stage={2}
                  />
                </div>
                <div className="Shop-product-price"> {plant.buyPrice} $ </div>
              </div>
            </div>
          )
        })}
      </div>
      <div className="Chevrons" onClick={() => Shownext()}>
        <img src="/images/ShopImg/right.png" alt="" />
      </div>
    </div>
  )
}

export default ShopSlider
