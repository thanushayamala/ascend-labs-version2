"use client";

import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function FinalCTA() {
  const handleScrollToContact = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    const targetElement = document.getElementById("contact");
    
    if (targetElement) {
      const offset = 90;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <section className="bg-brand-bg py-24 relative overflow-hidden border-t border-brand-border/40">
      {/* Background radial gradient glow for emotional climax */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.07)_0%,transparent_75%)] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-brand-violet/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center flex flex-col items-center gap-6">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-violet/10 border border-brand-violet/20 text-brand-violet text-xs font-semibold uppercase tracking-wider font-sora">
          The Next Step
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-sora tracking-tight text-white max-w-2xl leading-tight">
          Ready to Ascend?
        </h2>

        <p className="text-base sm:text-lg text-brand-muted max-w-xl leading-relaxed">
          Let&apos;s build the technology foundation your business needs to grow smarter, operate better, and move forward with absolute confidence.
        </p>

        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mt-4">
          <Button 
            href="#contact" 
            onClick={handleScrollToContact}
            variant="glow" 
            size="lg" 
            className="gap-2 group"
          >
            Book a Free Strategy Call
            <ArrowUpRight className="h-5 w-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
          </Button>
          <Button 
            href="#contact" 
            onClick={handleScrollToContact}
            variant="secondary" 
            size="lg"
          >
            Start a Conversation
          </Button>
        </div>
      </div>
    </section>
  );
}
