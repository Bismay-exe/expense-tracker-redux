import React from 'react'
import Sidebar from '../components/layout/Sidebar'
import Navbar from '../components/layout/Navbar'
import ProfileCard from '../components/settings/ProfileCard'
import CurrencyCard from '../components/settings/CurrencyCard'
import AppearanceCard from '../components/settings/AppearanceCard'
import DangerCard from '../components/settings/DangerCard'

const Settings = () => {
  return (
    <main className="main-container">
      <Sidebar />

      <div className="main-page">
        <Navbar />

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
      </div>
    </main>
  )
}

export default Settings