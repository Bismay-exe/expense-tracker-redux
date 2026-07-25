import React from 'react'
import { Outlet } from 'react-router'
import { useTheme } from '../contexts/ThemeContext'

const AuthLayout = () => {
  const { theme, toggleTheme } = useTheme()

  return (
    <div className="login-screen" style={{ display: 'flex' }}>
      {/* Theme toggle */}
      <button
        id="themeBtn"
        type="button"
        onClick={toggleTheme}
        style={{ position: 'fixed', top: '24px', right: '24px', zIndex: 10 }}
      >
        <i className={theme === 'dark' ? 'ri-moon-fill' : 'ri-sun-fill'}></i>
      </button>

      <Outlet />
    </div>
  )
}

export default AuthLayout
