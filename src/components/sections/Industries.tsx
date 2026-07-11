"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Rocket, 
  HeartPulse, 
  Coffee, 
  ShoppingBag, 
  GraduationCap, 
  Briefcase, 
  Home, 
  HeartHandshake,
  Database,
  ArrowRight,
  ShieldCheck
} from "lucide-react";
import { industries } from "@/data/industries";
import { cn } from "@/lib/utils";

const iconsMap: Record<string, React.ComponentType<{ className?: string }>> = {
  "startups": Rocket,
  "healthcare": HeartPulse,
  "restaurants": Coffee,
  "retail": ShoppingBag,
  "education": GraduationCap,
  "services": Briefcase,
  "realestate": Home,
  "ngos": HeartHandshake
};

// Custom System Blueprint Schematics per industry for interactive display
const blueprintsMap: Record<string, {
  nodes: { label: string; type: "input" | "process" | "output" }[];
  detail: string;
  security: string;
}> = {
  "startups": {
    detail: "Waitlist Intake Engine + Automatic CRM Routing + Stripe Checkout MVP Link",
    security: "Rapid deployment configurations enabled",
    nodes: [
      { label: "Premium Landing Page", type: "input" },
      { label: "HubSpot API Webhook", type: "process" },
      { label: "Stripe Subscription DB", type: "output" }
    ]
  },
  "healthcare": {
    detail: "HIPAA-Compliant Patient Portal + Dynamic Timetables + Automated SMS Confirmations",
    security: "HIPAA encryption standards verified",
    nodes: [
      { label: "Online Schedule Intake", type: "input" },
      { label: "Secure DB Calendar Router", type: "process" },
      { label: "Twilio API SMS Reminder", type: "output" }
    ]
  },
  "restaurants": {
    detail: "High-Speed Mobile Menu + OpenTable Reservation API + Google Map Local SEO Schema",
    security: "PCI-DSS transaction layers secured",
    nodes: [
      { label: "Local SEO Mobile Visit", type: "input" },
      { label: "Menu & Reservation Core", type: "process" },
      { label: "POS Sync Notification", type: "output" }
    ]
  },
  "retail": {
    detail: "Headless Storefront Frontend + Stripe payment processor + Real-time Inventory DB",
    security: "SSL encryption & Stripe gateway active",
    nodes: [
      { label: "Responsive Checkout Form", type: "input" },
      { label: "Stripe Payment webhook", type: "process" },
      { label: "Inventory SQL Database", type: "output" }
    ]
  },
  "education": {
    detail: "Student Authorization Portal + Course Library DB + Calendar Class Schedulers",
    security: "GDPR privacy rules compliant",
    nodes: [
      { label: "Registration Intake", type: "input" },
      { label: "Auth Library Portal", type: "process" },
      { label: "Class Timetable Router", type: "output" }
    ]
  },
  "services": {
    detail: "Authority Case-Study Portfolio + Live Quote Calculator + HubSpot Lead routing",
    security: "Encrypted submission pipeline",
    nodes: [
      { label: "Consultant Portfolio", type: "input" },
      { label: "Interactive Quote API", type: "process" },
      { label: "Sales CRM Pipeline logs", type: "output" }
    ]
  },
  "realestate": {
    detail: "Listing Board Search API + MLS API database synchronization + Round-Robin Agent routing",
    security: "Uptime guarantee 99.98%",
    nodes: [
      { label: "Listing Map Search", type: "input" },
      { label: "MLS database synchronizer", type: "process" },
      { label: "Agent pipeline assignment", type: "output" }
    ]
  },
  "ngos": {
    detail: "Donor Checkout optimization landing page + Volunteer Intake DB + Automated Newsletter",
    security: "Donation audit compliance secured",
    nodes: [
      { label: "Donation Checkout Form", type: "input" },
      { label: "Donor Database logging", type: "process" },
      { label: "Mailchimp Newsletter sync", type: "output" }
    ]
  }
};

export function Industries() {
  const [activeId, setActiveId] = useState<string>("startups");

  const activeIndustry = industries.find((i) => i.id === activeId) || industries[0];
  const activeBlueprint = blueprintsMap[activeId] || blueprintsMap["startups"];

  return (
    <section id="industries" className="bg-brand-bg py-20 relative border-t border-brand-border/40 overflow-hidden">
      <div className="absolute bottom-[20%] left-[-5%] w-[380px] h-[380px] rounded-full bg-brand-accent/3 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-brand-violet text-xs font-bold uppercase tracking-wider font-sora mb-2">
            Target Industries
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-sora tracking-tighter text-white mb-4">
            Built for Businesses Ready to Ascend.
          </h2>
          <p className="text-sm sm:text-base text-brand-muted leading-relaxed">
            We understand business operations, not just technology. Explore the tailored technology schematics we deploy to solve specific industry challenges.
          </p>
        </div>

        {/* Split Screen Panel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch max-w-6xl mx-auto">
          
          {/* Left panel: Industry Selectors */}
          <div className="lg:col-span-5 flex flex-row lg:flex-col overflow-x-auto lg:overflow-x-visible gap-2.5 pb-4 lg:pb-0 scrollbar-none snap-x snap-mandatory">
            {industries.map((ind) => {
              const Icon = iconsMap[ind.id];
              const isActive = ind.id === activeId;

              return (
                <button
                  key={ind.id}
                  onClick={() => setActiveId(ind.id)}
                  onMouseEnter={() => setActiveId(ind.id)}
                  className={cn(
                    "flex items-center justify-between p-3.5 lg:p-4 rounded-xl border text-left transition-all duration-300 shrink-0 snap-center w-[250px] lg:w-auto",
                    isActive
                      ? "bg-brand-elevated border-brand-accent/50 text-white shadow-md shadow-brand-accent/5"
                      : "bg-brand-secondary/20 border-brand-border text-brand-muted hover:border-brand-border-hover hover:text-white"
                  )}
                >
                  <div className="flex items-center gap-3">
                    <div className={cn(
                      "h-8 w-8 rounded-lg flex items-center justify-center transition-all duration-300",
                      isActive 
                        ? "bg-brand-accent/20 text-brand-accent border border-brand-accent/30" 
                        : "bg-brand-secondary border border-brand-border text-brand-muted"
                    )}>
                      {Icon && <Icon className="h-4 w-4" />}
                    </div>
                    <div>
                      <h3 className="text-xs font-bold font-sora uppercase tracking-wider">
                        {ind.title}
                      </h3>
                      <p className="text-[10px] text-brand-muted line-clamp-1 mt-0.5 max-w-[130px] lg:max-w-[220px]">
                        {ind.description}
                      </p>
                    </div>
                  </div>
                  <ArrowRight className={cn(
                    "h-4 w-4 transition-all duration-300 shrink-0 hidden lg:block",
                    isActive ? "text-brand-accent translate-x-1" : "text-brand-muted/20"
                  )} />
                </button>
              );
            })}
          </div>

          {/* Right panel: Dynamic System Blueprint Viewport */}
          <div className="lg:col-span-7">
            <div className="bg-brand-elevated/60 border border-brand-border rounded-2xl p-6 md:p-8 flex flex-col justify-between h-full min-h-[380px] shadow-lg shadow-black/35 relative overflow-hidden">
              {/* Grid backdrop */}
              <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.015)_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

              {/* Viewport Header */}
              <div className="relative z-10 flex items-center justify-between border-b border-brand-border/40 pb-4 mb-4">
                <div>
                  <span className="text-[9px] font-mono text-brand-accent font-bold uppercase tracking-widest block">SYSTEM BLUEPRINT SPEC</span>
                  <h4 className="text-base font-bold font-sora text-white mt-0.5">
                    {activeIndustry.title} System Layout
                  </h4>
                </div>
                <div className="flex items-center gap-1 bg-brand-secondary px-2.5 py-1 rounded-md border border-brand-border text-[9px] font-mono font-bold text-white/90">
                  <Database className="h-3 w-3 text-brand-accent" />
                  JSON DB SYNC
                </div>
              </div>

              {/* Schematic Node Diagrams Area */}
              <div className="relative z-10 my-auto py-8">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeId}
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    transition={{ duration: 0.25 }}
                    className="flex flex-col md:flex-row items-center justify-between gap-6 relative"
                  >
                    {/* SVG Connector Line */}
                    <div className="absolute left-1/2 top-4 bottom-4 md:left-6 md:right-6 md:top-1/2 h-full md:h-[1px] w-[1px] md:w-auto bg-gradient-to-r from-brand-accent/60 via-brand-violet/60 to-brand-border/30 -translate-x-1/2 md:translate-x-0 md:-translate-y-1/2 z-0 hidden sm:block" />

                    {activeBlueprint.nodes.map((node, i) => (
                      <div 
                        key={i}
                        className={cn(
                          "relative z-10 w-full md:w-36 rounded-xl border p-3 flex flex-col justify-center gap-1.5 transition-all duration-300 text-center bg-brand-secondary/95",
                          node.type === "input" ? "border-brand-accent/40 shadow-md shadow-brand-accent/5" :
                          node.type === "process" ? "border-brand-violet/40 shadow-md shadow-brand-violet/5" :
                          "border-brand-border"
                        )}
                      >
                        <span className="text-[8px] font-mono text-brand-muted/70 uppercase font-bold block">
                          NODE 0{i + 1} &bull; {node.type}
                        </span>
                        <span className="text-xs font-bold text-white font-sora line-clamp-1 leading-snug">
                          {node.label}
                        </span>
                      </div>
                    ))}
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Schematic Specifications */}
              <div className="relative z-10 border-t border-brand-border/40 pt-4 mt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex flex-col gap-0.5">
                  <span className="text-[9px] uppercase font-bold text-brand-accent tracking-wider font-sora">
                    Target Architecture Details
                  </span>
                  <p className="text-xs text-white/95 font-medium leading-relaxed max-w-md">
                    {activeBlueprint.detail}
                  </p>
                </div>
                <div className="flex items-center gap-1.5 text-[9px] text-brand-muted uppercase font-bold font-mono shrink-0">
                  <ShieldCheck className="h-4.5 w-4.5 text-brand-success" />
                  <span>{activeBlueprint.security}</span>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
