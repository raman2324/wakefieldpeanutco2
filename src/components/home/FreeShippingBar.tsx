import { ArrowRight } from "lucide-react";
import { Progress } from "@/components/ui/progress";

const CART_TOTAL = 37;
const FREE_AT = 75;

export function FreeShippingBar() {
  const remaining = Math.max(0, FREE_AT - CART_TOTAL);
  const pct = Math.min(100, (CART_TOTAL / FREE_AT) * 100);
  return (
    <div className="border-b border-ink/5 bg-cream-warm">
      <div className="mx-auto flex max-w-7xl flex-col gap-1.5 px-5 py-2.5 lg:flex-row lg:items-center lg:gap-4 lg:px-8">
        <p className="text-xs text-ink/80 sm:text-sm">
          You're <span className="font-semibold text-roast">${remaining}</span> away from free shipping.{" "}
          <a href="#shop" className="hidden text-ink/70 underline-offset-4 hover:text-roast hover:underline sm:inline">
            Keep adding to your tin <ArrowRight className="inline size-3" />
          </a>
        </p>
        {/* Desktop full progress */}
        <div className="hidden flex-1 sm:block">
          <Progress
            value={pct}
            className="h-1.5 bg-ink/10 [&>div]:bg-roast"
          />
        </div>
        {/* Mobile sliver */}
        <div className="h-[2px] w-full overflow-hidden rounded bg-ink/10 sm:hidden">
          <div className="h-full bg-roast transition-all" style={{ width: `${pct}%` }} />
        </div>
      </div>
    </div>
  );
}
