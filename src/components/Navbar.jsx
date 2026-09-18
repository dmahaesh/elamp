import { useEffect, useState } from 'react'
import { motion } from 'motion/react'
import { Menu, X } from 'lucide-react'
import Logo from './Logo.jsx'
import { signInWithGoogle } from '../lib/google.js'

function GoogleIcon({ className = '' }) {
  return (
    <svg className={className} viewBox="0 0 48 48" aria-hidden="true">
      <path fill="#FFC107" d="M43.6 20.5H42V20H24v8h11.3c-1.6 4.7-6.1 8-11.3 8-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.9 1.2 8 3.1l5.7-5.7C34.5 6.5 29.5 4.5 24 4.5 12.7 4.5 3.5 13.7 3.5 25S12.7 45.5 24 45.5 44.5 36.3 44.5 25c0-1.5-.2-3-.9-4.5z" />
      <path fill="#FF3D00" d="M6.3 14.7l6.6 4.8C14.7 15.1 19 12.5 24 12.5c3.1 0 5.9 1.2 8 3.1l5.7-5.7C34.5 6.5 29.5 4.5 24 4.5 16.3 4.5 9.7 8.9 6.3 14.7z" />
      <path fill="#4CAF50" d="M24 45.5c5.4 0 10.3-2 14-5.3l-6.5-5.5c-2 1.4-4.6 2.3-7.5 2.3-5.2 0-9.6-3.3-11.2-8l-6.5 5C9.6 41 16.2 45.5 24 45.5z" />
      <path fill="#1976D2" d="M43.6 20.5H42V20H24v8h11.3c-.8 2.2-2.2 4.1-4.1 5.4l6.5 5.5c-.5.4 7-5.1 7-13.9 0-1.5-.2-3-.9-4.5z" />
    </svg>
  )
}

const links = [
  { label: 'Models', href: '#models' },
  { label: 'Showcase', href: '#showcase' },
  { label: 'How it works', href: '#how' },
  { label: 'FAQ', href: '#faq' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  const loginWithGoogle = () => {
    signInWithGoogle().catch(() => {})
  }

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
        <a href="#top" className="flex items-center gap-2.5">
          <Logo className="h-14 w-14 md:h-16 md:w-16" />
          <span className="font-display text-2xl font-extrabold tracking-tight text-white">
            ELamp.ai
          </span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-base font-medium text-mist transition-colors hover:text-white"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 md:flex">
          <button
            onClick={loginWithGoogle}
            className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2 text-sm font-semibold text-ink transition-transform hover:scale-[1.03]"
          >
            <GoogleIcon className="h-4 w-4" />
            Log in with Google
          </button>
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
              <button
                onClick={() => {
                  setOpen(false)
                  loginWithGoogle()
                }}
                className="mt-1 flex w-full items-center justify-center gap-2 rounded-lg bg-white px-3 py-2.5 text-center text-sm font-semibold text-ink"
              >
                <GoogleIcon className="h-4 w-4" />
                Log in with Google
              </button>
            </li>
          </ul>
        </motion.div>
      )}
    </motion.header>
  )
}
