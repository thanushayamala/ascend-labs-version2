"use client";

import { useState } from "react";
import { Info, Code, Shield, CheckCircle, ChevronDown, ChevronUp, ArrowRight } from "lucide-react";
import { caseStudies } from "@/data/portfolio";
import { cn } from "@/lib/utils";

// Custom detailed API/DB nodes for the spec inspector
const systemSpecs: Record<string, {
  nodes: string[];
  dbType: string;
  auth: string;
  integrations: string[];
}> = {
  "medflow": {
    nodes: ["Patient Client (Next.js)", "API Gateway (Next.js Route)", "Clinician Sync Router", "Supabase DB (HIPAA Encrypted)", "Twilio SMS Dispatch"],
    dbType: "PostgreSQL (Supabase Row-Level Security)",
    auth: "JWT & Multi-Factor Patient Authentication",
    integrations: ["Twilio SMS API", "Google Calendar Sync v3", "HubSpot CRM Webhook"]
  },
  "apex-logistics": {
    nodes: ["IMAP Email Listener", "FastAPI Parser Service", "Order Validator Node", "n8n Webhook Router", "PostgreSQL Database", "Salesforce Lead Pipeline"],
    dbType: "PostgreSQL (Relational Operations Storage)",
    auth: "Bearer Token API Key Validation",
    integrations: ["IMAP Email Server", "n8n Automation Engine", "Salesforce API v57.0"]
  },
  "savor-delivery": {
    nodes: ["Storefront Client (Next.js)", "Edge CDN Router", "Stripe Checkout Module", "POS API Webhook Connector", "Database Logger (Postgres)"],
    dbType: "PostgreSQL Database & Redis Cache",
    auth: "OAuth 2.0 Client Authentication",
    integrations: ["Stripe payment gateway", "Clover POS webhook", "Google Maps Distance API"]
  }
};

export function Portfolio() {
  const [activeSpecId, setActiveSpecId] = useState<string | null>(null);

  const toggleSpec = (id: string) => {
    setActiveSpecId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="work" className="bg-brand-bg py-20 relative border-t border-brand-border/40 bg-radial-grid overflow-hidden">
      <div className="absolute top-[20%] right-[-10%] w-[400px] h-[400px] rounded-full bg-brand-accent/3 blur-[110px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-brand-accent text-xs font-bold uppercase tracking-wider font-sora mb-2">
            Selected Work & Blueprints
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-sora tracking-tighter text-white mb-4">
            Built to Create Real Business Impact
          </h2>
          <p className="text-sm sm:text-base text-brand-muted leading-relaxed">
            Review the structural system templates we deploy. These architectures represent core functional patterns designed to address real commercial challenges.
          </p>
        </div>

        {/* Case Studies List */}
        <div className="flex flex-col gap-12 max-w-5xl mx-auto">
          {caseStudies.map((project) => {
            const isSpecOpen = activeSpecId === project.id;
            const spec = systemSpecs[project.id];

            return (
              <div 
                key={project.id}
                className="bg-brand-elevated/45 border border-brand-border rounded-2xl overflow-hidden hover:border-brand-border-hover transition-all duration-300 shadow-lg shadow-black/30"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12">
                  
                  {/* Left side: Premium Gradient Abstract Visual */}
                  <div className={cn(
                    "lg:col-span-5 min-h-[240px] bg-gradient-to-tr flex flex-col justify-between p-6 relative overflow-hidden",
                    project.imagePlaceholderColor
                  )}>
                    {/* Grid overlay */}
                    <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.025)_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

                    {/* Stamp */}
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-brand-bg/95 border border-brand-border/60 text-white font-mono text-[9px] uppercase tracking-wider w-fit relative z-10 shadow-sm">
                      <Shield className="h-3 w-3 text-brand-accent" />
                      Ascend System blueprint
                    </div>

                    {/* Content */}
                    <div className="my-auto flex flex-col items-center gap-2 relative z-10 py-6 text-center">
                      <div className="h-11 w-11 rounded-full bg-brand-bg/90 border border-brand-border/60 flex items-center justify-center text-white/95 shadow-md">
                        <Code className="h-4.5 w-4.5" />
                      </div>
                      <span className="font-sora font-semibold text-xs sm:text-sm text-white/90">{project.name}</span>
                      <span className="text-[9px] text-brand-muted uppercase font-bold tracking-widest">{project.industry}</span>
                    </div>

                    <div className="flex items-center gap-1.5 text-[9px] text-brand-muted font-mono relative z-10">
                      <Info className="h-3 w-3" />
                      Production template blueprint
                    </div>
                  </div>

                  {/* Right side: Case Details */}
                  <div className="lg:col-span-7 p-6 md:p-8 flex flex-col justify-between gap-6">
                    
                    {/* Header */}
                    <div>
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-brand-border/40 pb-4 mb-4">
                        <div>
                          <h3 className="text-lg font-bold font-sora text-white">
                            {project.name}
                          </h3>
                          <span className="text-[10px] text-brand-muted font-bold uppercase tracking-wider block mt-0.5">
                            Focus: {project.industry}
                          </span>
                        </div>
                        <span className="text-[9px] bg-brand-secondary border border-brand-border text-brand-muted px-2.5 py-0.5 rounded font-mono font-bold w-fit uppercase">
                          Blueprint Core
                        </span>
                      </div>

                      {/* Challenge & Deployed System */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                        <div>
                          <h4 className="text-[9px] uppercase font-bold text-red-400 tracking-wider mb-1.5">
                            Operational Bottleneck
                          </h4>
                          <p className="text-[11px] text-brand-muted leading-relaxed">
                            {project.challenge}
                          </p>
                        </div>
                        <div>
                          <h4 className="text-[9px] uppercase font-bold text-brand-success tracking-wider mb-1.5">
                            Deployed System Solution
                          </h4>
                          <p className="text-[11px] text-brand-muted leading-relaxed">
                            {project.solution}
                          </p>
                        </div>
                      </div>

                      {/* Performance Outcome */}
                      <div className="bg-brand-secondary/30 border border-brand-border/60 rounded-xl p-3.5 flex items-start gap-2.5">
                        <CheckCircle className="h-4 w-4 text-brand-success shrink-0 mt-0.5" />
                        <div>
                          <h5 className="text-[9px] uppercase font-bold text-brand-muted/70 tracking-wider leading-none">
                            Target Performance Objective
                          </h5>
                          <p className="text-xs text-white font-medium mt-1 leading-relaxed">
                            {project.impact}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Footer Row: Tech & Specs Toggler */}
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pt-3 border-t border-brand-border/40">
                      <div className="flex flex-wrap gap-1.5">
                        {project.tech.map((t) => (
                          <span 
                            key={t}
                            className="text-[9px] font-semibold text-white/95 bg-brand-secondary/90 border border-brand-border px-2 py-0.5 rounded"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                      
                      <button
                        onClick={() => toggleSpec(project.id)}
                        className="flex items-center gap-1 text-[10px] font-bold text-brand-accent hover:text-white uppercase tracking-wider transition-colors duration-200"
                      >
                        {isSpecOpen ? (
                          <>
                            Hide Spec Diagram
                            <ChevronUp className="h-3.5 w-3.5" />
                          </>
                        ) : (
                          <>
                            Inspect Blueprint Spec
                            <ChevronDown className="h-3.5 w-3.5" />
                          </>
                        )}
                      </button>
                    </div>

                  </div>

                </div>

                {/* Expanded Specifications Panel */}
                {isSpecOpen && spec && (
                  <div className="bg-brand-bg/85 border-t border-brand-border p-5 md:p-6 flex flex-col gap-6 relative">
                    <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.01)_1px,transparent_1px)] [background-size:12px_12px] pointer-events-none" />
                    
                    {/* Spec Header */}
                    <div>
                      <span className="text-[8px] font-mono text-brand-accent uppercase tracking-widest font-bold">API & DB Architecture Schematics</span>
                      <h4 className="text-xs font-bold font-sora text-white uppercase tracking-wider mt-0.5">
                        System Connectivity Pipeline
                      </h4>
                    </div>

                    {/* Nodes flow layout */}
                    <div className="flex flex-col md:flex-row items-center gap-4 relative justify-between">
                      {spec.nodes.map((nodeName, i) => (
                        <div key={i} className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
                          <div className={cn(
                            "w-full max-w-[260px] md:w-36 rounded-lg border border-brand-border/80 bg-brand-secondary/50 p-2.5 text-center text-[10px] font-bold font-sora",
                            i === 0 ? "text-brand-accent border-brand-accent/20" :
                            i === spec.nodes.length - 1 ? "text-brand-success border-brand-success/20" :
                            "text-white/80"
                          )}>
                            {nodeName}
                          </div>
                          {i < spec.nodes.length - 1 && (
                            <ArrowRight className="h-4 w-4 text-brand-muted/30 rotate-90 md:rotate-0 mx-auto shrink-0" />
                          )}
                        </div>
                      ))}
                    </div>

                    {/* Database & Integrations Details */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 bg-brand-secondary/20 border border-brand-border/40 p-4 rounded-xl text-xs">
                      <div>
                        <span className="text-[8px] font-bold font-mono text-brand-muted uppercase tracking-wider">Database Storage Spec</span>
                        <p className="font-semibold text-white/90 mt-1 font-sora">{spec.dbType}</p>
                      </div>
                      <div>
                        <span className="text-[8px] font-bold font-mono text-brand-muted uppercase tracking-wider">Security & Auth Layer</span>
                        <p className="font-semibold text-white/90 mt-1 font-sora">{spec.auth}</p>
                      </div>
                      <div>
                        <span className="text-[8px] font-bold font-mono text-brand-muted uppercase tracking-wider">Connected APIs</span>
                        <div className="flex flex-wrap gap-1.5 mt-1">
                          {spec.integrations.map((api) => (
                            <span key={api} className="text-[9px] font-mono bg-brand-bg px-2 py-0.5 rounded text-brand-muted border border-brand-border/30">
                              {api}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                  </div>
                )}

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
