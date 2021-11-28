import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { paths } from './routes'

const PrivateRoute = () => {
  const { token: isLoggedIn } = useSelector(state => state.user)

  // If authorized, return an outlet that will render child elements
  // If not, return element that will navigate to signup page
  return isLoggedIn ? <Outlet /> : <Navigate to={paths.signup} />
}

export default PrivateRoute
