import React from 'react'
import { useLogoutMutation } from '../../store/services.js'
import Spinner from '../auth/Spinner.jsx'
import ErrorMessage from '../Error/Error.jsx'
import GameText from '../GameText/GameText.jsx'
import GameButton from '../HoverImageBlock/GameButton.jsx'

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
        <GameButton>
          <button type="button" onClick={handleLogout}>
            <GameText>Logout</GameText>
          </button>
        </GameButton>
      )}
      {isError && <ErrorMessage name="Logout" visible />}
    </>
  )
}
