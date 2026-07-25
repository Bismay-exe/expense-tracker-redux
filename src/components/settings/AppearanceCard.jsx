import React from 'react'

const AppearanceCard = () => {
  return (
    <div className="settings-card">
      <div className="settings-card-header">
        <span className="settings-icon">
          <i className="fa-solid fa-circle-half-stroke"></i>
        </span>
        <h3>Appearance</h3>
      </div>

      <div className="toggle-row">
        <span>Dark Mode</span>
        <label className="toggle-switch" htmlFor="dark-toggle">
          <input type="checkbox" id="dark-toggle" />
          <span className="toggle-slider"></span>
        </label>
      </div>
    </div>
  )
}

export default AppearanceCard
