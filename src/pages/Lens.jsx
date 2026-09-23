import { Link } from 'react-router-dom'
import { motion } from 'motion/react'
import {
  ArrowRight,
  Mail,
  Clapperboard,
  Smartphone,
  Mountain,
  Mic,
  Music4,
  Scissors,
  Film,
} from 'lucide-react'
import Reveal from '../components/Reveal.jsx'
import Features from '../components/Features.jsx'
import Showcase from '../components/Showcase.jsx'
import HowItWorks from '../components/HowItWorks.jsx'
import UseCases from '../components/UseCases.jsx'
import { pillars } from '../lib/elamp.js'

const p = pillars.find((x) => x.key === 'lens')
const next = pillars[pillars.findIndex((x) => x.key === 'lens') + 1]

const capabilities = [
  { icon: Clapperboard, img: '/img/lens-filmmaking.jpeg', title: 'AI Filmmaking', desc: 'Text-to-film generation — cinematic shots with camera control and consistent physics.' },
  { icon: Smartphone, img: '/img/lens-adsshorts.jpeg', title: 'Ads & Shorts', desc: 'Scroll-stopping ads and short-form films built for every platform and format.' },
  { icon: Mountain, img: '/img/lens-scenes.jpeg', title: 'Scenes & Worlds', desc: 'Generate environments, sets and worlds — from intimate rooms to epic vistas.' },
  { icon: Mic, img: '/img/lens-voices.jpeg', title: 'Characters & Voices', desc: 'Consistent characters across every shot, with natural AI voices and dialogue.' },
  { icon: Music4, img: '/img/lens-music.jpeg', title: 'Music & Score', desc: 'Original score, foley and ambience matched to the emotion of each cut.' },
  { icon: Scissors, img: '/img/lens-editing.jpeg', title: 'Editing & Post', desc: 'Reshoot, recut, color and refine — iterate a sequence like you edit text.' },
  { icon: Film, img: '/img/lens-production.jpeg', title: 'Final Production', desc: 'Deliver up to 4K with clean audio, 30+ language dubs and festival-ready formats.' },
]

export default function Lens() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden pt-36 pb-16 md:pt-44 md:pb-20">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute left-1/2 top-[-10%] h-[460px] w-[760px] -translate-x-1/2 rounded-full bg-flare/20 blur-[130px] animate-drift" />
        </div>

        <div className="w-full px-[10px]">
          <div className="grid items-center gap-10 md:grid-cols-2 md:gap-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="flex items-center gap-4">
                <span className="font-display grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-gold to-ember text-2xl font-extrabold text-ink">
                  {p.letter}
                </span>
                <p className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.25em] text-flare">
                  <Clapperboard className="h-4 w-4" />
                  {p.name} · {p.verb}
                </p>
              </div>

              <h1 className="font-display mt-7 text-4xl font-extrabold leading-[1.03] text-white sm:text-6xl">
                Turn the story <br className="hidden sm:block" />
                into <span className="text-gradient">content.</span>
              </h1>

              <p className="mt-6 max-w-xl text-lg text-fog">
                AI filmmaking, ads, shorts, scenes, characters, voices, music, editing
                and final production — the studio where your story becomes something
                people can watch.
              </p>

              <p className="font-display mt-5 text-2xl font-bold">
                <span className="text-gradient">Bring it to the lens.</span>
              </p>

              <div className="mt-9 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center">
                <Link
                  to="/contact"
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-3.5 text-base font-semibold text-ink transition-transform hover:scale-[1.03]"
                >
                  <Mail className="h-4 w-4" />
                  Get in Touch
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <a
                  href="#capabilities"
                  className="inline-flex items-center justify-center gap-2 rounded-full glass px-7 py-3.5 text-base font-semibold text-white transition-colors hover:bg-white/10"
                >
                  What we create
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="glow-ring overflow-hidden rounded-3xl border border-white/10 glass p-2"
            >
              <video
                src="/lens.mp4"
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                className="aspect-[4/3] w-full rounded-2xl object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section id="capabilities" className="relative py-14 md:py-20">
        <div className="w-full px-[10px]">
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-flare">
              What Lens does
            </p>
            <h2 className="font-display mt-3 text-4xl font-extrabold text-white md:text-5xl">
              A full studio, AI-native
            </h2>
          </Reveal>

          <div className="mx-auto mt-12 grid max-w-6xl gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((c, i) => (
              <Reveal key={c.title} delay={i * 0.04}>
                <div className="group h-full overflow-hidden rounded-3xl glass transition-all duration-500 hover:glow-ring">
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img
                      src={c.img}
                      alt={c.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-transparent" />
                    <div className="absolute left-4 top-4 grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-gold to-ember shadow-[0_6px_20px_-6px_rgba(246,196,83,0.6)]">
                      <c.icon className="h-5 w-5 text-ink" />
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-display text-xl font-bold text-white">{c.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-fog">{c.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Existing studio content, re-homed under Lens */}
      <Features />
      <Showcase />
      <HowItWorks />
      <UseCases />

      {/* CTA + next */}
      <section className="relative py-16 md:py-24">
        <div className="w-full px-[10px]">
          <Reveal className="relative mx-auto max-w-4xl overflow-hidden rounded-[32px] border border-white/10 p-1">
            <div className="absolute inset-0 -z-10 bg-gradient-to-br from-gold/25 via-ember/15 to-magenta/20" />
            <div className="rounded-[28px] bg-ink-2/80 p-8 text-center backdrop-blur-xl md:p-14">
              <h2 className="font-display text-3xl font-extrabold leading-tight text-white md:text-5xl">
                Ready to <span className="text-gradient">bring it to the lens?</span>
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-fog">
                From script to screen — let’s turn your story into content the world
                can watch.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Link
                  to="/contact"
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-3.5 text-base font-semibold text-ink transition-transform hover:scale-[1.03]"
                >
                  <Mail className="h-4 w-4" />
                  Get in Touch
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
                {next && (
                  <Link
                    to={next.path}
                    className="inline-flex items-center justify-center gap-2 rounded-full glass px-7 py-3.5 text-base font-semibold text-white transition-colors hover:bg-white/10"
                  >
                    Next: {next.name} — {next.verb}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                )}
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
