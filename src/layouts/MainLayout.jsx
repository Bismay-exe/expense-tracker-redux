import React, { useState } from 'react'
import { Outlet } from 'react-router'
import Sidebar from '../components/layout/Sidebar'
import Navbar from '../components/layout/Navbar'
import AddTransactionModal from '../components/dashboard/AddTransactionModal'

const MainLayout = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <main className="main-container">
      <Sidebar />

      <div className="main-page">
        <Navbar openModal={() => setIsModalOpen(true)} />
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
