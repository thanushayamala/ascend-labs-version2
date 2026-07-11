"use client";

import { 
  Target, 
  Cpu, 
  CalendarClock, 
  LineChart, 
  MessageSquare, 
  Handshake 
} from "lucide-react";

const differentiators = [
  {
    title: "Business-First Approach",
    desc: "We focus on solving real business challenges and unlocking commercial opportunities, not simply delivering lines of code.",
    icon: Target
  },
  {
    title: "AI-Powered Innovation",
    desc: "We avoid speculative hype. We build practical AI voice systems, text processing, and workflow automations that create tangible operations value.",
    icon: Cpu
  },
  {
    title: "Fast & Reliable Delivery",
    desc: "We provide clear project planning, rapid iterative sprints, transparent milestones, and guarantee execution dates without sliding timelines.",
    icon: CalendarClock
  },
  {
    title: "Built to Scale",
    desc: "All solutions are architected using modular backend frameworks, secure databases, and type-safe frontends, designed to grow with your business volume.",
    icon: LineChart
  },
  {
    title: "Transparent Communication",
    desc: "No technical jargon or double-talk. You will always have full visibility into task checklists, project boards, and direct developer communication.",
    icon: MessageSquare
  },
  {
    title: "Long-Term Partnership",
    desc: "We do not leave you after launch. We monitor server uptimes, optimize conversion metrics, and adjust systems as your business needs evolve.",
    icon: Handshake
  }
];

export function Differentiators() {
  return (
    <section id="differentiators" className="bg-brand-bg py-20 relative border-t border-brand-border/40">
      <div className="absolute top-[10%] left-[20%] w-[420px] h-[420px] rounded-full bg-brand-accent/5 blur-[110px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-brand-accent text-xs font-bold uppercase tracking-wider font-sora mb-2">
            Our Commitment
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-sora tracking-tight text-white mb-4">
            Why Businesses Choose Ascend Labs
          </h2>
          <p className="text-base text-brand-muted leading-relaxed">
            We are more than a technology vendor. We are a dedicated technology partner, aligning our solutions with your specific commercial outcomes and long-term scaling path.
          </p>
        </div>

        {/* Differentiators Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {differentiators.map((diff, index) => {
            const Icon = diff.icon;

            return (
              <div 
                key={index}
                className="flex gap-4 p-6 rounded-xl border border-transparent hover:border-brand-border hover:bg-brand-elevated/20 transition-all duration-300"
              >
                {/* Icon Container */}
                <div className="h-10 w-10 rounded-lg bg-brand-secondary/60 border border-brand-border/60 flex items-center justify-center text-brand-accent shrink-0">
                  <Icon className="h-5 w-5" />
                </div>
                
                {/* Content */}
                <div className="flex flex-col gap-1.5">
                  <h3 className="text-base font-bold font-sora text-white">
                    {diff.title}
                  </h3>
                  <p className="text-xs text-brand-muted leading-relaxed">
                    {diff.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
