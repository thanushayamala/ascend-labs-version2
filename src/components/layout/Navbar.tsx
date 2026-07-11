"use client";

import { useState, useEffect } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { useScrollSpy } from "@/hooks/useScrollSpy";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Services", href: "#services", id: "services" },
  { label: "Industries", href: "#industries", id: "industries" },
  { label: "Process", href: "#process", id: "process" },
  { label: "Work", href: "#work", id: "work" },
  { label: "Technology", href: "#technology", id: "technology" },
  { label: "Contact", href: "#contact", id: "contact" }
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const sectionIds = navLinks.map(link => link.id);
  const activeSection = useScrollSpy(sectionIds, 120);
  
  // Scroll progress bar configuration
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 150,
    damping: 25,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    
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
  };

  return (
    <>
      {/* Scroll Progress Bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-brand-accent to-brand-violet z-50 origin-left"
        style={{ scaleX }}
      />

      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-40 transition-all duration-300 border-b",
          scrolled 
            ? "bg-brand-bg/90 backdrop-blur-md border-brand-border py-4 shadow-lg shadow-black/10" 
            : "bg-transparent py-6 border-transparent"
        )}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-8 flex items-center justify-between">
          {/* Logo */}
          <a href="#hero" className="flex items-center gap-2 group" onClick={(e) => handleLinkClick(e, "#hero")}>
            <div className="h-9 w-9 rounded-lg bg-gradient-to-tr from-brand-accent to-brand-violet flex items-center justify-center shadow-lg shadow-brand-accent/20 group-hover:scale-105 transition-transform duration-300">
              <span className="text-white font-sora font-extrabold text-lg select-none leading-none">A</span>
            </div>
            <span className="text-xl font-bold font-sora tracking-tight text-white select-none">
              Ascend<span className="text-brand-accent">Labs</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className={cn(
                    "text-sm font-medium transition-colors relative py-2",
                    isActive 
                      ? "text-white" 
                      : "text-brand-muted hover:text-white"
                  )}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-brand-accent to-brand-violet rounded-full" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <Button href="#contact" variant="glow" size="sm" className="gap-1.5 group">
              Book a Strategy Call
              <ArrowUpRight className="h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-brand-muted hover:text-white focus:outline-none focus:ring-2 focus:ring-brand-accent rounded-lg"
            aria-label="Toggle mobile menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Nav Drawer */}
      <div
        className={cn(
          "fixed inset-0 z-30 bg-brand-bg transition-opacity duration-300 md:hidden",
          mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
      >
        <div className="flex flex-col h-full justify-between pt-28 pb-12 px-8">
          <nav className="flex flex-col gap-6">
            {navLinks.map((link, index) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className={cn(
                    "text-2xl font-semibold font-sora py-3.5 border-b border-brand-border/30 transition-all duration-300",
                    isActive ? "text-brand-accent pl-2" : "text-brand-text hover:text-brand-accent"
                  )}
                  style={{ transitionDelay: `${index * 50}ms` }}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          <div className="flex flex-col gap-6">
            <Button
              href="#contact"
              variant="glow"
              size="lg"
              className="w-full text-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              Book a Strategy Call
            </Button>
            <p className="text-center text-xs text-brand-muted">
              Every Business Deserves to Ascend.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
