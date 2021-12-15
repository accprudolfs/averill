import { setPlantInHand } from '../../../store/slices/shop'
function buyPlant(plantId, dispatch, props) {
  try {
    dispatch(setPlantInHand(plantId))
    props.setDialogState(true)
    props.setSpeech(`${plantId} - Nice Choise`)
  } catch (e) {
    // TODO JS LINT ERR.
    // console.log(e)
  }
}

export default buyPlant
