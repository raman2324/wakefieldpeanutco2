const row1 = [
  "🥜 Virginia-Grown",
  "🌾 Hand-Sorted",
  "🎁 Gift-Ready Packaging",
  "📦 Ships Nationwide",
  "🏡 Family Recipe",
  "🔥 Roasted Daily",
  "🌰 No Artificial Anything",
  "🏆 Virginia's Finest Since 1945",
];
const row2 = [
  "✨ Four Generations",
  "🚚 Free Shipping $75+",
  "⭐ 1,800+ Five-Star Reviews",
  "🎄 Holiday Specialists",
  "🎉 Game-Day Favorite",
  "📍 Wakefield, VA",
  "🥜 150 Years of Peanut Heritage",
];

export function AttributeMarquee() {
  return (
    <section className="overflow-hidden bg-highlight py-10 lg:py-12">
      <Row items={row1} dir="left" />
      <div className="h-3" />
      <Row items={row2} dir="right" />
    </section>
  );
}

function Row({ items, dir }: { items: string[]; dir: "left" | "right" }) {
  const loop = [...items, ...items];
  return (
    <div className="relative flex overflow-hidden">
      <div
        className={`marquee-track flex shrink-0 gap-10 whitespace-nowrap pr-10 font-serif text-lg text-ink/80`}
        style={{
          animation: `${
            dir === "left" ? "marquee-left" : "marquee-right"
          } 40s linear infinite`,
        }}
      >
        {loop.map((t, i) => (
          <span key={i} className="inline-flex items-center gap-3">
            {t}
            <span className="text-gold/60">·</span>
          </span>
        ))}
      </div>
    </div>
  );
}