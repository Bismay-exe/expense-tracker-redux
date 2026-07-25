import React from 'react'
import Sidebar from '../components/layout/Sidebar'
import Navbar from '../components/layout/Navbar'

const Dashboard = () => {
  return (
    <main className="main-container">
      <Sidebar />

      <div className="main-page">
        <Navbar />

        <section className="main-section active">
          <div className="main-header">
            <h1>Financial Overview</h1>
            <p>Real-time tracking application</p>
          </div>
          {/* StatCards, Chart, TransactionTable will come next */}
        </section>
      </div>
    </main>
  )
}

export default Dashboard
