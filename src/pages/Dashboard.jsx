import React from 'react'
import Sidebar from '../components/layout/Sidebar'
import Navbar from '../components/layout/Navbar'
import StatCard from '../components/dashboard/StatCard'
import TransactionTable from '../components/dashboard/TransactionTable'
import CashFlowChart from '../components/dashboard/CashFlowChart'

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

          {/* Stat Cards */}
          <div className="cards">
            <StatCard
              icon="ri-wallet-3-line"
              label="Current Balance"
              value="₹0"
              iconColor="var(--blue)"
              iconBg="var(--blue-bg)"
            />
            <StatCard
              icon="ri-arrow-down-circle-line"
              label="Total Income"
              value="₹0"
              iconColor="var(--green)"
              iconBg="var(--green-bg)"
            />
            <StatCard
              icon="ri-arrow-up-circle-line"
              label="Total Expense"
              value="₹0"
              iconColor="var(--red)"
              iconBg="var(--red-bg)"
            />
            <StatCard
              icon="ri-exchange-funds-line"
              label="Total Transactions"
              value="0"
              iconColor="var(--purple)"
              iconBg="var(--purple-bg)"
            />
          </div>

          <CashFlowChart />

          <TransactionTable />
        </section>
      </div>
    </main>
  )
}

export default Dashboard
