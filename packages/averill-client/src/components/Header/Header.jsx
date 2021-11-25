import React from 'react'
import { useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Logo from '../Logo/Logo.jsx'
import LogoutBtn from '../LogoutBtn/LogoutBtn.jsx'
import NavItem from '../NavItem/NavItem.jsx'

export default function NavBar() {
  const { token: isLoggedIn } = useSelector(state => state.user)
  const location = useLocation()

  const loggedInNavItems = [
    { title: 'Explore Farms', path: '/' },
    { title: 'My Farm', path: '/myfarm' },
  ]

  const loggedOutNavItems = [
    { title: 'Login', path: '/login' },
    { title: 'Sign Up', path: '/signup' },
    { title: 'Explore Farms', path: '/' },
  ]

  return (
    <div className="flex justify-between items-center px-10 bg-light-bg-green">
      <Logo />
      <nav className="flex h-16 space-x-10">
        {isLoggedIn ? (
          <>
            {loggedInNavItems.map(
              ({ path, title }) =>
                location.pathname !== path && (
                  <NavItem title={title} to={path} />
                ),
            )}
            <LogoutBtn />
          </>
        ) : (
          <>
            {loggedOutNavItems.map(
              ({ path, title }) =>
                location.pathname !== path && (
                  <NavItem title={title} to={path} />
                ),
            )}
          </>
        )}
      </nav>
    </div>
  )
}
