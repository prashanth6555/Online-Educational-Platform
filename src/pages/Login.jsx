import { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export default function Login() {
  const { login } = useAuth()
  const navigate = useNavigate()
  const location = useLocation()
  const [form, setForm] = useState({ email: '', password: '' })
  const [errors, setErrors] = useState({})
  const [submitError, setSubmitError] = useState('')
  const [touched, setTouched] = useState({})

  const validate = (data = form) => {
    const next = {}
    if (!emailPattern.test(data.email)) next.email = 'Enter a valid email address.'
    if (data.password.length < 6) next.password = 'Password must be at least 6 characters.'
    return next
  }

  const onChange = (event) => {
    const next = { ...form, [event.target.name]: event.target.value }
    setForm(next)
    if (touched[event.target.name]) setErrors(validate(next))
  }

  const onSubmit = (event) => {
    event.preventDefault()
    const nextErrors = validate()
    setErrors(nextErrors)
    setTouched({ email: true, password: true })
    if (Object.keys(nextErrors).length) return
    try {
      login(form)
      navigate(location.state?.from || '/dashboard')
    } catch (error) {
      setSubmitError(error.message)
    }
  }

  return (
    <div className="mx-auto grid min-h-[calc(100vh-64px)] max-w-6xl items-center gap-10 px-4 py-12 sm:px-6 lg:grid-cols-2">
      <div className="hidden overflow-hidden rounded-3xl lg:block">
        <img
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80"
          alt="Students collaborating"
          className="h-full min-h-[520px] w-full object-cover"
        />
      </div>
      <form onSubmit={onSubmit} className="rounded-3xl bg-white p-8 shadow-xl ring-1 ring-slate-200 sm:p-10" noValidate>
        <h1 className="text-3xl font-extrabold text-slate-900">Welcome back</h1>
        <p className="mt-2 text-slate-500">Log in to continue learning.</p>
        <p className="mt-3 rounded-xl bg-indigo-50 px-3 py-2 text-sm text-indigo-700">
          Demo: demo@learnify.com / learnify123
        </p>
        {submitError ? <p className="mt-4 text-sm font-semibold text-rose-600">{submitError}</p> : null}
        <label className="mt-6 block">
          <span className="mb-1 block text-sm font-semibold text-slate-700">Email</span>
          <input
            name="email"
            type="email"
            value={form.email}
            onChange={onChange}
            onBlur={() => {
              setTouched((prev) => ({ ...prev, email: true }))
              setErrors(validate())
            }}
            className={`w-full rounded-xl border px-4 py-3 transition ${
              errors.email ? 'border-rose-400 bg-rose-50' : 'border-slate-200 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100'
            }`}
            placeholder="you@email.com"
          />
          {errors.email ? <span className="mt-1 block text-xs text-rose-600">{errors.email}</span> : null}
        </label>
        <label className="mt-4 block">
          <span className="mb-1 block text-sm font-semibold text-slate-700">Password</span>
          <input
            name="password"
            type="password"
            value={form.password}
            onChange={onChange}
            onBlur={() => {
              setTouched((prev) => ({ ...prev, password: true }))
              setErrors(validate())
            }}
            className={`w-full rounded-xl border px-4 py-3 transition ${
              errors.password ? 'border-rose-400 bg-rose-50' : 'border-slate-200 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100'
            }`}
            placeholder="••••••••"
          />
          {errors.password ? <span className="mt-1 block text-xs text-rose-600">{errors.password}</span> : null}
        </label>
        <div className="mt-3 text-right">
          <Link to="/forgot-password" className="text-sm font-semibold text-indigo-600 hover:text-indigo-800">
            Forgot password?
          </Link>
        </div>
        <button
          type="submit"
          className="mt-6 w-full rounded-full bg-indigo-600 py-3 font-semibold text-white shadow-lg shadow-indigo-600/25 transition hover:-translate-y-0.5 hover:bg-indigo-700"
        >
          Login
        </button>
        <p className="mt-5 text-center text-sm text-slate-500">
          New to Learnify?{' '}
          <Link to="/register" className="font-semibold text-indigo-600">
            Create an account
          </Link>
        </p>
      </form>
    </div>
  )
}
