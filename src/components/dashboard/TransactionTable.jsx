import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { deleteTransaction } from '../../store/transactionsSlice'
import FilterBar from './FilterBar'
import EditTransactionModal from './EditTransactionModal'

const CURRENCY_SYMBOLS = {
  INR: '₹', USD: '$', EUR: '€', GBP: '£', JPY: '¥',
}

const TransactionTable = () => {
  const dispatch = useDispatch()
  const { transactions, currency } = useSelector((state) => state.transactions)
  const symbol = CURRENCY_SYMBOLS[currency] || '₹'

  const [search, setSearch] = useState('')
  const [typeFilter, setTypeFilter] = useState('all')
  const [categoryFilter, setCategoryFilter] = useState('all')
  const [editingTx, setEditingTx] = useState(null)

  const filtered = transactions.filter((tx) => {
    const matchSearch = tx.description.toLowerCase().includes(search.toLowerCase())
    const matchType = typeFilter === 'all' || tx.type === typeFilter
    const matchCategory = categoryFilter === 'all' || tx.category === categoryFilter
    return matchSearch && matchType && matchCategory
  })

  const formatAmount = (tx) => {
    const formatted = `${symbol}${Number(tx.amount).toLocaleString('en-IN', { minimumFractionDigits: 2 })}`
    return tx.type === 'income' ? `+${formatted}` : `-${formatted}`
  }

  return (
    <>
      <div className="card transactions-card">
        <div className="card-header">
          <h3>All Transactions</h3>
        </div>

        <FilterBar
          search={search}
          setSearch={setSearch}
          typeFilter={typeFilter}
          setTypeFilter={setTypeFilter}
          categoryFilter={categoryFilter}
          setCategoryFilter={setCategoryFilter}
        />

        {/* Table */}
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
              {filtered.length === 0 ? (
                <tr>
                  <td colSpan={6} className="empty-state">
                    <div className="empty-icon">💸</div>
                    <p>No transactions found</p>
                    <span>
                      {transactions.length === 0
                        ? 'Add your first transaction to get started'
                        : 'Try adjusting your filters'}
                    </span>
                  </td>
                </tr>
              ) : (
                filtered.map((tx) => (
                  <tr key={tx.id} className="tx-row">
                    <td className="tx-date">{tx.date}</td>

                    <td>
                      <div className="tx-desc-inner">
                        <span className="tx-title">{tx.description}</span>
                      </div>
                    </td>

                    <td>
                      <span className={`badge badge-${tx.categoryColor}`}>
                        {tx.categoryIcon} {tx.category}
                      </span>
                    </td>

                    <td>
                      <span className={`badge ${tx.type === 'income' ? 'badge-green' : 'badge-red'}`}>
                        <i className={`${tx.type === 'income' ? 'fa-solid fa-arrow-trend-up' : 'fa-solid fa-bag-shopping'} type-icon`}></i>
                        {tx.type === 'income' ? 'Income' : 'Expense'}
                      </span>
                    </td>

                    <td className={`tx-amount ${tx.type}`}>{formatAmount(tx)}</td>

                    <td>
                      <div style={{ display: 'flex', gap: '8px' }}>
                        <button
                          className="edit-tx-btn"
                          type="button"
                          onClick={() => setEditingTx(tx)}
                        >
                          <i className="fa-regular fa-pen-to-square"></i>
                        </button>
                        <button
                          className="delete-tx-btn"
                          type="button"
                          onClick={() => dispatch(deleteTransaction(tx.id))}
                        >
                          <i className="fa-solid fa-trash-can"></i>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Edit Modal — self-contained inside TransactionTable */}
      <EditTransactionModal
        transaction={editingTx}
        onClose={() => setEditingTx(null)}
      />
    </>
  )
}

export default TransactionTable
