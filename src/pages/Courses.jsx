import { Search } from 'lucide-react'
import { useEffect, useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import CourseCard from '../components/CourseCard'
import Reveal from '../components/Reveal'
import { categories, courses } from '../data/courses'

export default function Courses() {
  const [params, setParams] = useSearchParams()
  const [search, setSearch] = useState(params.get('search') || '')
  const category = params.get('category') || 'All'

  useEffect(() => {
    setSearch(params.get('search') || '')
  }, [params])

  const filtered = useMemo(() => {
    return courses.filter((course) => {
      const matchesCategory = category === 'All' || course.category === category
      const q = search.trim().toLowerCase()
      const matchesSearch =
        !q ||
        course.title.toLowerCase().includes(q) ||
        course.instructor.toLowerCase().includes(q) ||
        course.category.toLowerCase().includes(q)
      return matchesCategory && matchesSearch
    })
  }, [category, search])

  const setCategory = (value) => {
    const next = new URLSearchParams(params)
    if (value === 'All') next.delete('category')
    else next.set('category', value)
    setParams(next)
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
      <Reveal>
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-indigo-600">Catalog</p>
            <h1 className="mt-2 text-4xl font-extrabold text-slate-900">Explore courses</h1>
            <p className="mt-2 text-slate-500">Filter by category or search by title, instructor, or topic.</p>
          </div>
          <label className="flex w-full max-w-md items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-3 shadow-sm">
            <Search size={18} className="text-slate-400" />
            <input
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Search courses"
              className="w-full bg-transparent text-sm"
            />
          </label>
        </div>
      </Reveal>

      <div className="mt-8 flex gap-2 overflow-x-auto pb-2">
        {categories.map((item) => (
          <button
            key={item}
            type="button"
            onClick={() => setCategory(item)}
            className={`whitespace-nowrap rounded-full px-4 py-2 text-sm font-semibold transition ${
              category === item
                ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/25'
                : 'bg-white text-slate-600 ring-1 ring-slate-200 hover:text-indigo-600'
            }`}
          >
            {item}
          </button>
        ))}
      </div>

      <p className="mt-6 text-sm text-slate-500">
          {filtered.length} {filtered.length === 1 ? 'course' : 'courses'} found
        </p>

      <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((course, index) => (
          <Reveal key={course.id} delay={index * 50}>
            <CourseCard course={course} />
          </Reveal>
        ))}
      </div>

      {filtered.length === 0 ? (
        <div className="mt-16 rounded-2xl border border-dashed border-slate-300 bg-white p-10 text-center">
          <p className="text-lg font-semibold text-slate-800">No courses match that search.</p>
          <p className="mt-2 text-slate-500">Try another keyword or reset the category filter.</p>
        </div>
      ) : null}
    </div>
  )
}
