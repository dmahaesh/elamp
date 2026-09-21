// Generates Envision capability illustrations via BytePlus ARK (Seedream) and
// downloads them into public/img/. Run: node scripts/gen-images.mjs
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
  { key: 'scriptwriting', prompt: 'a glowing golden fountain pen writing a flowing ribbon of light, words dissolving into sparks' },
  { key: 'story', prompt: 'golden narrative threads weaving together into a glowing story constellation and map of light' },
  { key: 'characters', prompt: 'two luminous golden theatrical masks and character silhouettes emerging from darkness, expressive' },
  { key: 'concepts', prompt: 'a radiant golden lightbulb bursting with idea particles and small floating concept sparks' },
  { key: 'treatments', prompt: 'a glowing golden scroll and document of light showing structured story beats and acts' },
  { key: 'screenplays', prompt: 'golden screenplay pages and a film clapperboard made of light, cinematic depth' },
  { key: 'ads', prompt: 'a glowing golden megaphone radiating concentric waves of light and campaign sparks' },
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
