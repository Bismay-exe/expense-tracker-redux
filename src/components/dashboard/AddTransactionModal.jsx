import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTransaction } from '../../store/transactionsSlice'

const CATEGORIES = [
  { label: 'Salary',           icon: '💼', color: 'green'  },
  { label: 'Food & Dining',    icon: '🍔', color: 'orange' },
  { label: 'Shopping',         icon: '🛍️', color: 'purple' },
  { label: 'Recharge & Bills', icon: '📱', color: 'blue'   },
  { label: 'Petrol & Auto',    icon: '⛽', color: 'yellow' },
  { label: 'Utilities',        icon: '🔌', color: 'cyan'   },
  { label: 'Entertainment',    icon: '🎬', color: 'pink'   },
  { label: 'Other',            icon: '📦', color: 'indigo' },
]

const today = () => new Date().toISOString().split('T')[0]

const AddTransactionModal = ({ isOpen, onClose }) => {
  const dispatch = useDispatch()

  const [form, setForm] = useState({
    description: '',
    amount: '',
    type: 'expense',
    category: 'Food & Dining',
    date: today(),
  })

  const [error, setError] = useState('')

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    setError('')
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!form.description.trim()) return setError('Description is required')
    if (!form.amount || Number(form.amount) <= 0) return setError('Enter a valid amount')

    const cat = CATEGORIES.find((c) => c.label === form.category)

    dispatch(
      addTransaction({
        description: form.description.trim(),
        amount: Number(form.amount),
        type: form.type,
        category: form.category,
        categoryIcon: cat?.icon || '📦',
        categoryColor: cat?.color || 'indigo',
        date: new Date(form.date).toLocaleDateString('en-IN', {
          day: '2-digit',
          month: 'short',
          year: 'numeric',
        }),
      })
    )

    setForm({ description: '', amount: '', type: 'expense', category: 'Food & Dining', date: today() })
    setError('')
    onClose()
  }

  if (!isOpen) return null

  return (
    <div className="add-transaction-screen active" onClick={onClose}>
      <div
        className="form-container transaction-form-container"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="transaction-form-header">
          <h2 style={{ fontWeight: 800, fontSize: '22px' }}>Add Transaction</h2>
          <button className="close-btn" type="button" onClick={onClose}>
            <i className="ri-close-line"></i>
          </button>
        </div>

        {/* Form */}
        <form className="transaction-form" onSubmit={handleSubmit}>

          {/* Description */}
          <div className="input-box full-width">
            <label htmlFor="tx-description">Description</label>
            <input
              type="text"
              id="tx-description"
              name="description"
              placeholder="e.g. Monthly salary, Zomato order..."
              value={form.description}
              onChange={handleChange}
            />
          </div>

          {/* Amount */}
          <div className="input-box">
            <label htmlFor="tx-amount">Amount</label>
            <input
              type="number"
              id="tx-amount"
              name="amount"
              placeholder="0.00"
              min="0"
              step="0.01"
              value={form.amount}
              onChange={handleChange}
            />
          </div>

          {/* Date */}
          <div className="input-box">
            <label htmlFor="tx-date">Date</label>
            <input
              type="date"
              id="tx-date"
              name="date"
              value={form.date}
              onChange={handleChange}
            />
          </div>

          {/* Type */}
          <div className="input-box">
            <label htmlFor="tx-type">Type</label>
            <select id="tx-type" name="type" value={form.type} onChange={handleChange}>
              <option value="income">💹 Income</option>
              <option value="expense">💸 Expense</option>
            </select>
          </div>

          {/* Category */}
          <div className="input-box">
            <label htmlFor="tx-category">Category</label>
            <select id="tx-category" name="category" value={form.category} onChange={handleChange}>
              {CATEGORIES.map((c) => (
                <option key={c.label} value={c.label}>
                  {c.icon} {c.label}
                </option>
              ))}
            </select>
          </div>

          {/* Error */}
          {error && (
            <p className="full-width" style={{ color: 'var(--red)', fontSize: '0.85rem', fontWeight: 600 }}>
              {error}
            </p>
          )}

          {/* Submit */}
          <button type="submit" className="btn-submit full-width">
            Add Transaction
          </button>

        </form>
      </div>
    </div>
  )
}

export default AddTransactionModal
