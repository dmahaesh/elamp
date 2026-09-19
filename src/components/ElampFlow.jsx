import { motion } from 'motion/react'
import { Link } from 'react-router-dom'
import { ArrowRight, ChevronDown } from 'lucide-react'
import Reveal from './Reveal.jsx'
import { pillars } from '../lib/elamp.js'

export default function ElampFlow() {
  return (
    <section id="network" className="relative py-16 md:py-24">
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-70"
        style={{
          background:
            'radial-gradient(55% 40% at 50% 0%, rgba(246,196,83,0.10), transparent)',
        }}
      />

      <div className="w-full px-[10px]">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-flare">
            The ELAMP network
          </p>
          <h2 className="font-display mt-3 text-3xl font-extrabold leading-[1.05] text-white sm:text-4xl md:text-5xl">
            <span className="text-gradient">Envision. Lens. Amplify. Multiply. Profit.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg text-fog">
            From an idea in your head to an audience around the world — one
            AI-native media network for every stage.
          </p>
        </Reveal>

        <div className="mx-auto mt-14 max-w-3xl">
          {pillars.map((p, i) => (
            <div key={p.key}>
              <Reveal delay={i * 0.05}>
                <Link
                  to={p.path}
                  className="group relative block overflow-hidden rounded-3xl glass p-6 transition-all duration-500 hover:glow-ring md:p-8"
                >
                  <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
                    {/* letter badge */}
                    <div className="flex items-center gap-4">
                      <span className="font-display grid h-16 w-16 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-gold to-ember text-3xl font-extrabold text-ink transition-transform duration-500 group-hover:scale-105">
                        {p.letter}
                      </span>
                      <div className="sm:hidden">
                        <h3 className="font-display text-2xl font-bold text-white">{p.name}</h3>
                        <p className="text-sm font-semibold text-flare">{p.verb}</p>
                      </div>
                    </div>

                    {/* copy */}
                    <div className="flex-1">
                      <div className="hidden items-baseline gap-3 sm:flex">
                        <h3 className="font-display text-2xl font-bold text-white">{p.name}</h3>
                        <span className="text-sm font-semibold text-flare">{p.verb}</span>
                      </div>
                      <p className="mt-1 font-display text-lg font-semibold text-mist">
                        {p.head}
                      </p>
                      <p className="mt-2 max-w-xl text-sm leading-relaxed text-fog">
                        {p.blurb}
                      </p>
                    </div>

                    {/* cta */}
                    <div className="flex items-center gap-2 self-start rounded-full border border-white/10 px-4 py-2 text-sm font-semibold text-white transition-colors group-hover:bg-white/10 sm:self-center">
                      Explore
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>

                  <span className="pointer-events-none absolute inset-x-0 bottom-0 h-px w-0 bg-gradient-to-r from-ember via-flare to-gold transition-all duration-700 group-hover:w-full" />
                </Link>
              </Reveal>

              {/* connector */}
              {i < pillars.length - 1 && (
                <div className="flex flex-col items-center py-3" aria-hidden="true">
                  <span className="h-6 w-px bg-gradient-to-b from-flare/60 to-flare/10" />
                  <motion.span
                    initial={{ y: -2, opacity: 0.5 }}
                    whileInView={{ y: 2, opacity: 1 }}
                    viewport={{ once: false }}
                    transition={{ duration: 1.1, repeat: Infinity, repeatType: 'reverse' }}
                    className="text-flare"
                  >
                    <ChevronDown className="h-4 w-4" />
                  </motion.span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
