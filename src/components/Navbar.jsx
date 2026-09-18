import { useState } from 'react'
import { BookOpen, LayoutDashboard, LogOut, Menu, Search, X } from 'lucide-react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

const links = [
  { to: '/', label: 'Home' },
  { to: '/courses', label: 'Courses' },
  { to: '/#instructors', label: 'Instructors', hash: true },
  { to: '/dashboard', label: 'Dashboard' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [query, setQuery] = useState('')
  const { user, logout } = useAuth()
  const navigate = useNavigate()

  const search = (event) => {
    event.preventDefault()
    const value = query.trim()
    navigate(value ? `/courses?search=${encodeURIComponent(value)}` : '/courses')
    setOpen(false)
  }

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Link to="/" className="flex items-center gap-2 font-extrabold text-slate-900">
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-indigo-600 text-white shadow-lg shadow-indigo-600/30">
            <BookOpen size={18} />
          </span>
          <span className="text-xl tracking-tight">Learnify</span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {links.map((link) =>
            link.hash ? (
              <a key={link.label} href={link.to} className="nav-link text-sm font-semibold text-slate-600 hover:text-indigo-600">
                {link.label}
              </a>
            ) : (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                className={({ isActive }) =>
                  `nav-link text-sm font-semibold ${isActive ? 'active text-indigo-600' : 'text-slate-600 hover:text-indigo-600'}`
                }
              >
                {link.label}
              </NavLink>
            ),
          )}
        </nav>

        <form onSubmit={search} className="hidden min-w-[180px] flex-1 max-w-sm items-center rounded-full border border-slate-200 bg-slate-50 px-3 py-2 lg:flex">
          <Search size={16} className="text-slate-400" />
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search courses"
            className="ml-2 w-full bg-transparent text-sm text-slate-700 placeholder:text-slate-400"
          />
        </form>

        <div className="hidden items-center gap-3 md:flex">
          {user ? (
            <>
              <Link
                to="/dashboard"
                className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-3 py-2 text-sm font-semibold text-slate-700 transition hover:bg-indigo-50 hover:text-indigo-700"
              >
                <LayoutDashboard size={16} />
                {user.name.split(' ')[0]}
              </Link>
              <button
                type="button"
                onClick={logout}
                className="inline-flex items-center gap-1 rounded-full px-3 py-2 text-sm font-semibold text-slate-500 transition hover:text-rose-600"
              >
                <LogOut size={16} />
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="text-sm font-semibold text-slate-600 transition hover:text-indigo-600">
                Login
              </Link>
              <Link
                to="/register"
                className="rounded-full bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-md shadow-indigo-600/25 transition hover:-translate-y-0.5 hover:bg-indigo-700"
              >
                Start Learning
              </Link>
            </>
          )}
        </div>

        <button
          type="button"
          className="grid h-10 w-10 place-items-center rounded-xl border border-slate-200 text-slate-700 md:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-label="Toggle menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <div
        className={`overflow-hidden border-t border-slate-100 bg-white transition-all duration-300 md:hidden ${
          open ? 'max-h-[420px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="space-y-3 px-4 py-4">
          <form onSubmit={search} className="flex items-center rounded-full border border-slate-200 bg-slate-50 px-3 py-2">
            <Search size={16} className="text-slate-400" />
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search courses"
              className="ml-2 w-full bg-transparent text-sm"
            />
          </form>
          {links.map((link) => (
            <Link
              key={link.label}
              to={link.hash ? '/#instructors' : link.to}
              onClick={() => setOpen(false)}
              className="block rounded-lg px-2 py-2 font-semibold text-slate-700 hover:bg-indigo-50 hover:text-indigo-700"
            >
              {link.label}
            </Link>
          ))}
          {user ? (
            <button
              type="button"
              onClick={() => {
                logout()
                setOpen(false)
              }}
              className="w-full rounded-lg px-2 py-2 text-left font-semibold text-rose-600"
            >
              Logout
            </button>
          ) : (
            <div className="flex gap-2">
              <Link to="/login" onClick={() => setOpen(false)} className="flex-1 rounded-full border border-slate-200 py-2 text-center font-semibold">
                Login
              </Link>
              <Link to="/register" onClick={() => setOpen(false)} className="flex-1 rounded-full bg-indigo-600 py-2 text-center font-semibold text-white">
                Register
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
