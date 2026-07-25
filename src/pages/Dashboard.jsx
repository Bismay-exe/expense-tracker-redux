import React from 'react'
import { useSelector } from 'react-redux'
import StatCard from '../components/dashboard/StatCard'
import TransactionTable from '../components/dashboard/TransactionTable'
import CashFlowChart from '../components/dashboard/CashFlowChart'

const CURRENCY_SYMBOLS = {
  INR: '₹',
  USD: '$',
  EUR: '€',
  GBP: '£',
  JPY: '¥',
}

const Dashboard = () => {
  const { transactions, currency } = useSelector((state) => state.transactions)

  const symbol = CURRENCY_SYMBOLS[currency] || '₹'

  const totalIncome = transactions
    .filter((tx) => tx.type === 'income')
    .reduce((sum, tx) => sum + Number(tx.amount), 0)

  const totalExpense = transactions
    .filter((tx) => tx.type === 'expense')
    .reduce((sum, tx) => sum + Number(tx.amount), 0)

  const balance = totalIncome - totalExpense

  const formatAmount = (amount) =>
    `${symbol}${amount.toLocaleString('en-IN', { minimumFractionDigits: 2 })}`

  return (
    <section className="main-section active">
      <div className="main-header">
        <h1>Financial Overview</h1>
        <p>Real-time tracking application</p>
      </div>

      {/* Live Stat Cards */}
      <div className="cards">
        <StatCard
          icon="ri-wallet-3-line"
          label="Current Balance"
          value={formatAmount(balance)}
          iconColor="var(--blue)"
          iconBg="var(--blue-bg)"
        />
        <StatCard
          icon="ri-arrow-down-circle-line"
          label="Total Income"
          value={formatAmount(totalIncome)}
          iconColor="var(--green)"
          iconBg="var(--green-bg)"
        />
        <StatCard
          icon="ri-arrow-up-circle-line"
          label="Total Expense"
          value={formatAmount(totalExpense)}
          iconColor="var(--red)"
          iconBg="var(--red-bg)"
        />
        <StatCard
          icon="ri-exchange-funds-line"
          label="Total Transactions"
          value={transactions.length}
          iconColor="var(--purple)"
          iconBg="var(--purple-bg)"
        />
      </div>

      <CashFlowChart />
      <TransactionTable />
    </section>
  )
}

export default Dashboard
