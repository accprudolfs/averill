import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './slice'
import ShopReducer from './shopReducer'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    MyTestReducer: ShopReducer,
  },
})
