import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, RefreshCw, User, Gift, Users, Briefcase, Sparkles, DollarSign } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { ProductCard, SAMPLE_PRODUCTS, type Product } from "./ProductCard";
import { SectionWrap } from "./SectionWrap";

type Who = "Just me" | "A gift" | "A crowd" | "Clients";
type Flavor = "Classic" | "Sweet" | "Bold" | "Surprise";
type Budget = "<15" | "15-30" | "30+";

const whoOptions: { id: Who; label: string; sub: string; Icon: typeof User }[] = [
  { id: "Just me", label: "Just me", sub: "A tin for the desk", Icon: User },
  { id: "A gift", label: "A gift", sub: "Send some warmth", Icon: Gift },
  { id: "A crowd", label: "A crowd", sub: "Game day or party", Icon: Users },
  { id: "Clients", label: "Clients / Corporate", sub: "Make an impression", Icon: Briefcase },
];
const flavorOptions: { id: Flavor; label: string; sub: string }[] = [
  { id: "Classic", label: "Classic & Salty", sub: "The lifelong staple" },
  { id: "Sweet", label: "Sweet & Indulgent", sub: "Dessert in a tin" },
  { id: "Bold", label: "Bold & Spicy", sub: "Heat with depth" },
  { id: "Surprise", label: "Surprise me", sub: "Family's pick" },
];
const budgetOptions: { id: Budget; label: string }[] = [
  { id: "<15", label: "Under $15" },
  { id: "15-30", label: "$15–$30" },
  { id: "30+", label: "$30+" },
];

function pick(who: Who, flavor: Flavor, _budget: Budget): { product: Product; rationale: string } {
  const idMap: Record<string, string> = {
    "Just me|Classic": "salted",
    "Just me|Sweet": "brittle",
    "Just me|Bold": "cajun",
    "Just me|Surprise": "honey",
    "A gift|Classic": "salted",
    "A gift|Sweet": "choc",
    "A gift|Bold": "cajun",
    "A gift|Surprise": "trail",
    "A crowd|Classic": "raw",
    "A crowd|Sweet": "toffee",
    "A crowd|Bold": "cajun",
    "A crowd|Surprise": "trail",
    "Clients|Classic": "salted",
    "Clients|Sweet": "choc",
    "Clients|Bold": "honey",
    "Clients|Surprise": "honey",
  };
  const id = idMap[`${who}|${flavor}`] ?? "salted";
  const product = SAMPLE_PRODUCTS.find((p) => p.id === id)!;
  const rationaleMap: Record<string, string> = {
    salted: "A clean classic for the lifelong snacker — our most-gifted tin.",
    brittle: "Old-fashioned hand-poured brittle. The crackle does the work.",
    cajun: "A bold, low-and-slow heat — for the friend who orders the hot honey.",
    honey: "Sweet roast, deep finish. Our pick when you can't decide.",
    choc: "Hand-dipped, after-dinner indulgence. Don't expect leftovers.",
    raw: "Bulk in the shell — boil 'em, salt 'em, share 'em.",
    toffee: "Buttery glaze. The tin everybody fights over at the holidays.",
    trail: "Sweet, salty, and crunchy in the right ratios. A road-trip companion.",
  };
  return { product, rationale: rationaleMap[product.id] };
}

export function FindYourPeanut() {
  const [step, setStep] = useState<0 | 1 | 2 | 3>(0);
  const [who, setWho] = useState<Who | null>(null);
  const [flavor, setFlavor] = useState<Flavor | null>(null);
  const [budget, setBudget] = useState<Budget | null>(null);

  const reset = () => {
    setStep(0);
    setWho(null);
    setFlavor(null);
    setBudget(null);
  };

  const result = step === 3 && who && flavor && budget ? pick(who, flavor, budget) : null;
  const progressVal = step === 0 ? 0 : (step / 3) * 100;

  return (
    <SectionWrap className="bg-highlight bg-grain py-20 lg:py-28" id="picker">
      <div className="mx-auto max-w-3xl px-5 text-center lg:px-8">
        <p className="text-xs font-semibold uppercase tracking-widest text-roast">A Little Help?</p>
        <h2 className="mt-3 font-serif text-4xl font-medium leading-[1.05] text-ink lg:text-5xl">
          Find Your Perfect Peanut in 30&nbsp;Seconds.
        </h2>
        <p className="mt-4 text-lg text-ink/70">
          Answer three quick questions — we'll pick the tin.
        </p>
      </div>

      <div className="mx-auto mt-10 max-w-[640px] px-5">
        <div className="rounded-[2rem] border border-ink/5 bg-cream p-6 shadow-sm md:p-8">
          <div className="mb-6 flex items-center gap-3 text-xs uppercase tracking-widest text-ink/55">
            <span>Step {Math.min(step + 1, 3)} of 3</span>
            <Progress value={progressVal} className="h-1.5 flex-1 bg-highlight [&>div]:bg-roast" />
          </div>

          <AnimatePresence mode="wait">
            {step === 0 && (
              <motion.div
                key="s0"
                initial={{ opacity: 0, x: 16 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -16 }}
                transition={{ duration: 0.35 }}
              >
                <h3 className="font-serif text-2xl text-ink">Who's this for?</h3>
                <div className="mt-5 grid grid-cols-2 gap-3">
                  {whoOptions.map((o) => {
                    const Icon = o.Icon;
                    return (
                      <button
                        key={o.id}
                        onClick={() => {
                          setWho(o.id);
                          setStep(1);
                        }}
                        className="group rounded-2xl border border-ink/10 bg-cream p-4 text-left transition hover:border-roast hover:bg-highlight"
                      >
                        <Icon className="size-5 text-roast" />
                        <p className="mt-3 font-medium text-ink">{o.label}</p>
                        <p className="text-xs text-ink/60">{o.sub}</p>
                      </button>
                    );
                  })}
                </div>
              </motion.div>
            )}

            {step === 1 && (
              <motion.div
                key="s1"
                initial={{ opacity: 0, x: 16 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -16 }}
                transition={{ duration: 0.35 }}
              >
                <h3 className="font-serif text-2xl text-ink">Pick your flavor lane.</h3>
                <div className="mt-5 grid grid-cols-2 gap-3">
                  {flavorOptions.map((o) => (
                    <button
                      key={o.id}
                      onClick={() => {
                        setFlavor(o.id);
                        setStep(2);
                      }}
                      className="rounded-2xl border border-ink/10 bg-cream p-4 text-left transition hover:border-roast hover:bg-highlight"
                    >
                      <Sparkles className="size-5 text-roast" />
                      <p className="mt-3 font-medium text-ink">{o.label}</p>
                      <p className="text-xs text-ink/60">{o.sub}</p>
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div
                key="s2"
                initial={{ opacity: 0, x: 16 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -16 }}
                transition={{ duration: 0.35 }}
              >
                <h3 className="font-serif text-2xl text-ink">Budget?</h3>
                <div className="mt-5 grid grid-cols-3 gap-3">
                  {budgetOptions.map((o) => (
                    <button
                      key={o.id}
                      onClick={() => {
                        setBudget(o.id);
                        setStep(3);
                      }}
                      className="rounded-2xl border border-ink/10 bg-cream p-5 text-center transition hover:border-roast hover:bg-highlight"
                    >
                      <DollarSign className="mx-auto size-5 text-roast" />
                      <p className="mt-2 font-medium text-ink">{o.label}</p>
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {step === 3 && result && (
              <motion.div
                key="s3"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="text-left"
              >
                <p className="text-xs font-semibold uppercase tracking-widest text-heritage">
                  Our pick for you
                </p>
                <p className="mt-2 font-serif italic text-ink/75">"{result.rationale}"</p>
                <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-[1fr_auto] sm:items-center">
                  <ProductCard p={result.product} />
                  <div className="flex flex-col gap-2">
                    <Button className="rounded-full bg-roast text-cream hover:bg-roast-deep">
                      Add to Cart
                    </Button>
                    <Button
                      variant="outline"
                      onClick={() => setStep(2)}
                      className="rounded-full border-ink/20 bg-transparent text-ink hover:bg-ink hover:text-cream"
                    >
                      <RefreshCw className="mr-2 size-4" />
                      Show me another
                    </Button>
                    <button
                      onClick={reset}
                      className="text-xs text-ink/55 underline-offset-4 hover:text-roast hover:underline"
                    >
                      Start over →
                    </button>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <p className="mt-8 text-center text-sm italic text-ink/55">
          Want the whole flight?{" "}
          <a href="#gift-sets" className="text-roast underline-offset-4 hover:underline">
            Try our Variety 6 Club <ArrowRight className="inline size-3" />
          </a>
        </p>
      </div>
    </SectionWrap>
  );
}