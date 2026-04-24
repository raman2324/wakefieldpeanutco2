import { Star, BadgeCheck, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { SectionWrap } from "./SectionWrap";

const reviews = [
  {
    text: "I've been ordering the Variety 6 Club for my dad every Father's Day for 12 years. He says no other peanut comes close.",
    name: "Margaret P.",
    loc: "Richmond, VA",
    pill: "Customer since 2012",
  },
  {
    text: "The chocolate covered peanuts are dangerous. I finished a whole tin in one sitting and ordered two more.",
    name: "James R.",
    loc: "Brooklyn, NY",
    pill: "First-time buyer",
  },
  {
    text: "Our company has sent Wakefield gift boxes to clients for 15 years. The 20+ address form makes it painless.",
    name: "Sarah D.",
    loc: "Atlanta, GA",
    pill: "Corporate buyer",
  },
];

export function Reviews() {
  return (
    <SectionWrap className="bg-cream py-20 lg:py-28" id="reviews">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-roast">
            What Customers Are Saying
          </p>
          <h2 className="mt-3 font-serif text-4xl font-medium leading-[0.95] text-ink lg:text-5xl">
            <span className="block">Generations of</span>
            <span className="block"><em className="not-italic text-roast">Satisfied Customers</em></span>
          </h2>

          <div className="mt-8 inline-flex flex-wrap items-center justify-center gap-3 text-ink/80">
            <span className="flex">
              {[0, 1, 2, 3, 4].map((s) => (
                <Star key={s} className="size-5 fill-gold text-gold" />
              ))}
            </span>
            <span className="font-serif text-2xl">4.9 out of 5</span>
            <span className="text-sm text-ink/55">· Based on 1,800+ reviews</span>
            <span className="inline-flex items-center gap-1 rounded-full bg-heritage/10 px-2 py-0.5 text-xs text-heritage">
              <BadgeCheck className="size-3.5" /> Verified
            </span>
          </div>
        </div>

        {/* Single render — grid on desktop, carousel on mobile */}
        <div className="mt-14 hidden grid-cols-3 gap-6 md:grid">
          {reviews.map((r) => (
            <ReviewCard key={r.name} {...r} />
          ))}
        </div>
        <div className="mt-10 md:hidden">
          <Carousel opts={{ align: "start", loop: true }}>
            <CarouselContent>
              {reviews.map((r) => (
                <CarouselItem key={r.name} className="basis-[85%]">
                  <ReviewCard {...r} />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>

        <div className="mt-12 text-center">
          <Button
            asChild
            variant="outline"
            className="group h-12 rounded-full border-ink/25 bg-transparent px-8 text-ink hover:border-roast hover:text-roast"
          >
            <a href="#reviews">
              See All 1,800+ Reviews
              <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
            </a>
          </Button>
        </div>
      </div>
    </SectionWrap>
  );
}

function ReviewCard({ text, name, loc, pill }: { text: string; name: string; loc: string; pill: string }) {
  return (
    <div className="rounded-3xl border border-ink/5 bg-cream-warm p-7 shadow-sm">
      <div className="flex gap-0.5">
        {[0, 1, 2, 3, 4].map((s) => (
          <Star key={s} className="size-4 fill-gold text-gold" />
        ))}
      </div>
      <p className="mt-4 font-serif text-lg italic leading-snug text-ink/85">"{text}"</p>
      <div className="mt-6 flex items-center justify-between">
        <div>
          <p className="text-sm font-semibold text-ink">{name}</p>
          <p className="text-xs text-ink/55">{loc}</p>
        </div>
        <span className="rounded-full bg-cream px-2.5 py-1 text-[10px] uppercase tracking-wide text-heritage">
          {pill}
        </span>
      </div>
    </div>
  );
}