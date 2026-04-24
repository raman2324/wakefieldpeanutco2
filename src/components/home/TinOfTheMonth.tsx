import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionWrap } from "./SectionWrap";
import tinImg from "@/assets/tin-of-month.jpg";

export function TinOfTheMonth() {
  const remaining = 312;
  const total = 600;
  const pct = ((total - remaining) / total) * 100;

  return (
    <SectionWrap className="bg-cream-warm py-20 lg:py-28" id="tin-of-month">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-5 lg:grid-cols-2 lg:gap-20 lg:px-8">
        {/* LEFT — image */}
        <div className="relative">
          <div
            className="relative overflow-hidden rounded-[2rem] shadow-[0_30px_60px_-30px_rgba(31,43,30,0.45)] transition-transform duration-300 hover:scale-[1.02]"
            style={{ transform: "rotate(-2deg)" }}
          >
            <div className="absolute inset-0 -z-10 rounded-[2rem] bg-gold/30 blur-2xl" aria-hidden />
            <img
              src={tinImg}
              alt="An open tin of butter toffee Virginia peanuts spilling onto warm linen"
              loading="lazy"
              className="aspect-[4/5] w-full object-cover"
            />
          </div>
          {/* Gold ribbon */}
          <div
            className="absolute -right-4 top-6 rotate-[8deg] bg-gold px-5 py-2 font-serif text-[11px] font-semibold uppercase tracking-[0.25em] text-ink shadow-md"
            style={{ clipPath: "polygon(12% 0, 100% 0, 88% 100%, 0 100%)" }}
          >
            Tin of the Month
          </div>
        </div>

        {/* RIGHT — copy */}
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-roast">
            Seasonal · Only 60 Days a Year
          </p>
          <h2 className="mt-3 font-serif text-4xl font-medium leading-[0.95] text-ink lg:text-5xl">
            <span className="block">This Month:</span>
            <span className="block"><em className="not-italic text-roast">Butter Toffee.</em></span>
          </h2>
          <p className="mt-5 text-lg leading-[1.6] text-ink/75">
            Our small-batch butter toffee peanuts only run during holiday season. When they're
            gone, they're gone until next November.
          </p>

          {/* Stock counter */}
          <div className="mt-8 max-w-md">
            <p className="text-xs font-semibold uppercase tracking-widest text-ink/60">
              <span className="text-roast">{remaining}</span> tins left this month
            </p>
            <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-ink/10">
              <div
                className="h-full rounded-full bg-roast transition-all duration-500"
                style={{ width: `${pct}%` }}
              />
            </div>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button className="h-12 rounded-full bg-roast px-6 text-cream shadow-[0_8px_24px_-8px_rgba(194,90,42,0.5)] hover:bg-roast-deep">
              Claim a Tin
            </Button>
            <Button
              variant="outline"
              className="h-12 rounded-full border-ink/25 bg-transparent px-6 text-ink hover:border-roast hover:text-roast"
            >
              See Past Editions
            </Button>
          </div>

          <div className="mt-6 flex items-center gap-2 text-sm text-ink/70">
            <span className="flex">
              {[0, 1, 2, 3, 4].map((s) => (
                <Star key={s} className="size-4 fill-gold text-gold" />
              ))}
            </span>
            <span className="font-medium">4.9</span>
            <span className="text-ink/55">· 198 reviewers can't shut up about it</span>
          </div>
        </div>
      </div>
    </SectionWrap>
  );
}
