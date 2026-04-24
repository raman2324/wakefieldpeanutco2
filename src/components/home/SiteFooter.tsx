import { Facebook, Instagram } from "lucide-react";

const cols: { title: string; items: string[] }[] = [
  {
    title: "Shop",
    items: [
      "Gourmet Virginia Peanuts",
      "Raw Peanuts",
      "Roasted in Shell",
      "Sweet Treats",
      "Other Nuts & Mixes",
      "Wildlife Feed",
      "All Products",
    ],
  },
  {
    title: "Gifting",
    items: [
      "Gift Sets",
      "Variety 6 Club",
      "Build a Gift Box",
      "Holiday Collection",
      "Corporate Gifting",
      "Large List Orders",
      "Wholesale Inquiries",
    ],
  },
  {
    title: "Company",
    items: ["Our Story", "Visit the Store", "Blog & Recipes", "Press & Media", "Contact Us"],
  },
  {
    title: "Support",
    items: ["Shipping Info", "Returns", "Order Tracking", "Gift Wrapping", "FAQ", "Accessibility"],
  },
];

export function SiteFooter() {
  return (
    <footer className="bg-heritage-deep text-cream/85">
      <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2">
              <svg width="22" height="22" viewBox="0 0 32 32" className="text-roast">
                <path
                  d="M16 3c4 0 7 3 7 7 0 2-1 3-1 5s2 3 2 6c0 4-4 8-8 8s-8-4-8-8c0-3 2-4 2-6s-1-3-1-5c0-4 3-7 7-7z"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                />
              </svg>
              <span className="font-serif text-xl font-medium text-cream">Wakefield.</span>
            </div>
            <p className="mt-3 font-serif text-sm italic text-cream/70">
              The Tradition Continues.
            </p>
            <p className="mt-1 text-xs text-cream/55">Est. 1945 · Wakefield, VA</p>

            <div className="mt-5 flex gap-2">
              <a
                href="#"
                aria-label="Facebook"
                className="grid size-9 place-items-center rounded-full border border-gold/40 text-cream/85 transition hover:border-gold hover:text-gold"
              >
                <Facebook className="size-4" />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="grid size-9 place-items-center rounded-full border border-gold/40 text-cream/85 transition hover:border-gold hover:text-gold"
              >
                <Instagram className="size-4" />
              </a>
            </div>

            <div className="mt-6 flex flex-wrap gap-2 text-[10px] uppercase tracking-widest text-cream/55">
              <span>Visa</span>·<span>Mastercard</span>·<span>Discover</span>·<span>PayPal</span>
            </div>
          </div>

          {cols.map((c) => (
            <div key={c.title}>
              <h4 className="text-xs font-semibold uppercase tracking-widest text-gold">
                {c.title}
              </h4>
              <ul className="mt-4 space-y-2 text-sm">
                {c.items.map((it) => (
                  <li key={it}>
                    <a className="text-cream/75 transition hover:text-gold" href="#">
                      {it}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-3 border-t border-cream/10 pt-6 text-xs text-cream/55 md:flex-row md:items-center">
          <p>© 2026 Wakefield Peanut Company LLC. All Rights Reserved.</p>
          <div className="flex flex-wrap gap-x-4 gap-y-1">
            <a href="#" className="hover:text-gold">Privacy Policy</a>
            <a href="#" className="hover:text-gold">Terms of Service</a>
            <span>🔒 Secure Checkout</span>
          </div>
        </div>
      </div>
    </footer>
  );
}