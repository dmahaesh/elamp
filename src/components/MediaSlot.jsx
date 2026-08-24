import { Play, ImageIcon } from 'lucide-react'

/**
 * Placeholder slot for image / video. Swap the inner content with a real
 * <video> or <img> when assets are ready — keep the wrapper for styling.
 */
export default function MediaSlot({
  label = 'Video',
  type = 'video',
  className = '',
  ratio = 'aspect-video',
  tint = 'from-magenta/30 via-flare/10 to-ember/20',
}) {
  return (
    <div
      className={`group relative overflow-hidden rounded-2xl border border-white/10 ${ratio} ${className}`}
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${tint}`} />
      <div className="absolute inset-0 bg-[radial-gradient(120%_120%_at_50%_0%,transparent,rgba(6,6,10,0.85))]" />
      <div
        className="absolute inset-0 animate-drift opacity-40"
        style={{
          backgroundImage:
            'radial-gradient(circle at 30% 30%, rgba(255,255,255,0.15), transparent 45%), radial-gradient(circle at 70% 60%, rgba(255,61,129,0.25), transparent 40%)',
        }}
      />
      <div className="absolute inset-0 grid place-items-center">
        <div className="flex flex-col items-center gap-3 text-center">
          <span className="grid h-14 w-14 place-items-center rounded-full glass transition-transform duration-500 group-hover:scale-110">
            {type === 'video' ? (
              <Play className="h-6 w-6 translate-x-0.5 text-white" />
            ) : (
              <ImageIcon className="h-6 w-6 text-white" />
            )}
          </span>
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-mist/70">
            {label}
          </span>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px shimmer opacity-70" />
    </div>
  )
}
