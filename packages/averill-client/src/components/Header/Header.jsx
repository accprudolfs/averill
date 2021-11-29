import React from 'react'
import { useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { paths } from '../../router/routes'
import Logo from '../Logo/Logo.jsx'
import LogoutBtn from '../LogoutBtn/LogoutBtn.jsx'
import NavItem from './NavItem.jsx'

export default function NavBar() {
  const { token: isLoggedIn } = useSelector(state => state.user)
  const location = useLocation()

  const loggedInNavItems = [
    { title: 'Explore Farms', path: paths.home },
    { title: 'My Farm', path: paths.myFarm },
  ]

  const loggedOutNavItems = [
    { title: 'Login', path: paths.login },
    { title: 'Sign Up', path: paths.signup },
    { title: 'Explore Farms', path: paths.home },
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
                  <NavItem title={title} to={path} key={path} />
                ),
            )}
            <LogoutBtn />
          </>
        ) : (
          <>
            {loggedOutNavItems.map(
              ({ path, title }) =>
                location.pathname !== path && (
                  <NavItem title={title} to={path} key={path} />
                ),
            )}
          </>
        )}
      </nav>
    </div>
  )
}
