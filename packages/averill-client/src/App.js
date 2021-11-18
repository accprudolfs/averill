import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './store'
import AllFarmsView from './views/AllFarmsView.jsx'
import LoginView from './views/LoginView.jsx'
import SignupView from './views/SignupView.jsx'
import MyFarmView from './views/MyFarmView.jsx'

export default function App() {
  return (
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<AllFarmsView />} />
        <Route path="login" element={<LoginView />} />
        <Route path="signup" element={<SignupView />} />
        <Route path="myfarm" element={<MyFarmView />} />
      </Routes>
    </Provider>
  )
}
