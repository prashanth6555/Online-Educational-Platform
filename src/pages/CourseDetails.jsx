import { Award, CheckCircle2, Clock, Play, Users } from 'lucide-react'
import { useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import Reveal from '../components/Reveal'
import StarRating from '../components/StarRating'
import { useAuth } from '../context/AuthContext'
import { courseReviews, getCourseById } from '../data/courses'
import { instructors } from '../data/instructors'

export default function CourseDetails() {
  const { id } = useParams()
  const course = getCourseById(id)
  const instructor = instructors.find((item) => item.id === course?.instructorId)
  const { user, enroll, isEnrolled } = useAuth()
  const navigate = useNavigate()
  const [openModule, setOpenModule] = useState(0)

  if (!course) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-24 text-center">
        <h1 className="text-3xl font-extrabold">Course not found</h1>
        <Link to="/courses" className="mt-4 inline-block font-semibold text-indigo-600">
          Back to courses
        </Link>
      </div>
    )
  }

  const enrolled = Boolean(user && isEnrolled(course.id))
  const isSeoCourse = course.id === 'seo-growth'

  const handleEnroll = () => {
    if (!user) {
      navigate('/login', { state: { from: `/courses/${course.id}` } })
      return
    }
    enroll(course.id)
    navigate('/dashboard')
  }

  return (
    <div>
      <section className="relative overflow-hidden">
        <img
          src={course.banner}
          alt={course.title}
          className={`absolute inset-0 h-full w-full object-cover ${isSeoCourse ? 'seo-banner-image' : ''}`}
        />
        <div className="absolute inset-0 bg-slate-950/75" />
        {isSeoCourse ? (
          <div className="pointer-events-none absolute right-6 bottom-8 hidden items-end gap-1.5 sm:flex">
            {[40, 64, 52, 88, 70, 96].map((height, index) => (
              <span
                key={height}
                className="seo-search-bar w-2.5 rounded-full bg-emerald-400/90"
                style={{ height, animationDelay: `${index * 0.14}s` }}
              />
            ))}
          </div>
        ) : null}
        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-20">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-300">{course.category}</p>
          <h1 className="mt-3 max-w-3xl text-3xl font-extrabold text-white sm:text-5xl">{course.title}</h1>
          <p className="mt-4 max-w-2xl text-lg text-slate-200">{course.description}</p>
          <div className="mt-6 flex flex-wrap items-center gap-5 text-sm text-slate-200">
            <span className="inline-flex items-center gap-2">
              <StarRating value={course.rating} /> {course.rating} ({course.reviews.toLocaleString()} reviews)
            </span>
            <span className="inline-flex items-center gap-2">
              <Users size={16} /> {course.students.toLocaleString()} students
            </span>
            <span className="inline-flex items-center gap-2">
              <Clock size={16} /> {course.duration}
            </span>
            <span className="inline-flex items-center gap-2">
              <Award size={16} /> {course.level}
            </span>
          </div>
        </div>
      </section>

      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:px-6 lg:grid-cols-[1fr_320px]">
        <div className="space-y-8">
          <Reveal>
            <section className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
              <h2 className="text-2xl font-extrabold">What you will learn</h2>
              <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                {course.outcomes.map((item) => (
                  <li key={item} className="flex gap-2 text-slate-600">
                    <CheckCircle2 className="mt-0.5 shrink-0 text-emerald-500" size={18} />
                    {item}
                  </li>
                ))}
              </ul>
            </section>
          </Reveal>

          <Reveal>
            <section className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
              <h2 className="text-2xl font-extrabold">Curriculum</h2>
              <div className="mt-4 space-y-3">
                {course.curriculum.map((module, index) => (
                  <div key={module.title} className="overflow-hidden rounded-xl border border-slate-200">
                    <button
                      type="button"
                      onClick={() => setOpenModule(openModule === index ? -1 : index)}
                      className="flex w-full items-center justify-between bg-slate-50 px-4 py-3 text-left font-semibold"
                    >
                      {module.title}
                      <span className="text-sm font-medium text-slate-500">{module.lessons.length} lessons</span>
                    </button>
                    <div className={`grid transition-all duration-300 ${openModule === index ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
                      <div className="overflow-hidden">
                        {module.lessons.map((lesson) => (
                          <div key={lesson.title} className="flex items-center justify-between border-t border-slate-100 px-4 py-3 text-sm text-slate-600">
                            <span className="inline-flex items-center gap-2">
                              <Play size={14} className="text-indigo-500" /> {lesson.title}
                            </span>
                            <span>{lesson.duration}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </Reveal>

          <Reveal>
            <section className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
              <h2 className="text-2xl font-extrabold">Instructor</h2>
              {instructor ? (
                <div className="mt-4 flex items-center gap-4">
                  <img src={instructor.photo} alt={instructor.name} className="h-16 w-16 rounded-full object-cover" />
                  <div>
                    <p className="text-lg font-bold">{instructor.name}</p>
                    <p className="text-sm text-slate-500">{instructor.title}</p>
                    <p className="mt-1 text-sm text-slate-500">
                      {instructor.courses} courses · {instructor.students.toLocaleString()} students
                    </p>
                  </div>
                </div>
              ) : (
                <p className="mt-3 text-slate-600">By {course.instructor}</p>
              )}
            </section>
          </Reveal>

          <Reveal>
            <section className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
              <h2 className="text-2xl font-extrabold">Reviews</h2>
              <div className="mt-5 space-y-4">
                {courseReviews.map((review) => (
                  <article key={review.name} className="rounded-xl bg-slate-50 p-4">
                    <div className="flex items-center justify-between">
                      <p className="font-semibold">{review.name}</p>
                      <StarRating value={review.rating} />
                    </div>
                    <p className="mt-2 text-sm text-slate-600">{review.text}</p>
                  </article>
                ))}
              </div>
            </section>
          </Reveal>
        </div>

        <aside className="lg:sticky lg:top-24 h-fit rounded-2xl bg-white p-6 shadow-lg ring-1 ring-slate-200">
          <div className="relative overflow-hidden rounded-xl">
            <img
              src={course.thumbnail}
              alt={course.title}
              className={`h-40 w-full object-cover ${isSeoCourse ? 'seo-card-image' : ''}`}
            />
            {isSeoCourse ? <div className="seo-card-shine" /> : null}
          </div>
          <p className="mt-4 text-3xl font-extrabold text-slate-900">{course.price === 0 ? 'Free' : `$${course.price}`}</p>
          <button
            type="button"
            onClick={handleEnroll}
            className="mt-4 w-full rounded-full bg-indigo-600 py-3 font-semibold text-white shadow-lg shadow-indigo-600/25 transition hover:-translate-y-0.5 hover:bg-indigo-700"
          >
            {enrolled ? 'Continue Learning' : 'Enroll Now'}
          </button>
          <ul className="mt-5 space-y-2 text-sm text-slate-600">
            <li>{course.lessons} lessons</li>
            <li>Full lifetime access</li>
            <li>Certificate of completion</li>
            <li>Learn on mobile and desktop</li>
          </ul>
        </aside>
      </div>
    </div>
  )
}
