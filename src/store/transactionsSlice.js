import { createSlice, nanoid } from '@reduxjs/toolkit'

const initialState = {
  transactions: [],
  currency: 'INR',
  userName: 'User Name',
}

const transactionsSlice = createSlice({
  name: 'transactions',
  initialState,
  reducers: {
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
  addTransaction,
  deleteTransaction,
  editTransaction,
  clearAllTransactions,
  setCurrency,
  setUserName,
} = transactionsSlice.actions

export default transactionsSlice.reducer
