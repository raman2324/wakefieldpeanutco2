import { useState } from "react";
import { Leaf } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SectionWrap } from "./SectionWrap";

const benefits = [
  "✓ 10% Off First Order",
  "✓ Seasonal Recipes",
  "✓ Early Holiday Access",
  "✓ No Spam, Ever",
];

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [confetti, setConfetti] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      toast.error("Please enter a valid email.");
      return;
    }
    toast.success("You're in! Check your inbox for 10% off.");
    setConfetti(true);
    setEmail("");
    setTimeout(() => setConfetti(false), 2000);
  };

  return (
    <SectionWrap className="bg-cream py-20 lg:py-28" id="newsletter">
      <div className="mx-auto max-w-3xl px-5 lg:px-8">
        <div className="relative overflow-hidden rounded-[2rem] bg-white p-8 shadow-sm ring-1 ring-ink/5 lg:p-12">
          {confetti && (
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
              {Array.from({ length: 12 }).map((_, i) => (
                <span
                  key={i}
                  aria-hidden
                  className="absolute -top-4 animate-[confetti_2s_ease-out_forwards]"
                  style={{
                    left: `${(i * 9 + 5) % 100}%`,
                    animationDelay: `${i * 60}ms`,
                  }}
                >
                  <svg width="14" height="14" viewBox="0 0 32 32">
                    <path
                      d="M16 3c4 0 7 3 7 7 0 2-1 3-1 5s2 3 2 6c0 4-4 8-8 8s-8-4-8-8c0-3 2-4 2-6s-1-3-1-5c0-4 3-7 7-7z"
                      fill="#c25a2a"
                      stroke="#9a4520"
                      strokeWidth="1.5"
                    />
                  </svg>
                </span>
              ))}
            </div>
          )}

          <div className="text-center">
            <Leaf className="mx-auto size-6 text-roast" />
            <h2 className="mt-3 font-serif text-4xl font-medium leading-[1.05] text-ink lg:text-5xl">
              Join the Wakefield Family.
            </h2>
            <p className="mt-4 text-lg text-ink/70">
              First dibs on seasonal specials, family recipes, and subscriber-only discounts. Plus,
              10% off your first order.
            </p>

            <ul className="mt-6 flex flex-wrap justify-center gap-2">
              {benefits.map((b) => (
                <li
                  key={b}
                  className="rounded-full bg-cream px-3 py-1 text-xs font-medium text-heritage"
                >
                  {b}
                </li>
              ))}
            </ul>

            <form
              onSubmit={submit}
              className="mx-auto mt-8 flex max-w-md flex-col gap-2 sm:flex-row"
            >
              <Input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="h-12 rounded-full border-ink/15 bg-cream-warm px-5 text-ink"
              />
              <Button
                type="submit"
                className="h-12 rounded-full bg-roast px-6 text-cream shadow-[0_8px_24px_-8px_rgba(194,90,42,0.5)] hover:bg-roast-deep"
              >
                Count Me In
              </Button>
            </form>

            <p className="mt-4 text-xs text-ink/55">
              We respect your privacy. Unsubscribe anytime.
            </p>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes confetti {
          0% { transform: translateY(0) rotate(0deg); opacity: 1; }
          100% { transform: translateY(220px) rotate(220deg); opacity: 0; }
        }
      `}</style>
    </SectionWrap>
  );
}