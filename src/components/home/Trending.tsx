import { useState } from "react";
import { Flame } from "lucide-react";
import { ProductCard, SAMPLE_PRODUCTS } from "./ProductCard";
import { SectionWrap } from "./SectionWrap";

const filters = ["All", "Gift Sets", "Peanuts", "Sweets", "Mixes"];

export function Trending() {
  const [active, setActive] = useState("All");
  const shuffled = [
    SAMPLE_PRODUCTS[3],
    SAMPLE_PRODUCTS[5],
    SAMPLE_PRODUCTS[0],
    SAMPLE_PRODUCTS[7],
  ];

  return (
    <SectionWrap className="bg-cream py-20 lg:py-28" id="trending">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-roast/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-roast">
              <Flame className="size-3.5" /> Trending This Week
            </span>
            <h2 className="mt-3 font-serif text-4xl font-medium leading-[1.05] text-ink lg:text-5xl">
              What Folks Are Ordering Right Now
            </h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActive(f)}
                className={`rounded-full border px-3 py-1.5 text-xs transition ${
                  active === f
                    ? "border-ink bg-ink text-cream"
                    : "border-ink/15 bg-cream text-ink/75 hover:border-roast hover:text-roast"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {shuffled.map((p) => (
            <ProductCard key={p.id} p={p} />
          ))}
        </div>
      </div>
    </SectionWrap>
  );
}