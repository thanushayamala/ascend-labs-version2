import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Problem } from "@/components/sections/Problem";
import { Services } from "@/components/sections/Services";
import { Industries } from "@/components/sections/Industries";
import { Differentiators } from "@/components/sections/Differentiators";
import { Process } from "@/components/sections/Process";
import { Portfolio } from "@/components/sections/Portfolio";
import { TechStack } from "@/components/sections/TechStack";
import { FAQ } from "@/components/sections/FAQ";
import { Contact } from "@/components/sections/Contact";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-brand-bg text-brand-text antialiased">
      {/* Navigation Header */}
      <Navbar />

      {/* Main Content Layout */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero />

        {/* Business Challenge / Transformation Mapping */}
        <Problem />

        {/* Core Services Asymmetric Grid */}
        <Services />

        {/* Industries / Who We Help */}
        <Industries />

        {/* Key Differentiators / Why Choose Us */}
        <Differentiators />

        {/* Ascend Growth Framework Process */}
        <Process />

        {/* Featured Case Studies Blueprints */}
        <Portfolio />

        {/* Tech Stack Tabs Grid */}
        <TechStack />

        {/* Accessible FAQ Accordion */}
        <FAQ />

        {/* Discovery Parameters Intake Form */}
        <Contact />

        {/* Final Climax Call to Action */}
        <FinalCTA />
      </main>

      {/* Global Page Footer */}
      <Footer />
    </div>
  );
}
