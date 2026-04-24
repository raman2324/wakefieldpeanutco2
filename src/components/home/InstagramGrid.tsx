import { Heart, MessageCircle, ArrowRight, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionWrap } from "./SectionWrap";

import imgSalted from "@/assets/product-salted.jpg";
import imgChocolate from "@/assets/product-chocolate.jpg";
import imgHoney from "@/assets/product-honey.jpg";
import imgBrittle from "@/assets/product-brittle.jpg";
import imgToffee from "@/assets/product-toffee.jpg";
import imgCajun from "@/assets/product-cajun.jpg";
import giftSets from "@/assets/gift-sets.jpg";
import storyHands from "@/assets/story-hands.jpg";

const tiles = [
  { img: imgSalted, handle: "@porchcoffee_va", likes: 412, comments: 18, alt: "A tin of salted peanuts on a sunlit porch table" },
  { img: imgChocolate, handle: "@bourbonandbrittle", likes: 287, comments: 9, alt: "Chocolate covered peanuts after dinner" },
  { img: imgHoney, handle: "@richmondmealkits", likes: 533, comments: 24, alt: "Honey roasted peanuts in a glass bowl" },
  { img: imgBrittle, handle: "@grandmasporch", likes: 891, comments: 41, alt: "Hand-poured peanut brittle on parchment" },
  { img: imgToffee, handle: "@holidaytablesouth", likes: 624, comments: 33, alt: "Butter toffee tin at a holiday table" },
  { img: giftSets, handle: "@gifting.with.kate", likes: 219, comments: 12, alt: "Wakefield gift box with a hand-tied ribbon" },
  { img: imgCajun, handle: "@tailgate.va", likes: 478, comments: 27, alt: "Cajun peanuts at a Virginia tailgate" },
  { img: storyHands, handle: "@familyfarmstories", likes: 712, comments: 38, alt: "Farmer's hands cradling Virginia peanuts" },
];

export function InstagramGrid() {
  return (
    <SectionWrap className="bg-cream-warm py-20 lg:py-28" id="instagram">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-roast">
            #WakefieldPeanut
          </p>
          <h2 className="mt-3 font-serif text-4xl font-medium leading-[0.95] text-ink lg:text-5xl">
            <span className="block">From the Wakefield</span>
            <span className="block"><em className="not-italic text-roast">Family Table.</em></span>
          </h2>
          <p className="mt-4 text-lg text-ink/70">
            Tag us and your tin might end up here.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-2 md:gap-3 lg:grid-cols-4">
          {tiles.map((t, i) => (
            <a
              key={i}
              href="#instagram"
              aria-label={`Instagram post by ${t.handle}`}
              className="group relative block aspect-square overflow-hidden rounded-xl"
            >
              <img
                src={t.img}
                alt={t.alt}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.05]"
              />
              <div className="absolute inset-0 bg-ink/0 transition-colors duration-300 group-hover:bg-ink/55" />
              <span className="absolute bottom-2 left-2 rounded-full bg-cream/90 px-2 py-0.5 text-[10px] font-medium text-ink opacity-0 backdrop-blur transition-opacity duration-300 group-hover:opacity-100">
                {t.handle}
              </span>
              <div className="absolute right-2 top-2 flex flex-col items-end gap-1 text-cream opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <span className="inline-flex items-center gap-1 text-[10px]">
                  <Heart className="size-3 fill-cream text-cream" /> {t.likes}
                </span>
                <span className="inline-flex items-center gap-1 text-[10px]">
                  <MessageCircle className="size-3" /> {t.comments}
                </span>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Button
            asChild
            variant="outline"
            className="group h-12 rounded-full border-ink/25 bg-transparent px-8 text-ink hover:border-roast hover:text-roast"
          >
            <a href="https://instagram.com/wakefieldpeanutco" target="_blank" rel="noreferrer">
              <Instagram className="mr-2 size-4" />
              Follow @wakefieldpeanutco
              <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
            </a>
          </Button>
        </div>
      </div>
    </SectionWrap>
  );
}
