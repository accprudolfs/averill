// Customisation
const MobileBreakpoint = 600
const TabletBreakpoint = 1000
const DesktopCellNumber = 4
const TabletCellNumber = 2
const MobileCellNumber = 1
// FullHD product Wraper Padding in %
const productWrapperPadding = 20

// Variables
let FirstElement = 1
let howMany = null
let total = null
let next = null
let previous = null
// For Resize to avoid function call on every resize
let CurentStage = 0

// Common Function
function common() {
  // variables
  howMany = DesktopCellNumber
  const slides = document.getElementsByClassName('Shop-cell')
  total = slides.length
  // Howmany elements depending on screen resolution
  if (document.body.offsetWidth < TabletBreakpoint) {
    howMany = TabletCellNumber
  }
  if (document.body.offsetWidth < MobileBreakpoint) {
    howMany = MobileCellNumber
  }
  // hide All
  for (let i = 1; i <= total; i++) {
    document.querySelector(`.Shop-cell:nth-child(${i})`).style.display = 'none'
  }
  // common dinamic css depending on cell quantity
  const oneCellSize = 100 / howMany
  const all = document.getElementsByClassName('Shop-cell')
  for (let i = 0; i < all.length; i++) {
    all[i].style.flex = ` 0 0${oneCellSize}%`
  }
}

export function Shownext() {
  common() // common Fun
  // if it's first call then to firs element will be added howmany (which depends on screen resolution)
  if (next == null) {
    FirstElement = FirstElement + howMany
  } else {
    FirstElement = next
  }
  let element = null
  let ii = 1
  for (let i = 0; i < howMany; i++) {
    let temp = FirstElement + i
    if (temp > total) {
      temp = ii
      ii++
    }
    element = document.querySelector(`.Shop-cell:nth-child(${temp})`)
    element.style.display = 'block'
    element.classList.add('fade')
    element.style.order = i
    next = temp + 1
  }
  previous = FirstElement - 1
}

export function ShowPrew() {
  common() // common Fun
  if (previous == null) {
    FirstElement = total
  } else {
    FirstElement = previous
  }

  let element = null
  let ii = 0
  for (let i = 0; i < howMany; i++) {
    let temp = FirstElement - i
    if (temp < 1) {
      temp = total - ii
      ii++
    }
    previous = temp - 1
    element = document.querySelector(`.Shop-cell:nth-child(${temp})`)
    element.style.display = 'block'
    element.classList.add('fade')
    element.style.opacity = '1'
    element.style.order = howMany - i
  }
  next = FirstElement + 1
}

export function OnLoad() {
  // SHOW OnLoad
  common()
  const all = document.querySelectorAll('.Shop-cell')
  for (let i = 0; i < howMany; i++) {
    all[i].style.display = 'block'
  }
  const productWrapper = document.querySelectorAll('.product-wrapper')
  productWrapper[0].style.padding = `0 ${productWrapperPadding}%`

  let SetResizeStage = null
  window.addEventListener(
    'resize',
    function () {
      const currentSize = document.body.offsetWidth

      if (currentSize < MobileBreakpoint) {
        SetResizeStage = 1
      } else if (currentSize < TabletBreakpoint) {
        SetResizeStage = 2
      } else {
        SetResizeStage = 3
      }
      if (CurentStage !== SetResizeStage) {
        common()
        let ii = 1
        for (let i = 0; i < howMany; i++) {
          let nextEL = FirstElement + i
          if (nextEL > total) {
            nextEL = ii
            ii++
          }
          const element = document.querySelector(
            `.Shop-cell:nth-child(${nextEL})`,
          )
          element.style.display = 'block'
          element.classList.add('fade')
          element.style.order = i + 1
        }
        CurentStage = SetResizeStage
        next = FirstElement + howMany
        previous = FirstElement - 1
      }
    },
    true,
  )
}
