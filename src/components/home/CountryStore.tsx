import { MapPin, Clock, Phone, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionWrap } from "./SectionWrap";

export function CountryStore() {
  return (
    <SectionWrap className="bg-cream-warm py-20 lg:py-28" id="visit">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-5 lg:grid-cols-2 lg:px-8">
        <div className="overflow-hidden rounded-[2rem] shadow-xl">
          <img
            src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1200&q=80"
            alt="The Wakefield Peanut Company country store on Route 460"
            loading="lazy"
            className="aspect-[4/3] h-full w-full object-cover"
          />
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-roast">
            Stop By Any Time
          </p>
          <h2 className="mt-3 font-serif text-4xl font-medium leading-[1.05] text-ink lg:text-5xl">
            Come Taste for Yourself.
          </h2>
          <p className="mt-5 text-lg text-ink/75">
            Our country store in Wakefield, Virginia has been sampling fresh-roasted peanuts to
            neighbors and travelers for decades. Pull off Route 460 and we'll hand you a warm
            sample straight from the roaster.
          </p>
          <ul className="mt-8 space-y-3 text-sm text-ink/85">
            <li className="flex gap-3">
              <MapPin className="mt-0.5 size-5 shrink-0 text-roast" />
              11253 General Mahone Hwy (Route 460), Wakefield, VA 23888
            </li>
            <li className="flex gap-3">
              <Clock className="mt-0.5 size-5 shrink-0 text-roast" />
              Mon–Fri 8a–5p · Sat 9a–5p · Sun 10a–5p
            </li>
            <li className="flex gap-3">
              <Phone className="mt-0.5 size-5 shrink-0 text-roast" />
              <a href="tel:18008031309" className="hover:text-roast">1-800-803-1309</a>
            </li>
          </ul>
          <Button
            asChild
            variant="outline"
            className="group mt-8 h-12 rounded-full border-ink/25 bg-transparent px-6 text-ink hover:border-roast hover:text-roast"
          >
            <a
              href="https://maps.google.com/?q=11253+General+Mahone+Highway+Wakefield+VA+23888"
              target="_blank"
              rel="noreferrer"
            >
              Get Directions
              <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
            </a>
          </Button>
        </div>
      </div>
    </SectionWrap>
  );
}