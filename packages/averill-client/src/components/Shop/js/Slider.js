// TODOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO
// TODOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO
// TODOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO
// TODOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO
// TODOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO
// TODOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO
// TODOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO
// DO NOT REPEAT YOURSELF HEELLOOO
let FirstElement = 1
let LastELEMENT = 1
// How many is set in css file TODOOO
let howMany = null
let total = null
// TODO
function common() {
  howMany = 4
  if (document.body.offsetWidth < 1000) {
    howMany = 2
  }

  if (document.body.offsetWidth < 600) {
    howMany = 1
  }

  const slides = document.getElementsByClassName('Shop-cell')
  total = slides.length

  // HIDE ALL
  for (let i = 1; i <= total; i++) {
    document.querySelector(`.Shop-cell:nth-child(${i})`).style.display = 'none'
  }
}

export function Shownext() {
  // common Fun TODO
  common()

  // NEW FIRST ELement
  FirstElement = FirstElement + howMany

  if (FirstElement > total) {
    FirstElement = 1
  }

  for (let i = 0; i < howMany; i++) {
    let nextEL = FirstElement + i
    if (nextEL > total) {
      nextEL = 1 + i
    }
    document.querySelector(`.Shop-cell:nth-child(${nextEL})`).style.display =
      'block'
    document
      .querySelector(`.Shop-cell:nth-child(${nextEL})`)
      .classList.add('fade')
    LastELEMENT = FirstElement + i
  }
}

export function ShowPrew() {
  // common Fun TODO
  common()

  LastELEMENT = LastELEMENT - howMany
  if (LastELEMENT < 1) {
    LastELEMENT = total
  }

  for (let i = 0; i < howMany; i++) {
    let PrevEL = LastELEMENT - i
    if (PrevEL < 1) {
      PrevEL = total
    }
    document.querySelector(`.Shop-cell:nth-child(${PrevEL})`).style.display =
      'block'
    document.querySelector(`.Shop-cell:nth-child(${PrevEL})`).style.opacity =
      '1'
    FirstElement = LastELEMENT - i
  }
}

export function onResize() {
  window.addEventListener(
    'resize',
    function (event) {
      // common Fun TODO
      common()

      for (let i = 1; i <= howMany; i++) {
        document.querySelector(`.Shop-cell:nth-child(${i})`).style.display =
          'block'
        document
          .querySelector(`.Shop-cell:nth-child(${i})`)
          .classList.add('fade')
      }

      FirstElement = 1
      LastELEMENT = 1
    },
    true,
  )
}
