/**
 * ELamp.ai mark — lamp logo. Gentle float + glow so it feels alive.
 */
export default function Logo({ className = 'h-10 w-10' }) {
  return (
    <img
      src="/logo.svg"
      alt="ELamp.ai"
      className={`${className} animate-logo object-contain drop-shadow-[0_4px_18px_rgba(255,61,129,0.35)]`}
    />
  )
}
