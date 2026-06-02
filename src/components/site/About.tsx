import perePortrait from "@/assets/founder.jpg";
import cofounderPortrait from "@/assets/cofounder.jpg";

type FounderNoteProps = {
  image: string;
  alt: string;
  name: string;
  role: string;
  heading: string;
  quote: React.ReactNode;
};

function FounderNote({ image, alt, name, role, heading, quote }: FounderNoteProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-3">
      {/* Left Column: Image Container (Vertical footprint significantly reduced) */}
      <div className="md:col-span-4 bg-foreground text-background rounded-[1.5rem] p-3 overflow-hidden relative min-h-[300px] md:h-[340px]">
        <img
          src={image}
          alt={alt}
          className="w-full h-full object-cover object-top rounded-[1.2rem]"
          loading="lazy"
        />
        {/* Floating Tag */}
        <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between bg-background/95 backdrop-blur-md text-foreground px-4 py-2 rounded-xl border border-border">
          <div>
            <div className="text-[12px] font-bold uppercase tracking-widest text-muted-foreground">
              {role}
            </div>
            <div className="font-display text-base leading-tight">{name}</div>
          </div>
          <span className="bg-primary text-primary-foreground text-[9px] font-bold px-2 py-0.5 rounded-full uppercase tracking-widest">
            Est. 2026
          </span>
        </div>
      </div>

      {/* Right Column: Content Box */}
      <div className="md:col-span-8 bg-card border border-border rounded-[1.5rem] p-6 md:p-8 flex flex-col justify-between">
        <div>
          <h2 className="font-display text-2xl lg:text-3xl font-medium tracking-tighter text-balance mb-3">
            {heading}
          </h2>
          <p className="font-display text-lg lg:text-xl leading-snug tracking-tight text-balance font-medium text-muted-foreground">
            {quote}
          </p>
        </div>

        {/* Divider and Signature */}
        <div className="mt-4 flex items-center gap-4">
          <div className="h-px flex-1 bg-border" />
          <div className="text-right">
            <div className="font-display text-base">{name}</div>
            <div className="text-[11px] text-muted-foreground">{role}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function About() {
  return (
    <section id="about" className="py-4 lg:py-6 px-4 md:px-8">
      <div className="mx-auto max-w-6xl space-y-3">
        <FounderNote
          image={perePortrait}
          alt="Portrait of Pere D. Woh, Founder of Woharon Digital Agency"
          name="Pere D. Woh"
          role="Founder"
          heading="Founder's note"
          quote={
            <>
              "I started Woharon because too many businesses lose customers simply because their
              digital presence doesn't reflect the quality of what they actually do, and they
              overspend on tools and vendors trying to fix it. We exist to{" "}
              <span className="italic font-black text-accent">close that gap</span>, saving you
              time, cutting cost, and creating real value with systems that genuinely work."
            </>
          }
        />
        <FounderNote
          image={cofounderPortrait}
          alt="Portrait of Mahdi Salau, Co-Founder of Woharon Digital Agency"
          name="Mahdi Salau"
          role="Co-Founder"
          heading="Co-Founder's note"
          quote={
            <>
              "A great business can easily be dragged down by a slow website, inconsistent branding,
              or repetitive manual tasks. At Woharon, my focus is to fix that. Whether we are coding
              a custom app, automating your workflows, or driving your social media content, the
              goal remains the same. We, the team members, do not just sell our design or
              engineering skills. We sell{" "}
              <span className="italic font-black text-accent">end-to-end execution</span> that
              elevates your brand and drives its value."
            </>
          }
        />
      </div>
    </section>
  );
}
