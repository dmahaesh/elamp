import { Link } from 'react-router-dom'
import { ArrowRight, Mail } from 'lucide-react'
import PageHero from './PageHero.jsx'
import Reveal from './Reveal.jsx'
import { pillars } from '../lib/elamp.js'

// In-style placeholder for ELAMP pages that aren't built out yet.
export default function ComingSoon({ pillarKey }) {
  const idx = pillars.findIndex((p) => p.key === pillarKey)
  const p = pillars[idx]
  const next = pillars[idx + 1]

  return (
    <>
      <PageHero pillarKey={pillarKey} />

      <section className="py-12 md:py-20">
        <div className="w-full px-[10px]">
          <Reveal className="mx-auto max-w-xl rounded-3xl glass glow-ring p-8 text-center md:p-12">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-flare">
              In production
            </p>
            <h2 className="font-display mt-3 text-3xl font-extrabold text-white md:text-4xl">
              This chapter of the network is being built.
            </h2>
            <p className="mx-auto mt-4 max-w-md text-fog">
              We’re crafting the full {p.name} experience. Want early access, or to
              partner with us on it?
            </p>

            <a
              href="mailto:entertainmentlampofficial@gmail.com"
              className="group mt-7 inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-3.5 text-base font-semibold text-ink transition-transform hover:scale-[1.03]"
            >
              <Mail className="h-4 w-4" />
              Get in Touch
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>

            {next && (
              <div className="mt-8 border-t border-white/10 pt-6">
                <Link
                  to={next.path}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-mist transition-colors hover:text-white"
                >
                  Up next: {next.name} — {next.verb}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            )}
          </Reveal>
        </div>
      </section>
    </>
  )
}
