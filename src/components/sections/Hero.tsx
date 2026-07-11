"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Activity, Users, Zap, Bot, ShieldCheck, BarChart3, Sliders } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const simulationLeads = [
  { name: "Dr. Elena Rostova", source: "Healthcare Portal", action: "AI Appointment Booked" },
  { name: "Apex Dispatch Group", source: "Email Workflow", action: "Auto CRM Synced" },
  { name: "Savor Marketplace", source: "SEO Campaign", action: "Cart Checkout Lead" },
  { name: "Westside Properties", source: "Zillow API", action: "Assigned to Agent" }
];

export function Hero() {
  const [leadIndex, setLeadIndex] = useState(0);
  const [pulseActive, setPulseActive] = useState(false);
  const [pipelineValue, setPipelineValue] = useState(14200);
  const [dashboardMode, setDashboardMode] = useState<"operations" | "metrics">("operations");

  // Active simulation cycle for Operations feed
  useEffect(() => {
    const leadInterval = setInterval(() => {
      setLeadIndex((prev) => (prev + 1) % simulationLeads.length);
      setPulseActive(true);
      setPipelineValue((prev) => prev + Math.floor(Math.random() * 800) + 200);
      
      const timer = setTimeout(() => setPulseActive(false), 1500);
      return () => clearTimeout(timer);
    }, 4500);

    return () => clearInterval(leadInterval);
  }, []);

  const currentLead = simulationLeads[leadIndex];

  return (
    <section id="hero" className="relative bg-brand-bg pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden bg-radial-grid">
      {/* Background glow meshes */}
      <div className="absolute top-[-10%] left-[15%] w-[600px] h-[600px] rounded-full bg-brand-accent/8 blur-[130px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[5%] w-[500px] h-[500px] rounded-full bg-brand-violet/8 blur-[110px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Value Proposition */}
          <div className="lg:col-span-6 flex flex-col items-start gap-6 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-accent/8 border border-brand-accent/15 text-brand-accent text-xs font-semibold uppercase tracking-wider font-sora">
              <Zap className="h-3 w-3 fill-brand-accent/20" />
              Every Business Deserves to Ascend.
            </div>
            
            <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-extrabold font-sora tracking-tighter leading-[1.1] text-white">
              Helping Businesses <br />
              <span className="accent-text-gradient">Build, Automate,</span> <br />
              and Scale.
            </h1>
            
            <p className="text-sm sm:text-base text-brand-muted max-w-xl leading-relaxed">
              Ascend Labs helps ambitious businesses build premium digital experiences, intelligent workflow automation, and scalable technology that drive real business growth.
            </p>
            
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mt-2">
              <Button href="#contact" variant="glow" size="lg" className="gap-2 group">
                Book a Free Strategy Call
                <ArrowUpRight className="h-5 w-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
              </Button>
              <Button href="#services" variant="secondary" size="lg">
                Explore Our Services
              </Button>
            </div>
          </div>

          {/* Right Column: Premium Business Transformation Dashboard Mockup */}
          <div className="lg:col-span-6 w-full flex justify-center">
            <div className="w-full max-w-[520px] bg-brand-elevated/70 backdrop-blur-md border border-white/[0.06] rounded-2xl p-4 xs:p-6 relative shadow-[0_0_50px_rgba(0,0,0,0.5)] overflow-hidden">
              
              {/* Top Bar / Header of Mockup */}
              <div className="flex items-center justify-between border-b border-brand-border/40 pb-4 mb-5">
                <div className="flex items-center gap-2">
                  <div className="h-2.5 w-2.5 rounded-full bg-white/10" />
                  <div className="h-2.5 w-2.5 rounded-full bg-white/10" />
                  <div className="h-2.5 w-2.5 rounded-full bg-white/10" />
                  <span className="text-[10px] text-brand-muted font-mono font-semibold ml-2">SYSTEM MONITOR v1.4</span>
                </div>

                {/* Dashboard Mode Selector Buttons */}
                <div className="flex bg-brand-bg/80 border border-brand-border/60 p-0.5 rounded-lg">
                  <button 
                    onClick={() => setDashboardMode("operations")}
                    className={cn(
                      "flex items-center gap-1 px-2.5 py-1 text-[9px] font-bold font-sora rounded-md uppercase tracking-wider transition-all duration-200",
                      dashboardMode === "operations"
                        ? "bg-brand-accent text-white shadow-sm"
                        : "text-brand-muted hover:text-white"
                    )}
                  >
                    <Sliders className="h-3 w-3" />
                    Operations
                  </button>
                  <button 
                    onClick={() => setDashboardMode("metrics")}
                    className={cn(
                      "flex items-center gap-1 px-2.5 py-1 text-[9px] font-bold font-sora rounded-md uppercase tracking-wider transition-all duration-200",
                      dashboardMode === "metrics"
                        ? "bg-brand-accent text-white shadow-sm"
                        : "text-brand-muted hover:text-white"
                    )}
                  >
                    <BarChart3 className="h-3 w-3" />
                    Growth
                  </button>
                </div>
              </div>

              {/* Panel Area */}
              <div className="min-h-[295px] flex flex-col justify-between gap-4">
                <AnimatePresence mode="wait">
                  {dashboardMode === "operations" ? (
                    <motion.div
                      key="operations"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.25 }}
                      className="flex flex-col gap-4 w-full"
                    >
                      {/* Grid of Mini Widgets */}
                      <div className="grid grid-cols-1 xs:grid-cols-2 gap-3 sm:gap-4">
                        {/* Widget 1 */}
                        <div className="bg-brand-secondary/30 border border-brand-border/40 rounded-xl p-4 flex flex-col justify-between h-[105px]">
                          <div className="flex items-center justify-between text-brand-muted">
                            <span className="text-[10px] font-bold uppercase tracking-wider font-sora">Uptime</span>
                            <Activity className="h-3.5 w-3.5 text-brand-accent" />
                          </div>
                          <div className="mt-1">
                            <div className="text-xl font-extrabold text-white font-sora">99.98%</div>
                            <span className="text-[9px] text-brand-success font-medium">Automatic monitoring active</span>
                          </div>
                        </div>

                        {/* Widget 2 */}
                        <div className="bg-brand-secondary/30 border border-brand-border/40 rounded-xl p-4 flex flex-col justify-between h-[105px]">
                          <div className="flex items-center justify-between text-brand-muted">
                            <span className="text-[10px] font-bold uppercase tracking-wider font-sora">Sync Volume</span>
                            <Users className="h-3.5 w-3.5 text-brand-violet" />
                          </div>
                          <div className="mt-1">
                            <div className="text-xl font-extrabold text-white font-sora">
                              ${pipelineValue.toLocaleString()}
                            </div>
                            <span className="text-[9px] text-brand-success font-medium">+15.3% processed leads</span>
                          </div>
                        </div>
                      </div>

                      {/* Opportunity feed */}
                      <div className="bg-brand-secondary/40 border border-brand-border/50 rounded-xl p-4 relative overflow-hidden">
                        <div className="flex items-center justify-between mb-3 text-brand-muted border-b border-brand-border/20 pb-2">
                          <div className="flex items-center gap-1.5">
                            <span className="h-1.5 w-1.5 rounded-full bg-brand-accent animate-pulse" />
                            <span className="text-[9px] font-bold uppercase tracking-widest font-sora">Operational Pipeline Feed</span>
                          </div>
                          <span className="text-[9px] font-mono text-brand-muted">LEAD GATEWAY</span>
                        </div>

                        <div className="h-[48px] flex items-center">
                          <AnimatePresence mode="wait">
                            <motion.div
                              key={leadIndex}
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: -10 }}
                              transition={{ duration: 0.3 }}
                              className="w-full flex items-center justify-between"
                            >
                              <div>
                                <p className="text-xs font-bold text-white font-sora">{currentLead.name}</p>
                                <p className="text-[10px] text-brand-muted">{currentLead.source}</p>
                              </div>
                              <span className="text-[10px] font-bold text-brand-success bg-brand-success/10 px-2 py-0.5 rounded border border-brand-success/20 font-mono">
                                {currentLead.action}
                              </span>
                            </motion.div>
                          </AnimatePresence>
                        </div>

                        {pulseActive && (
                          <motion.div
                            initial={{ left: "0%" }}
                            animate={{ left: "100%" }}
                            transition={{ duration: 1.2, ease: "easeInOut" }}
                            className="absolute bottom-0 top-0 w-[1px] bg-gradient-to-t from-transparent via-brand-accent to-transparent shadow-[0_0_8px_#2563EB]"
                          />
                        )}
                      </div>

                      {/* AI Agent log */}
                      <div className="bg-brand-secondary/20 border border-brand-border/30 rounded-xl p-3.5 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="h-8 w-8 rounded-lg bg-brand-violet/10 border border-brand-violet/20 flex items-center justify-center text-brand-violet">
                            <Bot className="h-4.5 w-4.5" />
                          </div>
                          <div>
                            <h4 className="text-[10px] font-bold text-white uppercase tracking-wider font-sora">Voice Operator</h4>
                            <p className="text-[10px] text-brand-muted">Qualifying lead booking call...</p>
                          </div>
                        </div>
                        {/* Waveform visualizer */}
                        <div className="flex items-center gap-0.5 h-4.5">
                          {[1, 2.5, 4, 2, 1, 3, 2, 1, 2, 1].map((val, i) => (
                            <motion.div
                              key={i}
                              animate={{
                                height: pulseActive 
                                  ? [val * 3, val * 4.5, val * 2]
                                  : [val * 2, val * 3, val * 1.5]
                              }}
                              transition={{
                                repeat: Infinity,
                                duration: 0.7 + (i * 0.04),
                                ease: "easeInOut"
                              }}
                              className="w-[1.5px] bg-brand-violet rounded-full"
                              style={{ height: `${val * 3}px` }}
                            />
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="metrics"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.25 }}
                      className="flex flex-col gap-4 w-full"
                    >
                      <div className="bg-brand-secondary/35 border border-brand-border/40 rounded-xl p-4">
                        <div className="flex items-center justify-between mb-3">
                          <span className="text-[10px] font-bold uppercase tracking-wider text-brand-muted font-sora">Target Optimization Growth</span>
                          <span className="text-[9px] font-mono text-brand-success bg-brand-success/10 px-1.5 py-0.5 rounded border border-brand-success/20 font-bold">12-Month Projection</span>
                        </div>

                        {/* Custom SVG trajectory graph */}
                        <div className="relative h-[180px] w-full flex items-center justify-center">
                          <svg className="w-full h-full overflow-visible" viewBox="0 0 400 180">
                            {/* Y Axis Grid Lines */}
                            <line x1="0" y1="30" x2="400" y2="30" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
                            <line x1="0" y1="90" x2="400" y2="90" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
                            <line x1="0" y1="150" x2="400" y2="150" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
                            
                            {/* X Axis Grid Lines */}
                            <line x1="133" y1="0" x2="133" y2="180" stroke="rgba(255,255,255,0.02)" strokeWidth="1" />
                            <line x1="266" y1="0" x2="266" y2="180" stroke="rgba(255,255,255,0.02)" strokeWidth="1" />

                            {/* Label Texts */}
                            <text x="5" y="25" fill="rgba(255,255,255,0.25)" className="text-[9px] font-mono">500%</text>
                            <text x="5" y="85" fill="rgba(255,255,255,0.25)" className="text-[9px] font-mono">250%</text>
                            <text x="5" y="145" fill="rgba(255,255,255,0.25)" className="text-[9px] font-mono">100%</text>

                            <text x="66" y="175" fill="rgba(255,255,255,0.3)" className="text-[8px] font-mono text-center">Setup</text>
                            <text x="199" y="175" fill="rgba(255,255,255,0.3)" className="text-[8px] font-mono text-center">Automate</text>
                            <text x="333" y="175" fill="rgba(255,255,255,0.3)" className="text-[8px] font-mono text-center">Ascend</text>

                            {/* Growth Path */}
                            <motion.path
                              d="M 10 145 Q 120 135 200 95 T 390 35"
                              fill="none"
                              stroke="url(#grad-blue)"
                              strokeWidth="3"
                              initial={{ pathLength: 0 }}
                              animate={{ pathLength: 1 }}
                              transition={{ duration: 1.2, ease: "easeOut" }}
                            />

                            {/* Automation Path */}
                            <motion.path
                              d="M 10 155 Q 130 145 220 115 T 390 55"
                              fill="none"
                              stroke="url(#grad-purple)"
                              strokeWidth="1.5"
                              strokeDasharray="4 4"
                              initial={{ pathLength: 0 }}
                              animate={{ pathLength: 1 }}
                              transition={{ duration: 1.6, ease: "easeOut", delay: 0.2 }}
                            />

                            <defs>
                              <linearGradient id="grad-blue" x1="0" y1="0" x2="1" y2="0">
                                <stop offset="0%" stopColor="#2563EB" />
                                <stop offset="100%" stopColor="#3B82F6" />
                              </linearGradient>
                              <linearGradient id="grad-purple" x1="0" y1="0" x2="1" y2="0">
                                <stop offset="0%" stopColor="#7C3AED" />
                                <stop offset="100%" stopColor="#A78BFA" />
                              </linearGradient>
                            </defs>

                            <circle cx="200" cy="95" r="4.5" fill="#2563EB" stroke="#0B1220" strokeWidth="2" />
                            <circle cx="390" cy="35" r="5" fill="#22C55E" stroke="#0B1220" strokeWidth="2.5" />
                          </svg>
                        </div>
                      </div>

                      <div className="bg-brand-secondary/20 border border-brand-border/20 rounded-xl p-3 flex items-center justify-between text-[10px] text-brand-muted">
                        <div className="flex items-center gap-1.5">
                          <ShieldCheck className="h-4 w-4 text-brand-success" />
                          <span>Average client conversion rate increase: +18.4%</span>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Secure footer */}
                <div className="border-t border-brand-border/20 pt-3 flex items-center justify-between">
                  <span className="text-[9px] text-brand-muted font-mono">DATABASE INTEGRATION: SECURE</span>
                  <span className="text-[9px] text-brand-muted font-mono">NODE ACTIVE</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
