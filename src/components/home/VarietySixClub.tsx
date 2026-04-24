import { Package, Calendar, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionWrap } from "./SectionWrap";

const cols = [
  { Icon: Package, label: "What arrives", value: "Six 3-oz tins per shipment" },
  { Icon: Calendar, label: "When", value: "Quarterly — Mar · Jun · Sep · Dec" },
  { Icon: Tag, label: "Price", value: "$89/quarter · Free shipping · Cancel anytime" },
];

export function VarietySixClub() {
  return (
    <SectionWrap
      id="variety-club"
      className="bg-grain relative overflow-hidden bg-heritage-deep py-20 text-cream lg:py-28"
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gold/40" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gold/40" />

      <div className="mx-auto max-w-5xl px-5 text-center lg:px-8">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">
          Our Flagship · Monthly
        </p>
        <h2 className="mt-4 font-serif text-5xl font-medium leading-[0.95] lg:text-6xl">
          <span className="block">The Variety 6 Club.</span>
        </h2>
        <p className="mx-auto mt-5 max-w-2xl font-serif text-lg italic text-cream/80">
          Six of our best tins. Delivered four times a year. Always a surprise, always hand-packed.
        </p>

        <div className="mx-auto mt-12 grid max-w-4xl grid-cols-1 gap-6 md:grid-cols-3">
          {cols.map(({ Icon, label, value }) => (
            <div
              key={label}
              className="rounded-2xl border border-cream/15 bg-cream/[0.04] px-6 py-7 text-left backdrop-blur-sm"
            >
              <Icon className="size-5 text-gold" />
              <p className="mt-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-gold/85">
                {label}
              </p>
              <p className="mt-2 text-sm leading-snug text-cream/90">{value}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <Button className="h-12 rounded-full bg-gold px-7 text-ink hover:bg-gold/90">
            Start the Club
          </Button>
          <Button
            variant="outline"
            className="h-12 rounded-full border-cream/30 bg-transparent px-7 text-cream hover:border-gold hover:bg-cream/5 hover:text-gold"
          >
            Gift the Club
          </Button>
        </div>

        <p className="mt-8 text-[11px] font-semibold uppercase tracking-[0.3em] text-cream/55">
          Joined by 2,400+ Southern Families
        </p>
      </div>
    </SectionWrap>
  );
}
