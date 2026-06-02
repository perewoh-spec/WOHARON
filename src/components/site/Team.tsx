import { Chip, Reveal } from "./shared";
import { TEAM } from "./data";

export function Team() {
  return (
    <section id="team" className="py-6 lg:py-8 px-4 md:px-8">
      <div className="mx-auto max-w-5xl">
        <div className="mb-6">
          <h2 className="font-display text-4xl lg:text-6xl font-medium tracking-tighter text-balance">
            <span
              className="inline-flex items-center rounded-full px-7 py-2.5 text-accent-foreground border border-accent/60 shadow-[0_6px_24px_-8px_hsl(140_40%_55%/0.4),inset_0_1px_0_hsl(0_0%_100%/0.7)] backdrop-blur-sm"
              style={{
                backgroundImage:
                  "linear-gradient(135deg, hsl(120 45% 88% / 0.95), hsl(140 40% 78% / 0.95))",
              }}
            >
              Meet our Team
            </span>
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
