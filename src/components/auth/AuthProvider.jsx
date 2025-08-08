import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { hydrateAuth } from '../../store/slices/authSlice'
import useAuth from '../../hooks/useAuth'

/**
 * AuthProvider component that handles global authentication logic
 * This component should wrap the entire app to manage token refresh and hydration
 */
const AuthProvider = ({ children }) => {
  const dispatch = useDispatch()
  const { checkAndRefreshToken } = useAuth()

  useEffect(() => {
    // Hydrate Redux store from localStorage on app startup
    dispatch(hydrateAuth())
    
    // Initial token check when the app loads
    checkAndRefreshToken()
  }, [dispatch, checkAndRefreshToken])

  return children
}

export default AuthProvider
