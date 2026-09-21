import { ArrowRight, Mail } from 'lucide-react'
import { Link } from 'react-router-dom'
import { pillars } from '../lib/elamp.js'

const groups = [
  {
    title: 'Network',
    links: pillars.map((p) => ({ label: p.name, to: p.path })),
  },
  {
    title: 'Company',
    links: [
      { label: 'About', to: '/about' },
      { label: 'Work', to: '/work' },
      { label: 'Contact', to: '/contact' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Privacy', to: '/privacy' },
      { label: 'Terms', to: '/terms' },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 py-16">
      <div className="w-full px-[10px]">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Link to="/" className="flex items-center gap-2.5">
              <img
                src="/elamp-icon.png"
                alt="ELamp.ai"
                className="h-12 w-12 object-contain"
              />
              <span className="font-display text-2xl font-extrabold text-white">
                ELamp.ai
              </span>
            </Link>
            <p className="mt-4 max-w-xs text-sm text-fog">
              Where light meets lens. New age entertainment — movies, series, games,
              TV shows and events.
            </p>
            <a
              href="mailto:entertainmentlampofficial@gmail.com"
              className="group mt-6 inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-ink transition-transform hover:scale-[1.03]"
            >
              <Mail className="h-4 w-4" />
              Get in Touch
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>

          {groups.map((g) => (
            <div key={g.title}>
              <h4 className="font-display text-sm font-bold uppercase tracking-wide text-white">
                {g.title}
              </h4>
              <ul className="mt-4 space-y-3">
                {g.links.map((l) => (
                  <li key={l.label}>
                    {l.to ? (
                      <Link to={l.to} className="text-sm text-fog transition-colors hover:text-white">
                        {l.label}
                      </Link>
                    ) : (
                      <a href="#" className="text-sm text-fog transition-colors hover:text-white">
                        {l.label}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-9 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-sm text-mist/50 md:flex-row">
          <p>© {new Date().getFullYear()} ELamp.ai. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/privacy" className="hover:text-white">Privacy</Link>
            <Link to="/terms" className="hover:text-white">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
