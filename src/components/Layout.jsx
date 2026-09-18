import { Outlet, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

export default function Layout() {
  const location = useLocation()
  const hideFooter = location.pathname.startsWith('/dashboard')

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      <main key={location.pathname} className="page-enter">
        <Outlet />
      </main>
      {hideFooter ? null : <Footer />}
    </div>
  )
}
