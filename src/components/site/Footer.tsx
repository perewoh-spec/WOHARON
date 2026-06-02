import woharonMark from "@/assets/woharon-mark.png";
import { NAV, WHATSAPP } from "./data";

export function Footer() {
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
              <li>
                <a
                  href="https://www.instagram.com/woharonservices"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary"
                >
                  @woharonservices
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
            <a
              href="https://www.instagram.com/woharonservices"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary"
            >
              Instagram
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
