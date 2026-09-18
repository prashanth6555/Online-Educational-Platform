import { Award, BookOpen, CheckCircle2, Clock, LogOut, UserRound } from 'lucide-react'
import { useEffect, useMemo, useState } from 'react'
import { Link, Navigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { courses } from '../data/courses'

const tabs = [
  { id: 'overview', label: 'Overview', icon: BookOpen },
  { id: 'progress', label: 'In progress', icon: Clock },
  { id: 'completed', label: 'Completed', icon: CheckCircle2 },
  { id: 'certificates', label: 'Certificates', icon: Award },
  { id: 'profile', label: 'Profile', icon: UserRound },
]

function ProgressBar({ value }) {
  const [on, setOn] = useState(false)

  useEffect(() => {
    const timer = requestAnimationFrame(() => setOn(true))
    return () => cancelAnimationFrame(timer)
  }, [])

  return (
    <div className="h-2.5 overflow-hidden rounded-full bg-slate-200">
      <div
        className={`progress-fill h-full rounded-full bg-gradient-to-r from-indigo-500 to-violet-500 ${on ? 'is-on' : ''}`}
        style={{ '--progress': `${value}%` }}
      />
    </div>
  )
}

export default function Dashboard() {
  const { user, enrollments, logout } = useAuth()
  const [tab, setTab] = useState('overview')
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const enrolledCourses = useMemo(() => {
    return Object.entries(enrollments)
      .map(([id, meta]) => {
        const course = courses.find((item) => item.id === id)
        return course ? { ...course, ...meta } : null
      })
      .filter(Boolean)
      .sort((a, b) => b.lastAccessed.localeCompare(a.lastAccessed))
  }, [enrollments])

  const completed = enrolledCourses.filter((item) => item.progress >= 100)
  const inProgress = enrolledCourses.filter((item) => item.progress < 100)
  const average = enrolledCourses.length
    ? Math.round(enrolledCourses.reduce((sum, item) => sum + item.progress, 0) / enrolledCourses.length)
    : 0

  if (!user) return <Navigate to="/login" replace state={{ from: '/dashboard' }} />

  const renderList = (list, empty) =>
    list.length === 0 ? (
      <p className="rounded-2xl border border-dashed border-slate-300 bg-white p-8 text-center text-slate-500">{empty}</p>
    ) : (
      <div className="grid gap-4">
        {list.map((course) => (
          <Link
            key={course.id}
            to={`/courses/${course.id}`}
            className="flex flex-col gap-4 rounded-2xl bg-white p-4 shadow-sm ring-1 ring-slate-200 transition hover:-translate-y-0.5 hover:shadow-md sm:flex-row"
          >
            <img src={course.thumbnail} alt="" className="h-28 w-full rounded-xl object-cover sm:w-44" />
            <div className="flex-1">
              <p className="text-xs font-semibold uppercase tracking-wide text-indigo-600">{course.category}</p>
              <h3 className="mt-1 font-bold text-slate-900">{course.title}</h3>
              <p className="text-sm text-slate-500">By {course.instructor}</p>
              <div className="mt-3">
                <div className="mb-1 flex justify-between text-xs font-semibold text-slate-500">
                  <span>Progress</span>
                  <span>{course.progress}%</span>
                </div>
                <ProgressBar value={course.progress} />
              </div>
            </div>
          </Link>
        ))}
      </div>
    )

  return (
    <div className="mx-auto flex min-h-[calc(100vh-64px)] max-w-7xl gap-6 px-4 py-6 sm:px-6">
      <aside
        className={`fixed inset-y-0 left-0 z-40 w-72 border-r border-slate-200 bg-white p-5 pt-20 transition-transform duration-300 lg:static lg:z-0 lg:w-64 lg:translate-x-0 lg:rounded-2xl lg:pt-5 lg:shadow-sm ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        }`}
      >
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">Student dashboard</p>
        <div className="mt-4 flex items-center gap-3 rounded-xl bg-indigo-50 p-3">
          <div className="grid h-11 w-11 place-items-center rounded-full bg-indigo-600 font-bold text-white">
            {user.name.slice(0, 1)}
          </div>
          <div>
            <p className="font-bold text-slate-900">{user.name}</p>
            <p className="text-xs text-slate-500">{user.email}</p>
          </div>
        </div>
        <nav className="mt-6 space-y-1">
          {tabs.map((item) => {
            const Icon = item.icon
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => {
                  setTab(item.id)
                  setSidebarOpen(false)
                }}
                className={`flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-semibold transition ${
                  tab === item.id ? 'bg-indigo-600 text-white' : 'text-slate-600 hover:bg-slate-100'
                }`}
              >
                <Icon size={16} />
                {item.label}
              </button>
            )
          })}
        </nav>
        <button
          type="button"
          onClick={logout}
          className="mt-8 flex w-full items-center gap-2 rounded-xl px-3 py-2 text-sm font-semibold text-rose-600 hover:bg-rose-50"
        >
          <LogOut size={16} /> Logout
        </button>
      </aside>

      {sidebarOpen ? (
        <button
          type="button"
          className="fixed inset-0 z-30 bg-slate-900/40 lg:hidden"
          aria-label="Close sidebar"
          onClick={() => setSidebarOpen(false)}
        />
      ) : null}

      <section className="min-w-0 flex-1">
        <div className="mb-5 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-extrabold text-slate-900 sm:text-3xl">Welcome back, {user.name.split(' ')[0]}</h1>
            <p className="text-slate-500">Keep going. Your next skill is one lesson away.</p>
          </div>
          <button
            type="button"
            className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold lg:hidden"
            onClick={() => setSidebarOpen(true)}
          >
            Menu
          </button>
        </div>

        {tab === 'overview' ? (
          <div className="space-y-6">
            <div className="grid gap-4 sm:grid-cols-3">
              {[
                { label: 'Enrolled', value: enrolledCourses.length },
                { label: 'Avg. progress', value: `${average}%` },
                { label: 'Certificates', value: completed.length },
              ].map((card) => (
                <div key={card.label} className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200">
                  <p className="text-sm text-slate-500">{card.label}</p>
                  <p className="mt-1 text-3xl font-extrabold text-slate-900">{card.value}</p>
                </div>
              ))}
            </div>
            <div>
              <h2 className="mb-3 text-lg font-bold">Recently accessed</h2>
              {renderList(enrolledCourses.slice(0, 3), 'You have not started any courses yet.')}
            </div>
          </div>
        ) : null}

        {tab === 'progress' ? renderList(inProgress, 'No courses in progress.') : null}
        {tab === 'completed' ? renderList(completed, 'No completed courses yet.') : null}

        {tab === 'certificates' ? (
          completed.length === 0 ? (
            <p className="rounded-2xl border border-dashed border-slate-300 bg-white p-8 text-center text-slate-500">
              Certificates appear after you complete a course.
            </p>
          ) : (
            <div className="grid gap-4 sm:grid-cols-2">
              {completed.map((course) => (
                <article key={course.id} className="rounded-2xl border border-amber-200 bg-gradient-to-br from-amber-50 to-white p-6">
                  <Award className="text-amber-500" />
                  <h3 className="mt-3 font-bold text-slate-900">{course.title}</h3>
                  <p className="text-sm text-slate-500">Awarded to {user.name}</p>
                  <p className="mt-4 text-xs uppercase tracking-wider text-amber-700">Learnify Certificate</p>
                </article>
              ))}
            </div>
          )
        ) : null}

        {tab === 'profile' ? (
          <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
            <h2 className="text-xl font-extrabold">Profile information</h2>
            <dl className="mt-5 grid gap-4 sm:grid-cols-2">
              <div>
                <dt className="text-sm text-slate-500">Full name</dt>
                <dd className="font-semibold">{user.name}</dd>
              </div>
              <div>
                <dt className="text-sm text-slate-500">Email</dt>
                <dd className="font-semibold">{user.email}</dd>
              </div>
              <div>
                <dt className="text-sm text-slate-500">Role</dt>
                <dd className="font-semibold">Student</dd>
              </div>
              <div>
                <dt className="text-sm text-slate-500">Learning streak</dt>
                <dd className="font-semibold">12 days</dd>
              </div>
            </dl>
          </div>
        ) : null}
      </section>
    </div>
  )
}
