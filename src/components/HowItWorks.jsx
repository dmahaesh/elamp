import { motion } from 'motion/react'
import Reveal from './Reveal.jsx'
import { PenLine, Clapperboard, SlidersHorizontal, Share2, Film } from 'lucide-react'

const steps = [
  {
    icon: PenLine,
    title: 'Write the idea',
    desc: 'Type a logline, paste a script, or describe a single scene. ELamp.ai understands story structure.',
  },
  {
    icon: Clapperboard,
    title: 'Generate the film',
    desc: 'The model crew builds shots, characters, camera moves and score — consistent from frame one.',
  },
  {
    icon: SlidersHorizontal,
    title: 'Direct & refine',
    desc: 'Reshoot any moment, adjust pacing, swap language. Iterate like you’re editing text.',
  },
  {
    icon: Share2,
    title: 'Export & release',
    desc: 'Deliver in up to 4K with clean audio stems, ready for the festival circuit or a feed.',
  },
]

// One row of sprocket holes, doubled so it can scroll seamlessly.
function Perforations({ reverse = false }) {
  return (
    <div className="pointer-events-none absolute inset-x-0 h-6 overflow-hidden" style={reverse ? { bottom: 0 } : { top: 0 }}>
      <div className={`flex h-full w-max items-center gap-3 px-1 ${reverse ? 'film-roll-rev' : 'film-roll'}`}>
        {Array.from({ length: 120 }).map((_, i) => (
          <span
            key={i}
            className="h-2.5 w-4 shrink-0 rounded-[3px] bg-ink ring-1 ring-white/10"
          />
        ))}
      </div>
    </div>
  )
}

export default function HowItWorks() {
  return (
    <section id="how" className="relative py-12 md:py-16">
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-60"
        style={{
          background:
            'radial-gradient(60% 50% at 50% 0%, rgba(192,38,211,0.14), transparent)',
        }}
      />
      <div className="w-full px-[10px]">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.25em] text-flare">
            <Film className="h-4 w-4" /> How it works
          </p>
          <h2 className="font-display mt-3 text-4xl font-extrabold text-white md:text-5xl">
            From logline to locked cut in four frames
          </h2>
        </Reveal>

        {/* Film strip */}
        <Reveal className="relative mt-9">
          <div className="film-flicker relative overflow-hidden rounded-2xl border border-white/10 bg-[#0a0a10]">
            {/* dark rails behind the sprockets */}
            <div className="absolute inset-x-0 top-0 h-6 bg-black/50" />
            <div className="absolute inset-x-0 bottom-0 h-6 bg-black/50" />
            <Perforations />
            <Perforations reverse />

            {/* moving light sweep, like a projector gate */}
            <motion.div
              aria-hidden
              className="pointer-events-none absolute inset-y-6 w-1/3 bg-gradient-to-r from-transparent via-white/[0.06] to-transparent"
              initial={{ x: '-40%' }}
              whileInView={{ x: '340%' }}
              viewport={{ once: false }}
              transition={{ duration: 4.5, repeat: Infinity, ease: 'linear' }}
            />

            <div className="grid grid-cols-1 gap-y-10 py-12 sm:grid-cols-2 md:grid-cols-4">
              {steps.map((s, i) => (
                <motion.div
                  key={s.title}
                  initial={{ opacity: 0, y: 24, filter: 'blur(6px)' }}
                  whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.6, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
                  className="group relative px-6 md:border-r md:border-dashed md:border-white/10 md:last:border-r-0"
                >
                  {/* frame number tab */}
                  <span className="font-display text-sm font-bold text-flare">
                    Frame {String(i + 1).padStart(2, '0')}
                  </span>

                  <div className="mt-3 grid h-14 w-14 place-items-center rounded-2xl glass glow-ring transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-3">
                    <s.icon className="h-6 w-6 text-white" />
                  </div>

                  <h3 className="font-display mt-4 text-xl font-bold text-white">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-fog">{s.desc}</p>

                  <span className="mt-4 block h-px w-0 bg-gradient-to-r from-ember to-flare transition-all duration-700 group-hover:w-2/3" />
                </motion.div>
              ))}
            </div>
          </div>

          {/* reel hubs on the sides */}
          <div className="pointer-events-none absolute -left-3 top-1/2 hidden h-16 w-16 -translate-y-1/2 rounded-full border-2 border-white/10 bg-ink md:block">
            <div className="absolute inset-3 rounded-full border border-white/10" />
          </div>
          <div className="pointer-events-none absolute -right-3 top-1/2 hidden h-16 w-16 -translate-y-1/2 rounded-full border-2 border-white/10 bg-ink md:block">
            <div className="absolute inset-3 rounded-full border border-white/10" />
          </div>
        </Reveal>
      </div>
    </section>
  )
}
