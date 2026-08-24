import Reveal from './Reveal.jsx'
import VideoPlayer from './VideoPlayer.jsx'
import { Check } from 'lucide-react'

const cases = [
  {
    kicker: 'For Independent Filmmakers',
    title: 'Shoot the film you can’t afford to shoot',
    points: [
      'Pitch-ready proof of concept in a day',
      'No crew, no locations, no permits',
      'Own every frame end-to-end',
    ],
    tint: 'from-ember/40 to-magenta/20',
    src: '/usecase-1.mp4',
  },
  {
    kicker: 'For Studios & Production Houses',
    title: 'Pre-viz and content at production scale',
    points: [
      'Storyboard and pre-viz whole sequences',
      'Test castings and looks before you commit budget',
      'Brand-safe pipeline with team workspaces',
    ],
    tint: 'from-magenta/40 to-flare/20',
    reverse: true,
    src: '/usecase-2.mp4',
  },
  {
    kicker: 'For Writers & Ad Agencies',
    title: 'Turn a pitch deck into a moving trailer',
    points: [
      'Sell the idea with a cinematic teaser',
      '30+ languages for regional campaigns',
      'Iterate on client feedback in minutes',
    ],
    tint: 'from-gold/40 to-ember/20',
    src: '/usecase-3.mp4',
  },
]

export default function UseCases() {
  return (
    <section id="usecases" className="relative py-12 md:py-16">
      <div className="w-full px-[10px]">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-flare">
            Use cases
          </p>
          <h2 className="font-display mt-3 text-4xl font-extrabold text-white md:text-5xl">
            Built for everyone who tells stories
          </h2>
        </Reveal>

        <div className="mt-10 flex flex-col gap-10">
          {cases.map((c, i) => (
            <Reveal
              key={c.title}
              className={`grid items-center gap-8 md:grid-cols-2 ${
                c.reverse ? 'md:[direction:rtl]' : ''
              }`}
            >
              <div className="[direction:ltr]">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-mist/60">
                  {c.kicker}
                </p>
                <h3 className="font-display mt-3 text-3xl font-bold text-white md:text-4xl">
                  {c.title}
                </h3>
                <ul className="mt-6 space-y-3">
                  {c.points.map((p) => (
                    <li key={p} className="flex items-start gap-3 text-mist">
                      <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-gradient-to-br from-ember to-flare">
                        <Check className="h-3 w-3 text-white" />
                      </span>
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="[direction:ltr]">
                <div className="glow-ring rounded-3xl p-2 glass">
                  <VideoPlayer src={c.src} ratio="aspect-video" />
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
