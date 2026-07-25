import { configureStore } from '@reduxjs/toolkit'
import transactionsReducer from './transactionsSlice'

const store = configureStore({
  reducer: {
    transactions: transactionsReducer,
  },
})

// Save to localStorage whenever store state changes
store.subscribe(() => {
  try {
    localStorage.setItem('fintrack-state', JSON.stringify(store.getState().transactions))
  } catch {
    // Silently ignore storage errors (e.g. private browsing quota)
  }
})

export default store
