import { createContext, useContext, useState } from 'react'

export const Auth = createContext()

const getUsers = () => {
  try {
    return JSON.parse(localStorage.getItem('registered-users')) || []
  } catch { return [] }
}

const getLoggedInUser = () => {
  try {
    return JSON.parse(localStorage.getItem('loggedin-user')) || null
  } catch { return null }
}

export const AuthProvider = ({ children }) => {
  const [registeredUsers, setRegisteredUsers] = useState(getUsers)
  const [loggedInUser, setLoggedInUser] = useState(getLoggedInUser)

  const register = ({ name, email, password }) => {
    const users = getUsers()
    if (users.find((u) => u.email === email)) {
      return { success: false, message: 'Email already registered' }
    }

    const newUser = {
      id: `user_${Date.now()}`,
      name,
      email,
      password,
      transactions: [],
    }

    const updated = [...users, newUser]
    setRegisteredUsers(updated)
    localStorage.setItem('registered-users', JSON.stringify(updated))
    return { success: true }
  }

  const login = ({ email, password }) => {
    const users = getUsers()
    const user = users.find((u) => u.email === email && u.password === password)
    if (!user) return { success: false, message: 'Invalid email or password' }

    setLoggedInUser(user)
    localStorage.setItem('loggedin-user', JSON.stringify(user))
    return { success: true, user }
  }

  const logout = () => {
    setLoggedInUser(null)
    localStorage.removeItem('loggedin-user')
  }

  return (
    <Auth.Provider value={{ loggedInUser, register, login, logout }}>
      {children}
    </Auth.Provider>
  )
}

export const useAuth = () => useContext(Auth)
