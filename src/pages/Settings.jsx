import React from 'react'
import ProfileCard from '../components/settings/ProfileCard'
import CurrencyCard from '../components/settings/CurrencyCard'
import AppearanceCard from '../components/settings/AppearanceCard'
import DangerCard from '../components/settings/DangerCard'

const Settings = () => {
  return (
    <section className="main-section active">
      <div className="page-header">
        <div>
          <h1>Settings</h1>
          <p className="subtitle">Manage your profile and preferences</p>
        </div>
      </div>

      <div className="settings-grid">
        <ProfileCard />
        <CurrencyCard />
        <AppearanceCard />
        <DangerCard />
      </div>
    </section>
  )
}

export default Settings