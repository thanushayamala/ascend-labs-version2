"use client";

import { Mail, Phone } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const targetId = href.replace("#", "");
      const targetElement = document.getElementById(targetId);
      
      if (targetElement) {
        const offset = 90;
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - offset;
        
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }
    }
  };

  return (
    <footer className="bg-brand-bg border-t border-brand-border pt-16 pb-8 relative z-10">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-12">
          {/* Brand Info Column */}
          <div className="md:col-span-4 flex flex-col gap-4">
            <a href="#hero" onClick={(e) => handleLinkClick(e, "#hero")} className="flex items-center gap-2 group w-fit">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-tr from-brand-accent to-brand-violet flex items-center justify-center shadow-lg shadow-brand-accent/20 group-hover:scale-105 transition-transform duration-300">
                <span className="text-white font-sora font-extrabold text-base select-none leading-none">A</span>
              </div>
              <span className="text-lg font-bold font-sora tracking-tight text-white select-none">
                Ascend<span className="text-brand-accent">Labs</span>
              </span>
            </a>
            <p className="text-sm font-semibold text-white/90 font-sora mt-2">
              Every Business Deserves to Ascend.
            </p>
            <p className="text-sm text-brand-muted max-w-sm">
              Helping ambitious businesses build, automate, and scale through modern, high-performance technology.
            </p>
            <div className="flex items-center gap-4 mt-2">
              <a
                href="mailto:thanushayamala@gmail.com"
                className="p-2 rounded-lg bg-brand-elevated hover:bg-brand-secondary border border-brand-border text-brand-muted hover:text-white transition-colors duration-200"
                aria-label="Email Ascend Labs"
              >
                <Mail className="h-4 w-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg bg-brand-elevated hover:bg-brand-secondary border border-brand-border text-brand-muted hover:text-white transition-colors duration-200"
                aria-label="LinkedIn Profile"
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                </svg>
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg bg-brand-elevated hover:bg-brand-secondary border border-brand-border text-brand-muted hover:text-white transition-colors duration-200"
                aria-label="GitHub Profile"
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              </a>
              <a
                href="https://wa.me/917416684932"
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg bg-brand-elevated hover:bg-brand-secondary border border-brand-border text-brand-muted hover:text-white transition-colors duration-200"
                aria-label="WhatsApp Contact"
              >
                <Phone className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="md:col-span-2 flex flex-col gap-4">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider font-sora">
              Quick Links
            </h4>
            <ul className="flex flex-col gap-2">
              {["Services", "Industries", "Process", "Work", "Contact"].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    onClick={(e) => handleLinkClick(e, `#${item.toLowerCase()}`)}
                    className="text-sm text-brand-muted hover:text-white transition-colors duration-200"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Column */}
          <div className="md:col-span-3 flex flex-col gap-4">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider font-sora">
              Services
            </h4>
            <ul className="flex flex-col gap-2">
              {[
                { name: "Premium Websites", id: "services" },
                { name: "AI Calling Agents", id: "services" },
                { name: "Workflow Automation", id: "services" },
                { name: "CRM & Lead Management", id: "services" },
                { name: "SEO & AEO", id: "services" },
                { name: "Custom Web Applications", id: "services" }
              ].map((service, index) => (
                <li key={index}>
                  <a
                    href={`#${service.id}`}
                    onClick={(e) => handleLinkClick(e, `#${service.id}`)}
                    className="text-sm text-brand-muted hover:text-white transition-colors duration-200"
                  >
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Overview Column */}
          <div className="md:col-span-3 flex flex-col gap-4">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider font-sora">
              Let&apos;s Talk
            </h4>
            <p className="text-sm text-brand-muted">
              Ready to automate your operations and scale your business? Book a strategy consultation.
            </p>
            <div className="flex flex-col gap-1.5 mt-2">
              <a 
                href="#contact" 
                onClick={(e) => handleLinkClick(e, "#contact")} 
                className="text-sm font-semibold text-brand-accent hover:underline duration-200"
              >
                Book Strategy Call &rarr;
              </a>
              <span className="text-xs text-brand-muted">
                Response time: Under 24 hours
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-brand-border/40 pt-8 mt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-brand-muted text-center sm:text-left">
            &copy; {currentYear} Ascend Labs. All rights reserved. Made for growth.
          </p>
          <div className="flex items-center gap-6">
            <a href="#privacy" className="text-xs text-brand-muted hover:text-white transition-colors duration-200">
              Privacy Policy
            </a>
            <a href="#terms" className="text-xs text-brand-muted hover:text-white transition-colors duration-200">
              Terms & Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
