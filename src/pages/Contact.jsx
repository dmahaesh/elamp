import { useState } from 'react'
import { motion } from 'motion/react'
import { Mail, Send, CheckCircle2, MapPin, Loader2 } from 'lucide-react'
import Reveal from '../components/Reveal.jsx'
import { sendContact } from '../lib/api.js'

const services = ['Envision', 'Lens', 'Amplify', 'Multiply', 'Profit', 'General enquiry']
const offices = ['India', 'USA', 'Australia']

const inputCls =
  'w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white placeholder:text-mist/40 outline-none transition focus:border-flare/50 focus:bg-white/[0.07]'

export default function Contact() {
  const [status, setStatus] = useState('idle') // idle | loading | done | error

  const onSubmit = async (e) => {
    e.preventDefault()
    const form = e.currentTarget
    const data = Object.fromEntries(new FormData(form))
    try {
      setStatus('loading')
      await sendContact(data)
      setStatus('done')
      form.reset()
    } catch {
      setStatus('error')
    }
  }

  return (
    <section className="relative overflow-hidden pt-36 pb-20 md:pt-44">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-[-10%] h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-flare/20 blur-[130px] animate-drift" />
      </div>

      <div className="w-full px-[10px]">
        <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-2 md:gap-16">
          {/* left: pitch */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-flare">Get in touch</p>
            <h1 className="font-display mt-3 text-4xl font-extrabold leading-[1.05] text-white sm:text-5xl">
              Let’s build something <span className="text-gradient">worth watching.</span>
            </h1>
            <p className="mt-5 max-w-md text-lg text-fog">
              Tell us about your story, brand or project. Whether it’s a film, a
              campaign or a whole content slate — we’ll get back to you.
            </p>

            <a
              href="mailto:entertainmentlampofficial@gmail.com"
              className="mt-8 inline-flex items-center gap-2 text-mist transition-colors hover:text-white"
            >
              <span className="grid h-10 w-10 place-items-center rounded-xl glass">
                <Mail className="h-4 w-4 text-flare" />
              </span>
              entertainmentlampofficial@gmail.com
            </a>

            <div className="mt-8">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-mist/60">
                Working across
              </p>
              <div className="mt-3 flex flex-wrap gap-3">
                {offices.map((o) => (
                  <span key={o} className="inline-flex items-center gap-2 rounded-full border border-white/10 glass px-4 py-2 text-sm text-mist">
                    <MapPin className="h-3.5 w-3.5 text-flare" />
                    {o}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* right: form */}
          <Reveal delay={0.1}>
            <div className="rounded-3xl glass glow-ring p-6 md:p-8">
              {status === 'done' ? (
                <div className="flex h-full flex-col items-center justify-center py-12 text-center">
                  <span className="grid h-16 w-16 place-items-center rounded-full bg-gradient-to-br from-gold to-ember">
                    <CheckCircle2 className="h-8 w-8 text-ink" />
                  </span>
                  <h3 className="font-display mt-5 text-2xl font-bold text-white">Message received 🎬</h3>
                  <p className="mt-2 max-w-xs text-sm text-fog">
                    Thanks for reaching out — we’ll be in touch shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={onSubmit} className="flex flex-col gap-4">
                  <h3 className="font-display text-xl font-bold text-white">Tell us about it</h3>

                  <Field label="Your name">
                    <input required name="name" type="text" placeholder="Jane Director" className={inputCls} />
                  </Field>
                  <Field label="Email">
                    <input required name="email" type="email" placeholder="you@studio.com" className={inputCls} />
                  </Field>
                  <Field label="Company (optional)">
                    <input name="company" type="text" placeholder="Studio / Brand" className={inputCls} />
                  </Field>
                  <Field label="What’s it about?">
                    <select name="subject" defaultValue="General enquiry" className={inputCls}>
                      {services.map((s) => (
                        <option key={s} value={s} className="bg-ink">{s}</option>
                      ))}
                    </select>
                  </Field>
                  <Field label="Message">
                    <textarea required name="message" rows={4} placeholder="Tell us what you’re working on…" className={`${inputCls} resize-none`} />
                  </Field>

                  {status === 'error' && (
                    <p className="text-sm text-flare">Something went wrong. Please try again or email us directly.</p>
                  )}

                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="mt-1 inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 font-semibold text-ink transition-transform hover:scale-[1.02] disabled:opacity-70"
                  >
                    {status === 'loading' ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
                    {status === 'loading' ? 'Sending…' : 'Send message'}
                  </button>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

function Field({ label, children }) {
  return (
    <label className="flex flex-col gap-1.5">
      <span className="text-xs font-medium uppercase tracking-wide text-mist/60">{label}</span>
      {children}
    </label>
  )
}
