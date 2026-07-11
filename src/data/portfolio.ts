export interface CaseStudy {
  id: string;
  name: string;
  industry: string;
  isPlaceholder: boolean;
  challenge: string;
  solution: string;
  services: string[];
  tech: string[];
  impact: string;
  imagePlaceholderColor: string; // Used to style a premium abstract vector card rather than using generic stock photos
}

export const caseStudies: CaseStudy[] = [
  {
    id: "medflow",
    name: "MedFlow Wellness Portal",
    industry: "Healthcare & Clinic Services",
    isPlaceholder: true,
    challenge: "A growing clinic was losing up to 30% of incoming patient booking requests due to manual phone intake and outdated calendar systems, leading to high administrative fatigue and client frustration.",
    solution: "Developed a modern, HIPAA-compliant patient scheduling engine. Implemented automated SMS confirmation sequences, sync-ready clinician timetables, and an intuitive client dashboard.",
    services: ["Premium Websites", "Workflow Automation", "CRM & Lead Management"],
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase", "Node.js"],
    impact: "Designed to handle 24/7 calendar availability, reducing booking administration time by up to 80% while establishing an immediate, professional patient first impression.",
    imagePlaceholderColor: "from-blue-600/20 to-indigo-600/5"
  },
  {
    id: "apex-logistics",
    name: "Apex Cargo Operations",
    industry: "Logistics & Transport",
    isPlaceholder: true,
    challenge: "Operations team manually copy-pasted shipping details, dispatch requests, and invoices between emails, spreadsheets, and legacy databases, causing order delays and data inconsistencies.",
    solution: "Designed and deployed a serverless workflow automation suite that automatically extracts shipping details from incoming dispatch emails, pushes them into a central database, and updates customer CRMs.",
    services: ["Workflow Automation", "CRM & Lead Management", "Custom Web Applications"],
    tech: ["Python", "FastAPI", "n8n", "PostgreSQL", "Docker"],
    impact: "Designed to eliminate manual data-entry overhead, preventing operational bottlenecks and establishing automated pipeline tracking from booking to cargo delivery.",
    imagePlaceholderColor: "from-violet-600/20 to-fuchsia-600/5"
  },
  {
    id: "savor-delivery",
    name: "Savor Gourmet Marketplace",
    industry: "Food & Beverage E-Commerce",
    isPlaceholder: true,
    challenge: "A premium catering and food brand relied on third-party aggregators with high commission rates (up to 30%) and had no direct channel to own, communicate with, and retain their digital customer base.",
    solution: "Built a highly responsive, custom foodordering application. Designed local SEO structures and Answer Engine Optimization (AEO) schemas to rank for specific regional queries.",
    services: ["Premium Websites", "SEO & AEO", "Custom Web Applications"],
    tech: ["React", "Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL"],
    impact: "Allows businesses to capture 100% of order revenue directly, enabling customized loyalty promotions, real-time dispatch updates, and direct ownership of client relations.",
    imagePlaceholderColor: "from-indigo-600/20 to-purple-600/5"
  }
];
