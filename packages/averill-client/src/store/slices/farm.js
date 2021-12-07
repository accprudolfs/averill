import { createSlice } from '@reduxjs/toolkit'

export const farmSlice = createSlice({
  name: 'farm',
  initialState: { plants: [], tick: 0, waterMode: false },
  reducers: {
    addPlant: (state, action) => {
      state.plants.push(action.payload)
    },
    removePlant: (state, action) => {
      state.plants = state.plants.filter(
        item => item.position !== action.payload,
      )
    },
    waterPlant: (state, action) => {
      state.plants.find(item => item.position === action.payload).watered =
        Date.now()
    },
    updateFarm: state => {
      state.tick++
    },
    toggleWaterMode: state => {
      state.waterMode = !state.waterMode
    },
  },
})

export const {
  addPlant,
  removePlant,
  updateFarm,
  toggleWaterMode,
  waterPlant,
} = farmSlice.actions

export default farmSlice.reducer
