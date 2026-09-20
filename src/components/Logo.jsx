/**
 * ELAMP wordmark — "Ideas to Impact". Horizontal lockup used in the
 * navbar and footer. Height-driven; width scales automatically.
 */
export default function Logo({ className = 'h-10 w-auto' }) {
  return (
    <img
      src="/elamp-wordmark.png"
      alt="ELAMP — Ideas to Impact"
      className={`${className} object-contain`}
    />
  )
}
