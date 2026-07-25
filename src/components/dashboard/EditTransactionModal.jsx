import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { editTransaction } from '../../store/transactionsSlice'
import { useToast } from '../../contexts/ToastContext'

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

const EditTransactionModal = ({ transaction, onClose }) => {
  const dispatch = useDispatch()
  const { showToast } = useToast()

  const [form, setForm] = useState({
    description: '',
    amount: '',
    type: 'expense',
    category: 'Food & Dining',
    date: '',
  })

  const [error, setError] = useState('')

  // Pre-fill form when transaction changes
  useEffect(() => {
    if (transaction) {
      setForm({
        description: transaction.description,
        amount: transaction.amount,
        type: transaction.type,
        category: transaction.category,
        date: transaction.rawDate || '',
      })
    }
  }, [transaction])

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
      editTransaction({
        ...transaction,
        description: form.description.trim(),
        amount: Number(form.amount),
        type: form.type,
        category: form.category,
        categoryIcon: cat?.icon || '📦',
        categoryColor: cat?.color || 'indigo',
        date: form.date
          ? new Date(form.date).toLocaleDateString('en-IN', {
              day: '2-digit',
              month: 'short',
              year: 'numeric',
            })
          : transaction.date,
        rawDate: form.date,
      })
    )

    showToast('Transaction updated successfully!')
    onClose()
  }

  if (!transaction) return null

  return (
    <div className="add-transaction-screen active" onClick={onClose}>
      <div
        className="form-container transaction-form-container"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="transaction-form-header">
          <h2 style={{ fontWeight: 800, fontSize: '22px' }}>Edit Transaction</h2>
          <button className="close-btn" type="button" onClick={onClose}>
            <i className="ri-close-line"></i>
          </button>
        </div>

        {/* Form */}
        <form className="transaction-form" onSubmit={handleSubmit}>

          <div className="input-box full-width">
            <label htmlFor="edit-description">Description</label>
            <input
              type="text"
              id="edit-description"
              name="description"
              placeholder="e.g. Monthly salary, Zomato order..."
              value={form.description}
              onChange={handleChange}
            />
          </div>

          <div className="input-box">
            <label htmlFor="edit-amount">Amount</label>
            <input
              type="number"
              id="edit-amount"
              name="amount"
              placeholder="0.00"
              min="0"
              step="0.01"
              value={form.amount}
              onChange={handleChange}
            />
          </div>

          <div className="input-box">
            <label htmlFor="edit-date">Date</label>
            <input
              type="date"
              id="edit-date"
              name="date"
              value={form.date}
              onChange={handleChange}
            />
          </div>

          <div className="input-box">
            <label htmlFor="edit-type">Type</label>
            <select id="edit-type" name="type" value={form.type} onChange={handleChange}>
              <option value="income">💹 Income</option>
              <option value="expense">💸 Expense</option>
            </select>
          </div>

          <div className="input-box">
            <label htmlFor="edit-category">Category</label>
            <select id="edit-category" name="category" value={form.category} onChange={handleChange}>
              {CATEGORIES.map((c) => (
                <option key={c.label} value={c.label}>
                  {c.icon} {c.label}
                </option>
              ))}
            </select>
          </div>

          {error && (
            <p className="full-width" style={{ color: 'var(--red)', fontSize: '0.85rem', fontWeight: 600 }}>
              {error}
            </p>
          )}

          <button type="submit" className="btn-submit full-width">
            Save Changes
          </button>

        </form>
      </div>
    </div>
  )
}

export default EditTransactionModal
