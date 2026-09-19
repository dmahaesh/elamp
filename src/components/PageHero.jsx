import { motion } from 'motion/react'
import { pillars } from '../lib/elamp.js'

// Consistent hero header for each ELAMP internal page.
export default function PageHero({ pillarKey }) {
  const p = pillars.find((x) => x.key === pillarKey)
  if (!p) return null
  const Icon = p.icon

  return (
    <section className="relative overflow-hidden pt-36 pb-14 md:pt-44 md:pb-16">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-[-10%] h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-flare/20 blur-[130px] animate-drift" />
      </div>

      <div className="w-full px-[10px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl"
        >
          <div className="flex items-center gap-4">
            <span className="font-display grid h-16 w-16 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-gold to-ember text-3xl font-extrabold text-ink">
              {p.letter}
            </span>
            <p className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.25em] text-flare">
              <Icon className="h-4 w-4" />
              {p.name} · {p.verb}
            </p>
          </div>

          <h1 className="font-display mt-7 text-4xl font-extrabold leading-[1.03] text-white sm:text-6xl md:text-7xl">
            {p.head}
          </h1>

          <p className="mt-6 max-w-xl text-lg text-fog">{p.blurb}</p>

          <p className="font-display mt-5 text-2xl font-bold">
            <span className="text-gradient">{p.tagline}</span>
          </p>
        </motion.div>
      </div>
    </section>
  )
}
