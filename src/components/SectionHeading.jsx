export default function SectionHeading({ eyebrow, title, subtitle, align = 'center' }) {
  return (
    <div className={align === 'center' ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'}>
      {eyebrow ? (
        <p className="mb-2 text-sm font-semibold uppercase tracking-[0.18em] text-indigo-600">{eyebrow}</p>
      ) : null}
      <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">{title}</h2>
      {subtitle ? <p className="mt-3 text-base leading-relaxed text-slate-500">{subtitle}</p> : null}
    </div>
  )
}
