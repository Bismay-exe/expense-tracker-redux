import React from 'react'
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router'
import MainLayout from '../layouts/MainLayout'
import Dashboard from '../pages/Dashboard'
import Settings from '../pages/Settings'

const AppRoutes = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <MainLayout />,
      children: [
        { index: true, element: <Dashboard /> },
        { path: 'settings', element: <Settings /> },
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
