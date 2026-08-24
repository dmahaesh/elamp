import { useEffect, useState } from 'react'
import { motion } from 'motion/react'
import { Menu, X } from 'lucide-react'
import Logo from './Logo.jsx'

const links = [
  { label: 'Models', href: '#models' },
  { label: 'Showcase', href: '#showcase' },
  { label: 'How it works', href: '#how' },
  { label: 'Submit Idea', href: '#submit' },
  { label: 'FAQ', href: '#faq' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-x-0 top-0 z-50 flex justify-center px-[10px] pt-4"
    >
      <nav
        className={`flex w-full items-center justify-between rounded-2xl px-4 py-3 transition-all duration-500 ${
          scrolled ? 'glass glow-ring' : 'border border-transparent'
        }`}
      >
        <a href="#top" className="flex items-center gap-2">
          <Logo className="h-9 w-9" />
          <span className="font-display text-xl font-extrabold tracking-tight text-white">
            natyaras
          </span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm text-fog transition-colors hover:text-white"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <a
            href="#waitlist"
            className="rounded-full bg-white px-5 py-2 text-sm font-semibold text-ink transition-transform hover:scale-[1.03]"
          >
            Get in Waitlist
          </a>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="grid h-10 w-10 place-items-center rounded-xl glass md:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute inset-x-4 top-20 z-50 rounded-2xl glass p-4 md:hidden"
        >
          <ul className="flex flex-col gap-1">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-2.5 text-sm text-mist hover:bg-white/5"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#waitlist"
                onClick={() => setOpen(false)}
                className="mt-1 block rounded-lg bg-white px-3 py-2.5 text-center text-sm font-semibold text-ink"
              >
                Get in Waitlist
              </a>
            </li>
          </ul>
        </motion.div>
      )}
    </motion.header>
  )
}
