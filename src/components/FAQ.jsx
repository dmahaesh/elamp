import { useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { Plus } from 'lucide-react'
import Reveal from './Reveal.jsx'

const faqs = [
  {
    q: 'What exactly is ELamp.ai?',
    a: 'ELamp.ai is an AI film studio. You describe a story in text and our models generate cinematic video, characters, camera moves, and score — everything you need to take an idea to a finished film.',
  },
  {
    q: 'Who is ELamp.ai for?',
    a: 'Independent filmmakers, studios and production houses, screenwriters, ad agencies and content teams — anyone who tells stories and wants to move faster from idea to screen.',
  },
  {
    q: 'Do I keep the rights to my work?',
    a: 'Yes. Content you generate is yours, and ideas you submit remain your intellectual property.',
  },
  {
    q: 'When can I start using it?',
    a: 'We’re rolling out access in waves. Join the waitlist with Google to get early access, priority render credits, and an invite to the founding creators program.',
  },
  {
    q: 'What quality and formats are supported?',
    a: 'Exports go up to 4K with clean audio stems and multi-language dubbing across 30+ languages, ready for festivals, clients, or social feeds.',
  },
]

function Item({ q, a, i }) {
  const [open, setOpen] = useState(i === 0)
  return (
    <Reveal delay={i * 0.04} className="border-b border-white/10">
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between gap-4 py-6 text-left"
      >
        <span className="font-display text-lg font-semibold text-white md:text-xl">
          {q}
        </span>
        <span
          className={`grid h-8 w-8 shrink-0 place-items-center rounded-full glass transition-transform duration-300 ${
            open ? 'rotate-45' : ''
          }`}
        >
          <Plus className="h-4 w-4 text-white" />
        </span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <p className="pb-6 pr-12 text-fog">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </Reveal>
  )
}

export default function FAQ() {
  return (
    <section id="faq" className="relative py-12 md:py-16">
      <div className="w-full px-[10px]">
        <Reveal className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-flare">
            FAQ
          </p>
          <h2 className="font-display mt-3 text-4xl font-extrabold text-white md:text-5xl">
            Questions, answered
          </h2>
        </Reveal>

        <div className="mt-8">
          {faqs.map((f, i) => (
            <Item key={f.q} {...f} i={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
