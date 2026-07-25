import React from 'react'

const ProfileCard = () => {
  return (
    <div className="settings-card">
      <div className="settings-card-header">
        <span className="settings-icon">
          <i className="fa-solid fa-user-pen"></i>
        </span>
        <h3>Profile</h3>
      </div>

      <label htmlFor="settings-name">Display Name</label>
      <input
        type="text"
        id="settings-name"
        placeholder="Your name"
        maxLength={40}
        defaultValue="User Name"
      />

      <button className="btn-primary" type="button">
        Save Name
      </button>
    </div>
  )
}

export default ProfileCard
