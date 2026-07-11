"use client";

import { useState } from "react";
import { Search, Compass, Code2, Rocket, TrendingUp } from "lucide-react";
import { cn } from "@/lib/utils";

const steps = [
  {
    number: "01",
    title: "Discover",
    subtitle: "Understanding your landscape",
    desc: "We analyze your current operations, customer touchpoints, administrative bottlenecks, and expansion goals to pinpoint where technology will yield the highest return.",
    icon: Search
  },
  {
    number: "02",
    title: "Strategize",
    subtitle: "Designing the growth roadmap",
    desc: "We craft a detailed technology strategy, system architectures, CRM pipelines, and automated workflow specifications. You receive a clear, fixed-price implementation proposal.",
    icon: Compass
  },
  {
    number: "03",
    title: "Build",
    subtitle: "Engineering high-performance solutions",
    desc: "Our engineering team builds your systems using modern, secure frameworks (Next.js, FastAPI, Node.js). We deploy staging preview environments so you can test as we develop.",
    icon: Code2
  },
  {
    number: "04",
    title: "Launch",
    subtitle: "Deploying with absolute confidence",
    desc: "We conduct end-to-end integration tests, load tests, on-page SEO audits, and security checks. Your team receives hands-on training, and we transition to production cleanly.",
    icon: Rocket
  },
  {
    number: "05",
    title: "Ascend",
    subtitle: "Scaling and continuous optimization",
    desc: "We monitor live metrics, optimize conversion paths, configure advanced CRM workflows, and integrate AI systems to continuously decrease manual operations.",
    icon: TrendingUp
  }
];

export function Process() {
  const [hoveredStep, setHoveredStep] = useState<string | null>(null);

  return (
    <section id="process" className="bg-brand-bg py-20 relative border-t border-brand-border/40 overflow-hidden">
      <div className="absolute top-[30%] left-[-10%] w-[450px] h-[450px] rounded-full bg-brand-violet/3 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="text-brand-accent text-xs font-bold uppercase tracking-wider font-sora mb-2">
            The Ascend Growth Framework
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-sora tracking-tighter text-white mb-4">
            From Vision to Measurable Growth
          </h2>
          <p className="text-sm sm:text-base text-brand-muted leading-relaxed">
            We follow a structured, outcomes-driven methodology to design, build, and deploy systems that align perfectly with your business goals.
          </p>
        </div>

        {/* Process Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Center Line (Desktop) / Left Line (Mobile) */}
          <div className="absolute left-4 md:left-1/2 top-2 bottom-2 w-[1px] bg-gradient-to-b from-brand-accent via-brand-violet to-brand-border/30 -translate-x-1/2 pointer-events-none" />

          {/* Timeline Nodes */}
          <div className="flex flex-col gap-14">
            {steps.map((step, index) => {
              const StepIcon = step.icon;
              const isEven = index % 2 === 0;
              const isHovered = hoveredStep === step.number;

              return (
                <div 
                  key={step.number}
                  onMouseEnter={() => setHoveredStep(step.number)}
                  onMouseLeave={() => setHoveredStep(null)}
                  className={cn(
                    "flex flex-col md:flex-row relative items-start md:items-center",
                    isEven ? "md:flex-row-reverse" : ""
                  )}
                >
                  
                  {/* Central Node Icon Selector */}
                  <div className={cn(
                    "absolute left-4 md:left-1/2 top-4 md:top-1/2 h-9 w-9 rounded-full border bg-brand-bg flex items-center justify-center -translate-x-1/2 -translate-y-1/2 z-10 transition-all duration-300",
                    isHovered 
                      ? "border-brand-accent text-brand-accent scale-110 shadow-md shadow-brand-accent/20" 
                      : "border-brand-border text-brand-muted"
                  )}>
                    <StepIcon className="h-4 w-4" />
                  </div>

                  {/* Empty Spacer Column (Desktop Only) */}
                  <div className="hidden md:block w-1/2" />

                  {/* Content Card Column */}
                  <div className="w-full md:w-1/2 pl-12 md:pl-0 md:px-8">
                    <div className={cn(
                      "bg-brand-elevated/40 border rounded-2xl p-6 transition-all duration-300 shadow-md relative group",
                      isEven ? "md:text-right" : "md:text-left",
                      isHovered 
                        ? "border-brand-border-hover bg-brand-elevated/80 shadow-[0_0_20px_rgba(37,99,235,0.05)]" 
                        : "border-brand-border"
                    )}>
                      {/* Big numbers inside card */}
                      <span className={cn(
                        "absolute top-4 text-5xl font-extrabold font-mono transition-colors duration-300 pointer-events-none select-none",
                        isEven ? "left-6" : "right-6",
                        isHovered ? "text-brand-accent/8" : "text-white/5"
                      )}>
                        {step.number}
                      </span>

                      <div className={cn(
                        "flex items-center gap-2 mb-1 justify-start",
                        isEven ? "md:justify-end" : "md:justify-start"
                      )}>
                        <h3 className="text-base sm:text-lg font-bold font-sora text-white">
                          {step.title}
                        </h3>
                      </div>

                      <h4 className={cn(
                        "text-[10px] font-bold uppercase tracking-wider mb-2",
                        isHovered ? "text-brand-accent" : "text-brand-muted/70"
                      )}>
                        {step.subtitle}
                      </h4>

                      <p className="text-xs text-brand-muted leading-relaxed">
                        {step.desc}
                      </p>
                    </div>
                  </div>

                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
