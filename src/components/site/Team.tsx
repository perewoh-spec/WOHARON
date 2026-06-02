import { Chip, Reveal } from "./shared";
import { TEAM } from "./data";

export function Team() {
  return (
    <section id="team" className="py-8 lg:py-12 px-4 md:px-8">
      <div className="mx-auto max-w-5xl">
        <div className="mb-8">
          <h2 className="font-display text-5xl lg:text-7xl font-medium tracking-tighter text-balance">
            <span className="inline-block bg-accent text-accent-foreground rounded-full px-8 pb-3 pt-1">Meet our Team</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {TEAM.map((m) => (
            <Reveal
              key={m.name}
              className="group bg-card border border-border rounded-[1.75rem] p-3 overflow-hidden"
            >
              <div className="relative rounded-[1.25rem] overflow-hidden aspect-square bg-muted">
                <img
                  src={m.image}
                  alt={`Portrait of ${m.name}, ${m.role} at Woharon`}
                  className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="px-1 pt-3 pb-1">
                <div className="font-display text-xl tracking-tight">{m.name}</div>
                <div className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mt-1">
                  {m.role}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
