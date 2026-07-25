import React from 'react'
import { Outlet, Navigate } from 'react-router'
import { useAuth } from '../contexts/AuthContext'

const ProtectedRoute = () => {
  const { loggedInUser } = useAuth()

  if (!loggedInUser) {
    return <Navigate to="/auth/login" />
  }

  return <Outlet />
}

export default ProtectedRoute
