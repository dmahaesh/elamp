// Generates capability illustrations for a given ELAMP page via BytePlus ARK
// (Seedream). Usage: node scripts/gen-page-images.mjs <amplify|multiply|profit>
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

const SETS = {
  amplify: [
    { key: 'amp-campaigns', prompt: 'a golden interconnected marketing campaign bursting outward, radiating creative light nodes' },
    { key: 'amp-social', prompt: 'glowing golden social media engagement icons like hearts and shares rising as light particles from a phone' },
    { key: 'amp-hooks', prompt: 'a golden hook of light catching glowing attention sparks, captivating and magnetic' },
    { key: 'amp-creators', prompt: 'a network of glowing golden creator avatar nodes connected by streams of light' },
    { key: 'amp-celebrity', prompt: 'a radiant golden star with spotlight beams and red-carpet glow, celebrity aura' },
    { key: 'amp-paid', prompt: 'golden concentric broadcast and ad waves amplifying outward from a bright core with rising reach bars' },
  ],
  multiply: [
    { key: 'mul-ott', prompt: 'a glowing golden streaming play button surrounded by floating screens of light, an OTT platform' },
    { key: 'mul-partners', prompt: 'golden partner network nodes shaking hands as interlocking light connections' },
    { key: 'mul-social', prompt: 'golden content multiplying across many glowing social platform screens in the dark' },
    { key: 'mul-global', prompt: 'a glowing golden globe with streams of light distributing content to points worldwide' },
    { key: 'mul-creators', prompt: 'many glowing golden creator nodes re-sharing and spreading a single piece of content outward' },
    { key: 'mul-channels', prompt: 'golden distribution channels as branching rivers of light carrying content to many destinations' },
  ],
  profit: [
    { key: 'pro-advertising', prompt: 'golden advertising revenue flowing as streams of light and coins into a glowing funnel' },
    { key: 'pro-licensing', prompt: 'a glowing golden key and contract of light representing licensing and IP rights' },
    { key: 'pro-sponsorship', prompt: 'a golden handshake made of light with brand glow, sponsorship and partnership' },
    { key: 'pro-subscription', prompt: 'a glowing golden membership card and recurring circular arrows of light, subscription' },
    { key: 'pro-commerce', prompt: 'a golden shopping/commerce glow with floating products of light and rising sales sparks' },
    { key: 'pro-growth', prompt: 'a luminous golden upward growth chart with rising bars and coins of light, prosperity' },
  ],
}

const page = process.argv[2]
const items = SETS[page]
if (!items) {
  console.error(`Unknown page "${page}". Options: ${Object.keys(SETS).join(', ')}`)
  process.exit(1)
}

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
