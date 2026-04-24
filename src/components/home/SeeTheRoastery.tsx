import { Play } from "lucide-react";
import { SectionWrap } from "./SectionWrap";
import roastery from "@/assets/roastery.jpg";

export function SeeTheRoastery() {
  return (
    <SectionWrap className="relative" id="roastery">
      <a
        href="/video/how-its-made"
        className="group relative block h-[60vh] min-h-[420px] w-full overflow-hidden"
      >
        <img
          src={roastery}
          alt="Peanuts roasting in the warm glow of the Wakefield roaster"
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 group-hover:scale-[1.03]"
        />
        <div className="absolute inset-0 bg-gradient-to-tr from-ink/85 via-ink/40 to-transparent" />

        <div className="absolute bottom-0 left-0 flex max-w-2xl items-center gap-5 p-8 lg:p-16">
          <div className="relative grid size-[72px] shrink-0 place-items-center rounded-full border border-gold bg-cream/95 transition-transform duration-300 group-hover:scale-110">
            <Play className="size-6 fill-roast text-roast" />
            <span className="absolute -inset-2 rounded-full ring-1 ring-cream/30 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          </div>
          <div className="text-cream">
            <p className="text-xs font-semibold uppercase tracking-widest text-gold">Watch</p>
            <p className="mt-1 font-serif text-2xl leading-tight md:text-3xl">
              A tin, from field to ribbon. <span className="text-cream/65">(0:47)</span>
            </p>
          </div>
        </div>
      </a>
    </SectionWrap>
  );
}