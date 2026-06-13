import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight, ArrowUpLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Nav } from "@/components/site/Nav";

import thumb from "@/assets/louidor/Thumbnail.jpg";
import img1 from "@/assets/louidor/IMG1.jpg";
import img2 from "@/assets/louidor/IMG 2.jpg";
import img3 from "@/assets/louidor/IMG 3.jpg";
import img4 from "@/assets/louidor/IMG 4.jpg";
import img5 from "@/assets/louidor/IMG 5.jpg";
import img6 from "@/assets/louidor/IMG 6.jpg";
import img7 from "@/assets/louidor/IMG 7.jpg";

type Slide = {
  src: string;
  group: "Overview" | "Sections";
  title: string;
  caption: string;
};

const PROJECT_NAME = "Louidor Pristine";
const PROJECT_SUMMARY =
  "A single page agency website for a digital studio offering web design, automation, AI, and custom software.";

const slides: Slide[] = [
  { src: thumb, group: "Overview", title: PROJECT_NAME, caption: PROJECT_SUMMARY },
  { src: img1, group: "Sections", title: "Services grid", caption: "Four service cards in a 2x2 grid, each with a custom icon and a full list of deliverables across Website Design, Business Automation, AI Solutions, and Custom Software." },
  { src: img2, group: "Sections", title: "Process", caption: "A four step process: Chat, Plan, Build, Launch, presented as numbered cards with a clean connecting line running across the top on desktop." },
  { src: img3, group: "Sections", title: "Who it's for", caption: "Four numbered industry cards making the target audience explicit: Service businesses, Creators and coaches, Local and retail, and Startups." },
  { src: img4, group: "Sections", title: "Packages", caption: "Three fixed price packages side by side with full feature lists and turnaround times. The Starter Site at $250 is highlighted as the featured card with a Most Popular badge." },
  { src: img5, group: "Sections", title: "Values", caption: "Four value cards on a dark background: Clear communication, Honest pricing, Quality first, and Long term partner. The agency's positioning summed up in plain language." },
  { src: img6, group: "Sections", title: "FAQ", caption: "A custom accordion with six common client questions, the first one expanded to show the answer animating in with a smooth CSS transition." },
  { src: img7, group: "Sections", title: "Contact", caption: "Clean split contact section with direct email and hours on the left and a full enquiry or booking form on the right." },
];

export default function LouidorPristine() {
  const navigate = useNavigate();
  const [index, setIndex] = useState(0);
  const [dir, setDir] = useState(1);
  const [paused, setPaused] = useState(false);

  const handleBackClick = () => {
    navigate("/");
    setTimeout(() => {
      const element = document.getElementById("work");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  const go = useCallback((next: number) => {
    setDir(next > index ? 1 : -1);
    setIndex((next + slides.length) % slides.length);
  }, [index]);

  const next = useCallback(() => go(index + 1), [go, index]);
  const prev = useCallback(() => go(index - 1), [go, index]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [next, prev]);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => {
      setDir(1);
      setIndex((i) => (i + 1) % slides.length);
    }, 5000);
    return () => clearInterval(id);
  }, [paused, index]);

  const slide = slides[index];
  const hideTitle = slide.title === PROJECT_NAME;

  return (
    <div className="min-h-screen bg-background text-foreground relative">
      <div className="fixed inset-0 noise-overlay z-0" />
      <Nav />
      <main className="relative z-10">
        <section className="relative w-full bg-background py-10 md:py-14">
          <div className="mx-auto max-w-7xl px-6">
            <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <div className="max-w-2xl">
                <button
                  onClick={handleBackClick}
                  className="inline-flex items-center gap-1.5 px-4 py-2 bg-muted text-[16px] font-bold uppercase tracking-widest rounded-full border border-border text-foreground hover:bg-accent/30 hover:border-accent transition-colors"
                >
                  <ArrowUpLeft className="h-4 w-4" /> Back to selected work
                </button>
                <h2 className="mt-4 font-display text-3xl leading-[0.95] tracking-tight text-foreground md:text-5xl">
                  {PROJECT_NAME}<span className="text-muted-foreground">.</span>
                </h2>
              </div>
            </div>

            <div className="mt-6" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
              <div className="relative rounded-3xl bg-black p-2 shadow-2xl ring-1 ring-black md:p-3">
                <div className="relative h-[58vh] max-h-[640px] min-h-[320px] overflow-hidden rounded-2xl bg-black">
                  <AnimatePresence custom={dir} mode="wait">
                    <motion.img
                      key={index}
                      src={slide.src}
                      alt={slide.title}
                      custom={dir}
                      initial={{ opacity: 0, scale: 1.02, x: dir * 40 }}
                      animate={{ opacity: 1, scale: 1, x: 0 }}
                      exit={{ opacity: 0, scale: 0.98, x: dir * -40 }}
                      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                      className="absolute inset-0 h-full w-full object-contain"
                      draggable={false}
                    />
                  </AnimatePresence>

                  <div className="absolute left-4 top-4 flex items-center gap-2">
                    <span className="rounded-full bg-white/95 px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-black backdrop-blur">
                      {slide.group}
                    </span>
                    <span className="rounded-full bg-white/80 px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-black backdrop-blur">
                      {String(index + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
                    </span>
                  </div>

                  <button
                    onClick={prev}
                    aria-label="Previous"
                    className="group absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/90 p-3 text-black shadow-lg backdrop-blur transition hover:bg-white"
                  >
                    <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-0.5" />
                  </button>
                  <button
                    onClick={next}
                    aria-label="Next"
                    className="group absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/90 p-3 text-black shadow-lg backdrop-blur transition hover:bg-white"
                  >
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </button>

                  <div className="absolute inset-x-0 bottom-0 h-1 bg-white/10">
                    <motion.div
                      key={index}
                      initial={{ width: 0 }}
                      animate={{ width: "100%" }}
                      transition={{ duration: 0.55, ease: "easeOut" }}
                      className="h-full bg-accent"
                    />
                  </div>
                </div>
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                  className="mt-6"
                >
                  {!hideTitle && (
                    <h3 className="font-display text-2xl tracking-tight text-foreground md:text-3xl mb-2">
                      {slide.title}
                    </h3>
                  )}
                  <p className="max-w-3xl text-balance text-base md:text-xl leading-relaxed text-foreground/90">
                    {slide.caption}
                  </p>
                </motion.div>
              </AnimatePresence>

              <div className="mt-8 grid grid-cols-4 gap-2 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-8">
                {slides.map((s, i) => (
                  <button
                    key={s.src}
                    onClick={() => go(i)}
                    aria-label={s.title}
                    className={cn(
                      "group relative aspect-[16/10] overflow-hidden rounded-lg bg-black p-0.5 transition",
                      i === index ? "ring-2 ring-accent" : "opacity-60 hover:opacity-100",
                    )}
                  >
                    <img
                      src={s.src}
                      alt=""
                      loading="lazy"
                      className="h-full w-full rounded-md object-contain transition-transform duration-500 group-hover:scale-105"
                    />
                  </button>
                ))}
              </div>

              <div className="mt-12 md:mt-16 border-t border-border pt-8 md:pt-10 space-y-5">
                <span className="inline-flex items-center gap-1.5 px-4 py-2 bg-muted text-[16px] font-bold uppercase tracking-widest rounded-full border border-border">
                  About the project
                </span>
                <p className="max-w-3xl text-base md:text-lg leading-relaxed text-foreground/90">
                  Louidor Pristine Digital Solutions is a single page agency website for a digital studio that offers web design, business automation, AI solutions, and custom software. The site walks visitors through what the studio does, how it works with clients, who it serves, and what each engagement costs, all in one focused scroll. It is built to convert: clear services, a transparent four step process, fixed price packages, a values section that builds trust, an FAQ that handles common hesitations, and a direct contact section so prospective clients can start a conversation in seconds.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
