import { motion } from 'motion/react'
import { ArrowRight, Sparkles, Star } from 'lucide-react'
import HeroVideoBg from './HeroVideoBg.jsx'

const trust = ['Directors', 'Studios', 'Screenwriters', 'Producers', 'VFX Houses', 'Ad Films']

export default function Hero() {
  return (
    <section id="top" className="relative isolate flex min-h-screen flex-col justify-center overflow-hidden pt-28 pb-16 md:pt-32 md:pb-20">
      {/* background showreel video(s) */}
      <HeroVideoBg />

      {/* ambient light */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-[-10%] h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-flare/25 blur-[130px] animate-drift" />
        <div className="absolute right-[8%] top-[30%] h-[360px] w-[360px] rounded-full bg-magenta/25 blur-[120px]" />
        <div className="absolute left-[6%] top-[40%] h-[320px] w-[320px] rounded-full bg-ember/20 blur-[120px]" />
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              'linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)',
            backgroundSize: '64px 64px',
            maskImage: 'radial-gradient(70% 60% at 50% 30%, #000, transparent)',
          }}
        />
      </div>

      <div className="w-full px-[10px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="flex justify-start"
        >
          <a
            href="#submit"
            className="group flex items-center gap-2 rounded-full glass px-4 py-1.5 text-sm text-mist"
          >
            <span className="grid h-5 w-5 place-items-center rounded-full bg-gradient-to-br from-gold to-ember">
              <Star className="h-3 w-3 text-ink" />
            </span>
            Submit your movie idea · Win ₹1 Lakh
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
          className="font-display mt-7 max-w-4xl text-left text-[2.5rem] font-extrabold leading-[1.02] text-white sm:text-6xl sm:leading-[0.98] md:text-7xl"
        >
          Turn a single <span className="text-gradient">idea</span> into a
          <br className="hidden sm:block" /> cinematic universe.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="mt-6 max-w-xl text-left text-lg text-fog"
        >
          The AI film studio for creators. Turn text into cinematic film.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="mt-9 flex w-full flex-col items-stretch justify-start gap-3 sm:w-auto sm:flex-row sm:items-start"
        >
          <a
            href="#waitlist"
            className="group inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-3.5 text-base font-semibold text-ink transition-transform hover:scale-[1.03]"
          >
            Get in Waitlist
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="#submit"
            className="inline-flex items-center justify-center gap-2 rounded-full glass px-7 py-3.5 text-base font-semibold text-white transition-colors hover:bg-white/10"
          >
            <Sparkles className="h-4 w-4 text-gold" />
            Submit an idea
          </a>
        </motion.div>

        {/* trust marquee */}
        <div className="relative mt-16 overflow-hidden sm:mt-[26vh] [mask-image:linear-gradient(90deg,transparent,#000_10%,#000_90%,transparent)]">
          <div className="marquee-track flex w-max items-center gap-6 sm:gap-8">
            {[...trust, ...trust, ...trust].map((t, i) => (
              <span key={i} className="flex items-center gap-6 sm:gap-8">
                <span className="neon-text whitespace-nowrap font-display text-2xl font-extrabold tracking-tight sm:text-3xl md:text-4xl">
                  {t}
                </span>
                <span className="neon-sep text-2xl">✦</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
