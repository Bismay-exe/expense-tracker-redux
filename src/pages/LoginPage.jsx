import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router'
import { useDispatch } from 'react-redux'
import { useAuth } from '../contexts/AuthContext'
import { loadUserData } from '../store/transactionsSlice'

const LoginPage = () => {
  const { login } = useAuth()
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [form, setForm] = useState({ email: '', password: '' })
  const [error, setError] = useState('')

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    setError('')
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const result = login(form)
    if (result.success) {
      dispatch(loadUserData(result.user))
      navigate('/')
    } else {
      setError(result.message)
    }
  }

  return (
    <div className="form-container login-form-container">
      <div className="form-header">
        <h1>Welcome<br />Back.</h1>
        <p>Sign in to your Trackify account</p>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="input-box">
          <label htmlFor="login-email">Email</label>
          <input
            type="email"
            id="login-email"
            name="email"
            placeholder="john@example.com"
            value={form.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="input-box">
          <label htmlFor="login-password">Password</label>
          <input
            type="password"
            id="login-password"
            name="password"
            placeholder="••••••••"
            value={form.password}
            onChange={handleChange}
            required
          />
        </div>

        {error && (
          <p style={{ color: 'var(--red)', fontSize: '0.875rem', fontWeight: 600, width: '100%' }}>
            {error}
          </p>
        )}

        <button type="submit" className="btn-submit">
          Sign In
        </button>
      </form>

      <div className="login-footer">
        <p>
          New here?{' '}
          <Link to="/auth/register" className="underline-effect">
            Create an account
          </Link>
        </p>
      </div>
    </div>
  )
}

export default LoginPage
