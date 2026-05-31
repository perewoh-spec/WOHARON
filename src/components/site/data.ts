import { Globe, Palette, Bot, ShoppingBag, Smartphone, Megaphone } from "lucide-react";
import perePortrait from "@/assets/founder.jpg";
import cofounderPortrait from "@/assets/cofounder.jpg";

// Web3Forms access key — submissions land in info.woharon@gmail.com
export const WEB3FORMS_ACCESS_KEY = "ba3ebb01-2cc7-4363-99a5-4f9d19a1915d";

export const WHATSAPP = "2349163493585";

export const NAV = [
  { href: "#services", label: "Services" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export const TEAM = [
  { name: "Pere D. Woh", role: "Founder / Full Stack Developer", image: perePortrait },
  { name: "Mahdi Salau", role: "Co-Founder / UX Engineer", image: cofounderPortrait },
];

export const SERVICES = [
  { icon: Globe, name: "Website Development", desc: "Fast, mobile-first sites that earn trust on first scroll." },
  { icon: Palette, name: "Brand & Identity", desc: "Distinctive marks, systems and guidelines built to last." },
  { icon: Bot, name: "Automation & AI", desc: "Workflows, WhatsApp bots and dashboards that do the boring work." },
  { icon: ShoppingBag, name: "E-Commerce", desc: "Stores that turn browsers into paying customers." },
  { icon: Smartphone, name: "Apps & Software", desc: "Custom tools when off-the-shelf isn't enough." },
  { icon: Megaphone, name: "Social & Content", desc: "Calendars, content and management that actually grows reach." },
];

export const DIFFERENTIATORS = [
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

export const SERVICE_DETAIL = [
  {
    t: "Website Development",
    d: "Professional, fast, mobile-optimized sites that make your business look as credible online as in person.",
    items: ["Corporate Websites", "Portfolio Sites", "Landing Pages"],
  },
  {
    t: "Social Media Management",
    d: "Strategy, content, and day-to-day management so your brand stays active without taking your time.",
    items: ["Content Calendars", "Account Management", "Audience Engagement", "Growth Strategy", "Scheduling"],
  },
  {
    t: "Content Creation",
    d: "Content that drives trust and traffic and actually represents your brand well.",
    items: ["Graphic Design", "Video Editing", "Copywriting", "Blog Writing"],
  },
  {
    t: "Automation & AI Systems",
    d: "Automate the repetitive parts of your business so your team can focus on what matters.",
    items: ["Workflow Automation", "WhatsApp Business Automation", "AI Chatbots", "Booking Systems", "Internal Dashboards"],
  },
  {
    t: "App & Software Development",
    d: "Custom-built tools when off-the-shelf software isn't enough.",
    items: ["Mobile Apps", "Web Applications", "Admin Dashboards", "API Integrations"],
  },
  {
    t: "E-Commerce",
    d: "Set up, optimize and grow online stores that convert.",
    items: ["Store Setup", "Checkout Optimization", "Inventory Integration", "Email Sequences", "Performance Tuning"],
  },
];
