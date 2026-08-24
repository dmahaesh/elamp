import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'

/**
 * Rotating hero background. Add as many clips as you like — drop the files in
 * /public and list them here. With one clip it simply loops; with several it
 * crossfades from one to the next.
 */
const CLIPS = [
  '/hero-1.mp4',
  '/hero-2.mp4',
  '/hero-3.mp4',
]

export default function HeroVideoBg() {
  const [index, setIndex] = useState(0)
  const videoRef = useRef(null)
  const single = CLIPS.length < 2

  const next = () => setIndex((i) => (i + 1) % CLIPS.length)

  // Safety timer in case a clip stalls or `onEnded` never fires.
  useEffect(() => {
    if (single) return
    const t = setTimeout(next, 12000)
    return () => clearTimeout(t)
  }, [index, single])

  return (
    <div className="pointer-events-none absolute inset-0 -z-20 overflow-hidden bg-ink">
      <AnimatePresence>
        <motion.video
          key={CLIPS[index]}
          ref={videoRef}
          className="absolute inset-0 h-full w-full object-cover object-top"
          src={CLIPS[index]}
          autoPlay
          muted
          loop={single}
          playsInline
          preload="auto"
          onEnded={single ? undefined : next}
          initial={{ opacity: 0, scale: 1.06 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ opacity: { duration: 1.2 }, scale: { duration: 12, ease: 'linear' } }}
        />
      </AnimatePresence>

      {/* legibility overlays — only where text sits, so the footage stays bright */}
      <div className="absolute inset-0 bg-gradient-to-r from-ink/80 via-ink/25 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-transparent" />

      {/* clip progress dots */}
      {!single && (
        <div className="absolute bottom-6 left-1/2 flex -translate-x-1/2 gap-2">
          {CLIPS.map((c, i) => (
            <span
              key={c}
              className={`h-1.5 rounded-full transition-all duration-500 ${
                i === index ? 'w-6 bg-white/80' : 'w-1.5 bg-white/30'
              }`}
            />
          ))}
        </div>
      )}
    </div>
  )
}
