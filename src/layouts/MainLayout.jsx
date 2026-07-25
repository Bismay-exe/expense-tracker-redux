import React, { useState } from 'react'
import { Outlet } from 'react-router'
import Sidebar from '../components/layout/Sidebar'
import Navbar from '../components/layout/Navbar'
import AddTransactionModal from '../components/dashboard/AddTransactionModal'

const MainLayout = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)

  const toggleSidebar = () => setIsSidebarOpen((prev) => !prev)

  return (
    <main className="main-container">
      <Sidebar
        isOpen={isSidebarOpen}
        onToggle={toggleSidebar}
      />

      <div className="main-page">
        <Navbar
          openModal={() => setIsModalOpen(true)}
          onToggleSidebar={toggleSidebar}
        />
        <Outlet />
      </div>

      <AddTransactionModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </main>
  )
}

export default MainLayout
