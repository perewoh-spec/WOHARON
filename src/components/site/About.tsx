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
    <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
      <div className="md:col-span-5 bg-foreground text-background rounded-[2.5rem] p-4 overflow-hidden relative min-h-[420px]">
        <img
          src={image}
          alt={alt}
          className="w-full h-full object-cover rounded-[2rem]"
          loading="lazy"
        />
        <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between bg-background/95 backdrop-blur-md text-foreground px-5 py-3 rounded-2xl border border-border">
          <div>
            <div className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
              {role}
            </div>
            <div className="font-display text-lg leading-tight">{name}</div>
          </div>
          <span className="bg-primary text-primary-foreground text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-widest">
            Est. 2026
          </span>
        </div>
      </div>
      <div className="md:col-span-7 bg-card border border-border rounded-[2.5rem] p-8 md:p-12 flex flex-col justify-between">
        <div>
          <h2 className="font-display text-4xl lg:text-5xl font-medium tracking-tighter text-balance mb-6">
            {heading}
          </h2>
          <p className="font-display text-2xl lg:text-4xl leading-[1.15] tracking-tight text-balance font-medium">
            {quote}
          </p>
        </div>
        <div className="mt-8 flex items-center gap-4">
          <div className="h-px flex-1 bg-border" />
          <div className="text-right">
            <div className="font-display text-lg">{name}</div>
            <div className="text-xs text-muted-foreground">{role}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function About() {
  return (
    <section id="about" className="py-6 lg:py-10 px-4 md:px-8">
      <div className="mx-auto max-w-7xl space-y-4">
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
