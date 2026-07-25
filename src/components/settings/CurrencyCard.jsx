import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setCurrency } from '../../store/transactionsSlice'

const CurrencyCard = () => {
  const dispatch = useDispatch()
  const currency = useSelector((state) => state.transactions.currency)

  return (
    <div className="settings-card">
      <div className="settings-card-header">
        <span className="settings-icon">
          <i className="fa-solid fa-coins"></i>
        </span>
        <h3>Currency</h3>
      </div>

      <label htmlFor="settings-currency">Preferred Currency</label>
      <select
        id="settings-currency"
        value={currency}
        onChange={(e) => dispatch(setCurrency(e.target.value))}
      >
        <option value="USD">🇺🇸 USD – US Dollar ($)</option>
        <option value="EUR">🇪🇺 EUR – Euro (€)</option>
        <option value="GBP">🇬🇧 GBP – British Pound (£)</option>
        <option value="INR">🇮🇳 INR – Indian Rupee (₹)</option>
        <option value="JPY">🇯🇵 JPY – Japanese Yen (¥)</option>
      </select>
    </div>
  )
}

export default CurrencyCard
