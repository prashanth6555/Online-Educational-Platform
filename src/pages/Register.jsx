import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export default function Register() {
  const { register } = useAuth()
  const navigate = useNavigate()
  const [form, setForm] = useState({ name: '', email: '', password: '', confirm: '' })
  const [errors, setErrors] = useState({})
  const [submitError, setSubmitError] = useState('')
  const [touched, setTouched] = useState({})

  const validate = (data = form) => {
    const next = {}
    if (data.name.trim().length < 2) next.name = 'Please enter your full name.'
    if (!emailPattern.test(data.email)) next.email = 'Enter a valid email address.'
    if (data.password.length < 6) next.password = 'Password must be at least 6 characters.'
    if (data.confirm !== data.password) next.confirm = 'Passwords do not match.'
    return next
  }

  const onChange = (event) => {
    const next = { ...form, [event.target.name]: event.target.value }
    setForm(next)
    if (touched[event.target.name]) setErrors(validate(next))
  }

  const mark = (field) => {
    setTouched((prev) => ({ ...prev, [field]: true }))
    setErrors(validate())
  }

  const onSubmit = (event) => {
    event.preventDefault()
    const nextErrors = validate()
    setErrors(nextErrors)
    setTouched({ name: true, email: true, password: true, confirm: true })
    if (Object.keys(nextErrors).length) return
    try {
      register(form)
      navigate('/dashboard')
    } catch (error) {
      setSubmitError(error.message)
    }
  }

  const fieldClass = (name) =>
    `w-full rounded-xl border px-4 py-3 transition ${
      errors[name] ? 'border-rose-400 bg-rose-50' : 'border-slate-200 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100'
    }`

  return (
    <div className="mx-auto grid min-h-[calc(100vh-64px)] max-w-6xl items-center gap-10 px-4 py-12 sm:px-6 lg:grid-cols-2">
      <form onSubmit={onSubmit} className="rounded-3xl bg-white p-8 shadow-xl ring-1 ring-slate-200 sm:p-10" noValidate>
        <h1 className="text-3xl font-extrabold text-slate-900">Create your account</h1>
        <p className="mt-2 text-slate-500">Join thousands of students learning on Learnify.</p>
        {submitError ? <p className="mt-4 text-sm font-semibold text-rose-600">{submitError}</p> : null}
        {[
          { name: 'name', label: 'Full name', type: 'text', placeholder: 'Alex Rivera' },
          { name: 'email', label: 'Email', type: 'email', placeholder: 'you@email.com' },
          { name: 'password', label: 'Password', type: 'password', placeholder: 'At least 6 characters' },
          { name: 'confirm', label: 'Confirm password', type: 'password', placeholder: 'Repeat password' },
        ].map((field) => (
          <label key={field.name} className="mt-4 block">
            <span className="mb-1 block text-sm font-semibold text-slate-700">{field.label}</span>
            <input
              name={field.name}
              type={field.type}
              value={form[field.name]}
              onChange={onChange}
              onBlur={() => mark(field.name)}
              className={fieldClass(field.name)}
              placeholder={field.placeholder}
            />
            {errors[field.name] ? <span className="mt-1 block text-xs text-rose-600">{errors[field.name]}</span> : null}
          </label>
        ))}
        <button
          type="submit"
          className="mt-6 w-full rounded-full bg-indigo-600 py-3 font-semibold text-white shadow-lg shadow-indigo-600/25 transition hover:-translate-y-0.5 hover:bg-indigo-700"
        >
          Create account
        </button>
        <p className="mt-5 text-center text-sm text-slate-500">
          Already have an account?{' '}
          <Link to="/login" className="font-semibold text-indigo-600">
            Login
          </Link>
        </p>
      </form>
      <div className="hidden overflow-hidden rounded-3xl lg:block">
        <img
          src="https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?auto=format&fit=crop&w=1200&q=80"
          alt="Online classroom"
          className="h-full min-h-[520px] w-full object-cover"
        />
      </div>
    </div>
  )
}
