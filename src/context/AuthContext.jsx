import { createContext, useContext, useEffect, useMemo, useState } from 'react'

const AuthContext = createContext(null)

const USER_KEY = 'learnify_user'
const USERS_KEY = 'learnify_users'
const ENROLL_KEY = 'learnify_enrollments'

const demoProgress = {
  'fullstack-web': 68,
  'uiux-master': 42,
  'data-python': 100,
  'digital-marketing': 18,
  'ml-basics': 100,
}

function readJson(key, fallback) {
  try {
    const raw = localStorage.getItem(key)
    return raw ? JSON.parse(raw) : fallback
  } catch {
    return fallback
  }
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => readJson(USER_KEY, null))
  const [enrollments, setEnrollments] = useState(() =>
    readJson(ENROLL_KEY, {
      'fullstack-web': { progress: 68, lastAccessed: '2026-09-16' },
      'uiux-master': { progress: 42, lastAccessed: '2026-09-17' },
      'data-python': { progress: 100, lastAccessed: '2026-09-10' },
      'digital-marketing': { progress: 18, lastAccessed: '2026-09-18' },
      'ml-basics': { progress: 100, lastAccessed: '2026-08-22' },
    }),
  )

  useEffect(() => {
    const users = readJson(USERS_KEY, [])
    if (!users.some((item) => item.email === 'demo@learnify.com')) {
      users.push({
        name: 'Alex Rivera',
        email: 'demo@learnify.com',
        password: 'learnify123',
      })
      localStorage.setItem(USERS_KEY, JSON.stringify(users))
    }
  }, [])

  useEffect(() => {
    if (user) localStorage.setItem(USER_KEY, JSON.stringify(user))
    else localStorage.removeItem(USER_KEY)
  }, [user])

  useEffect(() => {
    localStorage.setItem(ENROLL_KEY, JSON.stringify(enrollments))
  }, [enrollments])

  const register = ({ name, email, password }) => {
    const users = readJson(USERS_KEY, [])
    if (users.some((item) => item.email.toLowerCase() === email.toLowerCase())) {
      throw new Error('An account with this email already exists.')
    }
    users.push({ name, email, password })
    localStorage.setItem(USERS_KEY, JSON.stringify(users))
    const nextUser = { name, email }
    setUser(nextUser)
    return nextUser
  }

  const login = ({ email, password }) => {
    const users = readJson(USERS_KEY, [])
    const match = users.find(
      (item) =>
        item.email.toLowerCase() === email.toLowerCase() && item.password === password,
    )
    if (!match) throw new Error('Invalid email or password.')
    const nextUser = { name: match.name, email: match.email }
    setUser(nextUser)
    return nextUser
  }

  const logout = () => setUser(null)

  const enroll = (courseId) => {
    setEnrollments((prev) => {
      if (prev[courseId]) return prev
      return {
        ...prev,
        [courseId]: { progress: demoProgress[courseId] ?? 8, lastAccessed: new Date().toISOString().slice(0, 10) },
      }
    })
  }

  const isEnrolled = (courseId) => Boolean(enrollments[courseId])

  const value = useMemo(
    () => ({ user, enrollments, register, login, logout, enroll, isEnrolled }),
    [user, enrollments],
  )

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error('useAuth must be used inside AuthProvider')
  return ctx
}
