import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import './css/ShopStyle.css'
import { api } from '../../store/services'
import { Shownext, ShowPrew, OnLoad } from './js/Slider'

function ShopComponent() {
  // Variables
  const [TraderDialogs, setSpeech] = useState('Hello')
  const [TraderHintState, setHintStatus] = useState(true)
  const AllPlants = useSelector(state => state.shop.AllPlants)
  const money = useSelector(state => state.shop.money)
  let traderSpeech = null
  // Call mutation to change ALL PLANTS STATE
  const [GetAllPlants, { isLoading }] = api.useGetAllPlantsMutation()
  const GetPlants = async payload => {
    try {
      await GetAllPlants(payload)
      OnLoad()
    } catch (e) {}
  }

  // Get trader Speech div , set animation for it , and call mutation to set Allplants State

  useEffect(() => {
    traderSpeech = document.getElementById('traderSpeech')
    traderSpeech.classList.add('fade')
    GetPlants()
  }, [])

  // Hide Trader Speech
  function TraderSpeechHide() {
    traderSpeech.style.display = 'none'
  }

  // Trader Hint how to but plant , will be calles just once
  function TraderHint() {
    traderSpeech.style.display = 'block'
    setSpeech(`Select plant , and plant it on the field`)
    setHintStatus(false)
  }

  // But Plant , add id to state TODO now trader just say plant id
  function buyPlant(plantId, index) {
    // Highliting selected PLANT
    const el = document.getElementsByClassName('Shop-product-price')
    const elParent = document.getElementsByClassName('Shop-cell-inner')
    // Remove Highliting from all divs
    for (let i = 0; i < el.length; i++) {
      el[i].classList.remove('highlighted')
      elParent[i].classList.remove('highlightedCell')
    }
    // Add Highliting class and set Trader Speech
    el[index].classList.add('highlighted')
    elParent[index].classList.add('highlightedCell')
    traderSpeech.style.display = 'block'
    setSpeech(`Plant Id is ${plantId}`)
  }

  return (
    <div className="shop-wrapper flex">
      {/* Trader Area */}
      <div className="trader-area">
        <div
          id="traderSpeech"
          className="bubble bubble-bottom-left traderSpeech "
        >
          <div className="Speech-wrapper">
            <span
              className="TraderSpeechCancelBtn"
              onClick={() => TraderSpeechHide()}
            >
              {' '}
              x{' '}
            </span>
            <p> {TraderDialogs}</p>
          </div>
        </div>
        <div
          style={{
            flex: '1',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <img className="Shop-trader-img" src="/images/ShopImg/trader.png" />
        </div>
        <div className="Trader-speech-box"> Joney </div>
      </div>

      {/* Shop Right Bar */}
      <div
        className="flex-1 , Shop-right-bar"
        style={{ backgroundImage: 'url("./images/ShopImg/shopBg.png")' }}
      >
        {/* Shop Header */}
        <div className="flex , Shop-header">
          <div className=" Shop-name">
            <div>
              <img className="Shop-logo" src="/images/ShopImg/ShopLogo.png" />
              <span> HAPPY FARMER </span>
            </div>
          </div>
          <div className="moner-wrapper">
            <img
              className="Money-logo"
              src="/images/ShopImg/moneyIcon.png"
              alt=""
            />
            <span className="User-money"> {money} $ </span>
          </div>
        </div>
        {/* Shop products and prices */}
        <div
          id="product-wrapper"
          className="flex product-wrapper"
          onMouseEnter={TraderHintState ? TraderHint() : ''}
        >
          <div onClick={() => ShowPrew()}>
            <img className="Chevrons" src="/images/ShopImg/left.png" alt="" />
          </div>
          {isLoading}
          <div
            className="flex flex-wrap flex-1 wra"
            style={{ justifyContent: 'center', display: 'flex' }}
          >
            {AllPlants.map((plant, index) => {
              return (
                <div
                  className="Shop-cell"
                  key={index}
                  onClick={() => buyPlant(plant._id, index)}
                >
                  <div className="Shop-cell-inner">
                    <div className="Product-title"> {plant.name}</div>
                    <div>
                      <img
                        className="Shop-product-img"
                        src={plant.img}
                        style={{ backgroundPosition: '0 0' }}
                        alt=""
                        data-price={plant.price}
                      />
                    </div>
                    <div className="Shop-product-price"> {plant.price} $ </div>
                  </div>
                </div>
              )
            })}
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
