import { Link } from 'react-router-dom'
import { motion } from 'motion/react'
import {
  ArrowRight,
  Mail,
  BadgeDollarSign,
  KeyRound,
  Handshake,
  CreditCard,
  ShoppingBag,
  TrendingUp,
  Layers,
  Settings,
  Coins,
  Rocket,
  Check,
} from 'lucide-react'
import Reveal from '../components/Reveal.jsx'
import { pillars } from '../lib/elamp.js'

const p = pillars.find((x) => x.key === 'profit')
const next = pillars[pillars.findIndex((x) => x.key === 'profit') + 1]

const capabilities = [
  { icon: BadgeDollarSign, img: '/img/pro-advertising.jpeg', title: 'Advertising', desc: 'Monetize views with advertising across your films, shows and channels.' },
  { icon: KeyRound, img: '/img/pro-licensing.jpeg', title: 'Licensing & IP', desc: 'License your content and IP to platforms, broadcasters and partners.' },
  { icon: Handshake, img: '/img/pro-sponsorship.jpeg', title: 'Sponsorships', desc: 'Brand sponsorships and integrations that fund and elevate your content.' },
  { icon: CreditCard, img: '/img/pro-subscription.jpeg', title: 'Subscriptions', desc: 'Recurring revenue through memberships and subscription models.' },
  { icon: ShoppingBag, img: '/img/pro-commerce.jpeg', title: 'Commerce', desc: 'Turn audiences into buyers with content-driven commerce.' },
  { icon: TrendingUp, img: '/img/pro-growth.jpeg', title: 'Growth & Yield', desc: 'Optimize every revenue stream to maximize what you earn.' },
]

const steps = [
  { n: '01', icon: Layers, title: 'Model', desc: 'Choose the right revenue mix for your content and audience.' },
  { n: '02', icon: Settings, title: 'Enable', desc: 'Set up ads, licensing, subscriptions and commerce.' },
  { n: '03', icon: Coins, title: 'Monetize', desc: 'Turn attention into income across every stream.' },
  { n: '04', icon: TrendingUp, title: 'Optimize', desc: 'Improve yield per view and per audience.' },
  { n: '05', icon: Rocket, title: 'Scale', desc: 'Compound the returns as your audience grows.' },
]

const deliverables = [
  'Ad monetization',
  'Licensing deals',
  'Sponsorship packages',
  'Subscription setup',
  'Commerce integration',
  'Revenue reporting',
]

const audience = ['Filmmakers', 'Studios', 'Brands', 'Creators', 'Rights Holders']

export default function Profit() {
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
                  <BadgeDollarSign className="h-4 w-4" />
                  {p.name} · {p.verb}
                </p>
              </div>

              <h1 className="font-display mt-7 text-4xl font-extrabold leading-[1.03] text-white sm:text-6xl">
                Turn attention <br className="hidden sm:block" />
                into <span className="text-gradient">revenue.</span>
              </h1>

              <p className="mt-6 max-w-xl text-lg text-fog">
                Monetize films, ads, IP and audiences through advertising, licensing,
                sponsorships, subscriptions, commerce and other revenue models.
              </p>

              <p className="font-display mt-5 text-2xl font-bold">
                <span className="text-gradient">Profit from what you create.</span>
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
                src="/profit.mp4"
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
              What Profit does
            </p>
            <h2 className="font-display mt-3 text-4xl font-extrabold text-white md:text-5xl">
              Every way to earn
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
              From audience to income
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
                Revenue, maximized
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
                Built to earn
              </h2>
              <div className="mt-7 flex flex-wrap gap-3">
                {audience.map((a) => (
                  <span key={a} className="rounded-full border border-white/10 glass px-4 py-2 text-sm font-medium text-mist">
                    {a}
                  </span>
                ))}
              </div>
              <p className="mt-6 max-w-md text-fog">
                Attention is only valuable when it pays. Profit turns your audience
                into sustainable, compounding revenue.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CTA + loop back */}
      <section className="relative py-16 md:py-24">
        <div className="w-full px-[10px]">
          <Reveal className="relative mx-auto max-w-4xl overflow-hidden rounded-[32px] border border-white/10 p-1">
            <div className="absolute inset-0 -z-10 bg-gradient-to-br from-gold/25 via-ember/15 to-magenta/20" />
            <div className="rounded-[28px] bg-ink-2/80 p-8 text-center backdrop-blur-xl md:p-14">
              <h2 className="font-display text-3xl font-extrabold leading-tight text-white md:text-5xl">
                Ready to <span className="text-gradient">profit from what you create?</span>
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-fog">
                Idea to audience to revenue — the whole network, end to end.
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
                <Link
                  to={next ? next.path : '/#network'}
                  className="inline-flex items-center justify-center gap-2 rounded-full glass px-7 py-3.5 text-base font-semibold text-white transition-colors hover:bg-white/10"
                >
                  {next ? `Next: ${next.name} — ${next.verb}` : 'Explore the full network'}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
