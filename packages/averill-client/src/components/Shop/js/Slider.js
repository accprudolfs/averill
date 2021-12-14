/* Main idea is to return Array of indexes of cells to show to user */

// Customisation
const mobileBreakpoint = 800
const tabletBreakpoint = 1000
const desktopCellNumber = 4
const tabletCellNumber = 2
const mobileCellNumber = 1
// FullHD product Wraper Padding in %

// Variables
let howManyToDisplay = null
let nextEl = null
let previousEl = null
let firstEl = 0

// Common Function for On load and On resize
// Sets proper elements count and styling for this resolution
function sliderSettings(props) {
  // Howmany elements depending on screen resolution
  const windowWidth = document.body.offsetWidth
  if (windowWidth > tabletBreakpoint) {
    howManyToDisplay = desktopCellNumber
  } else if (windowWidth > mobileBreakpoint) {
    howManyToDisplay = tabletCellNumber
  } else {
    howManyToDisplay = mobileCellNumber
  }
  // if not enought elements hide chevrons
  howManyToDisplay < props.sliderLength
    ? props.setChevronsState(true)
    : props.setChevronsState(false)
}

function commonStyle(props) {
  // slider Settings dynamic css depending on cell quantity , and padding for product wrapper
  const oneCellSize = 100 / howManyToDisplay
  const styles = {
    cellSize: {
      flex: ` 0 0 ${oneCellSize}%`,
    },
  }
  props.setCommonStyles(styles)
}

// ON PAGE LOAD
export function onLoad(props) {
  // Set How many elements to display , show/hide chevrons , sets dinamic style
  sliderSettings(props)
  commonStyle(props)
  // Preapre array of element to show on load , and save it in actives slides
  // ( array contain index of cells to display)
  const prepArray = []
  for (let i = 0; i < howManyToDisplay; i++) {
    prepArray.push(i)
  }
  props.setActiveSlides(prepArray)
}

// SHOW NEXT
export function showNext(props) {
  // on first load sets nexEl from activeSlides state (is set on onload)
  if (!nextEl) {
    const activeSlides = props.activeSlides
    nextEl = activeSlides[activeSlides.length - 1] + 1
  }
  // Preapre array of element to show on Next btn. click , and save it in activesSlides
  // ( array contain index of cells to display)
  const prepArray = []
  let extraIterator = 0
  for (let i = 0; i < howManyToDisplay; i++) {
    if (nextEl + extraIterator > props.sliderLength - 1) {
      nextEl = 0
      extraIterator = 0
    }
    prepArray.push(nextEl + extraIterator)
    extraIterator++
  }
  // save new positions into first el., next el., previous el. ,
  // and saves new array of indexes to show into setActiveSlides(State)
  firstEl = prepArray[0]
  nextEl = prepArray[prepArray.length - 1] + 1
  previousEl = prepArray[0] - 1
  props.setActiveSlides(prepArray)
}

// SHOW PREVIOUS
export function showPrew(props) {
  if (!previousEl) {
    previousEl = props.activeSlides[0] - 1
  }
  // Preapre array of element to show on Back btn. click , and save it in activesSlides
  // ( array contain index of cells to display)
  const prepArray = []
  let extraIterator = 0
  for (let i = 0; i < howManyToDisplay; i++) {
    if (previousEl - extraIterator < 0) {
      previousEl = props.sliderLength - 1
      extraIterator = 0
    }
    prepArray.push(previousEl - extraIterator)
    extraIterator++
  }
  // save new positions into first el., next el., previous el. ,
  // and saves new array of indexes to show into setActiveSlides(State) - reversed for proper order
  nextEl = prepArray[0] + 1
  previousEl = prepArray[prepArray.length - 1] - 1
  const reversedPrepArray = prepArray.reverse()
  firstEl = reversedPrepArray[0]
  props.setActiveSlides(reversedPrepArray)
}

// ON RESIZE FUN
let curentStage = 0
let resizeStage = null

export function onResize(props) {
  // Set How many elements to display , show/hide chevrons , sets dinamic style
  sliderSettings(props)
  // To avoid fun. call on every resize , we set stages depending on screen resolution
  const currentSize = document.body.offsetWidth
  if (currentSize <= mobileBreakpoint) {
    resizeStage = 1
  } else if (currentSize <= tabletBreakpoint) {
    resizeStage = 2
  } else {
    resizeStage = 3
  }
  // if stage did not change , we do nothings

  if (curentStage !== resizeStage) {
    commonStyle(props)
    // Prepare array of element to show on resize , according on first element index
    // saves it in actives slides ( array contain index of cells to display)
    const prepArray = []
    let extraIterator = 0
    let tempNext = null
    let tempFirst = firstEl
    for (let i = 0; i < howManyToDisplay; i++) {
      tempNext = tempFirst + extraIterator
      if (tempNext > props.sliderLength - 1) {
        extraIterator = 0
        tempFirst = 0
        tempNext = 0
      }
      prepArray.push(tempNext)
      extraIterator++
    }
    // save new positions into first el., next el., previous el. ,
    // and saves new array of indexes to show into setActiveSlides(State).
    nextEl = tempNext + 1
    previousEl = firstEl - 1
    curentStage = resizeStage
    props.setActiveSlides(prepArray)
  }
}
