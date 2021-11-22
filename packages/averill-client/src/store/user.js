import { createSlice } from '@reduxjs/toolkit'
import { api } from './services'

const json = localStorage.getItem('marshalltown')
const initialState = json ? JSON.parse(json) : {}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logout: () => {
      localStorage.removeItem('marshalltown')
      return {}
    },
  },
  extraReducers: builder => {
    builder.addMatcher(api.endpoints.signIn.matchFulfilled, (state, action) => {
      state.id = action.payload.id
      state.username = action.payload.username
      state.token = action.payload.token
      localStorage.setItem('marshalltown', JSON.stringify(action.payload))
    })
  },
})

export const { logout } = userSlice.actions

export default userSlice.reducer
