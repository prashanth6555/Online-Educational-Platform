import { Star } from 'lucide-react'

export default function StarRating({ value, size = 16 }) {
  return (
    <div className="flex items-center gap-0.5 text-amber-400" aria-label={`${value} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, index) => (
        <Star
          key={index}
          size={size}
          className={index < Math.round(value) ? 'fill-amber-400' : 'fill-slate-200 text-slate-200'}
        />
      ))}
    </div>
  )
}
