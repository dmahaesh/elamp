// Saves a submitted story to your "table".
// Set VITE_SUBMISSIONS_ENDPOINT to a backend / Google Apps Script / Supabase
// function URL that inserts a row. Until then, rows are kept in localStorage so
// the flow works end-to-end during development.
const ENDPOINT = import.meta.env.VITE_SUBMISSIONS_ENDPOINT || ''
const LS_KEY = 'natyaras_submissions'

export async function saveSubmission(row) {
  const record = { ...row, createdAt: new Date().toISOString() }

  if (ENDPOINT) {
    await fetch(ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(record),
    })
    return record
  }

  // Local fallback "table"
  const all = JSON.parse(localStorage.getItem(LS_KEY) || '[]')
  all.push(record)
  localStorage.setItem(LS_KEY, JSON.stringify(all))
  return record
}

export function getSubmissions() {
  try {
    return JSON.parse(localStorage.getItem(LS_KEY) || '[]')
  } catch {
    return []
  }
}
