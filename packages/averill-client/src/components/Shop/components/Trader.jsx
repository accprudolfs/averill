// import React from 'react'
import clsx from 'clsx'
import React from 'react'

export default function Trader(props) {
  return (
    <div className="trader-area">
      <div
        className={clsx({
          displayNone: !props.dialogState, // if false
          'bubble bubble-bottom-left traderSpeech fade': true, // always
        })}
      >
        <div className="Speech-wrapper">
          <span
            className="TraderSpeechCancelBtn"
            onClick={() => props.setDialogState(false)}
          >
            x
          </span>
          <p> {props.speech}</p>
        </div>
      </div>
      <div className="TraderImgContainer">
        <img className="Shop-trader-img" src="/images/ShopImg/trader.png" />
      </div>
      <div className="TraderName"> Joney </div>
    </div>
  )
}
