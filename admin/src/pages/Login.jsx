import React, { useContext, useState } from 'react'
import logo from '../assets/logo.png'
import { IoEyeOutline, IoEye } from 'react-icons/io5'
import axios from 'axios'
import { authDataContext } from '../context/AuthContext'
import { adminDataContext } from '../context/AdminContext'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

function Login() {
  const [show, setShow] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { serverUrl } = useContext(authDataContext)
  const { getAdmin } = useContext(adminDataContext)
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)

  const AdminLogin = async (e) => {
    e.preventDefault()
    if (loading) return
    setLoading(true)
    try {
      const result = await axios.post(
        `${serverUrl}/api/auth/adminlogin`,
        { email, password },
        { withCredentials: true }
      )
      toast.success('Admin login successful')
      getAdmin()
      navigate('/')
    } catch (error) {
      toast.error('Admin login failed')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="w-screen min-h-screen bg-background text-foreground flex flex-col items-center">
      <div className="w-full h-20 flex items-center gap-3 px-6">
        <img className="w-9 h-9" src={logo} alt="OneCart" />
        <h1 className="text-xl font-semibold">OneCart</h1>
      </div>

      <div className="text-center mt-6 mb-6">
        <h2 className="text-3xl font-semibold">Admin Login</h2>
        <p className="text-muted mt-2">Welcome back. Sign in to continue.</p>
      </div>

      <div className="w-[92%] max-w-md bg-card border border-border rounded-2xl shadow-[0_8px_24px_rgba(0,0,0,0.08)] p-6">
        <form onSubmit={AdminLogin} className="grid gap-4">
          <div>
            <label htmlFor="email" className="block mb-2 font-medium">
              Email
            </label>
            <input
              id="email"
              type="email"
              className="w-full h-12 rounded-xl bg-background border border-border focus:outline-none focus:ring-2 focus:ring-accent px-4 placeholder:text-muted"
              placeholder="admin@onecart.com"
              required
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </div>

          <div className="relative">
            <label htmlFor="password" className="block mb-2 font-medium">
              Password
            </label>
            <input
              id="password"
              type={show ? 'text' : 'password'}
              className="w-full h-12 rounded-xl bg-background border border-border focus:outline-none focus:ring-2 focus:ring-accent px-4 pr-10 placeholder:text-muted"
              placeholder="••••••••"
              required
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
            <button
              type="button"
              aria-label={show ? 'Hide password' : 'Show password'}
              className="absolute right-3 top-10 text-muted"
              onClick={() => setShow((p) => !p)}
            >
              {show ? <IoEye size={20} /> : <IoEyeOutline size={20} />}
            </button>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full h-12 mt-2 rounded-full bg-navbar text-primary-foreground font-semibold hover:opacity-90 disabled:opacity-60"
          >
            {loading ? 'Signing in…' : 'Login'}
          </button>
        </form>
      </div>
    </div>
  )
}

export default Login
