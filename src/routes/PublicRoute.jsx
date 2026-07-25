import React from 'react'
import { Outlet, Navigate } from 'react-router'
import { useAuth } from '../contexts/AuthContext'

const PublicRoute = () => {
  const { loggedInUser } = useAuth()

  if (loggedInUser) {
    return <Navigate to="/" />
  }

  return <Outlet />
}

export default PublicRoute
