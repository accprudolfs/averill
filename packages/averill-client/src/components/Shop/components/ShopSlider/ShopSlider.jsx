// General
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import clsx from 'clsx'

// Import All plants from Common folder and images component for them
import Plant from './ShopCell.jsx'
import allPlants from '@averill-app/common'

// Functions
import { showNext, showPrew, onLoad, onResize } from '../../js/Slider'
import buyPlant from '../../js/buyPlant'

export default function ShopSlider(props) {
  const dispatch = useDispatch()
  // For Slider
  const sliderLength = allPlants.length
  const [chosenSlide, setChosenSlide] = useState(false)
  const [chevronsState, setChevronsState] = useState(false)
  // Holds all active Slides index numbers
  const [activeSlides, setActiveSlides] = useState([])
  let extraIterator = 0

  const [commonStyles, setCommonStyles] = useState('')
  const propsForSlider = {
    sliderLength,
    setChevronsState,
    activeSlides,
    setActiveSlides,
    setCommonStyles,
  }

  // Slider On load Functions - Show Proper slides , and hide chevrons if not enought plants
  useEffect(() => {
    onLoad({ ...propsForSlider })
  }, [])

  // Show proper amount of slides on resize (mobile ,tablet, desktop) , Show hide chevrons
  window.addEventListener('resize', function () {
    onResize({ ...propsForSlider })
  })

  // Trader Hint how to buy plants , will be disaplayed just once
  const [traderHintState, setTraderHintState] = useState(true)
  function traderHint() {
    props.setDialogState(true)
    props.setSpeech(`Select plant , and plant it on the field`)
    setTraderHintState(false)
  }

  // Main Return
  return (
    // Product Wrapper
    <div
      className="flex product-wrapper"
      onMouseEnter={() => (traderHintState ? traderHint() : '')}
    >
      {/* Left Slider Chevron */}
      <div
        className={clsx({
          displayNone: !chevronsState,
          Chevrons: true,
        })}
        onClick={() => showPrew({ ...propsForSlider })}
        style={{
          backgroundImage: 'url("./images/ShopImg/left.png")',
          backgroundPosition: 'right',
        }}
      />
      {/* Main Shop Slider
        activeSlides = return from slider function Onload , or showNext or showPrew ,
          -> contains index of cells which should be displayed

        Then we sort them to compare with current maping index , and if it's true
          -> set showElement true 
        
        Then we restore correct order for cell according to initial activeSlides order
      */}
      <div className="flex justify-center sliderWrapper">
        {allPlants.map((plant, index) => {
          // sorted array
          const sortedActiveSlides = [...activeSlides].sort(function (a, b) {
            return a - b
          })
          let showEl = false
          let sortingOrder = null
          // comparing current index with sorted array , and increase extraIterator to compare with next array cell
          if (index === sortedActiveSlides[extraIterator]) {
            showEl = true
            // Reseting right order according to initial activeSlides order
            sortingOrder = activeSlides.indexOf(index)
            extraIterator++
          }
          return (
            <Plant
              key={index}
              plant={plant}
              active={plant === chosenSlide}
              order={sortingOrder}
              elementShowState={showEl}
              cellFlexSize={commonStyles.cellSize}
              onClick={() => {
                setChosenSlide(plant)
                buyPlant(plant.plant, dispatch, props)
              }}
            />
          )
        })}
      </div>
      {/* Right Slider Chevron */}
      <div
        className={clsx({
          displayNone: !chevronsState,
          Chevrons: true,
        })}
        onClick={() => showNext({ ...propsForSlider })}
        style={{ backgroundImage: 'url("./images/ShopImg/right.png")' }}
      />
    </div>
  )
}
