import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { Chip, Reveal } from "./shared";
import thumb from "@/assets/courseconnect/thumbnail_1.jpg";
import louidorThumb from "@/assets/louidor/Thumbnail.jpg";

type Project = {
  slug: string;
  title: string;
  chips: string[];
  thumb: string;
  to: string;
};

const PROJECTS: Project[] = [
  {
    slug: "courseconnect",
    title: "CourseConnect",
    chips: ["Web App", "System"],
    thumb: thumb,
    to: "/work/courseconnect",
  },
  {
    slug: "louidor-pristine",
    title: "Louidor Pristine",
    chips: ["Web Dev", "Agency"],
    thumb: louidorThumb,
    to: "/work/louidor-pristine",
  },
  {
    slug: "ops-automation",
    title: "Ops Automation",
    chips: ["Automation", "Systems"],
    thumb: "",
    to: "/work/ops-automation",
  },
];

export function Work() {
  return (
    <section id="work" className="py-6 lg:py-10 px-4 md:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8">
          <Chip className="mb-6">Selected work</Chip>
          <p className="font-display font-medium text-3xl md:text-5xl lg:text-6xl leading-[0.95] tracking-tighter">
            Check our latest work across web development, branding, automation and systems<span className="text-accent">.</span>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {PROJECTS.map((p, idx) => (
            <Reveal key={p.slug} delay={idx * 60}>
              <Link
                to={p.to}
                className="group block rounded-[2rem] border border-border bg-card overflow-hidden transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl hover:border-accent"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-black">
                  {p.thumb ? (
                    <img
                      src={p.thumb}
                      alt={p.title}
                      loading="lazy"
                      className="absolute inset-0 h-full w-full object-contain transition-transform duration-700 group-hover:scale-105"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-muted to-card">
                      <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                        Coming soon
                      </span>
                    </div>
                  )}
                  <div
                    aria-hidden
                    className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  />
                  <span className="absolute top-4 right-4 inline-flex items-center justify-center h-9 w-9 rounded-full bg-background/90 backdrop-blur text-foreground shadow-md transition-transform duration-500 group-hover:rotate-45">
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </div>
                <div className="p-5 md:p-6">
                  <h3 className="font-display text-2xl md:text-3xl font-medium tracking-tight leading-tight mb-3">
                    {p.title}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {p.chips.map((c) => (
                      <span
                        key={c}
                        className="inline-flex items-center px-3 py-1 text-[10px] font-bold uppercase tracking-widest rounded-full bg-accent/30 border border-accent text-foreground"
                      >
                        {c}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
