import { Star, Gift, Truck, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionWrap } from "./SectionWrap";

export function GiftSetsFeature() {
  return (
    <SectionWrap className="bg-cream py-20 lg:py-28" id="gift-sets">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-5 lg:grid-cols-12 lg:gap-16 lg:px-8">
        {/* LEFT — image */}
        <div className="relative lg:col-span-7">
          <div className="relative aspect-[5/4] overflow-hidden rounded-[2rem] shadow-[0_30px_60px_-30px_rgba(31,43,30,0.45)]">
            <img
              src="https://images.unsplash.com/photo-1607920591413-e9b67ad33c3c?auto=format&fit=crop&w=1400&q=80"
              alt="Open Wakefield gift box with peanut tins, brittle, and a hand-tied burgundy ribbon"
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
          {/* Floating testimonial */}
          <div className="absolute -bottom-8 left-4 hidden w-[300px] rounded-2xl bg-cream p-5 shadow-xl ring-1 ring-ink/5 md:block">
            <div className="flex gap-0.5">
              {[0, 1, 2, 3, 4].map((s) => (
                <Star key={s} className="size-4 fill-gold text-gold" />
              ))}
            </div>
            <p className="mt-2 font-serif italic text-ink/85">
              "Sent these to my dad in Richmond and he said it tasted like home. Already
              re-ordering for Christmas."
            </p>
            <div className="mt-3 flex items-center gap-3">
              <div className="grid size-9 place-items-center rounded-full bg-heritage/15 font-serif text-heritage">
                L
              </div>
              <div>
                <p className="text-sm font-medium text-ink">Linda T.</p>
                <p className="text-xs text-ink/55">Charleston, SC</p>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT — copy */}
        <div className="lg:col-span-5">
          <p className="text-xs font-semibold uppercase tracking-widest text-roast">
            Flagship Gift Boxes
          </p>
          <h2 className="mt-3 font-serif text-4xl font-medium leading-[1.05] text-ink lg:text-5xl">
            Virginia's Finest, <em className="not-italic text-roast">Wrapped</em> with Care.
          </h2>
          <p className="mt-5 text-lg text-ink/75">
            Our hand-packed gift boxes and the Variety 6 Club are how Southern families share a
            taste of Wakefield with the people they love. Every tin is filled the day it ships —
            never mass-produced, never stale.
          </p>

          <ul className="mt-8 space-y-4 text-sm">
            <li className="flex gap-3">
              <Gift className="mt-0.5 size-5 shrink-0 text-roast" />
              <div>
                <p className="font-medium text-ink">Hand-Packed in Wakefield</p>
                <p className="text-ink/65">Assembled to order in our country store.</p>
              </div>
            </li>
            <li className="flex gap-3">
              <Truck className="mt-0.5 size-5 shrink-0 text-roast" />
              <div>
                <p className="font-medium text-ink">Ships Nationwide</p>
                <p className="text-ink/65">Arrives gift-ready with a hand-tied ribbon.</p>
              </div>
            </li>
            <li className="flex gap-3">
              <Award className="mt-0.5 size-5 shrink-0 text-roast" />
              <div>
                <p className="font-medium text-ink">Virginia's Finest Certified</p>
                <p className="text-ink/65">Recognized quality since 1945.</p>
              </div>
            </li>
          </ul>

          <p className="mt-8 font-serif text-xl text-ink">
            Gift sets starting at <span className="text-roast">$24.95</span>
          </p>

          <Button
            asChild
            className="mt-5 h-12 w-full rounded-full bg-roast text-cream shadow-[0_8px_24px_-8px_rgba(194,90,42,0.5)] hover:bg-roast-deep"
          >
            <a href="#gift-sets">🎁 Build Your Gift Box</a>
          </Button>

          <p className="mt-4 text-center text-xs text-ink/55">
            🔒 Secure checkout · ✓ Gift wrapping included · 🚚 Free shipping over $75
          </p>
        </div>
      </div>
    </SectionWrap>
  );
}