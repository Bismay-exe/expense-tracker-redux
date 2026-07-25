import { configureStore } from '@reduxjs/toolkit'
import transactionsReducer from './transactionsSlice'

const store = configureStore({
  reducer: {
    transactions: transactionsReducer,
  },
})

// Sync Redux state back into the 4 localStorage keys
store.subscribe(() => {
  try {
    const state = store.getState().transactions

    // 1. Save currency
    localStorage.setItem('currency', state.currency)

    // 2. Update loggedin-user's transactions
    const userStr = localStorage.getItem('loggedin-user')
    if (!userStr) return

    const user = JSON.parse(userStr)
    const updatedUser = { ...user, name: state.userName, transactions: state.transactions }

    localStorage.setItem('loggedin-user', JSON.stringify(updatedUser))

    // 3. Sync same user in registered-users
    const usersStr = localStorage.getItem('registered-users')
    if (usersStr) {
      const users = JSON.parse(usersStr)
      const updatedUsers = users.map((u) =>
        u.id === user.id ? updatedUser : u
      )
      localStorage.setItem('registered-users', JSON.stringify(updatedUsers))
    }
  } catch {
    // Silently ignore storage errors
  }
})

export default store
