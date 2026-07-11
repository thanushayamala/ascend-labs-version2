"use client";

import { useState } from "react";
import { techStack } from "@/data/tech";
import { cn } from "@/lib/utils";

export function TechStack() {
  const [activeTab, setActiveTab] = useState(techStack[0].category);

  const currentGroup = techStack.find((g) => g.category === activeTab) || techStack[0];

  return (
    <section id="technology" className="bg-brand-bg py-20 relative border-t border-brand-border/40 overflow-hidden">
      <div className="absolute top-[30%] left-[-5%] w-[380px] h-[380px] rounded-full bg-brand-accent/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-brand-accent text-xs font-bold uppercase tracking-wider font-sora mb-2">
            Our Technology Ecosystem
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-sora tracking-tight text-white mb-4">
            Built with Industry-Leading Technology
          </h2>
          <p className="text-base text-brand-muted leading-relaxed">
            We choose modern technologies based on business objectives—not trends—ensuring every system is fast, secure, maintainable, and built for long-term scalability.
          </p>
        </div>

        {/* Tab System Wrapper */}
        <div className="bg-brand-elevated border border-brand-border rounded-2xl p-6 md:p-8 max-w-4xl mx-auto shadow-lg shadow-black/30">
          
          {/* Tabs header */}
          <div className="flex flex-wrap gap-2 justify-center border-b border-brand-border/40 pb-6 mb-6">
            {techStack.map((group) => {
              const isActive = group.category === activeTab;
              return (
                <button
                  key={group.category}
                  onClick={() => setActiveTab(group.category)}
                  className={cn(
                    "px-4 py-2 text-xs font-semibold rounded-lg font-sora border transition-all duration-300",
                    isActive 
                      ? "bg-brand-accent text-white border-brand-accent shadow-md shadow-brand-accent/15" 
                      : "bg-brand-secondary/40 text-brand-muted border-brand-border hover:border-brand-border-hover hover:text-white"
                  )}
                >
                  {group.category}
                </button>
              );
            })}
          </div>

          {/* Tab content panel */}
          <div className="flex flex-col gap-6">
            <div>
              <h3 className="text-lg font-bold font-sora text-white mb-1.5">
                {currentGroup.category} Architecture
              </h3>
              <p className="text-xs text-brand-muted leading-relaxed">
                {currentGroup.description}
              </p>
            </div>

            {/* Tech badges grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {currentGroup.items.map((tech) => (
                <div 
                  key={tech.name}
                  className="bg-brand-secondary/45 border border-brand-border rounded-xl p-4 flex flex-col justify-center gap-1 hover:border-brand-border-hover hover:bg-brand-secondary/80 transition-all duration-200"
                >
                  <span className="text-sm font-bold font-sora text-white">
                    {tech.name}
                  </span>
                  <span className="text-[10px] text-brand-muted font-medium uppercase tracking-wider">
                    {tech.role}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
