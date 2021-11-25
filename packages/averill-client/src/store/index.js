import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { api } from './services'
import userSlice from './slices/user'

export const store = configureStore({
  reducer: {

    [api.reducerPath]: api.reducer,
      user: userSlice,
 
  },
  middleware: getDefaultMiddleware =>[...getDefaultMiddleware(),api.middleware ],
   
})

setupListeners(store.dispatch)