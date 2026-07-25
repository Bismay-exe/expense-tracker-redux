import React from 'react'
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

// Register required Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

const DUMMY_DATA = {
  income: 50000,
  expense: 15000,
}

const CashFlowChart = () => {
  const data = {
    labels: ['Income vs Expenses'],
    datasets: [
      {
        label: 'Income',
        data: [DUMMY_DATA.income],
        backgroundColor: '#10B981',
        borderRadius: 6,
      },
      {
        label: 'Expenses',
        data: [DUMMY_DATA.expense],
        backgroundColor: '#E11D48',
        borderRadius: 6,
      },
    ],
  }

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          color: 'rgba(128, 128, 128, 0.1)',
        },
        ticks: {
          font: { family: 'Inter' },
        },
      },
      x: {
        grid: { display: false },
        ticks: {
          font: { family: 'Inter' },
        },
      },
    },
    plugins: {
      legend: {
        position: 'top',
        labels: {
          font: { family: 'Inter', size: 13 },
          usePointStyle: true,
          pointStyleWidth: 10,
        },
      },
      tooltip: {
        callbacks: {
          label: (ctx) => ` ₹${ctx.parsed.y.toLocaleString('en-IN')}`,
        },
      },
    },
  }

  return (
    <div className="card chart-card">
      <div className="card-header">
        <h3>Cash Flow Analysis</h3>
      </div>
      <div className="chart-body">
        <Bar data={data} options={options} />
      </div>
    </div>
  )
}

export default CashFlowChart
