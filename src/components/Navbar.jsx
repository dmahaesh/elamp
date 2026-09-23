import { useEffect, useState } from 'react'
import { motion } from 'motion/react'
import { Link } from 'react-router-dom'
import { Menu, X, ChevronDown, LogOut } from 'lucide-react'
import Logo from './Logo.jsx'
import { signInWithGoogle, getCurrentUser, signOut } from '../lib/google.js'
import { joinWaitlist } from '../lib/api.js'
import { pillars } from '../lib/elamp.js'

function Avatar({ user, size = 'h-7 w-7' }) {
  if (user?.picture) {
    return (
      <img
        src={user.picture}
        alt={user.name || 'You'}
        referrerPolicy="no-referrer"
        className={`${size} rounded-full object-cover`}
      />
    )
  }
  const initial = (user?.name || user?.email || '?').trim().charAt(0).toUpperCase()
  return (
    <span className={`${size} grid place-items-center rounded-full bg-gradient-to-br from-gold to-ember text-xs font-bold text-ink`}>
      {initial}
    </span>
  )
}

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

const flat = [
  { label: 'Work', to: '/work' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [user, setUser] = useState(() => getCurrentUser())

  const loginWithGoogle = async () => {
    try {
      const u = await signInWithGoogle()
      setUser(u)
      joinWaitlist(u)
    } catch {
      // sign-in cancelled
    }
  }

  const logout = () => {
    signOut()
    setUser(null)
  }

  const firstName = (user?.name || user?.email || '').split(' ')[0]

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
        <Link to="/" className="flex items-center">
          <Logo className="h-9 w-auto md:h-11" />
        </Link>

        <ul className="hidden items-center gap-7 md:flex">
          {/* Network dropdown */}
          <li className="group relative">
            <button className="flex items-center gap-1 text-base font-medium text-mist transition-colors hover:text-white">
              Network
              <ChevronDown className="h-4 w-4 transition-transform group-hover:rotate-180" />
            </button>
            <div className="invisible absolute left-1/2 top-full z-50 w-60 -translate-x-1/2 pt-3 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100">
              <div className="rounded-2xl glass glow-ring p-2">
                {pillars.map((p) => (
                  <Link
                    key={p.key}
                    to={p.path}
                    className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-mist transition-colors hover:bg-white/5 hover:text-white"
                  >
                    <span className="font-display grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-gradient-to-br from-gold to-ember text-xs font-extrabold text-ink">
                      {p.letter}
                    </span>
                    <span>
                      <span className="block font-semibold text-white">{p.name}</span>
                      <span className="block text-xs text-fog">{p.verb}</span>
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </li>

          {flat.map((l) => (
            <li key={l.to}>
              <Link to={l.to} className="text-base font-medium text-mist transition-colors hover:text-white">
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-2 md:flex">
          {user ? (
            <>
              <span className="flex items-center gap-2 rounded-full glass py-1 pl-1 pr-3">
                <Avatar user={user} />
                <span className="max-w-[120px] truncate text-sm font-medium text-white">{firstName}</span>
              </span>
              <button
                onClick={logout}
                title="Sign out"
                aria-label="Sign out"
                className="grid h-9 w-9 place-items-center rounded-full border border-white/10 text-mist transition-colors hover:bg-white/5 hover:text-white"
              >
                <LogOut className="h-4 w-4" />
              </button>
            </>
          ) : (
            <button
              onClick={loginWithGoogle}
              className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2 text-sm font-semibold text-ink transition-transform hover:scale-[1.03]"
            >
              <GoogleIcon className="h-4 w-4" />
              Log in with Google
            </button>
          )}
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
          className="absolute inset-x-4 top-20 z-50 max-h-[75vh] overflow-y-auto rounded-2xl glass p-4 md:hidden"
        >
          <p className="px-3 pb-1 pt-2 text-xs font-semibold uppercase tracking-[0.2em] text-flare">Network</p>
          <ul className="flex flex-col gap-1">
            {pillars.map((p) => (
              <li key={p.key}>
                <Link
                  to={p.path}
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-mist hover:bg-white/5"
                >
                  <span className="font-display grid h-7 w-7 shrink-0 place-items-center rounded-md bg-gradient-to-br from-gold to-ember text-xs font-extrabold text-ink">
                    {p.letter}
                  </span>
                  {p.name}
                </Link>
              </li>
            ))}
          </ul>
          <div className="my-2 border-t border-white/10" />
          <ul className="flex flex-col gap-1">
            {flat.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-2.5 text-sm text-mist hover:bg-white/5"
                >
                  {l.label}
                </Link>
              </li>
            ))}
            <li>
              {user ? (
                <div className="mt-1 flex items-center justify-between gap-2 rounded-lg glass px-3 py-2.5">
                  <span className="flex items-center gap-2">
                    <Avatar user={user} size="h-8 w-8" />
                    <span className="max-w-[160px] truncate text-sm font-medium text-white">{firstName}</span>
                  </span>
                  <button
                    onClick={() => {
                      setOpen(false)
                      logout()
                    }}
                    className="inline-flex items-center gap-1 text-sm text-mist hover:text-white"
                  >
                    <LogOut className="h-4 w-4" /> Sign out
                  </button>
                </div>
              ) : (
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
              )}
            </li>
          </ul>
        </motion.div>
      )}
    </motion.header>
  )
}
