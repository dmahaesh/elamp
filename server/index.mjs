// ELamp backend: serves the built SPA and captures leads (waitlist + contact).
// DB is optional — if DATABASE_URL isn't set yet, the API still responds OK
// (stored:false) so the site never breaks before Postgres is attached.
import express from 'express'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import pg from 'pg'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const DIST = path.join(__dirname, '..', 'dist')
const PORT = process.env.PORT || 3000

// --- DB (optional) ---
let pool = null
if (process.env.DATABASE_URL) {
  pool = new pg.Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: process.env.PGSSL === 'true' ? { rejectUnauthorized: false } : false,
  })
}

async function initDb() {
  if (!pool) {
    console.log('[db] DATABASE_URL not set — leads will not be persisted yet')
    return
  }
  try {
    await pool.query(`
      create table if not exists leads (
        id serial primary key,
        type text not null default 'waitlist',
        name text,
        email text,
        message text,
        meta jsonb,
        created_at timestamptz not null default now()
      );
    `)
    console.log('[db] connected, leads table ready')
  } catch (e) {
    console.error('[db] init failed:', e.message)
  }
}

async function saveLead({ type, name, email, message, meta }) {
  if (!pool) return { stored: false }
  await pool.query(
    `insert into leads (type, name, email, message, meta) values ($1,$2,$3,$4,$5)`,
    [type, name || null, email || null, message || null, meta ? JSON.stringify(meta) : null],
  )
  return { stored: true }
}

const app = express()
app.use(express.json({ limit: '64kb' }))

app.get('/api/health', (_req, res) => res.json({ ok: true, db: !!pool }))

app.post('/api/waitlist', async (req, res) => {
  try {
    const { name, email, userId, picture } = req.body || {}
    if (!email) return res.status(400).json({ ok: false, error: 'email required' })
    const r = await saveLead({ type: 'waitlist', name, email, meta: { userId, picture } })
    res.json({ ok: true, ...r })
  } catch (e) {
    console.error('[waitlist]', e.message)
    res.status(500).json({ ok: false, error: 'server error' })
  }
})

app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, message, subject, company } = req.body || {}
    if (!email || !message) return res.status(400).json({ ok: false, error: 'email and message required' })
    const r = await saveLead({ type: 'contact', name, email, message, meta: { subject, company } })
    res.json({ ok: true, ...r })
  } catch (e) {
    console.error('[contact]', e.message)
    res.status(500).json({ ok: false, error: 'server error' })
  }
})

// static SPA + fallback (app.use, since Express 5 disallows a bare '*' route)
app.use(express.static(DIST))
app.use((_req, res) => res.sendFile(path.join(DIST, 'index.html')))

initDb().finally(() => {
  app.listen(PORT, () => console.log(`[server] listening on ${PORT}`))
})
