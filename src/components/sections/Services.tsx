"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { 
  Globe, 
  PhoneCall, 
  Shuffle, 
  Target, 
  Search, 
  AppWindow, 
  ArrowUpRight,
  FileCode2
} from "lucide-react";
import { services } from "@/data/services";
import { cn } from "@/lib/utils";

const iconsMap: Record<string, React.ComponentType<{ className?: string }>> = {
  "websites": Globe,
  "ai-calling": PhoneCall,
  "automation": Shuffle,
  "crm": Target,
  "seo-aeo": Search,
  "custom-apps": AppWindow
};

export function Services() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

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
    <section id="services" className="bg-brand-bg py-20 relative border-t border-brand-border/40 overflow-hidden">
      <div className="absolute top-[30%] right-[-10%] w-[450px] h-[450px] rounded-full bg-brand-violet/3 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <div className="text-brand-accent text-xs font-bold uppercase tracking-wider font-sora mb-2">
              Capabilities & Expertise
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold font-sora tracking-tighter text-white mb-4">
              Everything Your Business Needs to Ascend.
            </h2>
            <p className="text-sm sm:text-base text-brand-muted leading-relaxed">
              From your digital presence to the systems behind your operations, we build technology that helps your business attract customers, work smarter, and scale with confidence.
            </p>
          </div>
          <div>
            <a 
              href="#contact" 
              onClick={handleScrollToContact}
              className="inline-flex items-center gap-1 text-sm font-semibold text-brand-accent hover:underline group"
            >
              Request custom scope
              <ArrowUpRight className="h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
            </a>
          </div>
        </div>

        {/* Asymmetric Asymmetrical Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = iconsMap[service.id];
            const isHovered = hoveredCard === service.id;
            
            // Asymmetric sizing classes on desktop
            let colSpan = "md:col-span-1";
            if (service.id === "websites" || service.id === "automation" || service.id === "custom-apps") {
              colSpan = "md:col-span-2";
            }

            const isPurpleTheme = index % 2 === 1;

            return (
              <div
                key={service.id}
                onMouseEnter={() => setHoveredCard(service.id)}
                onMouseLeave={() => setHoveredCard(null)}
                className={cn(
                  "group relative bg-brand-elevated/40 border border-brand-border rounded-2xl p-6 transition-all duration-300 flex flex-col justify-between hover:border-brand-border-hover min-h-[385px] hover:shadow-xl hover:shadow-black/30",
                  colSpan,
                  isPurpleTheme 
                    ? "hover:bg-gradient-to-b hover:from-brand-elevated hover:to-brand-violet/[0.03]" 
                    : "hover:bg-gradient-to-b hover:from-brand-elevated hover:to-brand-accent/[0.03]"
                )}
              >
                {/* Accent glow */}
                <div className={cn(
                  "absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl pointer-events-none blur-[40px] z-0",
                  isPurpleTheme ? "bg-brand-violet/4" : "bg-brand-accent/4"
                )} />

                <div className="relative z-10 flex flex-col gap-5">
                  {/* Header Row */}
                  <div className="flex items-center justify-between">
                    <div className={cn(
                      "h-11 w-11 rounded-xl flex items-center justify-center border transition-all duration-300 shadow-sm",
                      isPurpleTheme 
                        ? "bg-brand-violet/10 border-brand-violet/30 text-brand-violet group-hover:scale-105 group-hover:bg-brand-violet/20" 
                        : "bg-brand-accent/10 border-brand-accent/30 text-brand-accent group-hover:scale-105 group-hover:bg-brand-accent/20"
                    )}>
                      {Icon && <Icon className="h-4.5 w-4.5" />}
                    </div>
                    <span className="text-[10px] font-mono text-brand-muted/70 group-hover:text-white/60 transition-colors duration-200 uppercase font-bold">
                      SERVICE {service.number}
                    </span>
                  </div>

                  {/* Body Text */}
                  <div>
                    <h3 className="text-base sm:text-lg font-bold font-sora text-white mb-0.5 group-hover:text-brand-accent transition-colors duration-200">
                      {service.title}
                    </h3>
                    <p className={cn(
                      "text-[10px] font-bold uppercase tracking-wider mb-2",
                      isPurpleTheme ? "text-brand-violet/90" : "text-brand-accent/90"
                    )}>
                      {service.positioning}
                    </p>
                    <p className="text-xs text-brand-muted leading-relaxed max-w-xl">
                      {service.description}
                    </p>
                  </div>

                  {/* Custom System Blueprint Mockups inside Double-Width Cards */}
                  {colSpan === "md:col-span-2" && (
                    <div className="mt-2 w-full bg-brand-bg/50 border border-brand-border/40 rounded-xl p-3.5 flex flex-col gap-2 relative overflow-hidden h-[105px] justify-center">
                      
                      {service.id === "websites" && (
                        /* Web Wireframe Mockup */
                        <div className="flex items-center justify-between gap-4">
                          <div className="flex flex-col gap-1.5 w-1/2">
                            <div className="h-1.5 w-1/3 bg-white/10 rounded" />
                            <div className="h-2 w-full bg-white/5 rounded" />
                            <div className="flex gap-1 mt-1">
                              <div className="h-4 w-12 bg-brand-accent/20 border border-brand-accent/30 rounded flex items-center justify-center text-[7px] text-brand-accent font-bold">
                                CTA Button
                              </div>
                              <div className="h-4 w-8 bg-white/5 rounded" />
                            </div>
                          </div>
                          <div className="w-1/2 bg-brand-secondary/60 border border-brand-border/60 rounded p-2 flex items-center justify-between gap-2 h-14">
                            <span className="text-[8px] font-mono text-brand-muted">Conversion</span>
                            <div className="flex items-end gap-0.5 h-full pt-2">
                              {[10, 18, 12, 28, 20, 36].map((h, i) => (
                                <motion.div 
                                  key={i} 
                                  animate={{ height: isHovered ? `${h * 1.2}%` : `${h * 0.8}%` }}
                                  className="w-1.5 bg-brand-accent rounded-t" 
                                />
                              ))}
                            </div>
                          </div>
                        </div>
                      )}

                      {service.id === "automation" && (
                        /* Workflow Pipeline Mockup */
                        <div className="flex items-center justify-between px-2 sm:px-4 relative">
                          <div className="absolute left-6 right-6 top-1/2 h-[1px] bg-brand-border/60 -translate-y-1/2 z-0" />
                          
                          {/* Animated flow pulse */}
                          {isHovered && (
                            <motion.div 
                              initial={{ left: "10%" }}
                              animate={{ left: "90%" }}
                              transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                              className="absolute h-1.5 w-1.5 rounded-full bg-brand-violet blur-[2px] -translate-y-1/2 top-1/2 shadow-[0_0_8px_#7C3AED]"
                            />
                          )}

                          <div className="h-9 w-14 sm:w-20 rounded bg-brand-secondary/80 border border-brand-border/60 z-10 flex flex-col items-center justify-center p-0.5 text-center shrink-0">
                            <span className="text-[6px] sm:text-[7px] font-mono text-brand-muted uppercase font-bold leading-tight">Web Inquiry</span>
                            <span className="text-[5px] sm:text-[6px] text-white/70 leading-none">Trigger</span>
                          </div>
                          
                          <div className="h-9 w-14 sm:w-20 rounded bg-brand-secondary/80 border border-brand-border/60 z-10 flex flex-col items-center justify-center p-0.5 text-center shrink-0">
                            <span className="text-[6px] sm:text-[7px] font-mono text-brand-violet uppercase font-bold leading-tight">n8n Filter</span>
                            <span className="text-[5px] sm:text-[6px] text-white/70 leading-none">Condition</span>
                          </div>

                          <div className="h-9 w-14 sm:w-20 rounded bg-brand-secondary/80 border border-brand-border/60 z-10 flex flex-col items-center justify-center p-0.5 text-center shrink-0">
                            <span className="text-[6px] sm:text-[7px] font-mono text-brand-success uppercase font-bold leading-tight">CRM Updated</span>
                            <span className="text-[5px] sm:text-[6px] text-white/70 leading-none">Action</span>
                          </div>
                        </div>
                      )}

                      {service.id === "custom-apps" && (
                        /* Database / App Mockup */
                        <div className="flex items-center gap-4">
                          <div className="h-12 w-12 rounded bg-brand-secondary/60 border border-brand-border/60 flex items-center justify-center text-brand-muted">
                            <FileCode2 className="h-5 w-5" />
                          </div>
                          <div className="flex-1 flex flex-col gap-1.5">
                            <div className="flex items-center justify-between text-[8px] font-mono text-brand-muted">
                              <span>API CONNECTION GATEWAY</span>
                              <span className="text-brand-success font-bold">ONLINE</span>
                            </div>
                            <div className="h-2 w-full bg-white/5 rounded overflow-hidden">
                              <motion.div 
                                animate={{ width: isHovered ? "100%" : "35%" }}
                                transition={{ duration: 1 }}
                                className="h-full bg-gradient-to-r from-brand-accent to-brand-violet" 
                              />
                            </div>
                            <span className="text-[7px] text-brand-muted leading-none">Endpoint: secure_customer_portal/auth/session</span>
                          </div>
                        </div>
                      )}

                    </div>
                  )}

                </div>

                {/* Capability Bullet Badges */}
                <div className="relative z-10 mt-6 pt-4 border-t border-brand-border/40">
                  <span className="text-[9px] uppercase font-bold text-brand-muted/50 tracking-wider block mb-2">
                    Key Deliverables
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {service.capabilities.map((capability, i) => (
                      <span 
                        key={i} 
                        className="text-[9px] bg-brand-bg/60 border border-brand-border/40 text-brand-muted px-2 py-0.5 rounded-full font-medium"
                      >
                        {capability}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
