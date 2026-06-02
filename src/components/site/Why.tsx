import { Chip, Reveal } from "./shared";
import { DIFFERENTIATORS } from "./data";

export function Why() {
  return (
    <section className="py-6 lg:py-8 px-4 md:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-6">
          <Chip className="mb-6">Why Woharon?</Chip>
          <h2 className="font-display font-medium text-2xl md:text-4xl lg:text-5xl leading-[0.95] tracking-tighter">
            Not another freelancer. Not another templated agency.
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {DIFFERENTIATORS.map((d) => (
            <Reveal
              key={d.n}
              className={`rounded-[2rem] p-8 border transition-colors ${
                d.n === "01"
                  ? "bg-primary/30 border-primary/40 hover:border-accent"
                  : d.n === "02"
                    ? "bg-foreground text-background border-foreground hover:border-primary"
                    : d.n === "03"
                      ? "bg-card border-border hover:border-accent/60"
                      : "bg-accent/40 border-accent/50 hover:border-foreground/30"
              }`}
            >
              <h3 className="font-display text-2xl lg:text-3xl font-medium tracking-tight">
                {d.t}
              </h3>
              <p
                className={`mt-4 leading-relaxed ${d.n === "02" ? "text-background/65" : "text-foreground/70"}`}
              >
                {d.d}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
