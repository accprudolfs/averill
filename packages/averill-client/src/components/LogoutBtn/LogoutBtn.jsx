import React from 'react'
import { useLogoutMutation } from '../../store/services.js'
import Spinner from '../auth/Spinner.jsx'
import ErrorMessage from '../Error/Error.jsx'

export default function LogoutBtn() {
  const [logoutTrigger, { isError, isLoading }] = useLogoutMutation()

  const handleLogout = () => {
    logoutTrigger()
  }

  return (
    <>
      {isLoading ? (
        <Spinner height={4} width={4} />
      ) : (
        <button
          type="button"
          onClick={handleLogout}
          className="hover:opacity-50 focus:opacity-50"
        >
          Logout
        </button>
      )}
      {isError && <ErrorMessage name="Logout" visible />}
    </>
  )
}
