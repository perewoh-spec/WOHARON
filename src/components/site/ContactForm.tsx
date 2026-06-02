import { useState } from "react";
import { ArrowRight, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Chip, Field } from "./shared";
import { SERVICES, WEB3FORMS_ACCESS_KEY, WHATSAPP } from "./data";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [service, setService] = useState("");

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    setSending(true);
    const formData = new FormData(e.currentTarget);
    formData.append("access_key", WEB3FORMS_ACCESS_KEY);
    formData.append("subject", "New Woharon booking inquiry");
    formData.append("from_name", "Woharon Website");
    formData.append("service", service);
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();
      if (data.success) {
        setSubmitted(true);
      } else {
        setError(data.message || "Something went wrong. Please try again.");
      }
    } catch {
      setError("Network error. Please check your connection and try again.");
    } finally {
      setSending(false);
    }
  };

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
              onSubmit={onSubmit}
              className="bg-card border border-border rounded-[2.5rem] p-8 lg:p-12 space-y-6"
            >
              <input type="checkbox" name="botcheck" className="hidden" tabIndex={-1} />
              <div className="grid md:grid-cols-2 gap-6">
                <Field label="Your name">
                  <Input name="name" required />
                </Field>
                <Field label="Business name">
                  <Input name="business" />
                </Field>
                <Field label="Phone">
                  <Input name="phone" type="tel" />
                </Field>
                <Field label="Email">
                  <Input name="email" type="email" required />
                </Field>
              </div>
              <Field label="Service of interest">
                <Select value={service} onValueChange={setService}>
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
                <Textarea
                  name="message"
                  rows={5}
                  placeholder="What are you trying to build, fix, or grow?"
                />
              </Field>
              {error && (
                <p className="text-sm text-destructive font-medium" role="alert">
                  {error}
                </p>
              )}
              <Button
                type="submit"
                size="lg"
                disabled={sending}
                className="rounded-2xl bg-primary text-primary-foreground hover:bg-accent h-12 px-7 w-full md:w-auto font-bold disabled:opacity-60"
              >
                {sending ? "Sending..." : "Send inquiry"}{" "}
                <ArrowRight className="ml-2 size-4" />
              </Button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
