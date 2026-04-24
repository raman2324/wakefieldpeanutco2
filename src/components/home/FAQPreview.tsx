import { ArrowRight } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SectionWrap } from "./SectionWrap";

const faqs = [
  {
    q: "How long do your peanuts stay fresh?",
    a: "Sealed tins keep beautifully for up to 6 months in the pantry. Once you crack the lid, we'd say 3 weeks — though in our house they don't last the weekend.",
  },
  {
    q: "Do you ship internationally?",
    a: "We ship anywhere in the United States, including Alaska and Hawaii. International shipping is coming next year — drop your email below and we'll let you know when it goes live.",
  },
  {
    q: "Can I include a gift note?",
    a: "Always. Every order has a free gift-note field at checkout, hand-written on Wakefield letterhead. We'll even leave the price off the receipt.",
  },
  {
    q: "What's the Variety 6 Club, exactly?",
    a: "Six of our best 3-oz tins, hand-packed and shipped to your door four times a year — March, June, September, December. $89 a quarter, no commitment, cancel anytime.",
  },
  {
    q: "Can I visit the country store?",
    a: "Please do. We're at 11253 General Mahone Hwy on Route 460 in Wakefield, Virginia — open seven days a week. Ask anybody behind the counter for a warm sample out of the roaster.",
  },
];

export function FAQPreview() {
  return (
    <SectionWrap className="bg-cream py-20 lg:py-28" id="faq">
      <div className="mx-auto max-w-3xl px-5 lg:px-8">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-roast">
            Common Questions
          </p>
          <h2 className="mt-3 font-serif text-4xl font-medium leading-[0.95] text-ink lg:text-5xl">
            <span className="block">Answered Before You Ask.</span>
          </h2>
        </div>

        <Accordion type="single" collapsible className="mt-10 w-full">
          {faqs.map((f, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="border-ink/10">
              <AccordionTrigger className="text-left font-serif text-lg text-ink hover:text-roast">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-base leading-[1.65] text-ink/75">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="mt-10 text-center">
          <a
            href="#faq"
            className="group inline-flex items-center gap-2 text-sm font-medium text-roast underline-offset-4 hover:underline"
          >
            See all 24 answers
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </SectionWrap>
  );
}
