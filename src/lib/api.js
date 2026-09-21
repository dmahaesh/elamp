// Thin client for the ELamp backend (lead capture).

export async function joinWaitlist(user) {
  try {
    const r = await fetch('/api/waitlist', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: user.name,
        email: user.email,
        userId: user.sub,
        picture: user.picture,
      }),
    })
    return await r.json()
  } catch {
    return { ok: false }
  }
}

export async function sendContact(data) {
  const r = await fetch('/api/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  })
  if (!r.ok) throw new Error('Request failed')
  return r.json()
}
