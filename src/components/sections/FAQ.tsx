"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { faqs } from "@/data/faq";
import { cn } from "@/lib/utils";

export function FAQ() {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggleFAQ = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  const handleKeyDown = (e: React.KeyboardEvent, id: string) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      toggleFAQ(id);
    }
  };

  return (
    <section id="faq" className="bg-brand-bg py-20 relative border-t border-brand-border/40">
      <div className="absolute top-[40%] right-[-10%] w-[400px] h-[400px] rounded-full bg-brand-violet/5 blur-[110px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-brand-accent text-xs font-bold uppercase tracking-wider font-sora mb-2">
            Frequently Asked Questions
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-sora tracking-tight text-white mb-4">
            Answers for Ambitious Businesses
          </h2>
          <p className="text-base text-brand-muted leading-relaxed">
            Here are honest, transparent answers to typical questions about our workflow, technology, and integration options.
          </p>
        </div>

        {/* Handcrafted Accessible Accordion */}
        <div className="flex flex-col gap-4">
          {faqs.map((faq) => {
            const isOpen = openId === faq.id;
            
            return (
              <div 
                key={faq.id}
                className="bg-brand-elevated border border-brand-border rounded-xl overflow-hidden hover:border-brand-border-hover transition-colors duration-200 shadow-sm"
              >
                {/* Header / Button */}
                <button
                  id={`faq-btn-${faq.id}`}
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${faq.id}`}
                  onClick={() => toggleFAQ(faq.id)}
                  onKeyDown={(e) => handleKeyDown(e, faq.id)}
                  className="w-full flex items-center justify-between p-5 md:p-6 text-left focus:outline-none focus-visible:bg-brand-secondary/45"
                >
                  <span className="text-sm md:text-base font-bold font-sora text-white pr-6 select-none">
                    {faq.question}
                  </span>
                  <div className={cn(
                    "h-8 w-8 rounded-lg bg-brand-secondary border border-brand-border flex items-center justify-center text-brand-muted transition-all duration-300",
                    isOpen ? "rotate-180 border-brand-accent/40 text-white" : ""
                  )}>
                    <ChevronDown className="h-4 w-4" />
                  </div>
                </button>

                {/* Content Panel */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`faq-panel-${faq.id}`}
                      role="region"
                      aria-labelledby={`faq-btn-${faq.id}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                    >
                      <div className="px-5 pb-5 md:px-6 md:pb-6 text-xs md:text-sm text-brand-muted leading-relaxed border-t border-brand-border/40 pt-4">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
