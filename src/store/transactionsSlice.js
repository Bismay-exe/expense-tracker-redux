import { createSlice, nanoid } from '@reduxjs/toolkit'

const loadState = () => {
  try {
    const user = JSON.parse(localStorage.getItem('loggedin-user'))
    const currency = localStorage.getItem('currency') || 'INR'
    if (user) {
      return {
        transactions: user.transactions || [],
        currency,
        userName: user.name || 'User Name',
      }
    }
    return { transactions: [], currency, userName: 'User Name' }
  } catch {
    return { transactions: [], currency: 'INR', userName: 'User Name' }
  }
}

const transactionsSlice = createSlice({
  name: 'transactions',
  initialState: loadState(),
  reducers: {
    loadUserData: (state, action) => {
      state.transactions = action.payload.transactions || []
      state.userName = action.payload.name || 'User Name'
    },

    resetUserData: (state) => {
      state.transactions = []
      state.userName = 'User Name'
    },

    addTransaction: {
      reducer: (state, action) => {
        state.transactions.push(action.payload)
      },
      prepare: (transaction) => ({
        payload: { ...transaction, id: nanoid() },
      }),
    },

    deleteTransaction: (state, action) => {
      state.transactions = state.transactions.filter(
        (tx) => tx.id !== action.payload
      )
    },

    editTransaction: (state, action) => {
      const index = state.transactions.findIndex(
        (tx) => tx.id === action.payload.id
      )
      if (index !== -1) {
        state.transactions[index] = action.payload
      }
    },

    clearAllTransactions: (state) => {
      state.transactions = []
    },

    setCurrency: (state, action) => {
      state.currency = action.payload
    },

    setUserName: (state, action) => {
      state.userName = action.payload
    },
  },
})

export const {
  loadUserData,
  resetUserData,
  addTransaction,
  deleteTransaction,
  editTransaction,
  clearAllTransactions,
  setCurrency,
  setUserName,
} = transactionsSlice.actions

export default transactionsSlice.reducer
