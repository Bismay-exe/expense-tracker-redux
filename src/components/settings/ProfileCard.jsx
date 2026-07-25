import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setUserName } from '../../store/transactionsSlice'
import { UserPen } from 'lucide-react'

const ProfileCard = () => {
  const dispatch = useDispatch()
  const userName = useSelector((state) => state.transactions.userName)
  const [name, setName] = useState(userName)

  const handleSave = () => {
    if (name.trim()) dispatch(setUserName(name.trim()))
  }

  return (
    <div className="settings-card">
      <div className="settings-card-header">
        <span className="settings-icon">
          <UserPen />
        </span>
        <h3>Profile</h3>
      </div>

      <label htmlFor="settings-name">Display Name</label>
      <input
        type="text"
        id="settings-name"
        placeholder="Your name"
        maxLength={40}
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <button className="btn-primary" type="button" onClick={handleSave}>
        Save Name
      </button>
    </div>
  )
}

export default ProfileCard
