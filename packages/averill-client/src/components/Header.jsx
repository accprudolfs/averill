import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import Logo from './Logo.jsx'
import NavItem from './NavItem.jsx'

export default function NavBar() {
  const [isLoggedIn] = useState(true)
  const location = useLocation()

  return (
    <nav className="flex justify-between px-10 py-5">
      <Logo />
      <div className="flex space-x-10">
        {isLoggedIn ? (
          <>
            {location.pathname !== '/' && (
              <NavItem title="Explore Farms" to="/" />
            )}
            {location.pathname !== '/myfarm' && (
              <NavItem title="My Farm" to="/myfarm" />
            )}
            <button type="button">Logout</button>
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
      </div>
    </nav>
  )
}
