import { useEffect, useState } from "react";
import { Search, User, Heart, ShoppingBag, Menu, ChevronDown } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import logo from "@/assets/wakefield-logo.png";

const nav: { label: string; items?: string[]; pill?: string }[] = [
  {
    label: "Shop",
    items: [
      "All Peanuts",
      "Gourmet Virginia Peanuts",
      "Raw Peanuts",
      "Roasted in Shell",
      "Sweet Treats",
      "Other Nuts & Mixes",
      "Wildlife Feed",
    ],
  },
  {
    label: "Gift Boxes",
    items: ["Gift Sets", "Variety 6 Club", "Build Your Own", "Holiday Collection"],
  },
  {
    label: "Occasions",
    items: [
      "Holiday & Christmas",
      "Birthday",
      "Thank You",
      "Corporate Gifting",
      "Game Day",
    ],
  },
  { label: "Our Heritage" },
  { label: "Corporate Gifting", pill: "New" },
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 bg-cream/90 backdrop-blur-md transition-all duration-300 ${
        scrolled ? "py-3 border-b border-ink/10" : "py-5"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-5 lg:px-8">
        {/* Logo */}
        <a href="/" className="group">
          <img
            src={logo}
            alt="Wakefield Peanut Company"
            className="h-24 w-auto transition-opacity group-hover:opacity-90"
          />
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 lg:flex">
          {nav.map((n, i) => (
            <div
              key={n.label}
              className="relative"
              onMouseEnter={() => n.items && setOpenIdx(i)}
              onMouseLeave={() => setOpenIdx(null)}
            >
              <button className="group flex items-center gap-1 px-3 py-2 text-sm text-ink/85 transition hover:text-roast">
                {n.label}
                {n.pill && (
                  <span className="ml-1 rounded-full bg-gold/20 px-1.5 py-0.5 text-[10px] font-medium uppercase tracking-wide text-roast-deep">
                    {n.pill}
                  </span>
                )}
                {n.items && <ChevronDown className="size-3 opacity-60" />}
              </button>
              {n.items && openIdx === i && (
                <div className="absolute left-0 top-full w-64 rounded-2xl border border-ink/10 bg-cream p-2 shadow-xl">
                  {n.items.map((it) => (
                    <a
                      key={it}
                      href="#"
                      className="block rounded-lg px-3 py-2 text-sm text-ink/85 transition hover:bg-highlight hover:text-roast"
                    >
                      {it}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Right cluster */}
        <div className="flex items-center gap-2">
          <button aria-label="Search" className="hidden rounded-full p-2 text-ink/70 transition hover:bg-highlight hover:text-roast md:inline-flex">
            <Search className="size-4" />
          </button>
          <button aria-label="Account" className="hidden rounded-full p-2 text-ink/70 transition hover:bg-highlight hover:text-roast md:inline-flex">
            <User className="size-4" />
          </button>
          <button aria-label="Wishlist" className="hidden rounded-full p-2 text-ink/70 transition hover:bg-highlight hover:text-roast md:inline-flex">
            <Heart className="size-4" />
          </button>
          <button aria-label="Cart" className="relative rounded-full p-2 text-ink/70 transition hover:bg-highlight hover:text-roast">
            <ShoppingBag className="size-4" />
            <span className="absolute -right-0.5 -top-0.5 grid size-4 place-items-center rounded-full bg-roast text-[10px] font-semibold text-cream">
              2
            </span>
          </button>
          <Button
            asChild
            className="hidden rounded-full bg-roast px-5 text-cream shadow-[0_8px_24px_-8px_rgba(194,90,42,0.5)] transition hover:bg-roast-deep md:inline-flex"
          >
            <a href="#gift-sets">Shop Gift Sets</a>
          </Button>

          {/* Mobile menu */}
          <Sheet>
            <SheetTrigger asChild>
              <button aria-label="Menu" className="rounded-full p-2 text-ink/80 lg:hidden">
                <Menu className="size-5" />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-cream">
              <div className="mt-8 space-y-6">
                {nav.map((n) => (
                  <div key={n.label}>
                    <div className="font-serif text-lg text-ink">{n.label}</div>
                    {n.items && (
                      <ul className="mt-2 space-y-1.5">
                        {n.items.map((it) => (
                          <li key={it}>
                            <a className="text-sm text-ink/75 hover:text-roast" href="#">
                              {it}
                            </a>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
                <Button asChild className="w-full rounded-full bg-roast text-cream hover:bg-roast-deep">
                  <a href="#gift-sets">Shop Gift Sets →</a>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}