// Generates Lens capability illustrations via BytePlus ARK (Seedream).
// Run: node scripts/gen-lens-images.mjs
import fs from 'node:fs'

const env = Object.fromEntries(
  fs
    .readFileSync(new URL('../.env', import.meta.url), 'utf8')
    .split('\n')
    .filter((l) => l && !l.startsWith('#') && l.includes('='))
    .map((l) => {
      const i = l.indexOf('=')
      return [l.slice(0, i).trim(), l.slice(i + 1).trim()]
    }),
)

const KEY = env.ARK_API_KEY
const BASE = env.ARK_BASE_URL
const MODEL = env.SEEDREAM_MODEL
const OUTDIR = new URL('../public/img/', import.meta.url)
fs.mkdirSync(OUTDIR, { recursive: true })

const STYLE =
  'Abstract cinematic concept illustration, warm gold (#f6c453) glowing light on ultra-black background, subtle electric-blue accents, premium, minimal, elegant, volumetric glow, floating particles, high-end 3D render, centered composition, dark cinematic, no text, no words, no watermark, no logo'

const items = [
  { key: 'lens-filmmaking', prompt: 'a golden cinematic movie camera projecting a beam of light that forms glowing film frames' },
  { key: 'lens-adsshorts', prompt: 'a glowing vertical golden smartphone screen bursting with short-form video frames and sparks' },
  { key: 'lens-scenes', prompt: 'a glowing golden cinematic landscape and world forming out of particles of light, epic environment' },
  { key: 'lens-voices', prompt: 'a luminous golden character face silhouette with glowing sound waveforms flowing as voice' },
  { key: 'lens-music', prompt: 'golden musical notes and sound waves flowing as ribbons of light in dark space' },
  { key: 'lens-editing', prompt: 'a glowing golden film editing timeline and waveform with frames of light being arranged' },
  { key: 'lens-production', prompt: 'a golden film reel and clapperboard made of light with a premiere spotlight glow' },
]

const H = { Authorization: `Bearer ${KEY}`, 'Content-Type': 'application/json' }

const results = await Promise.all(
  items.map(async (it) => {
    try {
      const r = await fetch(`${BASE}/images/generations`, {
        method: 'POST',
        headers: H,
        body: JSON.stringify({
          model: MODEL,
          prompt: `${STYLE}. ${it.prompt}`,
          size: '1024x1024',
          response_format: 'url',
          watermark: false,
        }),
      }).then((x) => x.json())
      const url = r.data?.[0]?.url
      if (!url) throw new Error(`${it.key}: ${JSON.stringify(r).slice(0, 200)}`)
      const buf = Buffer.from(await (await fetch(url)).arrayBuffer())
      fs.writeFileSync(new URL(`${it.key}.jpeg`, OUTDIR), buf)
      console.log(`[${it.key}] saved public/img/${it.key}.jpeg (${(buf.length / 1e6).toFixed(2)} MB)`)
      return [it.key, true]
    } catch (e) {
      console.error(e.message)
      return [it.key, false]
    }
  }),
)
console.log('\nSummary:', Object.fromEntries(results))
