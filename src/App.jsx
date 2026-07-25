import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Dashboard from './pages/Dashboard'
import Settings from './pages/Settings'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Dashboard />,
  },
  {
    path: '/settings',
    element: <Settings />,
  },
])

const App = () => {
  return <RouterProvider router={router} />
}

export default App
