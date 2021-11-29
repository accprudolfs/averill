import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { paths } from './routes'
import PrivateRoute from './PrivateRoute.jsx'
import PublicRoute from './PublicRoute.jsx'
import AllFarmsView from '../views/AllFarmsView.jsx'
import LoginView from '../views/LoginView.jsx'
import SignupView from '../views/SignupView.jsx'
import MyFarmView from '../views/MyFarmView.jsx'

const Router = () => (
  <Routes>
    <Route element={<PublicRoute />}>
      <Route path={paths.home} element={<AllFarmsView />} />
    </Route>
    <Route element={<PublicRoute />}>
      <Route path={paths.login} element={<LoginView />} />
    </Route>
    <Route element={<PublicRoute />}>
      <Route path={paths.signup} element={<SignupView />} />
    </Route>
    <Route element={<PrivateRoute />}>
      <Route path={paths.myFarm} element={<MyFarmView />} />
    </Route>
  </Routes>
)

export default Router
