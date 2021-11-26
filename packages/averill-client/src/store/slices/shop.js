import { createSlice } from '@reduxjs/toolkit'
import { api } from '../services'

const initialState = {
  AllPlants: [],
  money: 100,
}

export const ShopSlice = createSlice({
  name: 'getAllPlants2',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addMatcher(
      api.endpoints.getAllPlants.matchFulfilled,
      (state, action) => {
        state.AllPlants = action.payload
      },
    )
  },
})

export default ShopSlice.reducer
