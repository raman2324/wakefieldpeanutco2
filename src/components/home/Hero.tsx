import { motion } from "framer-motion";
import { ArrowRight, Star, Truck, Gift, Award, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroPeanuts from "@/assets/hero-peanuts.jpg";
import heroPeanutCard from "@/assets/hero-peanut-card.jpg";

export function Hero() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="bg-grain relative overflow-hidden bg-cream"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-5 py-16 lg:grid-cols-12 lg:gap-10 lg:py-24 lg:px-8">
        {/* LEFT — 7/12 ≈ 58% so the headline gets oxygen */}
        <div className="lg:col-span-7">
          <motion.span
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-heritage/20 bg-cream-warm px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-heritage"
          >
            🌱 Family Owned · Since 1945 · Wakefield, VA
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7, ease: "easeOut" }}
            className="mt-6 font-serif text-[clamp(3rem,7vw,6rem)] font-medium leading-[0.92] tracking-tight text-ink"
          >
            <span className="block">The South's Original</span>
            <span className="block text-roast">Peanut.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.5 }}
            className="mt-6 max-w-xl text-lg leading-[1.6] text-ink/75"
          >
            Hand-sorted, small-batch Virginia peanuts from the same soil where America's
            first peanut crop was harvested over 150 years ago. Four generations of tradition,
            shipped to your door.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.5 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <Button
              asChild
              className="group h-12 rounded-full bg-roast px-6 text-cream shadow-[0_8px_24px_-8px_rgba(194,90,42,0.5)] transition hover:bg-roast-deep hover:shadow-[0_12px_32px_-8px_rgba(194,90,42,0.65)]"
            >
              <a href="#gift-sets">
                Shop Gift Sets
                <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              className="h-12 rounded-full border-ink/20 bg-transparent px-6 text-ink hover:bg-ink hover:text-cream"
            >
              <a href="#story">Our Story</a>
            </Button>
          </motion.div>

          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-ink/70"
          >
            <li className="inline-flex items-center gap-1.5">
              <Star className="size-4 fill-gold text-gold" /> 4.9/5 · 1,800+ Reviews
            </li>
            <li className="inline-flex items-center gap-1.5">
              <Truck className="size-4 text-heritage" /> Free Shipping $75+
            </li>
            <li className="inline-flex items-center gap-1.5">
              <Gift className="size-4 text-roast" /> Gift Wrapping Available
            </li>
            <li className="inline-flex items-center gap-1.5">
              <Award className="size-4 text-gold" /> Virginia's Finest
            </li>
            <li className="inline-flex items-center gap-1.5">
              <Users className="size-4 text-heritage" /> 2,400+ Variety 6 Club Subscribers
            </li>
          </motion.ul>
        </div>

        {/* RIGHT — image + floating cards (5/12 ≈ 42%) */}
        <div className="relative lg:col-span-5">
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="relative aspect-[4/5] overflow-hidden rounded-[2rem] shadow-[0_30px_60px_-30px_rgba(31,43,30,0.45)]"
            style={{ animation: "float-slow 7s ease-in-out infinite" }}
          >
            <img
              src={heroPeanuts}
              alt="Open tin of Wakefield salted peanuts spilling onto warm linen with a wooden scoop alongside"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/30 via-transparent to-transparent" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="absolute -left-4 top-10 hidden w-56 rounded-2xl border border-ink/5 bg-cream p-3 shadow-xl md:block"
            style={{ animation: "float-slow 5s ease-in-out infinite" }}
          >
            <div className="flex items-center gap-3">
              <div className="size-12 shrink-0 overflow-hidden rounded-lg bg-highlight">
                <img
                  src={heroPeanutCard}
                  alt="Single Virginia peanut close-up"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="min-w-0">
                <span className="inline-block rounded-full bg-roast/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-roast">
                  Best Seller
                </span>
                <p className="mt-1 truncate text-sm font-medium text-ink">
                  Salted Gourmet Virginia Peanuts
                </p>
                <div className="flex items-center gap-1 text-xs text-ink/70">
                  <span>$8.50</span>
                  <span className="ml-1 flex">
                    {[0, 1, 2, 3, 4].map((s) => (
                      <Star key={s} className="size-3 fill-gold text-gold" />
                    ))}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.a
            href="#gift-sets"
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.1, duration: 0.6 }}
            className="group absolute right-2 top-1/2 hidden -translate-y-1/2 items-center gap-2 rounded-full bg-ink px-5 py-3 text-sm font-medium text-cream shadow-xl transition hover:bg-roast md:inline-flex"
            style={{ animation: "float-slow 6.5s ease-in-out infinite" }}
          >
            Build a Gift Box
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </motion.a>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3, duration: 0.6 }}
            className="absolute -bottom-6 right-0 hidden w-60 rounded-2xl border border-ink/5 bg-cream p-4 shadow-xl md:block"
            style={{ animation: "float-slow 7.8s ease-in-out infinite" }}
          >
            <span className="inline-block rounded-full bg-heritage/15 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-heritage">
              In Stock
            </span>
            <p className="mt-2 text-sm font-medium text-ink">Chocolate Covered Peanuts</p>
            <p className="text-xs text-ink/60">Ships in 2 days</p>
          </motion.div>
        </div>
      </div>

      <div className="mx-auto flex max-w-7xl flex-col items-center gap-3 pb-10 text-center">
        <span className="text-[11px] font-semibold uppercase tracking-[0.32em] text-roast">
          ▪ Keep Scrolling
        </span>
        <span className="relative block h-10 w-px overflow-hidden bg-gold/25" aria-hidden>
          <span
            className="absolute inset-x-0 top-0 block h-1/2 bg-gold"
            style={{ animation: "scroll-rule 2.2s ease-in-out infinite" }}
          />
        </span>
      </div>

      <style>{`
        @keyframes scroll-rule {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(200%); }
        }
      `}</style>
    </motion.section>
  );
}
