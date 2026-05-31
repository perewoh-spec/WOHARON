import { ArrowUpRight } from "lucide-react";

export function CTA() {
  return (
    <section className="px-4 md:px-8 pb-4">
      <div className="mx-auto max-w-7xl bg-primary text-primary-foreground rounded-[2.5rem] p-10 lg:p-16 grid lg:grid-cols-12 gap-8 items-center relative overflow-hidden">
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-accent/40 blur-[120px] rounded-full" />
        <h2 className="lg:col-span-8 font-display font-medium text-4xl lg:text-6xl leading-[0.95] tracking-tighter text-balance relative z-10">
          Ready to transform your business <span className="italic font-light">online?</span>
        </h2>
        <div className="lg:col-span-4 lg:text-right relative z-10">
          <p className="text-foreground/70 mb-6">
            A 30-minute conversation about where you are and where you want to be.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-foreground text-background font-bold hover:bg-foreground/90 transition-colors"
          >
            Book your consultation <ArrowUpRight className="size-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
