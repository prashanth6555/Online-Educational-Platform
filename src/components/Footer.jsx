import { BookOpen } from 'lucide-react'
import { Link } from 'react-router-dom'

const socials = [
  { label: 'Facebook', path: 'M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z' },
  { label: 'X', path: 'M4 4l11.5 16H20L8.5 4H4zm0 16l6.75-7.5M20 4l-6.75 7.5' },
  { label: 'Instagram', path: 'M7 3h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4zm5 14a5 5 0 1 0 0-10 5 5 0 0 0 0 10zm6.5-11.2a1.2 1.2 0 1 1-2.4 0 1.2 1.2 0 0 1 2.4 0z' },
  { label: 'LinkedIn', path: 'M16 8a6 6 0 0 1 6 6v8h-4v-8a2 2 0 0 0-4 0v8h-4v-8a6 6 0 0 1 6-6zM2 9h4v13H2zM4 2a2 2 0 1 1 0 4 2 2 0 0 1 0-4z' },
  { label: 'YouTube', path: 'M22.5 6.5a3 3 0 0 0-2.1-2.1C18.6 4 12 4 12 4s-6.6 0-8.4.4A3 3 0 0 0 1.5 6.5 31 31 0 0 0 1 12a31 31 0 0 0 .5 5.5 3 3 0 0 0 2.1 2.1C5.4 20 12 20 12 20s6.6 0 8.4-.4a3 3 0 0 0 2.1-2.1A31 31 0 0 0 23 12a31 31 0 0 0-.5-5.5zM10 15.5v-7l6 3.5-6 3.5z' },
]

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-slate-200 bg-slate-950 text-slate-300">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-2 text-white">
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-indigo-500">
              <BookOpen size={18} />
            </span>
            <span className="text-xl font-extrabold">Learnify</span>
          </div>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-slate-400">
            A modern online education platform for curious students, expert instructors, and lifelong learning.
          </p>
        </div>
        <div>
          <h3 className="font-bold text-white">Explore</h3>
          <div className="mt-4 flex flex-col gap-2 text-sm">
            <Link to="/" className="hover:text-white">Home</Link>
            <Link to="/courses" className="hover:text-white">Courses</Link>
            <Link to="/dashboard" className="hover:text-white">Dashboard</Link>
            <Link to="/login" className="hover:text-white">Login</Link>
          </div>
        </div>
        <div>
          <h3 className="font-bold text-white">Categories</h3>
          <div className="mt-4 flex flex-col gap-2 text-sm">
            <Link to="/courses?category=Development" className="hover:text-white">Development</Link>
            <Link to="/courses?category=Design" className="hover:text-white">Design</Link>
            <Link to="/courses?category=Business" className="hover:text-white">Business</Link>
            <Link to="/courses?category=Marketing" className="hover:text-white">Marketing</Link>
            <Link to="/courses?category=Data Science" className="hover:text-white">Data Science</Link>
          </div>
        </div>
        <div>
          <h3 className="font-bold text-white">Stay connected</h3>
          <p className="mt-4 text-sm text-slate-400">Follow Learnify for new courses and student stories.</p>
          <div className="mt-4 flex gap-3">
            {socials.map((item) => (
              <a
                key={item.label}
                href="#social"
                className="grid h-10 w-10 place-items-center rounded-full bg-white/5 text-white transition hover:-translate-y-0.5 hover:bg-indigo-500"
                aria-label={item.label}
              >
                <svg viewBox="0 0 24 24" className="h-4 w-4 fill-none stroke-current" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d={item.path} />
                </svg>
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-5 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} Learnify. All rights reserved.
      </div>
    </footer>
  )
}
