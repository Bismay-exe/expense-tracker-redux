import React from 'react'
import FilterBar from './FilterBar'

const DUMMY_TRANSACTIONS = [
  {
    id: 1,
    date: '25 Jul 2026',
    description: 'Monthly Salary',
    category: 'Salary',
    categoryBadge: 'badge-green',
    categoryIcon: '💼',
    type: 'income',
    amount: '+₹50,000.00',
  },
  {
    id: 2,
    date: '24 Jul 2026',
    description: 'Amazon Order',
    category: 'Shopping',
    categoryBadge: 'badge-purple',
    categoryIcon: '🛍️',
    type: 'expense',
    amount: '-₹1,299.00',
  },
  {
    id: 3,
    date: '23 Jul 2026',
    description: 'Zomato',
    category: 'Food & Dining',
    categoryBadge: 'badge-orange',
    categoryIcon: '🍔',
    type: 'expense',
    amount: '-₹450.00',
  },
]

const TransactionTable = () => {
  return (
    <div className="card transactions-card">
      <div className="card-header">
        <h3>All Transactions</h3>
      </div>

      <FilterBar />
      <div>
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Description</th>
              <th>Category</th>
              <th>Type</th>
              <th>Amount</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {DUMMY_TRANSACTIONS.map((tx) => (
              <tr key={tx.id} className="tx-row">
                {/* Date */}
                <td className="tx-date">{tx.date}</td>

                {/* Description */}
                <td>
                  <div className="tx-desc-inner">
                    <span className="tx-title">{tx.description}</span>
                  </div>
                </td>

                {/* Category */}
                <td>
                  <span className={`badge ${tx.categoryBadge}`}>
                    {tx.categoryIcon} {tx.category}
                  </span>
                </td>

                {/* Type */}
                <td>
                  <span className={`badge ${tx.type === 'income' ? 'badge-green' : 'badge-red'}`}>
                    <i className={`${tx.type === 'income' ? 'fa-solid fa-arrow-trend-up' : 'fa-solid fa-bag-shopping'} type-icon`}></i>
                    {tx.type === 'income' ? 'Income' : 'Expense'}
                  </span>
                </td>

                {/* Amount */}
                <td className={`tx-amount ${tx.type}`}>{tx.amount}</td>

                {/* Actions */}
                <td>
                  <div style={{ display: 'flex', gap: '8px' }}>
                    <button className="edit-tx-btn" type="button">
                      <i className="fa-regular fa-pen-to-square"></i>
                    </button>
                    <button className="delete-tx-btn" type="button">
                      <i className="fa-solid fa-trash-can"></i>
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default TransactionTable
