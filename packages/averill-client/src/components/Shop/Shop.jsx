import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchPlants } from '../../store/shopReducer'
import './ShopStyle.css'

// ON DRAG
function drag(ev) {
  ev.dataTransfer.effectAllowed = 'copy'
  ev.dataTransfer.setData('text', ev.target.id)
}

function ShopComponent() {
  // Variables
  const AllPlants = useSelector(state => state.MyTestReducer.AllPlants)

  const money = useSelector(state => state.MyTestReducer.money)
  const NotEnoughtMoney = useSelector(
    state => state.MyTestReducer.NotEnoughtMoney,
  )
  const TraderSpeech = useSelector(state => state.MyTestReducer.TraderSpeech)

  // On Load  - Get All Plants for shop , and user information
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchPlants())
  }, [dispatch])

  return (
    <div className="shop-wrapper flex">
      {/* Trader Area */}
      <div className="trader-area">
        <div
          className="TalkBox animate-bounce font-bold text-center"
          style={{
            opacity: TraderSpeech ? '1' : '0',
            color: NotEnoughtMoney ? 'red' : 'rgb(116, 201, 27)',
          }}
        >
          {TraderSpeech}
        </div>
        <img
          className="Shop-trader-img"
          src="/images/ShopImg/trader.png"
          draggable="false"
        />
        <div className="Trader-speech-box"> Joney </div>
      </div>

      {/* Shop Header */}
      <div className="flex-1">
        <div className="flex , Shop-header">
          <h1 className="flex-1 , Shop-name">
            <img className="Shop-logo" src="/images/ShopImg/ShopLogo.png" />
            THE BEST SHOP
          </h1>
          <div style={{ paddingRight: 20 }}>
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
        <div className="flex">
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
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default ShopComponent
