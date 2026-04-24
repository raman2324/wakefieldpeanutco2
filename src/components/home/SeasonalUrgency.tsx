import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function SeasonalUrgency() {
  return (
    <section className="bg-roast text-cream" aria-label="Holiday shipping deadline">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-4 px-5 py-7 lg:flex-row lg:items-center lg:px-8">
        <div>
          <p className="font-serif text-2xl leading-tight md:text-3xl">
            Order by Dec 18 for Christmas Delivery.
          </p>
          <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.3em] text-cream/75">
            Standard Shipping · No Rush Fees
          </p>
        </div>
        <Button
          asChild
          className="h-11 rounded-full bg-cream px-5 text-heritage-deep hover:bg-gold hover:text-ink"
        >
          <a href="#shop">
            Shop Holiday Tins
            <ArrowRight className="ml-2 size-4" />
          </a>
        </Button>
      </div>
    </section>
  );
}
