/**
 * Full video box with native controls: play/pause, scrub bar, time, volume and
 * fullscreen. Muted by default so it can autoplay, but the user can turn the
 * sound on and hear the full audio.
 */
export default function VideoPlayer({
  src,
  poster,
  className = '',
  ratio = 'aspect-video',
  autoPlay = true,
}) {
  return (
    <div
      className={`relative overflow-hidden rounded-2xl border border-white/10 bg-black ${ratio} ${className}`}
    >
      <video
        className="h-full w-full object-contain"
        src={src}
        poster={poster}
        controls
        controlsList="nodownload"
        autoPlay={autoPlay}
        muted
        loop
        playsInline
        preload="metadata"
      />
    </div>
  )
}
