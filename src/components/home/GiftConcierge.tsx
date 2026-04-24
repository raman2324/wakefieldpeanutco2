import { useEffect, useState } from "react";
import { Gift, X, Sparkles, Phone, Mail } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

export function GiftConcierge() {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const pct =
        window.scrollY / Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
      if (pct >= 0.4) setVisible(true);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (dismissed || !visible) return null;

  return (
    <>
      <div className="fixed bottom-5 right-5 z-[55] flex items-center gap-2">
        <button
          aria-label="Dismiss gift concierge"
          onClick={() => setDismissed(true)}
          className="grid size-7 place-items-center rounded-full bg-cream/90 text-ink/60 shadow ring-1 ring-ink/10 backdrop-blur transition hover:text-roast"
        >
          <X className="size-3.5" />
        </button>
        <button
          onClick={() => setOpen(true)}
          aria-label="Open gift concierge"
          className="group inline-flex h-14 items-center gap-2 rounded-full bg-roast pl-3 pr-3 text-cream shadow-[0_12px_32px_-8px_rgba(194,90,42,0.55)] transition-all duration-300 hover:bg-roast-deep hover:pr-5"
        >
          <span className="grid size-9 place-items-center rounded-full bg-cream/15">
            <Gift className="size-5" />
          </span>
          <span className="hidden text-sm font-medium md:inline-block max-w-0 overflow-hidden whitespace-nowrap transition-[max-width] duration-300 group-hover:max-w-xs">
            Need help picking a gift?
          </span>
        </button>
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="bg-cream sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="font-serif text-2xl text-ink">
              How can we help you gift?
            </DialogTitle>
            <DialogDescription className="text-ink/70">
              Three quick ways — pick whichever feels easiest.
            </DialogDescription>
          </DialogHeader>
          <div className="mt-3 space-y-2">
            <a
              href="#picker"
              onClick={() => setOpen(false)}
              className="flex items-center gap-3 rounded-2xl border border-ink/10 bg-cream-warm p-4 text-left transition hover:border-roast hover:bg-highlight"
            >
              <Sparkles className="size-5 text-roast" />
              <div>
                <p className="font-medium text-ink">Take the 30-second quiz</p>
                <p className="text-xs text-ink/60">We'll match a tin to your person.</p>
              </div>
            </a>
            <a
              href="tel:18008031309"
              className="flex items-center gap-3 rounded-2xl border border-ink/10 bg-cream-warm p-4 text-left transition hover:border-roast hover:bg-highlight"
            >
              <Phone className="size-5 text-roast" />
              <div>
                <p className="font-medium text-ink">Chat with our store</p>
                <p className="text-xs text-ink/60">1-800-803-1309 · Mon–Sat</p>
              </div>
            </a>
            <a
              href="mailto:sales@wakefieldpeanutco.com"
              className="flex items-center gap-3 rounded-2xl border border-ink/10 bg-cream-warm p-4 text-left transition hover:border-roast hover:bg-highlight"
            >
              <Mail className="size-5 text-roast" />
              <div>
                <p className="font-medium text-ink">Email the family</p>
                <p className="text-xs text-ink/60">sales@wakefieldpeanutco.com</p>
              </div>
            </a>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
