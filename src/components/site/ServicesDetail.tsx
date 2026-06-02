import { Chip, Reveal } from "./shared";
import { SERVICE_DETAIL } from "./data";

export function ServicesDetail() {
  return (
    <section id="services" className="py-10 lg:py-14 px-4 md:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-6">
          <Chip className="mb-6">What we build</Chip>
          <h2 className="font-display font-medium text-3xl md:text-5xl lg:text-6xl leading-[0.95] tracking-tighter whitespace-nowrap">
            From strategy to execution, under one team.
          </h2>
        </div>

        <div className="rounded-[2.5rem] border border-border bg-card overflow-hidden divide-y divide-border">
          {SERVICE_DETAIL.map((s, idx) => (
            <Reveal key={s.t} delay={idx * 40}>
              <div className="group relative grid grid-cols-12 gap-4 md:gap-8 px-5 md:px-10 py-7 md:py-9 transition-colors hover:bg-primary/30">
                <span
                  className="pointer-events-none absolute left-0 top-0 bottom-0 w-1 bg-accent origin-top scale-y-0 group-hover:scale-y-100 transition-transform duration-500"
                  aria-hidden
                />
                <div className="col-span-12 md:col-span-5">
                  <h3 className="font-display text-2xl md:text-4xl font-medium leading-[0.95] tracking-tight">
                    {s.t}
                  </h3>
                </div>
                <div className="col-span-12 md:col-span-4">
                  <p className="text-sm md:text-base text-foreground leading-relaxed font-bold">{s.d}</p>
                </div>
                <div className="col-span-12 md:col-span-3">
                  <ul className="flex flex-wrap gap-1.5">
                    {s.items.map((i) => (
                      <li
                        key={i}
                        className="text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-accent/30 border border-accent text-foreground transition-colors"
                      >
                        {i}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
