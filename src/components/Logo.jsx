/**
 * elamp.ai wordmark — film-strip "e" with gold ribbon. Horizontal lockup
 * used in the navbar. Height-driven; width scales automatically.
 */
export default function Logo({ className = 'h-10 w-auto' }) {
  return (
    <img
      src="/elamp-logo.png"
      alt="elamp.ai"
      className={`${className} object-contain`}
    />
  )
}
