import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Globe,
  Palette,
  Bot,
  ShoppingBag,
  Smartphone,
  Megaphone,
  ArrowUpRight,
  ArrowRight,
  Mail,
  Phone,
  Sparkles,
  Layers,
  Rocket,
} from "lucide-react";
import perePortrait from "@/assets/founder.jpg";
import cofounderPortrait from "@/assets/cofounder.jpg";
import woharonMark from "@/assets/woharon-mark.png";

// Web3Forms access key — sign up free at https://web3forms.com with info.woharon@gmail.com
// and paste the access key below. Submissions land in that inbox automatically.
const WEB3FORMS_ACCESS_KEY = "YOUR_WEB3FORMS_ACCESS_KEY";

const TEAM = [
  {
    name: "Pere D. Woh",
    role: "Founder / Full Stack Developer",
    image: perePortrait,
  },
  {
    name: "Co-Founder Name",
    role: "Co-Founder / UX Engineer",
    image: cofounderPortrait,
  },
];

const WHATSAPP = "2349163493585";

const NAV = [
  { href: "#services", label: "Services" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

const SERVICES = [
  {
    icon: Globe,
    name: "Website Development",
    desc: "Fast, mobile-first sites that earn trust on first scroll.",
  },
  {
    icon: Palette,
    name: "Brand & Identity",
    desc: "Distinctive marks, systems and guidelines built to last.",
  },
  {
    icon: Bot,
    name: "Automation & AI",
    desc: "Workflows, WhatsApp bots and dashboards that do the boring work.",
  },
  {
    icon: ShoppingBag,
    name: "E-Commerce",
    desc: "Stores that turn browsers into paying customers.",
  },
  {
    icon: Smartphone,
    name: "Apps & Software",
    desc: "Custom tools when off-the-shelf isn't enough.",
  },
  {
    icon: Megaphone,
    name: "Social & Content",
    desc: "Calendars, content and management that actually grows reach.",
  },
];

const DIFFERENTIATORS = [
  {
    n: "01",
    t: "Tailored, not templated",
    d: "Every solution is built around how your business actually works, not a theme you've seen a hundred times.",
  },
  {
    n: "02",
    t: "Fast delivery",
    d: "Most projects shipped in 2 to 4 weeks. Speed, without cutting the corners that matter.",
  },
  {
    n: "03",
    t: "Full-stack partner",
    d: "Branding, web, automation, content. One team, one accountable point of contact.",
  },
  {
    n: "04",
    t: "Built around your business",
    d: "We design for the customers you actually serve: your market, your workflows, your reality.",
  },
];

const SERVICE_DETAIL = [
  {
    t: "Website Development",
    d: "Professional, fast, mobile-optimized sites that make your business look as credible online as in person.",
    items: [
      "Corporate Websites",
      "Portfolio Sites",
      "Landing Pages",
      "Booking Systems",
      "Maintenance & Updates",
    ],
  },
  {
    t: "Brand & Identity",
    d: "Your brand is the first thing people judge you on. We build identities that are distinctive, consistent, and built to last.",
    items: ["Logo Design", "Brand Identity Systems", "Brand Guidelines", "Social Media Kits"],
  },
  {
    t: "Social Media Management",
    d: "Strategy, content, and day-to-day management so your brand stays active without taking your time.",
    items: [
      "Content Calendars",
      "Account Management",
      "Audience Engagement",
      "Growth Strategy",
      "Scheduling",
    ],
  },
  {
    t: "Content Creation",
    d: "Content that drives trust and traffic and actually represents your brand well.",
    items: ["Graphic Design", "Video Editing", "Copywriting", "Blog Writing"],
  },
  {
    t: "Automation & AI Systems",
    d: "Automate the repetitive parts of your business so your team can focus on what matters.",
    items: [
      "Workflow Automation",
      "WhatsApp Business Automation",
      "AI Chatbots",
      "Booking Systems",
      "Internal Dashboards",
    ],
  },
  {
    t: "App & Software Development",
    d: "Custom-built tools when off-the-shelf software isn't enough.",
    items: ["Mobile Apps", "Web Applications", "Admin Dashboards", "API Integrations"],
  },
  {
    t: "E-Commerce",
    d: "Set up, optimize and grow online stores that convert.",
    items: [
      "Store Setup",
      "Checkout Optimization",
      "Inventory Integration",
      "Email Sequences",
      "Performance Tuning",
    ],
  },
];

function Nav() {
  return (
    <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-3xl">
      <div className="flex items-center justify-between gap-4 px-4 py-2.5 bg-background/70 backdrop-blur-xl border border-border rounded-full shadow-[0_8px_32px_rgba(0,0,0,0.04)]">
        <a href="#top" className="flex items-center gap-2 pl-2">
          <img src={woharonMark} alt="Woharon" className="h-5 w-5 object-contain" />
          <span className="font-display font-bold tracking-tight text-sm">Woharon</span>
        </a>
        <nav className="hidden md:flex items-center gap-6 text-[11px] font-medium uppercase tracking-widest text-muted-foreground">
          {NAV.map((n) => (
            <a key={n.href} href={n.href} className="hover:text-foreground transition-colors">
              {n.label}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="bg-foreground text-background px-4 py-2 rounded-full text-xs font-semibold hover:bg-foreground/90 transition-colors"
        >
          Book a call
        </a>
      </div>
    </header>
  );
}

function Chip({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 px-3 py-1 bg-muted text-[10px] font-bold uppercase tracking-widest rounded-full border border-border ${className}`}
    >
      {children}
    </span>
  );
}

function LiveChip({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-primary/30 rounded-full">
      <span className="relative flex h-2 w-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
      </span>
      <span className="text-[10px] font-bold uppercase tracking-tight text-foreground">
        {label}
      </span>
    </span>
  );
}

function useReveal<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            el.classList.add("is-visible");
            io.unobserve(el);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return ref;
}

function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useReveal<HTMLDivElement>();
  return (
    <div ref={ref} style={{ transitionDelay: `${delay}ms` }} className={`reveal ${className}`}>
      {children}
    </div>
  );
}

const ROTATING_WORDS = ["websites.", "brands.", "automations.", "systems.", "stores."];

const STACK_LINES = ["design", "build", "automate", "ship"];

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
          <li className="flex items-center gap-2">
            <span className="text-primary">→</span> free 30-min strategy call
          </li>
          <li className="flex items-center gap-2">
            <span className="text-primary">→</span> transparent flat-fee pricing
          </li>
          <li className="flex items-center gap-2">
            <span className="text-primary">→</span> unlimited revisions until you approve
          </li>
          <li className="flex items-center gap-2">
            <span className="text-primary">→</span> remote, worldwide
          </li>
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

function Hero() {
  return (
    <section id="top" className="relative pt-28 pb-6 px-4 md:px-8">
      <div className="absolute inset-0 noise-overlay" />
      <div className="mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-12 gap-4 relative">
        {/* Headline tile */}
        <div className="md:col-span-8 bg-card border border-border rounded-[2.5rem] p-8 md:p-14 flex flex-col justify-between relative overflow-hidden reveal-up">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/30 blur-[100px] rounded-full -mr-20 -mt-20" />
          <div className="relative z-10">
            <div className="flex flex-wrap items-center gap-2 mb-8">
              <Chip>Woharon Digital Agency</Chip>
            </div>
            <h1 className="font-display font-medium text-5xl md:text-7xl lg:text-8xl leading-[0.9] tracking-tighter mb-8 text-balance">
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

        {/* Kinetic marquee */}
        <div className="md:col-span-12 bg-muted border border-border rounded-[2rem] py-6 overflow-hidden">
          <div className="marquee-track whitespace-nowrap flex gap-12 items-center">
            {[...Array(2)].map((_, i) => (
              <div
                key={i}
                className="flex shrink-0 items-center gap-8 px-6 font-display text-2xl font-medium uppercase tracking-tighter"
              >
                {[
                  "Websites",
                  "Branding",
                  "Automation",
                  "AI Systems",
                  "E-Commerce",
                  "Content",
                  "2 to 4 Week Delivery",
                ].map((s) => (
                  <span key={s} className="flex items-center gap-8">
                    {s}
                    <span className="inline-block w-2 h-2 rounded-full bg-accent" />
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Process tile */}
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
                <p className="text-[10px] font-mono uppercase tracking-widest text-foreground/60">
                  {step.k}
                </p>
                <p className="text-sm font-medium leading-snug mt-1">{step.v}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServicesDetail() {
  return (
    <section id="services" className="py-10 lg:py-14 px-4 md:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-6 max-w-2xl">
          <Chip className="mb-6">What we build</Chip>
          <h2 className="font-display font-medium text-4xl lg:text-6xl leading-[0.95] tracking-tighter text-balance">
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
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                    {s.d}
                  </p>
                </div>
                <div className="col-span-12 md:col-span-3">
                  <ul className="flex flex-wrap gap-1.5">
                    {s.items.map((i) => (
                      <li
                        key={i}
                        className="text-[10px] font-mono uppercase tracking-wider px-2.5 py-1 rounded-full bg-background border border-border text-foreground/70 group-hover:border-foreground/30 transition-colors"
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

function Why() {
  return (
    <section className="py-10 lg:py-14 px-4 md:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl mb-6">
          <Chip className="mb-6">Why Woharon</Chip>
          <h2 className="font-display font-medium text-4xl lg:text-6xl leading-[0.95] tracking-tighter text-balance">
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
              <div className="flex items-baseline justify-between mb-3">
                <span
                  className={`h-px flex-1 ${d.n === "02" ? "bg-background/20" : "bg-foreground/15"}`}
                />
              </div>
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

function Team() {
  return (
    <section id="team" className="py-10 lg:py-14 px-4 md:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex items-end justify-between mb-8 flex-wrap gap-4">
          <div>
            <Chip className="mb-4">Meet the team</Chip>
            <h2 className="font-display text-4xl lg:text-6xl font-medium tracking-tight text-balance max-w-2xl">
              The people behind <span className="italic font-light">Woharon</span>.
            </h2>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {TEAM.map((m) => (
            <Reveal
              key={m.name}
              className="group bg-card border border-border rounded-[2.5rem] p-4 overflow-hidden"
            >
              <div className="relative rounded-[2rem] overflow-hidden aspect-[4/5] bg-muted">
                <img
                  src={m.image}
                  alt={`Portrait of ${m.name}, ${m.role} at Woharon`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="px-3 pt-5 pb-2 flex items-end justify-between gap-4">
                <div>
                  <div className="font-display text-2xl lg:text-3xl tracking-tight">
                    {m.name}
                  </div>
                  <div className="text-xs font-bold uppercase tracking-widest text-muted-foreground mt-1">
                    {m.role}
                  </div>
                </div>
                <span className="bg-primary text-primary-foreground text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-widest">
                  Woharon
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
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
              <span className="italic font-light text-accent">close that gap</span>, saving you
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

function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  return (
    <section id="contact" className="py-10 lg:py-14 px-4 md:px-8">
      <div className="mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-12 gap-4">
        <div className="md:col-span-5 bg-foreground text-background rounded-[2.5rem] p-8 md:p-12 flex flex-col justify-between min-h-[420px] relative overflow-hidden">
          <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-primary/40 blur-[100px] rounded-full" />
          <div className="relative z-10">
            <Chip className="mb-6 bg-background text-foreground border-background">
              Get in touch
            </Chip>
            <h2 className="font-display font-medium text-4xl lg:text-5xl leading-[0.95] tracking-tighter text-balance">
              Let's talk about your{" "}
              <span className="italic font-light text-primary">business.</span>
            </h2>
            <p className="mt-6 text-background/70 max-w-md">
              Whether you have a project in mind or just want to explore how to save time and cost
              in your business, we're easy to reach.
            </p>
          </div>
          <ul className="space-y-4 text-sm relative z-10 mt-8">
            <li className="flex items-start gap-3">
              <Mail className="size-4 text-primary mt-1" />
              <a href="mailto:info.woharon@gmail.com" className="hover:text-primary">
                info.woharon@gmail.com
              </a>
            </li>
            <li className="flex items-start gap-3">
              <Phone className="size-4 text-primary mt-1" />
              <div className="space-y-1">
                <a
                  href={`https://wa.me/${WHATSAPP}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block hover:text-primary"
                >
                  +234 916 349 3585
                </a>
                <a
                  href="https://wa.me/2347087431074"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block hover:text-primary"
                >
                  +234 708 743 1074
                </a>
              </div>
            </li>
          </ul>
        </div>
        <div className="md:col-span-7">
          {submitted ? (
            <div className="bg-primary text-primary-foreground rounded-[2.5rem] p-10 lg:p-16 h-full flex flex-col justify-center">
              <Chip className="mb-4 self-start bg-background/40 border-background/40">
                Message received
              </Chip>
              <h3 className="font-display text-3xl lg:text-4xl leading-tight font-medium">
                Thank you. We'll be in touch within 24 hours.
              </h3>
            </div>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSubmitted(true);
              }}
              className="bg-card border border-border rounded-[2.5rem] p-8 lg:p-12 space-y-6"
            >
              <div className="grid md:grid-cols-2 gap-6">
                <Field label="Your name">
                  <Input required placeholder="Adaeze Okafor" />
                </Field>
                <Field label="Business name">
                  <Input placeholder="Acme Logistics Ltd" />
                </Field>
                <Field label="Phone">
                  <Input type="tel" placeholder="+234 ..." />
                </Field>
                <Field label="Email">
                  <Input type="email" required placeholder="you@business.com" />
                </Field>
              </div>
              <Field label="Service of interest">
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Choose a service" />
                  </SelectTrigger>
                  <SelectContent>
                    {SERVICES.map((s) => (
                      <SelectItem key={s.name} value={s.name}>
                        {s.name}
                      </SelectItem>
                    ))}
                    <SelectItem value="other">Something else</SelectItem>
                  </SelectContent>
                </Select>
              </Field>
              <Field label="Tell us about your project">
                <Textarea rows={5} placeholder="What are you trying to build, fix, or grow?" />
              </Field>
              <Button
                type="submit"
                size="lg"
                className="rounded-2xl bg-primary text-primary-foreground hover:bg-accent h-12 px-7 w-full md:w-auto font-bold"
              >
                Send inquiry <ArrowRight className="ml-2 size-4" />
              </Button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="space-y-2">
      <Label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
        {label}
      </Label>
      {children}
    </div>
  );
}

function CTA() {
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

function Footer() {
  return (
    <footer className="px-4 md:px-8 pb-4">
      <div className="mx-auto max-w-7xl bg-foreground text-background rounded-[2.5rem] p-10 lg:p-16">
        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-2 font-display font-bold text-2xl">
              <img src={woharonMark} alt="Woharon" className="h-6 w-6 object-contain" />
              Woharon
            </div>
            <p className="mt-4 font-display text-2xl lg:text-4xl leading-tight max-w-md font-medium tracking-tight">
              Building the <span className="italic font-light text-primary">digital future</span> of
              ambitious business.
            </p>
          </div>
          <div className="lg:col-span-3 lg:col-start-7">
            <div className="text-[10px] font-bold uppercase tracking-widest text-background/50 mb-4">
              Navigate
            </div>
            <ul className="space-y-2 text-sm">
              {NAV.map((n) => (
                <li key={n.href}>
                  <a href={n.href} className="hover:text-primary">
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-3">
            <div className="text-[10px] font-bold uppercase tracking-widest text-background/50 mb-4">
              Contact
            </div>
            <ul className="space-y-2 text-sm text-background/80">
              <li>
                <a href="mailto:info.woharon@gmail.com" className="hover:text-primary">
                  info.woharon@gmail.com
                </a>
              </li>
              <li>
                <a
                  href={`https://wa.me/${WHATSAPP}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary"
                >
                  +234 916 349 3585
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/2347087431074"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary"
                >
                  +234 708 743 1074
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-background/15 flex flex-wrap justify-between gap-4 text-xs text-background/50">
          <div>© 2026 Woharon Digital Agency. All rights reserved.</div>
          <div className="flex gap-5">
            <a
              href={`https://wa.me/${WHATSAPP}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function WhatsAppFloat() {
  return (
    <a
      href={`https://wa.me/${WHATSAPP}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 size-14 rounded-full bg-foreground text-primary shadow-2xl flex items-center justify-center hover:scale-110 transition-transform group overflow-hidden"
    >
      <div className="absolute inset-0 bg-primary translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
      <svg
        viewBox="0 0 24 24"
        className="size-7 relative z-10 group-hover:text-foreground transition-colors"
        fill="currentColor"
      >
        <path d="M.057 24l1.687-6.163a11.867 11.867 0 0 1-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.817 11.817 0 0 1 8.413 3.488 11.824 11.824 0 0 1 3.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 0 1-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413z" />
      </svg>
    </a>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground relative">
      <div className="fixed inset-0 noise-overlay z-0" />
      <Nav />
      <main className="relative z-10">
        <Hero />
        <ServicesDetail />
        <Why />
        <About />
        <CTA />
        <ContactForm />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
