import React from 'react'
import { Outlet } from 'react-router'
import Sidebar from '../components/layout/Sidebar'
import Navbar from '../components/layout/Navbar'

const MainLayout = () => {
  return (
    <main className="main-container">
      <Sidebar />

      <div className="main-page">
        <Navbar />
        <Outlet />
      </div>
    </main>
  )
}

export default MainLayout
