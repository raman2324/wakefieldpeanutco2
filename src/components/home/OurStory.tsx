import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { SectionWrap } from "./SectionWrap";
import storyFarm from "@/assets/story-farm.jpg";
import storyHands from "@/assets/story-hands.jpg";

const milestones = [
  { year: "1870s", text: "First commercial peanut crop in America, planted a few miles from our door." },
  { year: "1945", text: "Wakefield Peanut Company founded." },
  { year: "1985", text: "Family launches the Gift Sets mail-order line." },
  { year: "Today", text: "Shipping nationwide, still hand-packing every tin in Wakefield." },
];

export function OurStory() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const yWatermark = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const yPhotos = useTransform(scrollYProgress, [0, 1], [40, -40]);

  return (
    <SectionWrap
      id="story"
      className="bg-grain relative overflow-hidden bg-gradient-to-b from-cream via-cream-warm to-cream-warm py-24 lg:py-32"
    >
      <div ref={ref} className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-12">
          {/* LEFT: copy */}
          <div className="relative lg:col-span-7">
            <motion.span
              aria-hidden
              style={{ y: yWatermark }}
              className="pointer-events-none absolute -left-2 -top-10 select-none font-serif text-[clamp(11rem,22vw,20rem)] font-light leading-none text-roast/[0.06]"
            >
              1945
            </motion.span>

            <div className="relative">
              <p className="text-xs font-semibold uppercase tracking-widest text-roast">Our Story</p>
              <h2 className="mt-3 font-serif text-5xl font-medium leading-[1.02] text-ink lg:text-7xl">
                A Legacy
                <br />
                Four Generations
                <br />
                <em className="not-italic text-roast">in the Making.</em>
              </h2>

              <p className="drop-cap mt-10 max-w-xl text-lg leading-[1.65] text-ink/80">
                Over 150 years ago, just a few miles west of our door, farmers planted America's
                first commercial peanut crop. Since 1945, our family has carried that tradition
                forward — curing, shelling, roasting, and hand-packing peanuts the way our
                grandparents did.
              </p>
              <p className="mt-5 max-w-xl text-lg leading-[1.65] text-ink/80">
                No shortcuts. No shelf-stable imitations. Just small-batch Virginia peanuts, the
                way the South has always made them.
              </p>

              <blockquote className="mt-10 max-w-xl border-l-2 border-roast pl-6">
                <p className="hanging-quote font-serif text-2xl italic leading-[1.35] text-ink/85">
                  "Stop by our country store and we'll hand you a warm sample out of the
                  roaster — same as we did forty years ago."
                </p>
                <footer className="mt-3 text-xs uppercase tracking-widest text-ink/55">
                  — The Wakefield Family
                </footer>
              </blockquote>
            </div>
          </div>

          {/* RIGHT: collage */}
          <motion.div style={{ y: yPhotos }} className="relative lg:col-span-5">
            <div className="relative h-[520px]">
              <div className="absolute left-0 top-0 w-[78%] rotate-[-3deg] overflow-hidden rounded-2xl border-[6px] border-cream shadow-xl">
                <img
                  src={storyFarm}
                  alt="Virginia peanut field at golden hour"
                  loading="lazy"
                  className="h-72 w-full object-cover"
                />
              </div>
              <div className="absolute bottom-0 right-0 w-[72%] rotate-[4deg] overflow-hidden rounded-2xl border-[6px] border-cream shadow-xl">
                <img
                  src={storyHands}
                  alt="The Wakefield country store front with retail sign"
                  loading="lazy"
                  className="h-72 w-full object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Timeline */}
        <div className="mt-20">
          <div className="relative">
            <div className="absolute left-0 right-0 top-3 h-px bg-ink/15" />
            <ul className="relative grid grid-cols-2 gap-8 md:grid-cols-4">
              {milestones.map((m, i) => (
                <motion.li
                  key={m.year}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ delay: i * 0.18, duration: 0.5 }}
                >
                  <div className="relative">
                    <span className="block size-3 rounded-full bg-gold ring-4 ring-cream-warm" />
                  </div>
                  <p className="mt-4 font-serif text-2xl text-roast">{m.year}</p>
                  <p className="mt-1 text-sm text-ink/70">{m.text}</p>
                </motion.li>
              ))}
            </ul>
          </div>

          <a
            href="#story"
            className="group mt-10 inline-flex items-center gap-2 text-sm font-medium text-roast underline-offset-4 hover:underline"
          >
            Read Our Full Story
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </SectionWrap>
  );
}