import { Link } from 'react-router-dom'
import { motion } from 'motion/react'
import {
  ArrowRight,
  Mail,
  Megaphone,
  Share2,
  Sparkles,
  Users,
  Star,
  Radio,
  Target,
  Wand2,
  Rocket,
  LineChart,
  Check,
} from 'lucide-react'
import Reveal from '../components/Reveal.jsx'
import { pillars } from '../lib/elamp.js'

const p = pillars.find((x) => x.key === 'amplify')
const next = pillars[pillars.findIndex((x) => x.key === 'amplify') + 1]

const capabilities = [
  { icon: Megaphone, img: '/img/amp-campaigns.jpeg', title: 'Campaigns', desc: 'End-to-end campaigns that wrap your film, brand or story in a moment people can’t ignore.' },
  { icon: Share2, img: '/img/amp-social.jpeg', title: 'Social Content', desc: 'Platform-native content engineered for the feed — built to stop the scroll and get shared.' },
  { icon: Sparkles, img: '/img/amp-hooks.jpeg', title: 'Promotional Hooks', desc: 'Trailers, teasers and hooks that spark curiosity and pull audiences in.' },
  { icon: Users, img: '/img/amp-creators.jpeg', title: 'Creator Networks', desc: 'Tap our creator networks to put your story in front of the right communities.' },
  { icon: Star, img: '/img/amp-celebrity.jpeg', title: 'Celebrity Partnerships', desc: 'Celebrity and influencer collaborations that lend reach, credibility and star power.' },
  { icon: Radio, img: '/img/amp-paid.jpeg', title: 'Paid Media', desc: 'Smart paid distribution that amplifies the best content to the widest relevant audience.' },
]

const steps = [
  { n: '01', icon: Target, title: 'Strategy', desc: 'Define the audience, angle and the moment you want to own.' },
  { n: '02', icon: Wand2, title: 'Create', desc: 'Build campaign content, hooks and creative that travel.' },
  { n: '03', icon: Users, title: 'Seed', desc: 'Activate creator and celebrity networks to spark the conversation.' },
  { n: '04', icon: Rocket, title: 'Amplify', desc: 'Push it wide with organic momentum and smart paid media.' },
  { n: '05', icon: LineChart, title: 'Optimize', desc: 'Measure what lands and double down on what works.' },
]

const deliverables = [
  'Campaign strategy & creative',
  'Trailers, teasers & hooks',
  'Social content packs',
  'Creator & celebrity activations',
  'Paid media plans',
  'Performance reporting',
]

const audience = ['Films & Studios', 'Brands', 'Ad Agencies', 'Creators', 'Content Teams']

export default function Amplify() {
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
                  <Megaphone className="h-4 w-4" />
                  {p.name} · {p.verb}
                </p>
              </div>

              <h1 className="font-display mt-7 text-4xl font-extrabold leading-[1.03] text-white sm:text-6xl">
                Make people <br className="hidden sm:block" />
                <span className="text-gradient">notice.</span>
              </h1>

              <p className="mt-6 max-w-xl text-lg text-fog">
                Campaigns, social content and promotional hooks — powered by creator
                and celebrity networks that generate attention around your film, brand
                or story.
              </p>

              <p className="font-display mt-5 text-2xl font-bold">
                <span className="text-gradient">Amplify your reach.</span>
              </p>

              <div className="mt-9 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center">
                <a
                  href="mailto:entertainmentlampofficial@gmail.com"
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-3.5 text-base font-semibold text-ink transition-transform hover:scale-[1.03]"
                >
                  <Mail className="h-4 w-4" />
                  Get in Touch
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
                <a
                  href="#capabilities"
                  className="inline-flex items-center justify-center gap-2 rounded-full glass px-7 py-3.5 text-base font-semibold text-white transition-colors hover:bg-white/10"
                >
                  What we do
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
                src="/amplify.mp4"
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
              What Amplify does
            </p>
            <h2 className="font-display mt-3 text-4xl font-extrabold text-white md:text-5xl">
              Turn content into attention
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

      {/* Process */}
      <section className="relative py-14 md:py-20">
        <div
          className="pointer-events-none absolute inset-0 -z-10 opacity-70"
          style={{ background: 'radial-gradient(60% 45% at 50% 0%, rgba(246,196,83,0.10), transparent)' }}
        />
        <div className="w-full px-[10px]">
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-flare">The process</p>
            <h2 className="font-display mt-3 text-4xl font-extrabold text-white md:text-5xl">
              From content to conversation
            </h2>
          </Reveal>

          <div className="mx-auto mt-12 grid max-w-6xl gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {steps.map((s, i) => (
              <Reveal key={s.n} delay={i * 0.06}>
                <div className="group h-full rounded-3xl glass p-6">
                  <div className="flex items-center justify-between">
                    <span className="font-display text-sm font-bold tracking-[0.2em] text-flare/70">{s.n}</span>
                    <s.icon className="h-5 w-5 text-gold transition-transform duration-500 group-hover:scale-110" />
                  </div>
                  <h3 className="font-display mt-5 text-xl font-bold text-white">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-fog">{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Deliverables + audience */}
      <section className="relative py-14 md:py-20">
        <div className="w-full px-[10px]">
          <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-2 md:gap-16">
            <Reveal>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-flare">What you get</p>
              <h2 className="font-display mt-3 text-3xl font-extrabold text-white md:text-4xl">
                Attention, engineered
              </h2>
              <ul className="mt-7 space-y-3">
                {deliverables.map((d) => (
                  <li key={d} className="flex items-center gap-3 text-mist">
                    <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-gradient-to-br from-gold to-ember">
                      <Check className="h-3.5 w-3.5 text-ink" />
                    </span>
                    {d}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-flare">Who it’s for</p>
              <h2 className="font-display mt-3 text-3xl font-extrabold text-white md:text-4xl">
                Built to be seen
              </h2>
              <div className="mt-7 flex flex-wrap gap-3">
                {audience.map((a) => (
                  <span key={a} className="rounded-full border border-white/10 glass px-4 py-2 text-sm font-medium text-mist">
                    {a}
                  </span>
                ))}
              </div>
              <p className="mt-6 max-w-md text-fog">
                Great content deserves an audience. Amplify makes sure the right people
                see it — and can’t stop talking about it.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CTA + next */}
      <section className="relative py-16 md:py-24">
        <div className="w-full px-[10px]">
          <Reveal className="relative mx-auto max-w-4xl overflow-hidden rounded-[32px] border border-white/10 p-1">
            <div className="absolute inset-0 -z-10 bg-gradient-to-br from-gold/25 via-ember/15 to-magenta/20" />
            <div className="rounded-[28px] bg-ink-2/80 p-8 text-center backdrop-blur-xl md:p-14">
              <h2 className="font-display text-3xl font-extrabold leading-tight text-white md:text-5xl">
                Ready to <span className="text-gradient">amplify your reach?</span>
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-fog">
                Let’s turn your content into a moment people can’t ignore.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <a
                  href="mailto:entertainmentlampofficial@gmail.com"
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-3.5 text-base font-semibold text-ink transition-transform hover:scale-[1.03]"
                >
                  <Mail className="h-4 w-4" />
                  Get in Touch
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
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
