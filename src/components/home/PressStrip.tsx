const press = [
  "Virginia Living",
  "Garden & Gun",
  "Southern Living",
  "Food & Wine",
  "Bon Appétit",
  "The Washington Post",
];

export function PressStrip() {
  const loop = [...press, ...press];
  return (
    <section className="bg-cream py-10" id="press">
      <p className="text-center text-xs font-semibold uppercase tracking-[0.3em] text-ink/55">
        Press &amp; Recognition
      </p>

      {/* Desktop: static row */}
      <div className="mx-auto mt-7 hidden max-w-6xl flex-wrap items-center justify-center gap-x-12 gap-y-5 px-5 md:flex">
        {press.map((p) => (
          <span
            key={p}
            className="font-serif text-xl text-ink opacity-20 grayscale transition hover:opacity-40"
          >
            {p}
          </span>
        ))}
      </div>

      {/* Mobile: marquee */}
      <div className="relative mt-6 flex overflow-hidden md:hidden">
        <div
          className="marquee-track flex shrink-0 gap-10 whitespace-nowrap pr-10"
          style={{ animation: "marquee-left 50s linear infinite" }}
        >
          {loop.map((p, i) => (
            <span
              key={i}
              className="font-serif text-lg text-ink opacity-20 grayscale"
            >
              {p}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
