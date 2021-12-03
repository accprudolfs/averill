import React from 'react'

function Trader(props) {
  // Hide Trader Speech
  function TraderSpeechHide() {
    const traderSpeech = document.getElementById('traderSpeech')
    traderSpeech.style.display = 'none'
  }
  return (
    <div className="trader-area">
      <div
        id="traderSpeech"
        className="bubble bubble-bottom-left traderSpeech fade "
      >
        <div className="Speech-wrapper">
          <span
            className="TraderSpeechCancelBtn"
            onClick={() => TraderSpeechHide()}
          >
            x
          </span>
          <p> {props.traderDialogs}</p>
        </div>
      </div>
      <div className="TraderImgContainer">
        <img className="Shop-trader-img" src="/images/ShopImg/trader.png" />
      </div>
      <div className="Trader-speech-box"> Joney </div>
    </div>
  )
}

export default Trader
