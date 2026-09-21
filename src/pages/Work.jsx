import { Link } from 'react-router-dom'
import { motion } from 'motion/react'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import Reveal from '../components/Reveal.jsx'

// NOTE: sample/placeholder projects — replace with real case studies + media.
const projects = [
  { cat: 'AI Film', title: 'Neon Monsoon', blurb: 'A short film taken from logline to finished cut in days, not months.', stat: '10-day turnaround', img: '/img/lens-filmmaking.jpeg' },
  { cat: 'Ad Campaign', title: 'Aurora — Launch Film', blurb: 'A product launch film and social cutdowns for a consumer brand.', stat: '12M+ views', img: '/img/amp-campaigns.jpeg' },
  { cat: 'Series', title: 'The Long Game', blurb: 'Pre-viz and episode content for an original episodic series.', stat: '6 episodes previz’d', img: '/img/lens-scenes.jpeg' },
  { cat: 'Music Video', title: 'Goldlight', blurb: 'A fully AI-generated music video with consistent characters.', stat: '1 artist, 0 crew', img: '/img/lens-music.jpeg' },
  { cat: 'Brand', title: 'Studio X Rebrand', blurb: 'Concept, campaign and creator activations for a studio relaunch.', stat: '40+ creators', img: '/img/amp-creators.jpeg' },
  { cat: 'Distribution', title: 'Global Drop', blurb: 'One title, localized and distributed across OTT and social.', stat: '9 markets', img: '/img/mul-global.jpeg' },
]

export default function Work() {
  return (
    <>
      {/* Header */}
      <section className="relative overflow-hidden pt-36 pb-10 md:pt-44 md:pb-12">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute left-1/2 top-[-10%] h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-flare/20 blur-[130px] animate-drift" />
        </div>
        <div className="w-full px-[10px]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="mx-auto max-w-3xl text-center"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-flare">Our work</p>
            <h1 className="font-display mt-4 text-4xl font-extrabold leading-[1.05] text-white sm:text-6xl">
              Ideas, <span className="text-gradient">on screen.</span>
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-lg text-fog">
              A selection of films, campaigns and content made across the ELAMP
              network — from first idea to global audience.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Grid */}
      <section className="relative py-8 md:py-12">
        <div className="w-full px-[10px]">
          <div className="mx-auto grid max-w-6xl gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.04}>
                <div className="group h-full overflow-hidden rounded-3xl glass transition-all duration-500 hover:glow-ring">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={p.img}
                      alt={p.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-transparent" />
                    <span className="absolute left-4 top-4 rounded-full border border-white/15 bg-ink/50 px-3 py-1 text-xs font-medium uppercase tracking-[0.15em] text-mist backdrop-blur-sm">
                      {p.cat}
                    </span>
                    <ArrowUpRight className="absolute right-4 top-4 h-5 w-5 text-white/70 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between gap-3">
                      <h3 className="font-display text-xl font-bold text-white">{p.title}</h3>
                      <span className="shrink-0 text-sm font-semibold text-flare">{p.stat}</span>
                    </div>
                    <p className="mt-2 text-sm leading-relaxed text-fog">{p.blurb}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal className="mx-auto mt-10 max-w-2xl text-center">
            <p className="text-sm text-mist/50">
              Sample projects shown for layout — real case studies coming soon.
            </p>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-16 md:py-24">
        <div className="w-full px-[10px]">
          <Reveal className="relative mx-auto max-w-4xl overflow-hidden rounded-[32px] border border-white/10 p-1">
            <div className="absolute inset-0 -z-10 bg-gradient-to-br from-gold/25 via-ember/15 to-magenta/20" />
            <div className="rounded-[28px] bg-ink-2/80 p-8 text-center backdrop-blur-xl md:p-14">
              <h2 className="font-display text-3xl font-extrabold leading-tight text-white md:text-5xl">
                Have a project in mind?
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-fog">
                Let’s make something worth watching — and worth talking about.
              </p>
              <div className="mt-8 flex justify-center">
                <Link to="/contact" className="group inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-3.5 text-base font-semibold text-ink transition-transform hover:scale-[1.03]">
                  Get in Touch
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
