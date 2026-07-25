import React from 'react'
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router'
import MainLayout from '../layouts/MainLayout'
import AuthLayout from '../layouts/AuthLayout'
import ProtectedRoute from './ProtectedRoute'
import PublicRoute from './PublicRoute'
import Dashboard from '../pages/Dashboard'
import Settings from '../pages/Settings'
import LoginPage from '../pages/LoginPage'
import RegisterPage from '../pages/RegisterPage'

const AppRoutes = () => {
  const router = createBrowserRouter([
    {
      path: '/auth',
      element: <PublicRoute />,
      children: [
        {
          element: <AuthLayout />,
          children: [
            { path: 'login', element: <LoginPage /> },
            { path: 'register', element: <RegisterPage /> },
          ],
        },
      ],
    },
    {
      path: '/',
      element: <ProtectedRoute />,
      children: [
        {
          element: <MainLayout />,
          children: [
            { index: true, element: <Dashboard /> },
            { path: 'settings', element: <Settings /> },
          ],
        },
      ],
    },
    {
      path: '*',
      element: <Navigate to="/" />,
    },
  ])

  return <RouterProvider router={router} />
}

export default AppRoutes
