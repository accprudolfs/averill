import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { paths } from './routes'

const PublicRoute = ({ restricted }) => {
  const { token: isLoggedIn } = useSelector(state => state.user)

  return isLoggedIn && restricted ? <Navigate to={paths.home} /> : <Outlet />
}

export default PublicRoute
