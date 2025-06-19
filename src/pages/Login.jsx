import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AppConstants } from '../utils/constants'

export const Login = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    try {
      const response = await fetch(`${AppConstants.BACKEND_URL}/api/v1.0/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include', // Important for cookies
        body: JSON.stringify(formData)
      })

      const data = await response.json()

      if (response.ok) {
        // Login successful
        navigate('/')
      } else {
        setError(data.message || 'Login failed')
      }
    } catch (error) {
      setError('Login failed. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-vh-100 d-flex align-items-center justify-content-center bg-light">
      <div className="card shadow-sm" style={{ maxWidth: '400px', width: '90%' }}>
        <div className="card-body p-4">
          <div className="text-center mb-4">
            <i className="bi bi-shield-lock-fill text-primary fs-1"></i>
            <h4 className="mt-2">Welcome Back</h4>
            <p className="text-muted">Please enter your credentials</p>
          </div>

          <form onSubmit={handleSubmit}>
            {error && (
              <div className="alert alert-danger mb-3">{error}</div>
            )}
            
            <div className="mb-3">
              <label className="form-label">Email address</label>
              <input 
                type="email"
                name="email"
                className="form-control"
                placeholder="name@example.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Password</label>
              <input 
                type="password"
                name="password"
                className="form-control"
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-4 text-end">
              <span 
                className="text-primary" 
                role="button"
                onClick={() => navigate('/reset-password')}
              >
                Forgot Password?
              </span>
            </div>

            <button 
              type="submit" 
              className="btn btn-primary w-100 py-2 mb-3"
              disabled={loading}
            >
              {loading ? 'Logging in...' : 'Login'}
            </button>

            <div className="text-center">
              <span className="text-muted">Don't have an account? </span>
              <span 
                className="text-primary" 
                role="button"
                onClick={() => navigate('/register')}
              >
                Create Account
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}