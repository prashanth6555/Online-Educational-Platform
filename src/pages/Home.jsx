import { ArrowRight, PlayCircle, Sparkles } from 'lucide-react'
import { Link } from 'react-router-dom'
import CourseCard from '../components/CourseCard'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import StarRating from '../components/StarRating'
import { courses } from '../data/courses'
import { instructors, stats, testimonials } from '../data/instructors'

export default function Home() {
  const popular = courses.slice(0, 6)

  return (
    <div>
      <section className="relative overflow-hidden bg-gradient-to-br from-indigo-50 via-white to-amber-50">
        <div className="pointer-events-none absolute -left-16 top-10 h-56 w-56 rounded-full bg-indigo-200/50 blur-3xl animate-pulse-soft" />
        <div className="pointer-events-none absolute right-0 top-24 h-72 w-72 rounded-full bg-amber-200/40 blur-3xl" />
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:py-24">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-sm font-semibold text-indigo-700 shadow-sm">
              <Sparkles size={16} /> Learn without limits
            </span>
            <h1 className="mt-5 text-4xl font-extrabold leading-tight tracking-tight text-[#0f172a] sm:text-5xl lg:text-6xl">
              Master new skills with <span className="text-indigo-600">expert-led</span> online courses.
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-slate-600">
              Learnify brings together students and instructors in a modern classroom. Explore courses, learn at your pace, and track every milestone.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/courses"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-indigo-600 px-6 py-3 font-semibold text-white shadow-lg shadow-indigo-600/30 transition hover:-translate-y-0.5 hover:bg-indigo-700"
              >
                Explore Courses <ArrowRight size={18} />
              </Link>
              <Link
                to="/register"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-300 bg-white px-6 py-3 font-semibold text-slate-800 transition hover:-translate-y-0.5 hover:border-indigo-300 hover:text-indigo-700"
              >
                <PlayCircle size={18} /> Start Learning
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="animate-float overflow-hidden rounded-3xl border border-white/70 bg-white shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1400&q=80"
                alt="Students learning together"
                className="h-[340px] w-full object-cover sm:h-[420px]"
              />
            </div>
            <div className="absolute -bottom-6 left-4 rounded-2xl bg-white p-4 shadow-xl sm:left-8">
              <p className="text-sm font-semibold text-slate-500">This week</p>
              <p className="text-xl font-extrabold text-slate-900">+2,480 learners</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <Reveal>
          <SectionHeading
            eyebrow="Popular courses"
            title="Start with what students love"
            subtitle="Hand-picked programs across development, design, business, marketing, and data science."
          />
        </Reveal>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {popular.map((course, index) => (
            <Reveal key={course.id} delay={index * 80}>
              <CourseCard course={course} />
            </Reveal>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link to="/courses" className="font-semibold text-indigo-600 hover:text-indigo-800">
            View all courses →
          </Link>
        </div>
      </section>

      <section id="instructors" className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <Reveal>
            <SectionHeading
              eyebrow="Instructors"
              title="Learn from people who do the work"
              subtitle="Industry practitioners who teach with clarity, projects, and real-world context."
            />
          </Reveal>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {instructors.map((person, index) => (
              <Reveal key={person.id} delay={index * 70}>
                <article className="rounded-2xl border border-slate-200 p-6 transition hover:-translate-y-1 hover:shadow-lg">
                  <div className="flex items-center gap-4">
                    <img src={person.photo} alt={person.name} className="h-16 w-16 rounded-full object-cover" />
                    <div>
                      <h3 className="font-bold text-slate-900">{person.name}</h3>
                      <p className="text-sm text-slate-500">{person.title}</p>
                    </div>
                  </div>
                  <div className="mt-5 flex items-center justify-between text-sm text-slate-600">
                    <span>{person.courses} courses</span>
                    <span>{person.students.toLocaleString()} students</span>
                    <StarRating value={person.rating} />
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <Reveal>
          <SectionHeading
            eyebrow="Stories"
            title="Students who leveled up"
            subtitle="Thousands of learners use Learnify to switch careers, earn promotions, and stay curious."
          />
        </Reveal>
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {testimonials.map((item, index) => (
            <Reveal key={item.name} delay={index * 90}>
              <blockquote className="h-full rounded-2xl bg-indigo-600 p-7 text-white shadow-xl shadow-indigo-600/20">
                <p className="text-lg leading-relaxed">“{item.quote}”</p>
                <div className="mt-6 flex items-center gap-3">
                  <img src={item.photo} alt={item.name} className="h-12 w-12 rounded-full object-cover" />
                  <div>
                    <p className="font-bold">{item.name}</p>
                    <p className="text-sm text-indigo-100">{item.role}</p>
                  </div>
                </div>
              </blockquote>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-slate-900 py-14 text-white">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-4 sm:px-6 md:grid-cols-4">
          {stats.map((item, index) => (
            <Reveal key={item.label} delay={index * 60}>
              <div className="text-center">
                <p className="text-3xl font-extrabold text-amber-300 sm:text-4xl">{item.value}</p>
                <p className="mt-1 text-sm uppercase tracking-wider text-slate-400">{item.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  )
}
