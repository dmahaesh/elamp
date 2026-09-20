import { useState } from 'react'
import { motion } from 'motion/react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import Reveal from './Reveal.jsx'
import { pillars } from '../lib/elamp.js'

// Per-pillar accent gradients (kept in the gold/ember/flare/magenta family).
const tints = [
  'from-gold/30 via-ember/10 to-transparent',
  'from-ember/30 via-flare/10 to-transparent',
  'from-flare/30 via-magenta/15 to-transparent',
  'from-magenta/30 via-ember/10 to-transparent',
  'from-gold/30 via-flare/10 to-transparent',
]

function PillarVisual({ p, tint }) {
  const Icon = p.icon
  const [failed, setFailed] = useState(false)
  const media = failed ? null : p.video || p.image

  return (
    <div className="group/vis relative aspect-[4/3] overflow-hidden rounded-3xl border border-white/10 glass">
      {media ? (
        p.video ? (
          <video
            src={p.video}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            onError={() => setFailed(true)}
            className="h-full w-full object-cover"
          />
        ) : (
          <img
            src={p.image}
            alt={p.name}
            onError={() => setFailed(true)}
            className="h-full w-full object-cover"
          />
        )
      ) : (
        <>
          <div className={`absolute inset-0 bg-gradient-to-br ${tint}`} />
          <div
            className="absolute inset-0 opacity-[0.12]"
            style={{
              backgroundImage:
                'linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)',
              backgroundSize: '40px 40px',
              maskImage: 'radial-gradient(70% 60% at 50% 40%, #000, transparent)',
            }}
          />
          {/* giant ghost letter */}
          <span className="font-display pointer-events-none absolute -right-2 -top-10 select-none text-[11rem] font-extrabold leading-none text-white/[0.06] md:text-[14rem]">
            {p.letter}
          </span>
          {/* icon medallion */}
          <div className="absolute inset-0 grid place-items-center">
            <div className="grid h-20 w-20 place-items-center rounded-2xl bg-gradient-to-br from-gold to-ember shadow-[0_10px_40px_-8px_rgba(246,196,83,0.6)] transition-transform duration-500 group-hover/vis:scale-110">
              <Icon className="h-9 w-9 text-ink" />
            </div>
          </div>
          {/* moving light sweep */}
          <motion.div
            aria-hidden
            className="pointer-events-none absolute inset-y-0 w-1/3 bg-gradient-to-r from-transparent via-white/[0.08] to-transparent"
            initial={{ x: '-60%' }}
            whileInView={{ x: '360%' }}
            viewport={{ once: false }}
            transition={{ duration: 3.5, repeat: Infinity, ease: 'linear' }}
          />
        </>
      )}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
    </div>
  )
}

export default function ElampFlow() {
  return (
    <section id="network" className="relative py-20 md:py-28">
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-80"
        style={{
          background:
            'radial-gradient(50% 35% at 50% 0%, rgba(246,196,83,0.12), transparent)',
        }}
      />

      <div className="w-full px-[10px]">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-flare">
            The ELAMP network
          </p>
          <h2 className="font-display mt-4 text-4xl font-extrabold leading-[1.03] text-white sm:text-5xl md:text-6xl">
            One idea. <span className="text-gradient">Five stages.</span>
            <br className="hidden sm:block" /> A whole media network.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg text-fog">
            From an idea in your head to an audience around the world — every stage
            engineered to be AI-native.
          </p>
        </Reveal>

        {/* timeline */}
        <div className="relative mx-auto mt-20 max-w-6xl">
          {/* glowing center spine (desktop) */}
          <div className="pointer-events-none absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-flare/40 to-transparent md:block" />
          <motion.div
            aria-hidden
            className="pointer-events-none absolute left-1/2 top-0 hidden h-24 w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-gold to-transparent blur-[1px] md:block"
            initial={{ y: 0, opacity: 0 }}
            whileInView={{ y: '100%', opacity: [0, 1, 0] }}
            viewport={{ once: false }}
            transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
          />

          <div className="flex flex-col gap-14 md:gap-8">
            {pillars.map((p, i) => {
              const flip = i % 2 === 1
              const tint = tints[i % tints.length]
              return (
                <Reveal key={p.key} delay={0.04}>
                  <div className="relative grid items-center gap-6 md:grid-cols-2 md:gap-20">
                    {/* center node with letter (desktop) */}
                    <span className="font-display absolute left-1/2 top-1/2 z-10 hidden h-14 w-14 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-2xl border border-gold/40 bg-ink text-2xl font-extrabold text-gold shadow-[0_0_0_6px_rgba(5,5,5,1),0_0_30px_-4px_rgba(246,196,83,0.7)] md:grid">
                      {p.letter}
                    </span>

                    {/* visual */}
                    <div className={flip ? 'md:order-2' : 'md:order-1'}>
                      <PillarVisual p={p} tint={tint} />
                    </div>

                    {/* copy */}
                    <div
                      className={`relative ${
                        flip ? 'md:order-1 md:pr-16 md:text-right' : 'md:order-2 md:pl-16'
                      }`}
                    >
                      <div
                        className={`flex items-center gap-3 ${
                          flip ? 'md:flex-row-reverse' : ''
                        }`}
                      >
                        <span className="font-display grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-gold to-ember text-lg font-extrabold text-ink md:hidden">
                          {p.letter}
                        </span>
                        <span className="font-display text-sm font-bold tracking-[0.2em] text-flare/70">
                          {String(i + 1).padStart(2, '0')}
                        </span>
                        <h3 className="font-display text-3xl font-extrabold text-white md:text-4xl">
                          {p.name}
                        </h3>
                        <span className="text-sm font-semibold text-flare">{p.verb}</span>
                      </div>

                      <p className="font-display mt-4 text-xl font-bold text-mist md:text-2xl">
                        {p.head}
                      </p>
                      <p className={`mt-3 text-fog ${flip ? 'md:ml-auto' : ''} max-w-md`}>
                        {p.blurb}
                      </p>
                      <p className="font-display mt-4 text-lg font-bold">
                        <span className="text-gradient">{p.tagline}</span>
                      </p>

                      <Link
                        to={p.path}
                        className="group mt-6 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-ink transition-transform hover:scale-[1.04]"
                      >
                        Explore {p.name}
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </div>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>

        {/* closing line */}
        <Reveal className="mx-auto mt-16 max-w-2xl text-center">
          <p className="font-display text-2xl font-extrabold text-white md:text-3xl">
            From an idea in your head{' '}
            <span className="text-gradient">to an audience around the world.</span>
          </p>
        </Reveal>
      </div>
    </section>
  )
}
