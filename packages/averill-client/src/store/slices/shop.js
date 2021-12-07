import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  money: 100,
  plantInHand: null,
}

export const ShopSlice = createSlice({
  name: 'Shop',
  initialState,
  reducers: {
    setPlantInHand: (state, action) => {
      state.plantInHand = action.payload
    },
  },
})

export const { setPlantInHand } = ShopSlice.actions
export default ShopSlice.reducer
