import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { api } from './services'
import userSlice from './slices/user'
import ShopSlice from './slices/shop'
import farmSlice from './slices/farm'

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    user: userSlice,
    shop: ShopSlice,
    farm: farmSlice,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    api.middleware,
  ],
})

setupListeners(store.dispatch)
