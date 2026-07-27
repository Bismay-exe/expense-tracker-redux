import { configureStore } from '@reduxjs/toolkit'
import transactionsReducer from './transactionsSlice'

const store = configureStore({
  reducer: {
    transactions: transactionsReducer,
  },
})

store.subscribe(() => {
  try {
    const state = store.getState().transactions

    localStorage.setItem('currency', state.currency)

    const userStr = localStorage.getItem('loggedin-user')
    if (!userStr) return

    const user = JSON.parse(userStr)
    const updatedUser = { ...user, name: state.userName, transactions: state.transactions }

    localStorage.setItem('loggedin-user', JSON.stringify(updatedUser))

    const usersStr = localStorage.getItem('registered-users')
    if (usersStr) {
      const users = JSON.parse(usersStr)
      const updatedUsers = users.map((u) =>
        u.id === user.id ? updatedUser : u
      )
      localStorage.setItem('registered-users', JSON.stringify(updatedUsers))
    }
  } catch {
  }
})

export default store
