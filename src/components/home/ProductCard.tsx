import { useState } from "react";
import { Heart, Star, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import imgSalted from "@/assets/product-salted.jpg";
import imgChocolate from "@/assets/product-chocolate.jpg";
import imgRaw from "@/assets/product-raw.jpg";
import imgHoney from "@/assets/product-honey.jpg";
import imgToffee from "@/assets/product-toffee.jpg";
import imgBrittle from "@/assets/product-brittle.jpg";
import imgCajun from "@/assets/product-cajun.jpg";
import imgTrail from "@/assets/product-trail.jpg";

export type Product = {
  id: string;
  name: string;
  category: string;
  price: string;
  rating: number;
  reviews: number;
  badge?: "Best Seller" | "New";
  image: string;
  detail?: string;
  soldThisWeek?: number;
};

const SWEET_OR_MIX = new Set(["Sweet Treats", "Other Nuts & Mixes"]);
const GIFT_SET_CATS = new Set(["Gift Sets", "Gift Box"]);

export function ProductCard({ p }: { p: Product }) {
  const [liked, setLiked] = useState(false);
  const [bouncing, setBouncing] = useState(false);
  const [giftWrap, setGiftWrap] = useState(false);

  const toggleLike = () => {
    setLiked((v) => !v);
    setBouncing(true);
    setTimeout(() => setBouncing(false), 220);
  };

  const ctaLabel = SWEET_OR_MIX.has(p.category) ? "Add to Tin" : "Add to Cart";
  const isGiftSet = GIFT_SET_CATS.has(p.category);

  return (
    <article className="group relative overflow-hidden rounded-2xl border border-ink/5 bg-cream transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_-20px_rgba(31,43,30,0.3)]">
      <div className="relative aspect-square overflow-hidden bg-highlight cursor-peanut">
        <img
          src={p.image}
          alt={p.name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
        />
        {p.badge && (
          <span
            className={`absolute left-3 top-3 rounded-full px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide ${
              p.badge === "Best Seller"
                ? "bg-roast text-cream"
                : "bg-gold text-ink"
            }`}
          >
            {p.badge}
          </span>
        )}

        {/* Top-right action stack */}
        <div className="absolute right-3 top-3 flex flex-col items-end gap-2">
          <button
            onClick={toggleLike}
            aria-label={liked ? `Remove ${p.name} from wishlist` : `Add ${p.name} to wishlist`}
            className="grid size-8 place-items-center rounded-full bg-cream/90 text-ink/70 backdrop-blur transition hover:text-roast"
          >
            <Heart
              className={`size-4 transition-all ${
                liked ? "fill-roast text-roast" : ""
              } ${bouncing ? "scale-125" : "scale-100"}`}
            />
          </button>

          {/* Quick view (appears on hover) */}
          <Dialog>
            <DialogTrigger asChild>
              <button
                aria-label={`Quick view ${p.name}`}
                className="grid size-8 place-items-center rounded-full bg-cream/90 text-ink/70 opacity-0 backdrop-blur transition hover:text-roast group-hover:opacity-100"
              >
                <Eye className="size-4" />
              </button>
            </DialogTrigger>
            <DialogContent className="bg-cream sm:max-w-2xl">
              <DialogTitle className="sr-only">{p.name}</DialogTitle>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div className="overflow-hidden rounded-2xl bg-highlight">
                  <img src={p.image} alt={p.name} className="h-full w-full object-cover" />
                </div>
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-widest text-heritage">
                    {p.category}
                  </p>
                  <h3 className="mt-2 font-serif text-2xl text-ink">{p.name}</h3>
                  <div className="mt-2 flex items-center gap-2 text-xs text-ink/65">
                    <span className="flex">
                      {[0, 1, 2, 3, 4].map((s) => (
                        <Star
                          key={s}
                          className={`size-3 ${
                            s < Math.round(p.rating) ? "fill-gold text-gold" : "text-ink/20"
                          }`}
                        />
                      ))}
                    </span>
                    <span>{p.rating.toFixed(1)}</span>
                    <span className="text-ink/40">({p.reviews})</span>
                  </div>
                  <p className="mt-3 text-base font-medium text-ink">{p.price}</p>
                  <p className="mt-3 text-sm text-ink/70">
                    {p.detail ?? "Hand-packed in Wakefield, VA. Ships in 2 days."}
                  </p>
                  <Button className="mt-5 w-full rounded-full bg-roast text-cream hover:bg-roast-deep">
                    {ctaLabel}
                  </Button>
                  <a
                    href="#shop"
                    className="mt-3 block text-center text-xs text-roast underline-offset-4 hover:underline"
                  >
                    View Full Details →
                  </a>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>

        <div className="absolute inset-x-0 bottom-0 translate-y-full bg-ink/85 px-4 py-2 text-center text-[11px] uppercase tracking-wide text-cream backdrop-blur transition-transform duration-300 group-hover:translate-y-0">
          {p.detail ?? "3 oz tin · Ships in 2 days · Pairs with coffee"}
        </div>
      </div>

      <div className="space-y-2 p-4">
        <p className="text-[10px] font-semibold uppercase tracking-widest text-heritage">
          {p.category}
        </p>
        <h3 className="font-serif text-lg leading-tight text-ink">{p.name}</h3>
        <div className="flex items-center gap-2 text-xs text-ink/65">
          <span className="flex">
            {[0, 1, 2, 3, 4].map((s) => (
              <Star
                key={s}
                className={`size-3 ${
                  s < Math.round(p.rating) ? "fill-gold text-gold" : "text-ink/20"
                }`}
              />
            ))}
          </span>
          <span>{p.rating.toFixed(1)}</span>
          <span className="text-ink/40">({p.reviews})</span>
        </div>
        <p className="text-sm font-medium text-ink">{p.price}</p>
        <p className="text-[11px] text-ink/55">
          {p.soldThisWeek ?? 178} sold this week
        </p>

        {isGiftSet && (
          <label className="mt-1 flex cursor-pointer items-center justify-between rounded-lg bg-cream-warm px-3 py-1.5 text-[11px] text-ink/75">
            <span>🎀 Gift Wrap <span className="text-roast">+$4</span></span>
            <Switch checked={giftWrap} onCheckedChange={setGiftWrap} />
          </label>
        )}

        <Button
          variant="outline"
          className="mt-2 w-full rounded-full border-ink/20 bg-transparent text-ink hover:border-roast hover:bg-roast hover:text-cream"
        >
          {ctaLabel}
        </Button>
      </div>
    </article>
  );
}

export const SAMPLE_PRODUCTS: Product[] = [
  {
    id: "salted",
    name: "Salted Gourmet Virginia Peanuts",
    category: "Gourmet Peanuts",
    price: "$8.50–$17.95",
    rating: 4.9,
    reviews: 341,
    badge: "Best Seller",
    image: imgSalted,
    detail: "3 oz tin · Ships in 2 days · Best with coffee",
    soldThisWeek: 487,
  },
  {
    id: "choc",
    name: "Chocolate Covered Peanuts",
    category: "Sweet Treats",
    price: "$9.45–$15.50",
    rating: 4.8,
    reviews: 267,
    image: imgChocolate,
    detail: "Hand-dipped · Ships in 2 days · After-dinner treat",
    soldThisWeek: 219,
  },
  {
    id: "raw",
    name: "Raw in the Shell Peanuts",
    category: "Raw Peanuts",
    price: "$12.95–$28.50",
    rating: 4.7,
    reviews: 189,
    image: imgRaw,
    detail: "Bulk bag · Ships in 2 days · Perfect for boiling",
    soldThisWeek: 96,
  },
  {
    id: "honey",
    name: "Honey Roasted Peanuts",
    category: "Gourmet Peanuts",
    price: "$9.50–$15.50",
    rating: 4.9,
    reviews: 412,
    badge: "Best Seller",
    image: imgHoney,
    detail: "Sweet roast · Ships in 2 days · Pairs with bourbon",
    soldThisWeek: 342,
  },
  {
    id: "toffee",
    name: "Butter Toffee Peanuts",
    category: "Gourmet Peanuts",
    price: "$9.95–$16.50",
    rating: 4.8,
    reviews: 198,
    image: imgToffee,
    detail: "Buttery glaze · Ships in 2 days · Holiday favorite",
    soldThisWeek: 263,
  },
  {
    id: "brittle",
    name: "Peanut Brittle",
    category: "Sweet Treats",
    price: "$10.50",
    rating: 4.9,
    reviews: 223,
    image: imgBrittle,
    detail: "Hand-poured · Ships in 2 days · Crackles like rain",
    soldThisWeek: 154,
  },
  {
    id: "cajun",
    name: "Spicy Cajun Mixed Nuts",
    category: "Other Nuts & Mixes",
    price: "$11.95",
    rating: 4.7,
    reviews: 156,
    image: imgCajun,
    detail: "Bold heat · Ships in 2 days · Game-day-ready",
    soldThisWeek: 88,
  },
  {
    id: "trail",
    name: "Virginia Peanut Trail Mix",
    category: "Other Nuts & Mixes",
    price: "$10.95",
    rating: 4.8,
    reviews: 84,
    badge: "New",
    image: imgTrail,
    detail: "Sweet + salty · Ships in 2 days · Trail-tested",
    soldThisWeek: 71,
  },
];
