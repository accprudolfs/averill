import React from 'react'
import { useSelector } from 'react-redux'

export default function ShopHeader() {
  const userMoney = useSelector(state => state.shop.money)
  return (
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
        <span className="User-money"> {userMoney} $ </span>
      </div>
    </div>
  )
}
