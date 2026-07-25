import React from 'react'
import { useSelector } from 'react-redux'
import { useTheme } from '../../contexts/ThemeContext'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'
import { Bar } from 'react-chartjs-2'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

const CURRENCY_SYMBOLS = {
  INR: '₹', USD: '$', EUR: '€', GBP: '£', JPY: '¥',
}

const CashFlowChart = () => {
  const { transactions, currency } = useSelector((state) => state.transactions)
  const { theme } = useTheme()

  const symbol = CURRENCY_SYMBOLS[currency] || '₹'

  const totalIncome = transactions
    .filter((tx) => tx.type === 'income')
    .reduce((sum, tx) => sum + Number(tx.amount), 0)

  const totalExpense = transactions
    .filter((tx) => tx.type === 'expense')
    .reduce((sum, tx) => sum + Number(tx.amount), 0)

  const isDark = theme === 'dark'
  const gridColor = isDark ? 'rgba(255,255,255,0.07)' : 'rgba(0,0,0,0.06)'
  const labelColor = isDark ? '#757575' : '#9c9c9c'

  const data = {
    labels: ['Income vs Expenses'],
    datasets: [
      {
        label: 'Income',
        data: [totalIncome],
        backgroundColor: '#10B981',
        borderRadius: 8,
        borderSkipped: false,
      },
      {
        label: 'Expenses',
        data: [totalExpense],
        backgroundColor: '#E11D48',
        borderRadius: 8,
        borderSkipped: false,
      },
    ],
  }

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
        grid: { color: gridColor },
        ticks: {
          color: labelColor,
          font: { family: 'Inter', size: 12 },
          callback: (val) => `${symbol}${val.toLocaleString('en-IN')}`,
        },
      },
      x: {
        grid: { display: false },
        ticks: {
          color: labelColor,
          font: { family: 'Inter', size: 12 },
        },
      },
    },
    plugins: {
      legend: {
        position: 'top',
        labels: {
          color: labelColor,
          font: { family: 'Inter', size: 13 },
          usePointStyle: true,
          pointStyleWidth: 10,
        },
      },
      tooltip: {
        callbacks: {
          label: (ctx) =>
            ` ${symbol}${ctx.parsed.y.toLocaleString('en-IN', { minimumFractionDigits: 2 })}`,
        },
      },
    },
  }

  return (
    <div className="card chart-card">
      <div className="card-header">
        <h3>Cash Flow Analysis</h3>
        <span style={{ fontSize: '0.85rem', color: 'var(--secondary-color)', fontWeight: 500 }}>
          Income vs Expenses
        </span>
      </div>
      <div className="chart-body">
        <Bar key={theme} data={data} options={options} />
      </div>
    </div>
  )
}

export default CashFlowChart
