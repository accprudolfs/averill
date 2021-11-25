import React from 'react'
import { useDispatch } from 'react-redux'

export default function LogoutBtn() {
  const dispatch = useDispatch()

  return (
    <button type="button" onClick={() => dispatch({ type: 'user/logout' })}>
      Logout
    </button>
  )
}
