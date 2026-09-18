import { useState } from 'react'
import Reveal from './Reveal.jsx'
import { Trophy, Send, CheckCircle2, Film, IndianRupee } from 'lucide-react'

const perks = [
  'Your idea produced as a full ELamp.ai film',
  '₹1,00,000 cash award on selection',
  'On-screen story credit',
]

export default function SubmitIdea() {
  const [sent, setSent] = useState(false)

  const onSubmit = (e) => {
    e.preventDefault()
    // Placeholder: wire this to your backend / Google Form / Sheets endpoint.
    setSent(true)
  }

  return (
    <section id="submit" className="relative py-12 md:py-16">
      <div className="w-full px-[10px]">
        <Reveal className="relative overflow-hidden rounded-[32px] border border-white/10 p-1">
          {/* glowing gradient border feel */}
          <div className="absolute inset-0 -z-10 bg-gradient-to-br from-gold/25 via-ember/15 to-magenta/25" />
          <div className="relative grid gap-10 rounded-[28px] bg-ink-2/80 p-8 backdrop-blur-xl md:grid-cols-2 md:p-12">
            {/* left: pitch */}
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-3 py-1 text-sm font-semibold text-gold">
                <Trophy className="h-4 w-4" />
                The ₹1 Lakh Story Award
              </span>

              <h2 className="font-display mt-5 text-4xl font-extrabold leading-tight text-white md:text-5xl">
                Submit your movie idea.
                <br />
                <span className="text-gradient">Win ₹1,00,000.</span>
              </h2>

              <p className="mt-4 max-w-md text-fog">
                Have a script or a spark of a story? Send it to ELamp.ai. If it’s
                selected for full movie production, you earn a{' '}
                <span className="font-semibold text-white">₹1 Lakh award</span> — and
                we bring it to the screen.
              </p>

              <ul className="mt-7 space-y-3">
                {perks.map((p) => (
                  <li key={p} className="flex items-center gap-3 text-mist">
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-gold" />
                    {p}
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex items-center gap-4 text-sm text-mist/60">
                <span className="flex items-center gap-1.5">
                  <Film className="h-4 w-4" /> Any genre
                </span>
                <span className="flex items-center gap-1.5">
                  <IndianRupee className="h-4 w-4" /> No entry fee
                </span>
              </div>
            </div>

            {/* right: form */}
            <div className="rounded-2xl glass p-6 md:p-7">
              {sent ? (
                <div className="flex h-full flex-col items-center justify-center py-10 text-center">
                  <span className="grid h-16 w-16 place-items-center rounded-full bg-gradient-to-br from-gold to-ember">
                    <CheckCircle2 className="h-8 w-8 text-ink" />
                  </span>
                  <h3 className="font-display mt-5 text-2xl font-bold text-white">
                    Idea received 🎬
                  </h3>
                  <p className="mt-2 max-w-xs text-sm text-fog">
                    Our story team reviews every submission. If yours is selected,
                    we’ll reach out about the ₹1 Lakh award.
                  </p>
                </div>
              ) : (
                <form onSubmit={onSubmit} className="flex flex-col gap-4">
                  <h3 className="font-display text-xl font-bold text-white">
                    Pitch your story
                  </h3>
                  <Field label="Your name">
                    <input required type="text" placeholder="Jane Director" className={inputCls} />
                  </Field>
                  <Field label="Email">
                    <input required type="email" placeholder="you@studio.com" className={inputCls} />
                  </Field>
                  <Field label="Working title">
                    <input required type="text" placeholder="The Last Monsoon" className={inputCls} />
                  </Field>
                  <Field label="Logline / idea">
                    <textarea
                      required
                      rows={3}
                      placeholder="One or two lines that capture your story…"
                      className={`${inputCls} resize-none`}
                    />
                  </Field>
                  <button
                    type="submit"
                    className="mt-1 inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-gold to-ember px-6 py-3.5 font-semibold text-ink transition-transform hover:scale-[1.02]"
                  >
                    Submit my idea
                    <Send className="h-4 w-4" />
                  </button>
                  <p className="text-center text-xs text-mist/50">
                    By submitting you agree to the award terms. Your idea stays yours.
                  </p>
                </form>
              )}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

const inputCls =
  'w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white placeholder:text-mist/40 outline-none transition focus:border-flare/50 focus:bg-white/[0.07]'

function Field({ label, children }) {
  return (
    <label className="flex flex-col gap-1.5">
      <span className="text-xs font-medium uppercase tracking-wide text-mist/60">
        {label}
      </span>
      {children}
    </label>
  )
}
