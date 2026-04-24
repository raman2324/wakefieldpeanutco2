import { SectionWrap } from "./SectionWrap";
import grow from "@/assets/made-grow.jpg";
import cure from "@/assets/made-cure.jpg";
import roast from "@/assets/made-roast.jpg";
import pack from "@/assets/made-pack.jpg";

const steps = [
  { n: "01", label: "Grow", img: grow, alt: "Virginia peanut field rows at golden hour", desc: "Wakefield soil, Virginia sun. Same as our grandparents." },
  { n: "02", label: "Cure", img: cure, alt: "Raw peanuts drying on burlap", desc: "Slow-dried for flavor, not speed." },
  { n: "03", label: "Roast", img: roast, alt: "Peanuts roasting inside the warm Jordan roaster", desc: "Small-batch in our 1960s Jordan roaster." },
  { n: "04", label: "Pack", img: pack, alt: "Hand sealing a peanut tin in the country store", desc: "Hand-weighed and tinned in our country store." },
];

export function HowItsMade() {
  return (
    <SectionWrap className="bg-cream py-20 lg:py-28" id="how-its-made">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-widest text-roast">
            The Craft
          </p>
          <h2 className="mt-3 font-serif text-4xl font-medium leading-[0.95] text-ink lg:text-5xl">
            <span className="block">How It's Made.</span>
          </h2>
          <p className="mt-4 text-lg text-ink/70">
            Four steps, four generations, and absolutely no shortcuts between the field and your tin.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-6">
          {steps.map((s) => (
            <div
              key={s.n}
              className="group relative overflow-hidden rounded-2xl border border-ink/5 bg-cream-warm"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src={s.img}
                  alt={s.alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/15 to-transparent" />
                <span className="absolute left-3 top-3 grid size-9 place-items-center rounded-full bg-cream/95 font-serif text-sm font-medium text-roast shadow">
                  {s.n}
                </span>
                <div className="absolute inset-x-0 bottom-0 p-4 text-cream">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-gold">
                    {s.label}
                  </p>
                  <p className="mt-1 text-sm leading-snug text-cream/95">{s.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-12 text-center font-serif text-lg italic text-ink/65">
          Four steps. Four generations. No shortcuts.
        </p>
      </div>
    </SectionWrap>
  );
}
