export default function LegalPage({ title, updated, children }) {
  return (
    <section className="relative pt-36 pb-20 md:pt-44">
      <div className="w-full px-[10px]">
        <div className="mx-auto max-w-3xl">
          <h1 className="font-display text-4xl font-extrabold text-white md:text-5xl">{title}</h1>
          <p className="mt-3 text-sm text-mist/50">Last updated: {updated}</p>
          <div className="mt-8 space-y-4 leading-relaxed text-fog [&_a]:text-flare [&_a:hover]:underline [&_h2]:font-display [&_h2]:mt-8 [&_h2]:text-xl [&_h2]:font-bold [&_h2]:text-white [&_li]:ml-5 [&_li]:list-disc [&_strong]:text-mist">
            {children}
          </div>
        </div>
      </div>
    </section>
  )
}
