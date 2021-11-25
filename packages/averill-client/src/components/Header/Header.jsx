import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import Logo from '../Logo/Logo.jsx'
import LogoutBtn from '../LogoutBtn/LogoutBtn.jsx'
import NavItem from '../NavItem/NavItem.jsx'

export default function NavBar() {
  const [isLoggedIn] = useState(true)
  const location = useLocation()

  return (
    <div className="flex justify-between px-10 py-5 bg-light-bg-green">
      <Logo />
      <nav className="flex space-x-10">
        {isLoggedIn ? (
          <>
            {location.pathname !== '/' && (
              <NavItem title="Explore Farms" to="/" />
            )}
            {location.pathname !== '/myfarm' && (
              <NavItem title="My Farm" to="/myfarm" />
            )}
            <LogoutBtn />
          </>
        ) : (
          <>
            {location.pathname !== '/login' && (
              <NavItem title="Login" to="/login" />
            )}
            {location.pathname !== '/signup' && (
              <NavItem title="Sign Up" to="/signup" />
            )}
            {location.pathname !== '/' && (
              <NavItem title="Explore Farms" to="/" />
            )}
          </>
        )}
      </nav>
    </div>
  )
}
