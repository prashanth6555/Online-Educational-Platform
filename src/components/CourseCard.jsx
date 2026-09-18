import { Clock, Star } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function CourseCard({ course }) {
  return (
    <Link
      to={`/courses/${course.id}`}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1.5 hover:border-indigo-200 hover:shadow-xl"
    >
      <div className="relative overflow-hidden">
        <img
          src={course.thumbnail}
          alt={course.title}
          className="h-44 w-full object-cover transition duration-500 group-hover:scale-105"
        />
        <span className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-indigo-700 backdrop-blur">
          {course.category}
        </span>
        <span
          className={`absolute right-3 top-3 rounded-full px-3 py-1 text-xs font-bold ${
            course.price === 0 ? 'bg-emerald-500 text-white' : 'bg-slate-900/85 text-white'
          }`}
        >
          {course.price === 0 ? 'Free' : `$${course.price}`}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-lg font-bold leading-snug text-slate-900 transition group-hover:text-indigo-600">
          {course.title}
        </h3>
        <p className="mt-2 text-sm text-slate-500">By {course.instructor}</p>
        <div className="mt-4 flex items-center justify-between text-sm">
          <div className="flex items-center gap-1.5">
            <Star size={16} className="fill-amber-400 text-amber-400" />
            <span className="font-semibold text-slate-800">{course.rating}</span>
            <span className="text-slate-400">({course.reviews.toLocaleString()})</span>
          </div>
          <div className="flex items-center gap-1 text-slate-500">
            <Clock size={15} />
            <span>{course.duration}</span>
          </div>
        </div>
      </div>
    </Link>
  )
}
