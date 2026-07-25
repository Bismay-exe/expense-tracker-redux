import React from 'react'

const DangerCard = () => {
  return (
    <div className="settings-card danger-card">
      <div className="settings-card-header red-icon">
        <span className="settings-icon">
          <i className="fa-solid fa-skull-crossbones"></i>
        </span>
        <h3>Danger Zone</h3>
      </div>

      <p className="danger-desc">
        This will permanently delete all your transactions and reset all settings.
      </p>

      <button className="btn-danger" type="button">
        Reset All Data
      </button>
    </div>
  )
}

export default DangerCard
