import { useState } from 'react'
import Reveal from './Reveal.jsx'
import { CheckCircle2, ArrowRight } from 'lucide-react'

function GoogleIcon({ className = '' }) {
  return (
    <svg className={className} viewBox="0 0 48 48" aria-hidden="true">
      <path fill="#FFC107" d="M43.6 20.5H42V20H24v8h11.3c-1.6 4.7-6.1 8-11.3 8-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.9 1.2 8 3.1l5.7-5.7C34.5 6.5 29.5 4.5 24 4.5 12.7 4.5 3.5 13.7 3.5 25S12.7 45.5 24 45.5 44.5 36.3 44.5 25c0-1.5-.2-3-.9-4.5z"/>
      <path fill="#FF3D00" d="M6.3 14.7l6.6 4.8C14.7 15.1 19 12.5 24 12.5c3.1 0 5.9 1.2 8 3.1l5.7-5.7C34.5 6.5 29.5 4.5 24 4.5 16.3 4.5 9.7 8.9 6.3 14.7z"/>
      <path fill="#4CAF50" d="M24 45.5c5.4 0 10.3-2 14-5.3l-6.5-5.5c-2 1.4-4.6 2.3-7.5 2.3-5.2 0-9.6-3.3-11.2-8l-6.5 5C9.6 41 16.2 45.5 24 45.5z"/>
      <path fill="#1976D2" d="M43.6 20.5H42V20H24v8h11.3c-.8 2.2-2.2 4.1-4.1 5.4l6.5 5.5c-.5.4 7-5.1 7-13.9 0-1.5-.2-3-.9-4.5z"/>
    </svg>
  )
}

export default function Waitlist() {
  const [joined, setJoined] = useState(false)

  const joinWithGoogle = () => {
    // Placeholder: wire this to Google OAuth / your waitlist backend.
    setJoined(true)
  }

  return (
    <section id="waitlist" className="relative overflow-hidden py-12 md:py-16">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/2 h-[420px] w-[720px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-flare/20 blur-[140px]" />
      </div>

      <div className="w-full px-[10px] text-center">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-flare">
            Early access
          </p>
          <h2 className="font-display mt-4 text-4xl font-extrabold leading-tight text-white md:text-6xl">
            Be first on the <span className="text-gradient">ELamp.ai</span> set
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg text-fog">
            Join the waitlist to get early access, priority render credits, and an
            invite to the founding creators program.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="mx-auto mt-9 max-w-md">
          {joined ? (
            <div className="flex flex-col items-center gap-3 rounded-2xl glass glow-ring p-8">
              <span className="grid h-14 w-14 place-items-center rounded-full bg-gradient-to-br from-ember to-flare">
                <CheckCircle2 className="h-7 w-7 text-white" />
              </span>
              <h3 className="font-display text-2xl font-bold text-white">You’re on the list!</h3>
              <p className="text-sm text-fog">
                Check your inbox — we’ll email your access details soon.
              </p>
            </div>
          ) : (
            <div className="rounded-2xl glass glow-ring p-6">
              <button
                onClick={joinWithGoogle}
                className="group inline-flex w-full items-center justify-center gap-3 rounded-xl bg-white px-6 py-4 font-semibold text-ink transition-transform hover:scale-[1.02]"
              >
                <GoogleIcon className="h-5 w-5" />
                Continue with Google
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
              <p className="mt-3 text-xs text-mist/50">
                One tap. No spam. Leave the set anytime.
              </p>
            </div>
          )}
        </Reveal>

        <Reveal delay={0.2} className="mt-8 flex items-center justify-center gap-6 text-sm text-mist/50">
          <span>🎬 4,200+ creators waiting</span>
          <span className="hidden sm:inline">·</span>
          <span className="hidden sm:inline">Launching soon</span>
        </Reveal>
      </div>
    </section>
  )
}
