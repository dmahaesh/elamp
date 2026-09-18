import {
  Film,
  Wand2,
  Users,
  Music4,
  Languages,
  Layers,
  Camera,
  Timer,
  ArrowUpRight,
} from 'lucide-react'
import Reveal from './Reveal.jsx'
import VideoPlayer from './VideoPlayer.jsx'

// Flagship model — gets the cinematic spotlight card.
const flagship = {
  icon: Film,
  name: 'ELamp Motion',
  tag: 'Text → Video',
  desc: 'Generate up to 10 seconds of coherent, film-grade motion with camera control and consistent physics — the engine the whole studio is built on.',
  stats: [
    { k: '4K', v: 'Max output' },
    { k: '10s', v: 'Per shot' },
    { k: '60fps', v: 'Motion' },
  ],
  src: '/flagship.mp4',
}

// The rest of the crew.
const crew = [
  { icon: Users, name: 'Persona', tag: 'Character consistency', desc: 'Lock a character’s face, wardrobe and vibe across every shot in your film.' },
  { icon: Camera, name: 'CineDirector', tag: 'Shot control', desc: 'Dolly, crane, whip-pan. Direct the camera with plain language.' },
  { icon: Wand2, name: 'Reshoot', tag: 'In-frame edit', desc: 'Change a costume, sky or prop without regenerating the whole scene.' },
  { icon: Music4, name: 'Score AI', tag: 'Sound & music', desc: 'Original score, foley and ambience matched to the emotional beat of the cut.' },
  { icon: Languages, name: 'Lip-Sync Dub', tag: '30+ languages', desc: 'Native-quality dubbing with matched lip movement for global releases.' },
  { icon: Layers, name: 'Storyboard', tag: 'Script → boards', desc: 'Turn a screenplay into a shot-listed, illustrated board in minutes.' },
  { icon: Timer, name: 'Realtime Preview', tag: 'Draft mode', desc: 'Low-latency previews so you can iterate a sequence like you edit text.' },
]

export default function Features() {
  return (
    <section id="models" className="relative py-12 md:py-16">
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-70"
        style={{
          background:
            'radial-gradient(50% 40% at 20% 0%, rgba(246,196,83,0.12), transparent), radial-gradient(50% 40% at 90% 20%, rgba(169,121,31,0.12), transparent)',
        }}
      />
      <div className="w-full px-[10px]">
        <Reveal className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-flare">
            The Studio
          </p>
          <h2 className="font-display mt-3 text-4xl font-extrabold leading-[1.02] text-white md:text-6xl">
            One platform, an entire
            <br className="hidden md:block" /> crew of{' '}
            <span className="text-gradient">AI models</span>
          </h2>
          <p className="mt-5 max-w-xl text-lg text-fog">
            Every model is tuned for narrative filmmaking — not generic clips. Compose
            them into a pipeline that carries you from logline to locked cut.
          </p>
        </Reveal>

        <div className="mt-9 grid gap-4 lg:grid-cols-12">
          {/* Spotlight flagship */}
          <Reveal className="lg:col-span-5">
            <div className="flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-3">
              <VideoPlayer src={flagship.src} ratio="aspect-video" />

              <div className="flex flex-1 flex-col p-4 md:p-5">
                <div className="flex items-center justify-between">
                  <span className="grid h-11 w-11 place-items-center rounded-2xl bg-white/10 ring-1 ring-white/15">
                    <flagship.icon className="h-5 w-5 text-white" />
                  </span>
                  <span className="rounded-full border border-flare/40 bg-flare/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-flare">
                    Flagship
                  </span>
                </div>

                <div className="mt-4 flex items-center gap-2">
                  <h3 className="font-display text-2xl font-extrabold text-white">
                    {flagship.name}
                  </h3>
                  <span className="rounded-full border border-white/15 px-2 py-0.5 text-[11px] text-mist/80">
                    {flagship.tag}
                  </span>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-mist/85">
                  {flagship.desc}
                </p>

                <div className="mt-auto flex gap-8 border-t border-white/10 pt-4">
                  {flagship.stats.map((s) => (
                    <div key={s.k}>
                      <div className="font-display text-2xl font-bold text-white">
                        {s.k}
                      </div>
                      <div className="text-xs uppercase tracking-wide text-mist/60">
                        {s.v}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>

          {/* Crew list */}
          <div className="grid gap-4 sm:grid-cols-2 lg:col-span-7">
            {crew.map((m, i) => (
              <Reveal
                key={m.name}
                delay={i * 0.04}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-colors hover:bg-white/[0.06]"
              >
                <span className="pointer-events-none absolute right-4 top-3 font-display text-5xl font-extrabold text-white/[0.05]">
                  {String(i + 2).padStart(2, '0')}
                </span>

                <span className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-white/15 to-white/5 ring-1 ring-white/10">
                  <m.icon className="h-5 w-5 text-white" />
                </span>

                <div className="mt-5 flex items-center gap-2">
                  <h3 className="font-display text-lg font-bold text-white">{m.name}</h3>
                  <ArrowUpRight className="h-4 w-4 text-mist/40 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-flare" />
                </div>
                <span className="mt-1 inline-block text-xs font-medium uppercase tracking-wide text-flare/80">
                  {m.tag}
                </span>
                <p className="mt-2 text-sm leading-relaxed text-fog">{m.desc}</p>

                <span className="mt-4 block h-px w-0 bg-gradient-to-r from-ember to-flare transition-all duration-500 group-hover:w-full" />
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
