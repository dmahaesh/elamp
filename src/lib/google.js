// Google Sign-In (Google Identity Services, OAuth token flow).
// Add your key later in a `.env` file:  VITE_GOOGLE_CLIENT_ID=xxxx.apps.googleusercontent.com
const CLIENT_ID = import.meta.env.VITE_GOOGLE_CLIENT_ID || ''
const USER_KEY = 'elamp_user'

let scriptPromise = null
function loadGsi() {
  if (window.google?.accounts?.oauth2) return Promise.resolve()
  if (scriptPromise) return scriptPromise
  scriptPromise = new Promise((resolve, reject) => {
    const s = document.createElement('script')
    s.src = 'https://accounts.google.com/gsi/client'
    s.async = true
    s.defer = true
    s.onload = resolve
    s.onerror = () => reject(new Error('Failed to load Google Identity Services'))
    document.head.appendChild(s)
  })
  return scriptPromise
}

export function isGoogleConfigured() {
  return Boolean(CLIENT_ID)
}

export function getCurrentUser() {
  try {
    return JSON.parse(localStorage.getItem(USER_KEY) || 'null')
  } catch {
    return null
  }
}

export function setCurrentUser(user) {
  localStorage.setItem(USER_KEY, JSON.stringify(user))
}

export function signOut() {
  localStorage.removeItem(USER_KEY)
}

// Opens the Google login popup and resolves with { sub, name, email, picture }.
// Falls back to a local guest user until a real CLIENT_ID is configured.
export async function signInWithGoogle() {
  if (!CLIENT_ID) {
    const user = {
      sub: 'local-dev',
      name: 'Guest Creator',
      email: 'guest@elamp.local',
      mock: true,
    }
    setCurrentUser(user)
    return user
  }

  await loadGsi()
  return new Promise((resolve, reject) => {
    try {
      const client = window.google.accounts.oauth2.initTokenClient({
        client_id: CLIENT_ID,
        scope: 'openid email profile',
        callback: async (resp) => {
          if (resp.error) return reject(new Error(resp.error))
          try {
            const info = await fetch('https://www.googleapis.com/oauth2/v3/userinfo', {
              headers: { Authorization: `Bearer ${resp.access_token}` },
            }).then((r) => r.json())
            const user = {
              sub: info.sub,
              name: info.name,
              email: info.email,
              picture: info.picture,
            }
            setCurrentUser(user)
            resolve(user)
          } catch (e) {
            reject(e)
          }
        },
      })
      client.requestAccessToken()
    } catch (e) {
      reject(e)
    }
  })
}
