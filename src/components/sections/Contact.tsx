"use client";

import { useState } from "react";
import { 
  Mail, 
  Phone, 
  Check, 
  Loader2, 
  Sparkles,
  ArrowRight,
  ShieldCheck
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const availableServices = [
  "Premium Websites",
  "AI Calling Agents",
  "Workflow Automation",
  "CRM & Lead Management",
  "SEO & AEO",
  "Custom Web Applications"
];

// Budget Deliverables Estimator Mapping
const budgetDeliverables: Record<string, string> = {
  "< ₹50,000": "Standard Deliverables: Speed-optimized single-page landing site, standard contact integration, and essential search indexing (SEO).",
  "₹50,000 - ₹1,00,000": "Standard Deliverables: Full corporate multi-page website, automated lead routing to CRM (HubSpot/Slack), and customized email auto-responders.",
  "₹1,00,000 - ₹1,80,000": "Standard Deliverables: Premium e-commerce portal OR client dashboard, automated n8n workflows, custom CRM pipeline setups, and transactional API integrations.",
  "₹1,80,000 - ₹2,50,000": "Standard Deliverables: Custom operational web application, conversational AI voice receptionists, multiple background database synchronizations, and dedicated developer support.",
  "₹2,50,000+": "Standard Deliverables: Enterprise scaling architecture. Custom RAG knowledge systems, secure SaaS tenant pipelines, deep workflow systems, and dedicated SLA maintenance."
};

interface FormData {
  fullName: string;
  companyName: string;
  email: string;
  phone: string;
  industry: string;
  selectedServices: string[];
  budget: string;
  description: string;
  preferredContact: string;
}

const initialFormState: FormData = {
  fullName: "",
  companyName: "",
  email: "",
  phone: "",
  industry: "",
  selectedServices: [],
  budget: "",
  description: "",
  preferredContact: "Email"
};

export function Contact() {
  const [formData, setFormData] = useState<FormData>(initialFormState);
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleServiceToggle = (service: string) => {
    setFormData((prev) => {
      const selected = prev.selectedServices.includes(service)
        ? prev.selectedServices.filter((s) => s !== service)
        : [...prev.selectedServices, service];
      
      if (errors.selectedServices && selected.length > 0) {
        setErrors((err) => ({ ...err, selectedServices: "" }));
      }
      
      return { ...prev, selectedServices: selected };
    });
  };

  const validateForm = () => {
    const newErrors: Partial<Record<keyof FormData, string>> = {};

    if (!formData.fullName.trim()) newErrors.fullName = "Full name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
    if (!formData.industry) newErrors.industry = "Please select an industry";
    if (formData.selectedServices.length === 0) {
      newErrors.selectedServices = "Please select at least one service";
    }
    if (!formData.budget) newErrors.budget = "Please select a budget range";
    if (!formData.description.trim()) {
      newErrors.description = "Please describe your project goals";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setStatus("loading");

    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setStatus("success");
      setFormData(initialFormState);
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="bg-brand-bg py-20 relative border-t border-brand-border/40">
      <div className="absolute top-[10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-brand-accent/3 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[10%] right-[-10%] w-[500px] h-[500px] rounded-full bg-brand-violet/3 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Connection Channels */}
          <div className="lg:col-span-5 flex flex-col gap-8 text-left lg:sticky lg:top-28">
            <div>
              <div className="text-brand-accent text-xs font-bold uppercase tracking-wider font-sora mb-2">
                Get In Touch
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold font-sora tracking-tighter text-white mb-4">
                Let&apos;s Build Something That Helps Your Business Ascend.
              </h2>
              <p className="text-sm sm:text-base text-brand-muted leading-relaxed">
                Whether you are launching, automating, or scaling, tell us where your business is today and where you want it to go. Our team responds within 24 hours.
              </p>
            </div>

            {/* Direct Connect Options */}
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-4 bg-brand-secondary/30 border border-brand-border p-4 rounded-xl">
                <div className="h-10 w-10 bg-brand-accent/10 border border-brand-accent/20 rounded-lg flex items-center justify-center text-brand-accent shrink-0">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white uppercase tracking-wider font-sora">
                    Email Consultation
                  </h4>
                  <a href="mailto:thanushayamala@gmail.com" className="text-sm text-brand-muted hover:text-white transition-colors duration-200">
                    thanushayamala@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 bg-brand-secondary/30 border border-brand-border p-4 rounded-xl">
                <div className="h-10 w-10 bg-brand-violet/10 border border-brand-violet/20 rounded-lg flex items-center justify-center text-brand-violet shrink-0">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white uppercase tracking-wider font-sora">
                    WhatsApp Hotline
                  </h4>
                  <a href="https://wa.me/917416684932" target="_blank" rel="noreferrer" className="text-sm text-brand-muted hover:text-white transition-colors duration-200">
                    +91 7416684932
                  </a>
                </div>
              </div>
            </div>

            {/* Social channels */}
            <div className="flex items-center gap-4">
              <span className="text-xs text-brand-muted font-bold font-sora uppercase tracking-wider">
                Find us on
              </span>
              <div className="flex items-center gap-2">
                <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="p-2 border border-brand-border hover:border-brand-border-hover rounded bg-brand-secondary/50 text-brand-muted hover:text-white transition-colors duration-200" aria-label="LinkedIn">
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="https://github.com" target="_blank" rel="noreferrer" className="p-2 border border-brand-border hover:border-brand-border-hover rounded bg-brand-secondary/50 text-brand-muted hover:text-white transition-colors duration-200" aria-label="GitHub">
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Project Discovery Form */}
          <div className="lg:col-span-7 w-full">
            <div className="bg-brand-elevated/75 border border-brand-border rounded-2xl p-6 md:p-8 shadow-xl shadow-black/45 backdrop-blur-sm">
              
              {status === "success" ? (
                /* Success Card Display */
                <div className="flex flex-col items-center justify-center text-center py-10 gap-6">
                  <div className="h-16 w-16 bg-brand-success/15 border border-brand-success/30 text-brand-success rounded-full flex items-center justify-center shadow-lg shadow-brand-success/5">
                    <Sparkles className="h-8 w-8 animate-pulse" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold font-sora text-white mb-2">
                      Proposal Roadmap Request Received!
                    </h3>
                    <p className="text-xs sm:text-sm text-brand-muted max-w-md mx-auto leading-relaxed">
                      Thank you for contacting Ascend Labs. Our strategy team has received your project parameters and will construct your initial technology framework proposal. Expect to hear from us within 24 business hours.
                    </p>
                  </div>
                  <Button 
                    onClick={() => setStatus("idle")} 
                    variant="outline" 
                    size="md"
                    className="mt-2"
                  >
                    Send another inquiry
                  </Button>
                </div>
              ) : (
                /* Form Display */
                <form onSubmit={handleSubmit} className="flex flex-col gap-6" noValidate>
                  
                  {/* Two Column Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Full Name */}
                    <div className="flex flex-col gap-2">
                      <label htmlFor="fullName" className="text-[10px] font-bold text-white uppercase tracking-wider font-sora">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        disabled={status === "loading"}
                        placeholder="John Doe"
                        aria-invalid={!!errors.fullName}
                        aria-describedby={errors.fullName ? "fullName-error" : undefined}
                        className={cn(
                          "bg-brand-secondary/25 border border-brand-border/80 hover:border-brand-border text-white text-xs sm:text-sm rounded-xl p-3 focus:outline-none focus:border-brand-accent focus:bg-brand-secondary/50 transition-all duration-300 focus:shadow-[0_0_15px_rgba(37,99,235,0.08)]",
                          errors.fullName && "border-red-500/40 focus:border-red-500/50"
                        )}
                      />
                      {errors.fullName && (
                        <p id="fullName-error" className="text-[10px] text-red-400 font-semibold">{errors.fullName}</p>
                      )}
                    </div>

                    {/* Company Name */}
                    <div className="flex flex-col gap-2">
                      <label htmlFor="companyName" className="text-[10px] font-bold text-white uppercase tracking-wider font-sora">
                        Company Name
                      </label>
                      <input
                        type="text"
                        id="companyName"
                        name="companyName"
                        value={formData.companyName}
                        onChange={handleInputChange}
                        disabled={status === "loading"}
                        placeholder="Acme Corp"
                        className="bg-brand-secondary/25 border border-brand-border/80 hover:border-brand-border text-white text-xs sm:text-sm rounded-xl p-3 focus:outline-none focus:border-brand-accent focus:bg-brand-secondary/50 transition-all duration-300 focus:shadow-[0_0_15px_rgba(37,99,235,0.08)]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Business Email */}
                    <div className="flex flex-col gap-2">
                      <label htmlFor="email" className="text-[10px] font-bold text-white uppercase tracking-wider font-sora">
                        Business Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        disabled={status === "loading"}
                        placeholder="john@company.com"
                        aria-invalid={!!errors.email}
                        aria-describedby={errors.email ? "email-error" : undefined}
                        className={cn(
                          "bg-brand-secondary/25 border border-brand-border/80 hover:border-brand-border text-white text-xs sm:text-sm rounded-xl p-3 focus:outline-none focus:border-brand-accent focus:bg-brand-secondary/50 transition-all duration-300 focus:shadow-[0_0_15px_rgba(37,99,235,0.08)]",
                          errors.email && "border-red-500/40 focus:border-red-500/50"
                        )}
                      />
                      {errors.email && (
                        <p id="email-error" className="text-[10px] text-red-400 font-semibold">{errors.email}</p>
                      )}
                    </div>

                    {/* Phone Number */}
                    <div className="flex flex-col gap-2">
                      <label htmlFor="phone" className="text-[10px] font-bold text-white uppercase tracking-wider font-sora">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        disabled={status === "loading"}
                        placeholder="+1 (555) 000-0000"
                        aria-invalid={!!errors.phone}
                        aria-describedby={errors.phone ? "phone-error" : undefined}
                        className={cn(
                          "bg-brand-secondary/25 border border-brand-border/80 hover:border-brand-border text-white text-xs sm:text-sm rounded-xl p-3 focus:outline-none focus:border-brand-accent focus:bg-brand-secondary/50 transition-all duration-300 focus:shadow-[0_0_15px_rgba(37,99,235,0.08)]",
                          errors.phone && "border-red-500/40 focus:border-red-500/50"
                        )}
                      />
                      {errors.phone && (
                        <p id="phone-error" className="text-[10px] text-red-400 font-semibold">{errors.phone}</p>
                      )}
                    </div>
                  </div>

                  {/* Industry Select (Full Width in single row) */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="industry" className="text-[10px] font-bold text-white uppercase tracking-wider font-sora">
                      Industry Vertical *
                    </label>
                    <div className="relative">
                      <select
                        id="industry"
                        name="industry"
                        value={formData.industry}
                        onChange={handleInputChange}
                        disabled={status === "loading"}
                        aria-invalid={!!errors.industry}
                        aria-describedby={errors.industry ? "industry-error" : undefined}
                        className={cn(
                          "w-full bg-brand-secondary/25 border border-brand-border/80 hover:border-brand-border text-white text-xs sm:text-sm rounded-xl p-3 focus:outline-none focus:border-brand-accent focus:bg-brand-secondary/50 transition-all duration-300 appearance-none cursor-pointer focus:shadow-[0_0_15px_rgba(37,99,235,0.08)]",
                          errors.industry && "border-red-500/40"
                        )}
                      >
                        <option value="" disabled className="bg-brand-secondary text-brand-muted">Select your sector</option>
                        <option value="Startups & Tech" className="bg-brand-secondary">Startups & Tech</option>
                        <option value="Healthcare & Wellness" className="bg-brand-secondary">Healthcare & Wellness</option>
                        <option value="Restaurants & Cafés" className="bg-brand-secondary">Restaurants & Cafés</option>
                        <option value="Retail & E-commerce" className="bg-brand-secondary">Retail & E-commerce</option>
                        <option value="Education & Training" className="bg-brand-secondary">Education & Training</option>
                        <option value="Professional Services" className="bg-brand-secondary">Professional Services</option>
                        <option value="Real Estate" className="bg-brand-secondary">Real Estate</option>
                        <option value="NGOs & Nonprofits" className="bg-brand-secondary">NGOs & Nonprofits</option>
                        <option value="Other Sector" className="bg-brand-secondary">Other Sector</option>
                      </select>
                      {/* Custom dropdown arrow */}
                      <div className="absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none text-brand-muted text-[10px]">
                        &#9660;
                      </div>
                    </div>
                    {errors.industry && (
                      <p id="industry-error" className="text-[10px] text-red-400 font-semibold">{errors.industry}</p>
                    )}
                  </div>

                  {/* Multi-Select Services Checklist */}
                  <div className="flex flex-col gap-2">
                    <span className="text-[10px] font-bold text-white uppercase tracking-wider font-sora">
                      Services Interested In *
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-1">
                      {availableServices.map((service) => {
                        const isChecked = formData.selectedServices.includes(service);
                        return (
                          <button
                            key={service}
                            type="button"
                            onClick={() => handleServiceToggle(service)}
                            disabled={status === "loading"}
                            className={cn(
                              "flex items-center gap-2.5 p-3 rounded-lg border text-left text-xs font-semibold font-sora transition-all duration-200",
                              isChecked
                                ? "bg-brand-accent/10 border-brand-accent text-white"
                                : "bg-brand-secondary/20 border-brand-border text-brand-muted hover:border-brand-border-hover hover:text-white"
                            )}
                          >
                            <div className={cn(
                              "h-4 w-4 rounded flex items-center justify-center border transition-all duration-200 shrink-0",
                              isChecked 
                                ? "bg-brand-accent border-brand-accent text-white" 
                                : "border-brand-border bg-brand-bg text-transparent"
                            )}>
                              <Check className="h-3 w-3" />
                            </div>
                            {service}
                          </button>
                        );
                      })}
                    </div>
                    {errors.selectedServices && (
                      <p className="text-[10px] text-red-400 font-semibold mt-1">{errors.selectedServices}</p>
                    )}
                  </div>

                  {/* Estimated Budget Selector (Redesigned from dropdown) */}
                  <div className="flex flex-col gap-2">
                    <span className="text-[10px] font-bold text-white uppercase tracking-wider font-sora">
                      Estimated Budget *
                    </span>
                    <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 mt-1">
                      {["< ₹50,000", "₹50,000 - ₹1,00,000", "₹1,00,000 - ₹1,80,000", "₹1,80,000 - ₹2,50,000", "₹2,50,000+"].map((tier) => {
                        const isSelected = formData.budget === tier;
                        return (
                          <button
                            key={tier}
                            type="button"
                            onClick={() => {
                              setFormData((prev) => ({ ...prev, budget: tier }));
                              if (errors.budget) setErrors((err) => ({ ...err, budget: "" }));
                            }}
                            disabled={status === "loading"}
                            className={cn(
                              "h-11 px-1 rounded-xl border text-center text-[10px] font-bold font-sora transition-all duration-200",
                              isSelected
                                ? "bg-brand-accent/10 border-brand-accent text-white shadow-sm"
                                : "bg-brand-secondary/20 border-brand-border text-brand-muted hover:border-brand-border-hover hover:text-white"
                            )}
                          >
                            {tier}
                          </button>
                        );
                      })}
                    </div>
                    {errors.budget && (
                      <p className="text-[10px] text-red-400 font-semibold mt-1">{errors.budget}</p>
                    )}

                    {/* Dynamic Deliverables Estimator Panel */}
                    {formData.budget && budgetDeliverables[formData.budget] && (
                      <div className="bg-brand-secondary/40 border border-brand-border/60 rounded-xl p-3.5 mt-2 flex items-start gap-2.5 text-xs text-brand-muted leading-relaxed relative overflow-hidden">
                        <div className="h-6 w-6 rounded-full bg-brand-success/15 border border-brand-success/30 flex items-center justify-center text-brand-success shrink-0 mt-0.5">
                          <Check className="h-3.5 w-3.5" />
                        </div>
                        <div>
                          <span className="text-[9px] uppercase font-bold text-brand-success tracking-wider block font-sora">
                            Target Deliverables Guideline
                          </span>
                          <p className="mt-0.5 text-white/95 font-medium leading-relaxed font-sora">
                            {budgetDeliverables[formData.budget]}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Project Description */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="description" className="text-[10px] font-bold text-white uppercase tracking-wider font-sora">
                      Project Description & Goals *
                    </label>
                    <textarea
                      id="description"
                      name="description"
                      rows={4}
                      value={formData.description}
                      onChange={handleInputChange}
                      disabled={status === "loading"}
                      placeholder="Please outline your current business challenges and what systems you want to design, automate, or improve..."
                      aria-invalid={!!errors.description}
                      aria-describedby={errors.description ? "description-error" : undefined}
                      className={cn(
                        "bg-brand-secondary/25 border border-brand-border/80 hover:border-brand-border text-white text-xs sm:text-sm rounded-xl p-3 focus:outline-none focus:border-brand-accent focus:bg-brand-secondary/50 transition-all duration-300 resize-none focus:shadow-[0_0_15px_rgba(37,99,235,0.08)]",
                        errors.description && "border-red-500/40 focus:border-red-500/50"
                      )}
                    />
                    {errors.description && (
                      <p id="description-error" className="text-[10px] text-red-400 font-semibold">{errors.description}</p>
                    )}
                  </div>

                  {/* Preferred Contact Method */}
                  <div className="flex flex-col gap-2">
                    <span className="text-[10px] font-bold text-white uppercase tracking-wider font-sora">
                      Preferred Contact Method
                    </span>
                    <div className="flex items-center gap-6 mt-1">
                      {["Email", "WhatsApp", "Phone"].map((method) => {
                        const isSelected = formData.preferredContact === method;
                        return (
                          <label key={method} className="flex items-center gap-2 cursor-pointer select-none text-xs font-semibold text-brand-muted hover:text-white transition-colors duration-200">
                            <input
                              type="radio"
                              name="preferredContact"
                              value={method}
                              checked={isSelected}
                              onChange={handleInputChange}
                              disabled={status === "loading"}
                              className="sr-only"
                            />
                            <div className={cn(
                              "h-4 w-4 rounded-full border flex items-center justify-center transition-all duration-200",
                              isSelected ? "border-brand-accent" : "border-brand-border"
                            )}>
                              {isSelected && (
                                <div className="h-2 w-2 rounded-full bg-brand-accent" />
                              )}
                            </div>
                            {method}
                          </label>
                        );
                      })}
                    </div>
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    variant="glow"
                    size="lg"
                    disabled={status === "loading"}
                    className="w-full gap-2 mt-4"
                  >
                    {status === "loading" ? (
                      <>
                        <Loader2 className="h-5 w-5 animate-spin" />
                        Processing Ingestion...
                      </>
                    ) : (
                      <>
                        Send Discovery Parameters
                        <ArrowRight className="h-5 w-5" />
                      </>
                    )}
                  </Button>

                  {status === "error" && (
                    <p className="text-xs text-red-400 font-semibold text-center mt-2">
                      An error occurred during submission. Please try again.
                    </p>
                  )}

                  {/* Security badge */}
                  <div className="flex items-center gap-1.5 justify-center mt-1 text-[9px] text-brand-muted uppercase font-bold font-mono">
                    <ShieldCheck className="h-4 w-4 text-brand-success" />
                    <span>Secure SSL data transmission layer active</span>
                  </div>
                  
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
