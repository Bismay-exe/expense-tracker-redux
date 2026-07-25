import React from 'react'
import { useTheme } from '../../contexts/ThemeContext'
import { SunMoon } from 'lucide-react'

const AppearanceCard = () => {
  const { theme, toggleTheme } = useTheme()

  return (
    <div className="settings-card">
      <div className="settings-card-header">
        <span className="settings-icon">
          <SunMoon />
        </span>
        <h3>Appearance</h3>
      </div>

      <div className="toggle-row">
        <span>Dark Mode</span>
        <label className="toggle-switch" htmlFor="dark-toggle">
          <input
            type="checkbox"
            id="dark-toggle"
            checked={theme === 'dark'}
            onChange={toggleTheme}
          />
          <span className="toggle-slider"></span>
        </label>
      </div>
    </div>
  )
}

export default AppearanceCard
