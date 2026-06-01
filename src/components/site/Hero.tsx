import { useEffect, useState } from "react";
import { ArrowRight, Sparkles, Layers, Rocket } from "lucide-react";
import woharonMark from "@/assets/woharon-mark.png";
import { Chip } from "./shared";

const ROTATING_WORDS = ["websites.", "brands.", "automations.", "systems.", "stores."];

function KineticVisual() {
  const [wordIdx, setWordIdx] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setWordIdx((i) => (i + 1) % ROTATING_WORDS.length), 2200);
    return () => clearInterval(id);
  }, []);
  return (
    <div
      className="md:col-span-4 bg-foreground rounded-[2.5rem] p-8 flex flex-col justify-between text-background overflow-hidden relative min-h-[340px] reveal-up"
      style={{ animationDelay: "100ms" }}
    >
      <div className="absolute inset-0 flex items-center justify-center opacity-25 scale-[1.6] pointer-events-none">
        <div className="w-full h-full border-[0.5px] border-background/40 rounded-full spin-slow" />
        <div className="absolute w-4/5 h-4/5 border-[0.5px] border-background/30 rounded-full spin-slow-reverse" />
        <div className="absolute w-3/5 h-3/5 border-[0.5px] border-background/20 rounded-full spin-slow" />
      </div>

      <div className="relative z-10 space-y-3">
        <div className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest">
          <img src={woharonMark} alt="" className="h-3.5 w-3.5 object-contain" />
          <span className="opacity-90 text-primary">taking new clients</span>
        </div>
        <ul className="space-y-1.5 text-[11px] font-mono uppercase tracking-widest opacity-80">
          <li className="flex items-center gap-2"><span className="text-primary">→</span> free 30-min strategy call</li>
          <li className="flex items-center gap-2"><span className="text-primary">→</span> transparent flat-fee pricing</li>
          <li className="flex items-center gap-2"><span className="text-primary">→</span> unlimited revisions until you approve</li>
          <li className="flex items-center gap-2"><span className="text-primary">→</span> remote, worldwide</li>
        </ul>
      </div>

      <div className="relative z-10 my-4 flex items-end gap-1 h-12">
        {Array.from({ length: 18 }).map((_, i) => (
          <span
            key={i}
            className="flex-1 rounded-full bg-primary/80"
            style={{
              animation: `eq 1.${(i % 7) + 2}s ease-in-out ${i * 70}ms infinite alternate`,
              height: `${20 + ((i * 13) % 70)}%`,
              opacity: i % 3 === 0 ? 0.5 : 1,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 mb-4 space-y-1.5">
        {[
          { k: "Web", v: "sites & stores" },
          { k: "Brand", v: "identity systems" },
          { k: "Auto", v: "AI & workflows" },
          { k: "Social", v: "content & growth" },
        ].map((row) => (
          <div
            key={row.k}
            className="flex items-center justify-between gap-3 text-[10px] font-mono uppercase tracking-widest"
          >
            <span className="text-primary">{row.k}</span>
            <span className="flex-1 border-b border-dashed border-background/20" />
            <span className="opacity-70">{row.v}</span>
          </div>
        ))}
      </div>

      <div className="relative z-10">
        <h3 className="font-display text-2xl font-medium leading-tight">
          We design <br />
          <span key={wordIdx} className="text-primary inline-block animate-[wordIn_.5s_ease-out]">
            {ROTATING_WORDS[wordIdx]}
          </span>
        </h3>
        <p className="text-[10px] opacity-60 font-mono tracking-[0.25em] mt-3 flex items-center gap-2">
          <span className="inline-block w-4 h-px bg-primary" />
          one team · one invoice · zero handoffs
        </p>
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section id="top" className="relative pt-28 pb-6 px-4 md:px-8">
      <div className="absolute inset-0 noise-overlay" />
      <div className="mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-12 gap-4 relative">
        <div className="md:col-span-8 bg-card border border-border rounded-[2.5rem] p-8 md:p-14 flex flex-col justify-between relative overflow-hidden reveal-up">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/30 blur-[100px] rounded-full -mr-20 -mt-20" />
          <div className="relative z-10">
            <div className="flex flex-wrap items-center gap-2 mb-8">
              <span className="inline-flex items-center px-4 py-1.5 bg-muted text-sm md:text-base font-extrabold uppercase tracking-[0.25em] rounded-full border border-border">
                Woharon
              </span>
            </div>
            <h1 className="font-display font-medium text-6xl md:text-8xl lg:text-9xl leading-[0.9] tracking-tighter mb-8 text-balance">
              We build the <span className="italic font-light text-accent">digital</span>{" "}
              infrastructure{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-foreground to-muted-foreground">
                your business needs to grow.
              </span>
            </h1>
            <p className="max-w-md text-lg text-muted-foreground leading-relaxed mb-10">
              From websites and automation to branding and AI systems, Woharon Digital Agency helps
              businesses everywhere operate smarter, cut costs, and look sharper online.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="#contact"
                className="px-7 py-4 bg-primary hover:bg-accent text-primary-foreground font-bold rounded-2xl transition-all shadow-lg shadow-primary/30 flex items-center gap-2"
              >
                Book a free consultation
                <ArrowRight className="size-4" />
              </a>
              <a
                href="#services"
                className="px-7 py-4 bg-card border border-border hover:bg-muted text-foreground font-bold rounded-2xl transition-all"
              >
                View services
              </a>
            </div>
          </div>
        </div>

        <KineticVisual />

        <div className="md:col-span-12 bg-muted border border-border rounded-[2rem] py-6 overflow-hidden">
          <div className="marquee-track whitespace-nowrap flex gap-12 items-center">
            {[...Array(2)].map((_, i) => (
              <div
                key={i}
                className="flex shrink-0 items-center gap-8 px-6 font-display text-2xl font-medium uppercase tracking-tighter"
              >
                {["Websites", "Branding", "Automation", "AI Systems", "E-Commerce", "Content", "2 to 4 Week Delivery"].map((s) => (
                  <span key={s} className="flex items-center gap-8">
                    {s}
                    <span className="inline-block w-2 h-2 rounded-full bg-accent" />
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className="md:col-span-12 bg-primary/20 border border-primary/40 rounded-[2rem] p-6 md:p-7 grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { i: Sparkles, k: "Discover", v: "A free call to map the real goal." },
            { i: Layers, k: "Build", v: "Strategy, design and build in tight sprints." },
            { i: Rocket, k: "Launch", v: "Launch, measure and keep improving." },
          ].map((step, idx) => (
            <div
              key={step.k}
              className={`flex items-start gap-3 ${idx < 2 ? "md:pr-4 md:border-r md:border-foreground/10" : ""}`}
            >
              <div className="w-9 h-9 rounded-xl bg-background flex items-center justify-center border border-border shrink-0">
                <step.i className="size-4 text-foreground" strokeWidth={1.7} />
              </div>
              <div>
                <p className="text-[10px] font-mono uppercase tracking-widest text-foreground/60">{step.k}</p>
                <p className="text-sm font-medium leading-snug mt-1">{step.v}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
