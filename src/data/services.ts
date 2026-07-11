export interface Service {
  id: string;
  number: string;
  title: string;
  positioning: string;
  description: string;
  capabilities: string[];
}

export const services: Service[] = [
  {
    id: "websites",
    number: "01",
    title: "Premium Websites",
    positioning: "Build trust. Convert more.",
    description: "We design and develop high-performance, conversion-focused websites that help businesses look professional, build credibility, and turn visitors into customers.",
    capabilities: [
      "Business & corporate websites",
      "Conversion landing pages",
      "E-commerce websites",
      "Modern website redesigns",
      "Booking & enquiry systems",
      "Ongoing website maintenance"
    ]
  },
  {
    id: "ai-calling",
    number: "02",
    title: "AI Calling Agents",
    positioning: "Never miss an opportunity.",
    description: "AI-powered voice agents that help businesses handle customer calls, qualify leads, book appointments, follow up with prospects, and provide support around the clock.",
    capabilities: [
      "24/7 AI receptionists",
      "Automated lead qualification",
      "Calendar appointment booking",
      "First-tier customer support",
      "Outbound follow-up campaigns",
      "Call summaries & CRM logs"
    ]
  },
  {
    id: "automation",
    number: "03",
    title: "Workflow Automation",
    positioning: "Do more with less manual work.",
    description: "We automate repetitive business processes and connect existing tools so teams can save time, reduce errors, and focus on higher-value work.",
    capabilities: [
      "Lead-to-CRM automations",
      "Email & WhatsApp follow-ups",
      "Auto appointment reminders",
      "Automated invoice workflows",
      "Form-to-database workflows",
      "AI document processing"
    ]
  },
  {
    id: "crm",
    number: "04",
    title: "CRM & Lead Management",
    positioning: "Turn more leads into customers.",
    description: "We help businesses capture, organize, track, and convert leads through structured CRM systems and intelligent follow-up workflows.",
    capabilities: [
      "CRM strategy & pipeline setup",
      "Custom sales pipelines",
      "Lead capture configurations",
      "Lead tracking & analytics dashboards",
      "Customer databases & segmentation",
      "WhatsApp & email API integrations"
    ]
  },
  {
    id: "seo-aeo",
    number: "05",
    title: "SEO & AEO",
    positioning: "Get discovered where customers search.",
    description: "We help businesses improve visibility across traditional search engines and emerging AI-powered answer engines.",
    capabilities: [
      "Technical & on-page SEO",
      "Local SEO & map optimization",
      "Keyword research & strategy",
      "Answer Engine Optimization (AEO)",
      "Structured schema markup",
      "Google Business Profile optimization"
    ]
  },
  {
    id: "custom-apps",
    number: "06",
    title: "Custom Web Applications",
    positioning: "Technology built around your business.",
    description: "We design and develop secure, scalable web applications tailored to unique business workflows and operational requirements.",
    capabilities: [
      "Admin & management dashboards",
      "Secure customer/client portals",
      "Inventory & logistics systems",
      "Custom booking platforms",
      "Internal productivity tools",
      "RAG knowledge bases & AI chatbots"
    ]
  }
];
