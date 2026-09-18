/**
 * ELamp.ai mark — lamp logo. Gentle float + glow so it feels alive.
 */
export default function Logo({ className = 'h-10 w-10' }) {
  return (
    <span
      className={`${className} animate-logo grid shrink-0 place-items-center rounded-full bg-white p-1 shadow-[0_4px_18px_rgba(246,196,83,0.45)] ring-1 ring-gold/40`}
    >
      <img
        src="/logo.png"
        alt="ELamp.ai"
        className="h-full w-full object-contain"
      />
    </span>
  )
}
