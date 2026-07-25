import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router'
import { useDispatch } from 'react-redux'
import { useAuth } from '../contexts/AuthContext'
import { loadUserData } from '../store/transactionsSlice'

const RegisterPage = () => {
  const { register, login } = useAuth()
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [form, setForm] = useState({ name: '', email: '', password: '' })
  const [error, setError] = useState('')

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    setError('')
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (form.password.length < 6) {
      return setError('Password must be at least 6 characters')
    }

    const registerResult = register(form)
    if (!registerResult.success) {
      return setError(registerResult.message)
    }

    // Auto-login after registration
    const loginResult = login({ email: form.email, password: form.password })
    if (loginResult.success) {
      dispatch(loadUserData(loginResult.user))
      navigate('/')
    }
  }

  return (
    <div className="form-container login-form-container">
      <div className="form-header">
        <h1>Create<br />Account.</h1>
        <p>Join Trackify and take control of your finances</p>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="input-box">
          <label htmlFor="reg-name">Full Name</label>
          <input
            type="text"
            id="reg-name"
            name="name"
            placeholder="John Doe"
            value={form.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="input-box">
          <label htmlFor="reg-email">Email</label>
          <input
            type="email"
            id="reg-email"
            name="email"
            placeholder="john@example.com"
            value={form.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="input-box">
          <label htmlFor="reg-password">Password</label>
          <input
            type="password"
            id="reg-password"
            name="password"
            placeholder="Min. 6 characters"
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
          Create Account
        </button>
      </form>

      <div className="login-footer">
        <p>
          Already have an account?{' '}
          <Link to="/auth/login" className="underline-effect">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  )
}

export default RegisterPage
