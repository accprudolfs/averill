import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { api } from './services'
import userSlice from './slices/user'

// import counterReducer from './slice'
// import ShopReducer from './shopReducer'

export const store = configureStore({
  reducer: {
    // counter: counterReducer,
    [api.reducerPath]: api.reducer,
      user: userSlice,
    // MyTestReducer: ShopReducer,
  },
  middleware: getDefaultMiddleware =>[...getDefaultMiddleware(),api.middleware ],
   
})

setupListeners(store.dispatch)