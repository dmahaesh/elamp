// Generates the 5 ELAMP pillar loops via BytePlus ARK (Dreamina-Seedance) and
// downloads them into public/. Reads keys from .env.example.
// Run: node scripts/gen-videos.mjs
import fs from 'node:fs'
import path from 'node:path'

const envFile = fs.existsSync(new URL('../.env', import.meta.url)) ? '../.env' : '../.env.example'
const env = Object.fromEntries(
  fs
    .readFileSync(new URL(envFile, import.meta.url), 'utf8')
    .split('\n')
    .filter((l) => l && !l.startsWith('#') && l.includes('='))
    .map((l) => {
      const i = l.indexOf('=')
      return [l.slice(0, i).trim(), l.slice(i + 1).trim()]
    }),
)

const KEY = env.ARK_API_KEY
const BASE = env.ARK_BASE_URL
const MODEL = env.SEEDANCE_MODEL
const OUT = new URL('../public/', import.meta.url)

const STYLE =
  'Cinematic premium loop, ultra-dark black background, warm gold light (#f6c453) with subtle electric-blue film-strip accents, volumetric god-rays, floating particles, high-end 3D render, elegant minimal, deep negative space, slow hypnotic motion, seamless loop, no text, no logo, no watermark'
const OPTS = '--ratio 4:3 --duration 5 --resolution 720p'

const pillars = [
  { key: 'envision', prompt: 'a glowing golden ribbon of light writing itself into drifting story fragments and faint character silhouettes, sparks of inspiration rising' },
  { key: 'lens', prompt: 'a golden cinema lens slowly pulls focus as a projector beam sweeps through darkness and film frames form inside the glow, blue film-strip perforations catching light, dust motes drifting' },
  { key: 'amplify', prompt: 'golden broadcast waves pulse outward from a bright core, spark particles bursting and rising, spotlight beams sweeping a dark stage, energy radiating in rings' },
  { key: 'multiply', prompt: 'a single glowing node multiplies into a spreading constellation of connected screens and points of light across a dark globe, gold-and-blue light streams flowing outward, slow orbital drift' },
  { key: 'profit', prompt: 'a luminous golden growth line rises smoothly while glowing coins and particles of light float upward, elegant ascending momentum, soft blue glints, slow parallax' },
]

const sleep = (ms) => new Promise((r) => setTimeout(r, ms))
const H = { Authorization: `Bearer ${KEY}`, 'Content-Type': 'application/json' }

async function createTask(p) {
  const body = {
    model: MODEL,
    generate_audio: false,
    content: [{ type: 'text', text: `${STYLE}, ${p.prompt} ${OPTS}` }],
  }
  const r = await fetch(`${BASE}/contents/generations/tasks`, {
    method: 'POST',
    headers: H,
    body: JSON.stringify(body),
  }).then((x) => x.json())
  if (!r.id) throw new Error(`${p.key}: create failed ${JSON.stringify(r)}`)
  console.log(`[${p.key}] task ${r.id}`)
  return r.id
}

async function waitAndDownload(p, id) {
  for (let i = 0; i < 40; i++) {
    const r = await fetch(`${BASE}/contents/generations/tasks/${id}`, { headers: H }).then((x) => x.json())
    if (r.status === 'succeeded') {
      const url = r.content?.video_url
      console.log(`[${p.key}] ✓ succeeded, downloading…`)
      const buf = Buffer.from(await (await fetch(url)).arrayBuffer())
      const file = path.join(OUT.pathname.replace(/^\//, ''), `${p.key}.mp4`)
      fs.writeFileSync(new URL(`${p.key}.mp4`, OUT), buf)
      console.log(`[${p.key}] saved public/${p.key}.mp4 (${(buf.length / 1e6).toFixed(2)} MB)`)
      return true
    }
    if (['failed', 'canceled'].includes(r.status)) {
      console.error(`[${p.key}] ✗ ${r.status}: ${r.error?.code} ${r.error?.message || ''}`)
      return false
    }
    await sleep(12000)
  }
  console.error(`[${p.key}] ✗ timed out`)
  return false
}

const results = await Promise.all(
  pillars.map(async (p) => {
    try {
      const id = await createTask(p)
      return [p.key, await waitAndDownload(p, id)]
    } catch (e) {
      console.error(e.message)
      return [p.key, false]
    }
  }),
)
console.log('\nSummary:', Object.fromEntries(results))
