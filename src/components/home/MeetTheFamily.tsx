import family from "@/assets/family-porch.jpg";

export function MeetTheFamily() {
  return (
    <section className="bg-cream-warm py-20 lg:py-28" id="family">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-5 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <div className="overflow-hidden rounded-[2rem] shadow-xl">
          <img
            src={family}
            alt="The Wakefield family standing on the porch of the country store at golden hour"
            loading="lazy"
            className="aspect-[4/3] h-full w-full object-cover"
          />
          <p className="bg-cream px-5 py-3 text-[11px] font-semibold uppercase tracking-[0.25em] text-ink/65">
            The Wakefield Family · Wakefield, VA
          </p>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-roast">
            Meet the Family
          </p>
          <h2 className="mt-3 font-serif text-4xl font-medium leading-[0.95] text-ink lg:text-5xl">
            <span className="block">Still a Family</span>
            <span className="block"><em className="not-italic text-roast">Operation.</em></span>
          </h2>
          <blockquote className="mt-7 max-w-[540px]">
            <p className="font-serif text-lg italic leading-[1.55] text-ink/85">
              "We're still a family operation. Three generations are here every week — and the
              fourth is learning how to seal a tin properly. If you visit, ask for us by name."
            </p>
            <footer className="mt-5 text-xs uppercase tracking-[0.25em] text-ink/55">
              — The Mathias Family
            </footer>
          </blockquote>
        </div>
      </div>
    </section>
  );
}
