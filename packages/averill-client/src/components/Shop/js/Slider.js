// TODOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO
// TODOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO
// TODOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO
// TODOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO
// TODOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO
// TODOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO
// TODOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO
// DO NOT REPEAT YOURSELF HEELLOOO
let indexzz = 1
let oldIndex = 1

export function Shownext() {
  let howMany = 4
  if (document.body.offsetWidth < 1000) {
    howMany = 2
  }

  if (document.body.offsetWidth < 600) {
    howMany = 1
  }

  const slides = document.getElementsByClassName('Shop-cell')
  const total = slides.length

  oldIndex = indexzz
  indexzz = indexzz + howMany

  if (indexzz > total) {
    indexzz = 1
  }

  if (oldIndex > total) {
    oldIndex = 1
  }

  for (let i = 0; i < howMany; i++) {
    let gg = oldIndex + i
    if (gg > total) {
      gg = 1 + i
    }
    document.querySelector(`.Shop-cell:nth-child(${gg})`).style.opacity = '0'
    document.querySelector(`.Shop-cell:nth-child(${gg})`).style.display = 'none'
    document
      .querySelector(`.Shop-cell:nth-child(${gg})`)
      .classList.remove('fade')
    let vv = indexzz + i
    if (vv > total) {
      vv = 1 + i
    }
    document.querySelector(`.Shop-cell:nth-child(${vv})`).style.display =
      'block'
    document.querySelector(`.Shop-cell:nth-child(${vv})`).style.display =
      'block'
    document.querySelector(`.Shop-cell:nth-child(${vv})`).classList.add('fade')
  }
}

export function ShowPrew() {
  let howMany = 4
  if (document.body.offsetWidth < 1000) {
    howMany = 2
  }

  if (document.body.offsetWidth < 600) {
    howMany = 1
  }

  const slides = document.getElementsByClassName('Shop-cell')
  const total = slides.length
  indexzz = indexzz - howMany
  if (indexzz < 1) {
    indexzz = total
  }

  for (let i = 1; i <= total; i++) {
    document.querySelector(`.Shop-cell:nth-child(${i})`).style.display = 'none'
  }

  for (let i = 0; i < howMany; i++) {
    let vv = indexzz - i
    if (indexzz < 1) {
      vv = total
    }
    document.querySelector(`.Shop-cell:nth-child(${vv})`).style.display =
      'block'
    document.querySelector(`.Shop-cell:nth-child(${vv})`).style.opacity = '1'
  }
}

export function onResize() {
  window.addEventListener(
    'resize',
    function (event) {
      let howMany = 4
      if (document.body.offsetWidth < 1000) {
        howMany = 2
      }

      if (document.body.offsetWidth < 600) {
        howMany = 1
      }

      const slides = document.getElementsByClassName('Shop-cell')
      const total = slides.length

      for (let i = 1; i <= total; i++) {
        document.querySelector(`.Shop-cell:nth-child(${i})`).style.display =
          'none'
      }

      for (let i = 1; i <= howMany; i++) {
        document.querySelector(`.Shop-cell:nth-child(${i})`).style.display =
          'block'
        document
          .querySelector(`.Shop-cell:nth-child(${i})`)
          .classList.add('fade')
      }

      indexzz = 1
      oldIndex = 1
    },
    true,
  )
}
