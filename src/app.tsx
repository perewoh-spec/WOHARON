import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { ServicesDetail } from "@/components/site/ServicesDetail";
import { Why } from "@/components/site/Why";
import { Team } from "@/components/site/Team";
import { About } from "@/components/site/About";
import { CTA } from "@/components/site/CTA";
import { ContactForm } from "@/components/site/ContactForm";
import { Footer } from "@/components/site/Footer";
import { WhatsAppFloat } from "@/components/site/WhatsAppFloat";
import { Work } from "@/components/site/Work";
import { Routes, Route } from "react-router-dom";
import CourseConnect from "@/pages/CourseConnect";
import LouidorPristine from "@/pages/LouidorPristine";
import WorkPlaceholder from "@/pages/WorkPlaceholder";

function Home() {
  return (
    <main className="relative z-10">
      <Hero />
      <Work />
      <ServicesDetail />
      <Why />
      <About />
      <CTA />
      <ContactForm />
    </main>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground relative">
      <div className="fixed inset-0 noise-overlay z-0" />
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work/courseconnect" element={<CourseConnect />} />
        <Route path="/work/louidor-pristine" element={<LouidorPristine />} />
        <Route path="/work/:slug" element={<WorkPlaceholder />} />
      </Routes>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
