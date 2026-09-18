import { useRef, useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { ImagePlus, FileText, Clapperboard, Loader2, CheckCircle2, X } from 'lucide-react'
import { signInWithGoogle, getCurrentUser } from '../lib/google.js'
import { saveSubmission } from '../lib/submissions.js'

const MAX_CHARS = 5000 // hard cap on inline typing
const NUDGE_AT = 1200 // suggest a .txt upload past this length
const MAX_FILE_BYTES = 500 * 1024 // 500 KB

function GoogleIcon({ className = '' }) {
  return (
    <svg className={className} viewBox="0 0 48 48" aria-hidden="true">
      <path fill="#FFC107" d="M43.6 20.5H42V20H24v8h11.3c-1.6 4.7-6.1 8-11.3 8-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.9 1.2 8 3.1l5.7-5.7C34.5 6.5 29.5 4.5 24 4.5 12.7 4.5 3.5 13.7 3.5 25S12.7 45.5 24 45.5 44.5 36.3 44.5 25c0-1.5-.2-3-.9-4.5z" />
      <path fill="#FF3D00" d="M6.3 14.7l6.6 4.8C14.7 15.1 19 12.5 24 12.5c3.1 0 5.9 1.2 8 3.1l5.7-5.7C34.5 6.5 29.5 4.5 24 4.5 16.3 4.5 9.7 8.9 6.3 14.7z" />
      <path fill="#4CAF50" d="M24 45.5c5.4 0 10.3-2 14-5.3l-6.5-5.5c-2 1.4-4.6 2.3-7.5 2.3-5.2 0-9.6-3.3-11.2-8l-6.5 5C9.6 41 16.2 45.5 24 45.5z" />
      <path fill="#1976D2" d="M43.6 20.5H42V20H24v8h11.3c-.8 2.2-2.2 4.1-4.1 5.4l6.5 5.5c-.5.4 7-5.1 7-13.9 0-1.5-.2-3-.9-4.5z" />
    </svg>
  )
}

export default function StoryPromptBar() {
  const [value, setValue] = useState('')
  const [file, setFile] = useState(null) // { name, content }
  const [status, setStatus] = useState('idle') // idle | loading | done
  const [error, setError] = useState('')
  const fileRef = useRef(null)

  const nearLimit = value.length >= NUDGE_AT

  const onPickFile = (e) => {
    const f = e.target.files?.[0]
    e.target.value = '' // allow re-selecting the same file
    if (!f) return
    setError('')
    const isTxt = f.type === 'text/plain' || f.name.toLowerCase().endsWith('.txt')
    if (!isTxt) {
      setError('Please upload a plain .txt file.')
      return
    }
    if (f.size > MAX_FILE_BYTES) {
      setError('That file is too large (max 500 KB).')
      return
    }
    const reader = new FileReader()
    reader.onload = () => setFile({ name: f.name, content: String(reader.result || '') })
    reader.onerror = () => setError('Could not read that file. Try again.')
    reader.readAsText(f)
  }

  const submitStory = async () => {
    setError('')
    const story = file ? file.content.trim() : value.trim()
    if (!story) {
      setError('Write your movie idea or upload your script as a .txt file.')
      return
    }
    try {
      setStatus('loading')
      const user = getCurrentUser() || (await signInWithGoogle())
      await saveSubmission({
        story,
        scriptFile: file?.name || null,
        name: user.name,
        email: user.email,
        userId: user.sub,
      })
      setStatus('done')
      setValue('')
      setFile(null)
      setTimeout(() => setStatus('idle'), 4000)
    } catch (e) {
      setStatus('idle')
      setError('Google sign-in was cancelled. Please try again.')
    }
  }

  return (
    <motion.div
      initial={{ y: 120, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-x-0 bottom-0 z-40 flex justify-center px-[10px] pb-3"
    >
      <input
        ref={fileRef}
        type="file"
        accept=".txt,text/plain"
        onChange={onPickFile}
        className="hidden"
      />

      <div className="glass glow-ring w-full rounded-3xl p-3 md:p-4">
        <div className="flex flex-col gap-3">
          {/* attached script chip */}
          {file && (
            <div className="flex w-fit items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-mist">
              <FileText className="h-4 w-4 text-flare" />
              <span className="max-w-[240px] truncate">{file.name}</span>
              <span className="text-mist/50">· {(file.content.length / 1000).toFixed(1)}k chars</span>
              <button
                onClick={() => setFile(null)}
                className="ml-1 text-mist/60 hover:text-white"
                aria-label="Remove file"
                type="button"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          )}

          {!file && (
            <textarea
              value={value}
              onChange={(e) => setValue(e.target.value)}
              maxLength={MAX_CHARS}
              rows={1}
              placeholder="Describe your movie idea…  e.g. A lone lighthouse keeper who discovers a doorway to the sea of stars."
              className="max-h-32 min-h-11 w-full resize-none bg-transparent px-2 pt-1 text-base text-white placeholder:text-white/80 outline-none"
            />
          )}

          {/* nudge to upload when the script is getting long */}
          <AnimatePresence>
            {!file && nearLimit && (
              <motion.button
                type="button"
                onClick={() => fileRef.current?.click()}
                initial={{ opacity: 0, y: -4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="flex w-fit items-center gap-2 rounded-lg border border-flare/30 bg-flare/10 px-3 py-1.5 text-left text-sm text-flare"
              >
                <FileText className="h-4 w-4" />
                Long script? Upload it as a .txt file instead →
              </motion.button>
            )}
          </AnimatePresence>

          <AnimatePresence>
            {(error || status === 'done') && (
              <motion.p
                initial={{ opacity: 0, y: -4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className={`px-2 text-sm ${error ? 'text-flare' : 'text-green-400'}`}
              >
                {error ||
                  'Thanks! Your idea is in — our story team will be in touch about the ₹1 Lakh award.'}
              </motion.p>
            )}
          </AnimatePresence>

          <div className="flex flex-wrap items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <button
                className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/5 text-mist transition-colors hover:bg-white/10"
                aria-label="Attach reference image"
                type="button"
              >
                <ImagePlus className="h-5 w-5" />
              </button>
              <button
                onClick={() => fileRef.current?.click()}
                className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/5 text-mist transition-colors hover:bg-white/10"
                aria-label="Upload script (.txt)"
                title="Upload script (.txt)"
                type="button"
              >
                <FileText className="h-5 w-5" />
              </button>
            </div>

            <div className="flex flex-1 items-center justify-end gap-3 md:gap-4">
              {!file && value.length > 0 && (
                <span
                  className={`hidden text-xs sm:block ${
                    nearLimit ? 'text-flare' : 'text-mist/50'
                  }`}
                >
                  {value.length}/{MAX_CHARS}
                </span>
              )}
              <span className="hidden items-center gap-1.5 text-sm text-mist/70 sm:flex">
                <Clapperboard className="h-4 w-4" /> ELamp.ai 1.0
              </span>
              <button
                onClick={submitStory}
                disabled={status === 'loading'}
                type="button"
                className="group inline-flex items-center gap-2.5 rounded-xl bg-white px-5 py-2.5 font-semibold text-ink transition-transform hover:scale-[1.03] disabled:opacity-70"
              >
                {status === 'loading' ? (
                  <Loader2 className="h-5 w-5 animate-spin" />
                ) : status === 'done' ? (
                  <CheckCircle2 className="h-5 w-5 text-green-600" />
                ) : (
                  <GoogleIcon className="h-5 w-5" />
                )}
                {status === 'loading'
                  ? 'Signing in…'
                  : status === 'done'
                    ? 'Story submitted'
                    : 'Submit your story'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
