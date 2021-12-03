import { setPlantInHand } from '../../../store/slices/shop'
// But Plant , add id to state TODO now trader just say plant id
async function buyPlant(plantId, index, setSpeech, dispatch) {
  // Highliting selected PLANT
  const traderSpeech = document.getElementById('traderSpeech')
  const el = document.getElementsByClassName('Shop-product-price')
  const elParent = document.getElementsByClassName('Shop-cell-inner')
  // Remove Highliting from all divs
  for (let i = 0; i < el.length; i++) {
    el[i].classList.remove('highlighted')
    elParent[i].classList.remove('highlightedCell')
  }
  // Add Highliting
  el[index].classList.add('highlighted')
  elParent[index].classList.add('highlightedCell')
  traderSpeech.style.display = 'block'
  setSpeech(`${plantId} - Nice Choise`)
  try {
    dispatch(setPlantInHand(plantId))
  } catch (e) {
    // TODO
  }
}

export default buyPlant
