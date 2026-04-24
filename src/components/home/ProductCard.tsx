import { useState } from "react";
import { Heart, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

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
};

export function ProductCard({ p }: { p: Product }) {
  const [liked, setLiked] = useState(false);
  const [bouncing, setBouncing] = useState(false);

  const toggleLike = () => {
    setLiked((v) => !v);
    setBouncing(true);
    setTimeout(() => setBouncing(false), 220);
  };

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
        <button
          onClick={toggleLike}
          aria-label={liked ? "Remove from wishlist" : "Add to wishlist"}
          className="absolute right-3 top-3 grid size-8 place-items-center rounded-full bg-cream/90 text-ink/70 backdrop-blur transition hover:text-roast"
        >
          <Heart
            className={`size-4 transition-all ${
              liked ? "fill-roast text-roast" : ""
            } ${bouncing ? "scale-125" : "scale-100"}`}
          />
        </button>

        {/* Hover detail row */}
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
        <Button
          variant="outline"
          className="mt-2 w-full rounded-full border-ink/20 bg-transparent text-ink hover:border-roast hover:bg-roast hover:text-cream"
        >
          Add to Cart
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
    image: "https://images.unsplash.com/photo-1572441713132-c542fc4fe282?auto=format&fit=crop&w=600&q=80",
    detail: "3 oz tin · Ships in 2 days · Best with coffee",
  },
  {
    id: "choc",
    name: "Chocolate Covered Peanuts",
    category: "Sweet Treats",
    price: "$9.45–$15.50",
    rating: 4.8,
    reviews: 267,
    image: "https://images.unsplash.com/photo-1606312619070-d48b4c652a52?auto=format&fit=crop&w=600&q=80",
    detail: "Hand-dipped · Ships in 2 days · After-dinner treat",
  },
  {
    id: "raw",
    name: "Raw in the Shell Peanuts",
    category: "Raw Peanuts",
    price: "$12.95–$28.50",
    rating: 4.7,
    reviews: 189,
    image: "https://images.unsplash.com/photo-1626078297058-23ed68d23bbf?auto=format&fit=crop&w=600&q=80",
    detail: "Bulk bag · Ships in 2 days · Perfect for boiling",
  },
  {
    id: "honey",
    name: "Honey Roasted Peanuts",
    category: "Gourmet Peanuts",
    price: "$9.50–$15.50",
    rating: 4.9,
    reviews: 412,
    badge: "Best Seller",
    image: "https://images.unsplash.com/photo-1606923829579-0cb981a83e2e?auto=format&fit=crop&w=600&q=80",
    detail: "Sweet roast · Ships in 2 days · Pairs with bourbon",
  },
  {
    id: "toffee",
    name: "Butter Toffee Peanuts",
    category: "Gourmet Peanuts",
    price: "$9.95–$16.50",
    rating: 4.8,
    reviews: 198,
    image: "https://images.unsplash.com/photo-1582716401301-b2407dc7563d?auto=format&fit=crop&w=600&q=80",
    detail: "Buttery glaze · Ships in 2 days · Holiday favorite",
  },
  {
    id: "brittle",
    name: "Peanut Brittle",
    category: "Sweet Treats",
    price: "$10.50",
    rating: 4.9,
    reviews: 223,
    image: "https://images.unsplash.com/photo-1566454419290-57a0589c9b51?auto=format&fit=crop&w=600&q=80",
    detail: "Hand-poured · Ships in 2 days · Crackles like rain",
  },
  {
    id: "cajun",
    name: "Spicy Cajun Mixed Nuts",
    category: "Other Nuts & Mixes",
    price: "$11.95",
    rating: 4.7,
    reviews: 156,
    image: "https://images.unsplash.com/photo-1604908554027-2b572202e185?auto=format&fit=crop&w=600&q=80",
    detail: "Bold heat · Ships in 2 days · Game-day-ready",
  },
  {
    id: "trail",
    name: "Virginia Peanut Trail Mix",
    category: "Other Nuts & Mixes",
    price: "$10.95",
    rating: 4.8,
    reviews: 84,
    badge: "New",
    image: "https://images.unsplash.com/photo-1587049352846-4a222e784d38?auto=format&fit=crop&w=600&q=80",
    detail: "Sweet + salty · Ships in 2 days · Trail-tested",
  },
];