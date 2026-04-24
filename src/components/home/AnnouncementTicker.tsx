const items = [
  "🥜 Virginia's Finest Since 1945",
  "🎁 Free Shipping on Orders $75+",
  "📞 Shipping 20+ Gifts? Use Our Large List Order Form",
  "⭐ 4.9/5 from 1,800+ Reviews",
  "🎄 Order by Dec 18 for Christmas Delivery",
  "🏡 Family-Owned in Wakefield, VA",
  "✨ Proudly Virginia's Finest Certified",
];

export function AnnouncementTicker() {
  const loop = [...items, ...items];
  return (
    <div className="bg-heritage text-cream/95 overflow-hidden border-b border-heritage-deep">
      <div className="relative flex whitespace-nowrap py-2 text-xs tracking-wide">
        <div className="marquee-track flex shrink-0 animate-[marquee-left_40s_linear_infinite] gap-10 pr-10">
          {loop.map((t, i) => (
            <span key={i} className="inline-flex items-center gap-2">
              <span className="opacity-90">{t}</span>
              <span className="text-gold/70">·</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}