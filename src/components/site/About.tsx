import perePortrait from "@/assets/founder.jpg";
import { Chip } from "./shared";

export function About() {
  return (
    <section id="about" className="py-10 lg:py-14 px-4 md:px-8">
      <div className="mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-12 gap-4">
        <div className="md:col-span-5 bg-foreground text-background rounded-[2.5rem] p-4 overflow-hidden relative min-h-[420px]">
          <img
            src={perePortrait}
            alt="Portrait of Pere D. Woh, Founder of Woharon Digital Agency"
            className="w-full h-full object-cover rounded-[2rem]"
            loading="lazy"
          />
          <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between bg-background/95 backdrop-blur-md text-foreground px-5 py-3 rounded-2xl border border-border">
            <div>
              <div className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
                Founder
              </div>
              <div className="font-display text-lg leading-tight">Pere D. Woh</div>
            </div>
            <span className="bg-primary text-primary-foreground text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-widest">
              Est. 2026
            </span>
          </div>
        </div>
        <div className="md:col-span-7 bg-card border border-border rounded-[2.5rem] p-8 md:p-12 flex flex-col justify-between">
          <div>
            <Chip className="mb-6">Founder note</Chip>
            <p className="font-display text-2xl lg:text-4xl leading-[1.15] tracking-tight text-balance font-medium">
              "I started Woharon because too many businesses lose customers simply because their
              digital presence doesn't reflect the quality of what they actually do, and they
              overspend on tools and vendors trying to fix it. We exist to{" "}
              <span className="italic font-bold text-accent">close that gap</span>, saving you
              time, cutting cost, and creating real value with systems that genuinely work."
            </p>
          </div>
          <div className="mt-8 flex items-center gap-4">
            <div className="h-px flex-1 bg-border" />
            <div className="text-right">
              <div className="font-display text-lg">Pere D. Woh</div>
              <div className="text-xs text-muted-foreground">Founder</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
