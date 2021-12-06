import { createSlice } from '@reduxjs/toolkit'

export const farmSlice = createSlice({
  name: 'farm',
  initialState: { plants: [] },
  reducers: {
    addPlant: (state, action) => {
      state.plants.push(action.payload)
    },
  },
})

export const { addPlant } = farmSlice.actions

export default farmSlice.reducer
