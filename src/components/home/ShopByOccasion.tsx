import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ProductCard, SAMPLE_PRODUCTS } from "./ProductCard";
import { SectionWrap } from "./SectionWrap";

const filters = ["All Products", "Gift Sets", "For Yourself", "Corporate", "Holiday"];

export function ShopByOccasion() {
  const [active, setActive] = useState("All Products");

  return (
    <SectionWrap className="bg-cream py-20 lg:py-28" id="shop">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-widest text-roast">
            Find Your Perfect Pack
          </p>
          <h2 className="mt-3 font-serif text-4xl font-medium leading-[1.05] text-ink lg:text-5xl">
            Shop for Any Occasion
          </h2>
          <p className="mt-4 text-lg text-ink/70">
            Whether you're snacking solo, sending a thank-you, or feeding a crowd on game day —
            we've got a tin for that.
          </p>
        </div>

        <div className="mt-8 flex flex-wrap gap-2">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`rounded-full border px-4 py-2 text-sm transition ${
                active === f
                  ? "border-ink bg-ink text-cream"
                  : "border-ink/15 bg-cream text-ink/75 hover:border-roast hover:text-roast"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {SAMPLE_PRODUCTS.map((p) => (
            <ProductCard key={p.id} p={p} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button
            asChild
            variant="outline"
            className="group h-12 rounded-full border-ink/25 bg-transparent px-8 text-ink hover:border-roast hover:text-roast"
          >
            <a href="#shop">
              View All Products
              <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
            </a>
          </Button>
        </div>
      </div>
    </SectionWrap>
  );
}