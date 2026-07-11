"use client";

import { useState } from "react";
import { ArrowRight, Sparkles, MonitorOff, HelpCircle, PhoneOff, Link, Compass, AlertCircle } from "lucide-react";
import { cn } from "@/lib/utils";

const mappings = [
  {
    id: "websites",
    challenge: {
      title: "Outdated Digital Presence",
      desc: "An old, slow website that fails to build credibility, causing prospective buyers to select competitors.",
      icon: MonitorOff
    },
    solution: {
      title: "Premium Websites",
      desc: "High-performance, modern, fast websites built to secure client trust and maximize conversion rates.",
      icon: Sparkles
    }
  },
  {
    id: "ai-calling",
    challenge: {
      title: "Missed Customer Calls",
      desc: "Inquiries going to voicemail during busy hours or after-hours, costing thousands in lost revenue.",
      icon: PhoneOff
    },
    solution: {
      title: "AI Calling Agents",
      desc: "Voice agents answering 100% of calls, qualifying leads, and booking appointments 24/7.",
      icon: Sparkles
    }
  },
  {
    id: "automation",
    challenge: {
      title: "Manual Repetitive Work",
      desc: "Teams spending hours copy-pasting data, typing reminders, and generating manual invoices.",
      icon: AlertCircle
    },
    solution: {
      title: "Workflow Automation",
      desc: "Interconnected systems that automatically sync leads, trigger emails, and handle documents.",
      icon: Sparkles
    }
  },
  {
    id: "crm",
    challenge: {
      title: "Leads Getting Lost",
      desc: "Prospect details hidden in spreadsheets, text messages, or sticky notes, leading to zero follow-up.",
      icon: HelpCircle
    },
    solution: {
      title: "CRM & Lead Management",
      desc: "Structured pipelines that automatically log, organize, and guide leads from first touch to won sale.",
      icon: Sparkles
    }
  },
  {
    id: "seo-aeo",
    challenge: {
      title: "Poor Online Visibility",
      desc: "Your business is invisible when customers search for services on Google or ask AI answer engines.",
      icon: Compass
    },
    solution: {
      title: "SEO & AEO",
      desc: "Structured content optimized to rank highly in standard search and modern AI answer platforms.",
      icon: Sparkles
    }
  },
  {
    id: "custom-apps",
    challenge: {
      title: "Disconnected Business Tools",
      desc: "Using separate apps that do not communicate, causing administrative bottlenecks and errors.",
      icon: Link
    },
    solution: {
      title: "Custom Web Applications",
      desc: "Secure, tailored software modules built directly around your operational flow and needs.",
      icon: Sparkles
    }
  }
];

export function Problem() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  
  const handleScrollToSection = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    const targetElement = document.getElementById("services");
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
    <section id="problem" className="bg-brand-bg py-20 relative border-t border-brand-border/40 overflow-hidden">
      <div className="absolute top-[20%] left-[-10%] w-[350px] h-[350px] rounded-full bg-brand-accent/3 blur-[90px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-brand-accent text-xs font-bold uppercase tracking-wider font-sora mb-2">
            Operational Optimization
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-sora tracking-tighter text-white mb-4">
            From Business Challenges to Growth Systems
          </h2>
          <p className="text-sm sm:text-base text-brand-muted leading-relaxed">
            Technology is not just about writing code. It is about removing the operational bottlenecks that prevent your business from scaling. Here is how we turn common challenges into growth engines.
          </p>
        </div>

        {/* Challenge-to-Solution Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {mappings.map((item, index) => {
            const ChallengeIcon = item.challenge.icon;
            const SolutionIcon = item.solution.icon;
            const isHovered = hoveredIndex === index;

            return (
              <div 
                key={index} 
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={cn(
                  "grid grid-cols-1 md:grid-cols-11 gap-4 items-center bg-brand-elevated/20 border rounded-xl p-5 transition-all duration-300 shadow-md",
                  isHovered 
                    ? "border-brand-border-hover bg-brand-elevated/60 shadow-[0_0_20px_rgba(37,99,235,0.06)]" 
                    : "border-brand-border"
                )}
              >
                
                {/* Challenge Column */}
                <div className="md:col-span-5 flex flex-col gap-2">
                  <div className="flex items-center gap-2.5">
                    <div className={cn(
                      "h-7 w-7 rounded-md border flex items-center justify-center shrink-0 transition-colors duration-300",
                      isHovered 
                        ? "bg-red-500/10 border-red-500/40 text-red-400" 
                        : "bg-brand-secondary/40 border-brand-border text-brand-muted"
                    )}>
                      <ChallengeIcon className="h-4 w-4" />
                    </div>
                    <h3 className={cn(
                      "text-xs sm:text-sm font-bold font-sora transition-colors duration-300",
                      isHovered ? "text-red-400" : "text-white/90"
                    )}>
                      {item.challenge.title}
                    </h3>
                  </div>
                  <p className="text-[11px] text-brand-muted leading-relaxed pl-9.5">
                    {item.challenge.desc}
                  </p>
                </div>

                {/* Connector Arrow */}
                <div className="md:col-span-1 flex justify-center py-2 md:py-0">
                  <ArrowRight className={cn(
                    "h-5 w-5 rotate-90 md:rotate-0 transition-all duration-300",
                    isHovered 
                      ? "text-brand-accent scale-110 translate-x-0.5" 
                      : "text-brand-muted/40"
                  )} />
                </div>

                {/* Solution Column */}
                <div className="md:col-span-5 flex flex-col gap-2">
                  <div className="flex items-center gap-2.5">
                    <div className={cn(
                      "h-7 w-7 rounded-md border flex items-center justify-center shrink-0 transition-colors duration-300",
                      isHovered 
                        ? "bg-brand-accent/20 border-brand-accent/40 text-brand-accent" 
                        : "bg-brand-secondary/40 border-brand-border text-brand-muted"
                    )}>
                      <SolutionIcon className="h-4 w-4" />
                    </div>
                    <a 
                      href="#services" 
                      onClick={handleScrollToSection}
                      className={cn(
                        "text-xs sm:text-sm font-bold font-sora hover:text-brand-accent transition-colors duration-300",
                        isHovered ? "text-brand-accent" : "text-white/90"
                      )}
                    >
                      {item.solution.title}
                    </a>
                  </div>
                  <p className="text-[11px] text-brand-muted leading-relaxed pl-9.5">
                    {item.solution.desc}
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
