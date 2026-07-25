import React from 'react'

const StatCard = ({ icon, label, value, iconColor, iconBg }) => {
  return (
    <div className="card overview-card">
      <div className="icon-box" style={{ background: iconBg, color: iconColor }}>
        {icon}
      </div>
      <h4>{label}</h4>
      <h1 style={{ color: iconColor }}>{value}</h1>
    </div>
  )
}

export default StatCard
