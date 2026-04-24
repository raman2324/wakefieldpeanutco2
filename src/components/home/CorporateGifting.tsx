import { useState } from "react";
import { Gift, Check } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SectionWrap } from "./SectionWrap";

const benefits = [
  "Volume discounts on orders of 20+",
  "Custom-branded gift notes and ribbons",
  "Dedicated account manager",
  "Our easy Large List Order form — one upload, many addresses",
  "Nationwide shipping coordinated for you",
];

export function CorporateGifting() {
  const [email, setEmail] = useState("");

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      toast.error("Please enter a valid work email.");
      return;
    }
    toast.success("Thanks — we'll be in touch within one business day.");
    setEmail("");
  };

  return (
    <SectionWrap className="relative overflow-hidden bg-heritage" id="corporate">
      <div className="absolute inset-x-0 top-0 h-px bg-gold/60" />
      {/* Watermark monogram */}
      <span
        aria-hidden
        className="pointer-events-none absolute -left-10 top-1/2 hidden -translate-y-1/2 select-none font-serif text-[22rem] font-light leading-none text-gold/[0.06] lg:block"
      >
        WPC
      </span>

      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-5 py-20 text-cream lg:grid-cols-2 lg:gap-16 lg:px-8 lg:py-28">
        <div>
          <Gift className="size-7 text-gold" />
          <p className="mt-5 text-xs font-semibold uppercase tracking-widest text-gold">
            Corporate Gifting
          </p>
          <h2 className="mt-3 font-serif text-4xl font-medium leading-[1.05] lg:text-5xl">
            Make an Impression That Lasts.
          </h2>
          <ul className="mt-8 space-y-3.5 text-base text-cream/90">
            {benefits.map((b) => (
              <li key={b} className="flex gap-3">
                <Check className="mt-1 size-5 shrink-0 text-gold" />
                <span>{b}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-3xl border border-cream/10 bg-heritage-deep/70 p-8 backdrop-blur-sm lg:p-10">
          <h3 className="font-serif text-3xl">Start Your Corporate Order</h3>
          <p className="mt-2 text-sm text-cream/70">
            Tell us where to send pricing — we'll follow up personally.
          </p>
          <form onSubmit={submit} className="mt-6 space-y-3">
            <Input
              type="email"
              required
              placeholder="your@company.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="h-12 rounded-full border-cream/20 bg-cream/5 px-5 text-cream placeholder:text-cream/50"
            />
            <Button
              type="submit"
              className="h-12 w-full rounded-full bg-gold text-ink hover:bg-gold/90"
            >
              Get Volume Pricing
            </Button>
          </form>
          <p className="mt-5 text-sm text-cream/75">
            Or call us directly at{" "}
            <a href="tel:18008031309" className="font-medium text-gold underline-offset-4 hover:underline">
              1-800-803-1309
            </a>
          </p>
        </div>
      </div>
    </SectionWrap>
  );
}