export interface TechGroup {
  category: string;
  description: string;
  items: { name: string; role: string }[];
}

export const techStack: TechGroup[] = [
  {
    category: "Frontend",
    description: "High-performance interfaces, lightning-fast loading, and premium responsive presentation.",
    items: [
      { name: "React", role: "Dynamic User Interfaces" },
      { name: "Next.js", role: "Server-Side Rendering & SEO" },
      { name: "TypeScript", role: "Type-Safe Application Logic" },
      { name: "JavaScript", role: "Interactive Operations" },
      { name: "Tailwind CSS", role: "Modern Responsive Styling" },
      { name: "Framer Motion", role: "Premium Micro-Animations" }
    ]
  },
  {
    category: "Backend",
    description: "Secure, performant servers, API endpoints, and clean enterprise business logic.",
    items: [
      { name: "Python", role: "Data Processing & AI Logic" },
      { name: "FastAPI", role: "High-Performance REST APIs" },
      { name: "Node.js", role: "Scalable Event-Driven Servers" },
      { name: "Express.js", role: "Flexible Application Routing" }
    ]
  },
  {
    category: "AI & Automation",
    description: "Practical intelligence systems and background flow configurations to save teams time.",
    items: [
      { name: "OpenAI", role: "Generative Reasoning & Models" },
      { name: "LangChain", role: "AI Agent Routing & Pipelines" },
      { name: "n8n", role: "Visual Workflow Automations" },
      { name: "AI Voice Agents", role: "24/7 Telephone Reception" },
      { name: "RAG Systems", role: "Contextual Custom Knowledge" }
    ]
  },
  {
    category: "Database",
    description: "Reliable data storage, indexing, and transactional integrity for customer data.",
    items: [
      { name: "PostgreSQL", role: "Relational Enterprise Data" },
      { name: "MongoDB", role: "Flexible Document Storage" },
      { name: "Supabase", role: "Real-time Backend & Auth" },
      { name: "Redis", role: "High-Speed Memory Caching" }
    ]
  },
  {
    category: "Infrastructure",
    description: "Optimized hosting, secure networks, and fast delivery networks.",
    items: [
      { name: "Vercel", role: "Optimized Next.js Edge Hosting" },
      { name: "Render", role: "Serverless Web Services" },
      { name: "Docker", role: "Standardized Containerization" },
      { name: "Google Cloud", role: "Robust Cloud Databases & Storage" },
      { name: "AWS", role: "Scalable Compute Infrastructure" }
    ]
  },
  {
    category: "Tools",
    description: "Collaborative systems to guarantee clear milestones, version control, and design accuracy.",
    items: [
      { name: "Git", role: "Version Control Systems" },
      { name: "GitHub", role: "Collaborative Code Management" },
      { name: "Figma", role: "High-Fidelity Interface Design" },
      { name: "Postman", role: "API Integration Testing" },
      { name: "Notion", role: "Documentation & Milestones" }
    ]
  }
];
