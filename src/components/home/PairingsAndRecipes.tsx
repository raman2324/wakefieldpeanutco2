import { ArrowRight } from "lucide-react";
import { SectionWrap } from "./SectionWrap";
import imgBrittle from "@/assets/product-brittle.jpg";
import imgHoney from "@/assets/product-honey.jpg";
import imgSalted from "@/assets/product-salted.jpg";

const pairings = [
  {
    slug: "brittle-coffee",
    title: "Peanut Brittle + Black Coffee",
    mood: "The rain hits harder when the brittle snaps right.",
    tags: ["5 min", "Classic porch ritual"],
    cta: "See the Ritual",
    img: imgBrittle,
  },
  {
    slug: "honey-bourbon",
    title: "Honey Roasted + Virginia Bourbon",
    mood: "Sweet roast, smoky pour. A fair trade.",
    tags: ["Pair of two", "After-dinner"],
    cta: "See the Pairing",
    img: imgHoney,
  },
  {
    slug: "salted-beer",
    title: "Salted Gourmet + Game-Day Beer",
    mood: "The only tin you'll find in our booth at the tailgate.",
    tags: ["Crowd-ready", "Game day"],
    cta: "See the Combo",
    img: imgSalted,
  },
];

export function PairingsAndRecipes() {
  return (
    <SectionWrap className="bg-cream-warm py-20 lg:py-28" id="pairings">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-widest text-roast">
            From the Roaster
          </p>
          <h2 className="mt-3 font-serif text-4xl font-medium leading-[1.05] text-ink lg:text-5xl">
            A Peanut Has a Perfect Partner.
          </h2>
          <p className="mt-4 text-lg text-ink/70">
            How Virginians actually eat them — on the porch, after dinner, during the fourth quarter.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {pairings.map((p) => (
            <a
              key={p.slug}
              href={`/pairings/${p.slug}`}
              className="group relative block aspect-[4/5] overflow-hidden rounded-3xl shadow-md"
            >
              <img
                src={p.img}
                alt={p.title}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/35 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6 text-cream">
                <div className="flex flex-wrap gap-1.5">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-cream/30 bg-cream/10 px-2.5 py-0.5 text-[10px] uppercase tracking-wide text-cream/95 backdrop-blur"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <h3 className="mt-3 font-serif text-2xl leading-tight">{p.title}</h3>
                <p className="mt-2 max-w-sm font-serif italic text-cream/85 transition-transform duration-500 md:translate-y-2 md:opacity-90 md:group-hover:translate-y-0 md:group-hover:opacity-100">
                  "{p.mood}"
                </p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-gold">
                  {p.cta}
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1.5" />
                </span>
              </div>
            </a>
          ))}
        </div>

        <p className="mt-12 text-center text-sm italic text-ink/60">
          We'll keep posting pairings all year — join the newsletter below to get them first.
        </p>
      </div>
    </SectionWrap>
  );
}