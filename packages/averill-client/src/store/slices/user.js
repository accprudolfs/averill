import { createSlice } from '@reduxjs/toolkit'
import { api } from '../services'

const json = localStorage.getItem('user')
const initialState = json ? JSON.parse(json) : {}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logout: () => {
      localStorage.removeItem('user')
      return {}
    },
  },
  extraReducers: builder => {
    builder.addMatcher(api.endpoints.login.matchFulfilled, (state, action) => {
    
      state.username = action.payload.name
      state.token = action.payload.token
  
    })
  },
})

export const { logout } = userSlice.actions

export default userSlice.reducer