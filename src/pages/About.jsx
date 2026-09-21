import { Link } from 'react-router-dom'
import { motion } from 'motion/react'
import { ArrowRight, Mail, Globe, Sparkles, ShieldCheck, Rocket, Users } from 'lucide-react'
import Reveal from '../components/Reveal.jsx'
import { pillars } from '../lib/elamp.js'

const offices = ['India', 'USA', 'Australia']

const values = [
  { icon: Sparkles, title: 'Story first', desc: 'Technology serves the story — never the other way around.' },
  { icon: Rocket, title: 'AI-native', desc: 'We build with AI at the core, from idea to audience to revenue.' },
  { icon: ShieldCheck, title: 'Creators keep their rights', desc: 'Your ideas and IP stay yours. Always.' },
  { icon: Users, title: 'Global by design', desc: 'Teams and talent across India, the USA and Australia.' },
]

export default function About() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden pt-36 pb-16 md:pt-44 md:pb-20">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute left-1/2 top-[-10%] h-[460px] w-[760px] -translate-x-1/2 rounded-full bg-flare/20 blur-[130px] animate-drift" />
        </div>
        <div className="w-full px-[10px]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="mx-auto max-w-3xl text-center"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-flare">About ELamp</p>
            <h1 className="font-display mt-4 text-4xl font-extrabold leading-[1.05] text-white sm:text-6xl">
              We create worth in <span className="text-gradient">entertainment.</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-fog">
              ELamp is an AI-native media network — a content-oriented company that
              takes an idea from a spark in someone’s head to an audience around the
              world, and turns that attention into revenue.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission */}
      <section className="relative py-14 md:py-20">
        <div className="w-full px-[10px]">
          <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-2 md:gap-16">
            <Reveal>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-flare">Our mission</p>
              <h2 className="font-display mt-3 text-3xl font-extrabold text-white md:text-4xl">
                New-age entertainment needs the best brains working together
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-fog">
                Where light meets lens. We bring together writers, filmmakers,
                technologists, marketers and distributors — powered by AI — to make
                high-quality content and give it global reach. From movies and series
                to games, TV shows, ads and events, our job is to help great stories
                get made, get seen, and get paid.
              </p>
              <a
                href="mailto:entertainmentlampofficial@gmail.com"
                className="group mt-6 inline-flex items-center gap-2 text-mist transition-colors hover:text-white"
              >
                <Mail className="h-4 w-4 text-flare" /> entertainmentlampofficial@gmail.com
              </a>
            </Reveal>
          </div>
        </div>
      </section>

      {/* The model */}
      <section className="relative py-14 md:py-20">
        <div
          className="pointer-events-none absolute inset-0 -z-10 opacity-70"
          style={{ background: 'radial-gradient(60% 45% at 50% 0%, rgba(246,196,83,0.10), transparent)' }}
        />
        <div className="w-full px-[10px]">
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-flare">How we’re built</p>
            <h2 className="font-display mt-3 text-4xl font-extrabold text-white md:text-5xl">
              The ELAMP network
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-fog">
              Five connected stages — the whole journey from idea to income, under one roof.
            </p>
          </Reveal>

          <div className="mx-auto mt-12 grid max-w-6xl gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {pillars.map((p, i) => (
              <Reveal key={p.key} delay={i * 0.05}>
                <Link to={p.path} className="group block h-full rounded-3xl glass p-6 transition-all duration-500 hover:glow-ring">
                  <span className="font-display grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-gold to-ember text-xl font-extrabold text-ink transition-transform duration-500 group-hover:scale-110">
                    {p.letter}
                  </span>
                  <h3 className="font-display mt-4 text-lg font-bold text-white">{p.name}</h3>
                  <p className="mt-1 text-sm text-flare">{p.verb}</p>
                  <p className="mt-2 text-sm leading-relaxed text-fog">{p.head}</p>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Values + global */}
      <section className="relative py-14 md:py-20">
        <div className="w-full px-[10px]">
          <div className="mx-auto max-w-6xl">
            <Reveal>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-flare">What we believe</p>
              <h2 className="font-display mt-3 text-3xl font-extrabold text-white md:text-4xl">Our values</h2>
            </Reveal>
            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {values.map((v, i) => (
                <Reveal key={v.title} delay={i * 0.05}>
                  <div className="h-full rounded-3xl glass p-6">
                    <div className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-gold to-ember">
                      <v.icon className="h-6 w-6 text-ink" />
                    </div>
                    <h3 className="font-display mt-5 text-lg font-bold text-white">{v.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-fog">{v.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal className="mt-14 flex flex-col items-start justify-between gap-6 rounded-3xl glass p-8 md:flex-row md:items-center">
              <div>
                <p className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.25em] text-flare">
                  <Globe className="h-4 w-4" /> Global team
                </p>
                <h3 className="font-display mt-3 text-2xl font-bold text-white">
                  Working across three continents
                </h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {offices.map((o) => (
                  <span key={o} className="rounded-full border border-white/10 bg-white/[0.04] px-5 py-2.5 text-sm font-medium text-mist">
                    {o}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-16 md:py-24">
        <div className="w-full px-[10px]">
          <Reveal className="relative mx-auto max-w-4xl overflow-hidden rounded-[32px] border border-white/10 p-1">
            <div className="absolute inset-0 -z-10 bg-gradient-to-br from-gold/25 via-ember/15 to-magenta/20" />
            <div className="rounded-[28px] bg-ink-2/80 p-8 text-center backdrop-blur-xl md:p-14">
              <h2 className="font-display text-3xl font-extrabold leading-tight text-white md:text-5xl">
                Let’s create something <span className="text-gradient">worth watching.</span>
              </h2>
              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Link to="/contact" className="group inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-3.5 text-base font-semibold text-ink transition-transform hover:scale-[1.03]">
                  Get in Touch
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link to="/work" className="inline-flex items-center justify-center gap-2 rounded-full glass px-7 py-3.5 text-base font-semibold text-white transition-colors hover:bg-white/10">
                  See our work
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
