import { useState } from 'react'
import { Link } from 'react-router-dom'

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export default function ForgotPassword() {
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')
  const [sent, setSent] = useState(false)

  const onSubmit = (event) => {
    event.preventDefault()
    if (!emailPattern.test(email)) {
      setError('Enter a valid email address.')
      return
    }
    setError('')
    setSent(true)
  }

  return (
    <div className="mx-auto flex min-h-[calc(100vh-64px)] max-w-lg items-center px-4 py-12">
      <form onSubmit={onSubmit} className="w-full rounded-3xl bg-white p-8 shadow-xl ring-1 ring-slate-200 sm:p-10" noValidate>
        <h1 className="text-3xl font-extrabold text-slate-900">Reset your password</h1>
        <p className="mt-2 text-slate-500">
          Enter the email linked to your Learnify account and we will send reset instructions.
        </p>
        {sent ? (
          <div className="mt-6 rounded-2xl bg-emerald-50 p-4 text-emerald-800">
            If an account exists for <strong>{email}</strong>, a reset link has been sent. Check your inbox.
          </div>
        ) : (
          <label className="mt-6 block">
            <span className="mb-1 block text-sm font-semibold text-slate-700">Email</span>
            <input
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              className={`w-full rounded-xl border px-4 py-3 transition ${
                error ? 'border-rose-400 bg-rose-50' : 'border-slate-200 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100'
              }`}
              placeholder="you@email.com"
            />
            {error ? <span className="mt-1 block text-xs text-rose-600">{error}</span> : null}
          </label>
        )}
        {!sent ? (
          <button
            type="submit"
            className="mt-6 w-full rounded-full bg-indigo-600 py-3 font-semibold text-white shadow-lg shadow-indigo-600/25 transition hover:-translate-y-0.5 hover:bg-indigo-700"
          >
            Send reset link
          </button>
        ) : null}
        <p className="mt-5 text-center text-sm text-slate-500">
          Remembered it?{' '}
          <Link to="/login" className="font-semibold text-indigo-600">
            Back to login
          </Link>
        </p>
      </form>
    </div>
  )
}
