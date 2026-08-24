import { useRef } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import Reveal from './Reveal.jsx'

const items = [
  { label: 'Text → Video', src: '/showcase-1.mp4' },
  { label: 'Character', src: '/showcase-2.mp4' },
  { label: 'Reference → Video', src: '/showcase-3.mp4' },
  { label: 'Cinematic', src: '/showcase-4.mp4' },
  { label: 'Extend a shot', src: '/showcase-5.mp4' },
  { label: 'Scene', src: '/showcase-6.mp4' },
  { label: 'Motion', src: '/showcase-7.mp4' },
  { label: 'Reshoot', src: '/showcase-8.mp4' },
  { label: 'Storyboard', src: '/showcase-9.mp4' },
]

function VideoTile({ label, src }) {
  return (
    <div className="group relative aspect-[9/16] overflow-hidden rounded-2xl border border-white/10 bg-black">
      <video
        className="h-full w-full object-cover"
        src={src}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/85 via-transparent to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 p-4">
        <span className="rounded-full border border-white/15 bg-ink/40 px-3 py-1 text-xs font-medium uppercase tracking-[0.15em] text-mist backdrop-blur-sm">
          {label}
        </span>
      </div>
    </div>
  )
}

export default function Showcase() {
  const trackRef = useRef(null)

  const scrollByCards = (dir) => {
    const el = trackRef.current
    if (!el) return
    el.scrollBy({ left: dir * el.clientWidth * 0.8, behavior: 'smooth' })
  }

  return (
    <section id="showcase" className="relative py-12 md:py-16">
      <div className="w-full px-[10px]">
        <Reveal className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-flare">
              Showcase
            </p>
            <h2 className="font-display mt-3 text-4xl font-extrabold text-white md:text-5xl">
              Frames the industry can’t tell from set
            </h2>
          </div>

          <div className="flex items-center gap-4">
            <p className="hidden text-fog md:block md:max-w-xs md:text-right">
              A living gallery of shots made on Natyaras.
            </p>
            <div className="flex gap-2">
              <button
                onClick={() => scrollByCards(-1)}
                aria-label="Previous"
                className="grid h-11 w-11 place-items-center rounded-full glass text-white transition-colors hover:bg-white/10"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                onClick={() => scrollByCards(1)}
                aria-label="Next"
                className="grid h-11 w-11 place-items-center rounded-full glass text-white transition-colors hover:bg-white/10"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </Reveal>

        <div
          ref={trackRef}
          className="mt-8 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4 no-scrollbar"
        >
          {items.map((it, i) => (
            <Reveal
              key={i}
              delay={i * 0.06}
              className="w-[52%] shrink-0 snap-center sm:w-[32%] md:w-[22%] lg:w-[18%]"
            >
              <VideoTile label={it.label} src={it.src} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
