import woharonLogo from "@/assets/woharon-logo-dark.svg";
import { NAV } from "./data";

export function Nav() {
  return (
    <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-3xl">
      <div className="flex items-center justify-between gap-4 px-4 py-2.5 bg-background/70 backdrop-blur-xl border border-border rounded-full shadow-[0_8px_32px_rgba(0,0,0,0.04)]">
        <a href="#top" className="flex items-center gap-2 pl-2">
          <img src={woharonLogo} alt="Woharon" className="h-6 w-auto object-contain" />
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
