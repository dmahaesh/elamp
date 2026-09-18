import { ArrowRight, Mail, Twitter, Facebook, Instagram, Youtube } from 'lucide-react'
import Logo from './Logo.jsx'

const socials = [
  { icon: Twitter, href: 'https://twitter.com/enterlamp', label: 'Twitter' },
  { icon: Facebook, href: 'https://facebook.com/entertainmentlamp', label: 'Facebook' },
  { icon: Instagram, href: 'https://instagram.com/entertainmentlamp', label: 'Instagram' },
  { icon: Youtube, href: 'https://youtube.com/@entertainmentlamp', label: 'YouTube' },
]

const groups = [
  {
    title: 'Studio',
    links: ['Models', 'Showcase', 'How it works', 'Use cases'],
  },
  {
    title: 'Program',
    links: ['₹1 Lakh Award', 'Submit an idea', 'Founding creators', 'Waitlist'],
  },
  {
    title: 'Company',
    links: ['About', 'Careers', 'Contact', 'Press'],
  },
]

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 py-16">
      <div className="w-full px-[10px]">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <a href="#top" className="flex items-center gap-2.5">
              <Logo className="h-14 w-14" />
              <span className="font-display text-2xl font-extrabold text-white">
                ELamp.ai
              </span>
            </a>
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
            <a
              href="mailto:entertainmentlampofficial@gmail.com"
              className="mt-4 flex items-center gap-2 text-sm text-fog transition-colors hover:text-white"
            >
              <Mail className="h-4 w-4" />
              entertainmentlampofficial@gmail.com
            </a>
            <div className="mt-4 flex gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="grid h-9 w-9 place-items-center rounded-full glass text-mist transition-colors hover:text-white"
                >
                  <s.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {groups.map((g) => (
            <div key={g.title}>
              <h4 className="font-display text-sm font-bold uppercase tracking-wide text-white">
                {g.title}
              </h4>
              <ul className="mt-4 space-y-3">
                {g.links.map((l) => (
                  <li key={l}>
                    <a href="#" className="text-sm text-fog transition-colors hover:text-white">
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-9 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-sm text-mist/50 md:flex-row">
          <p>© {new Date().getFullYear()} ELamp.ai. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
            <a href="#" className="hover:text-white">Award Rules</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
