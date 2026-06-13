import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowUpLeft } from "lucide-react";

import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";

export default function WorkPlaceholder() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);

  const { slug } = useParams();
  const title = (slug ?? "Project")
    .split("-")
    .map((s: string) => s.charAt(0).toUpperCase() + s.slice(1))
    .join(" ");

  return (
    <div className="min-h-screen bg-background text-foreground relative">
      <div className="fixed inset-0 noise-overlay z-0" />
      <Nav />
      <main className="relative z-10">
        <section className="py-16 md:py-24 px-4 md:px-8">
          <div className="mx-auto max-w-5xl">
            <Link
              to="/#work"
              className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowUpLeft className="h-3.5 w-3.5" /> Back to selected work
            </Link>
            <h1 className="mt-4 font-display text-4xl md:text-6xl lg:text-7xl font-medium leading-[0.95] tracking-tighter">
              {title}<span className="text-muted-foreground">.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-base md:text-lg text-muted-foreground">
              Case study coming soon. We're putting the final touches on this one.
            </p>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="aspect-[16/10] rounded-2xl bg-card border border-border flex items-center justify-center text-muted-foreground font-mono text-xs uppercase tracking-widest"
                >
                  Placeholder {i}
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
