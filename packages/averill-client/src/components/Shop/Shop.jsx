// import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import './css/ShopStyle.css'
import { api } from '../../store/services'
import { Shownext, ShowPrew, onResize } from './js/Slider'
import React from 'react'
// ON DRAG
function drag(ev) {
  ev.dataTransfer.effectAllowed = 'copy'
  ev.dataTransfer.setData('text', ev.target.id)
}

function buyPlant(plantId) {
  alert(`Plant Id is ${plantId}`)
}

function ShopComponent() {
  // Variables
  api.useGetAllPlantsQuery()
  const AllPlants = useSelector(state => state.shop.AllPlants)
  const money = useSelector(state => state.shop.money)
  // TO DO Slider on Resize
  onResize()
  return (
    <div className="shop-wrapper flex">
      {/* Trader Area */}
      <div className="trader-area">
        <div className="TalkBox animate-bounce font-bold text-center">
          HELLO
        </div>
        <img
          className="Shop-trader-img"
          src="/images/ShopImg/trader.png"
          draggable="false"
        />
        <div className="Trader-speech-box"> Joney </div>
      </div>

      {/* Shop Header */}
      <div className="flex-1 , Shop-right-bar">
        <div className="flex , Shop-header">
          <h1 className="flex-1 , Shop-name">
            <img className="Shop-logo" src="/images/ShopImg/ShopLogo.png" />
            HAPPY FARMER
          </h1>
          <div className="moner-wrapper">
            <img
              className="Money-logo"
              src="/images/ShopImg/moneyIcon.png"
              alt=""
              draggable="false"
            />
            <span className="User-money"> {money} $ </span>
          </div>
        </div>

        {/* Shop products and prices */}
        <div className="flex product-wrapper">
          <div onClick={() => ShowPrew()}>
            <img className="Chevrons" src="/images/ShopImg/left.png" alt="" />
          </div>
          <div
            className="flex flex-wrap flex-1 wra"
            style={{ justifyContent: 'center' }}
          >
            {AllPlants.map((testObj, index) => {
              return (
                <div className="Shop-cell" key={index} title="Drag And Drop">
                  <div>
                    <img
                      className="Shop-product-img"
                      id={index}
                      src={testObj.img}
                      draggable="true"
                      alt=""
                      onDragStart={e => {
                        drag(e)
                      }}
                      data-price={testObj.price}
                    />
                  </div>
                  <p className="Shop-product-price"> {testObj.price} $ </p>
                  <button
                    className="shop-buy-btn"
                    onClick={() => buyPlant(testObj.id)}
                  >
                    {' '}
                    BUY{' '}
                  </button>
                </div>
              )
            })}
            <div className="Shop-cell" title="Drag And Drop"></div>
          </div>
          <div className="Chevrons" onClick={() => Shownext()}>
            <img src="/images/ShopImg/right.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ShopComponent
