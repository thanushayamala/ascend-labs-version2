export interface Industry {
  id: string;
  title: string;
  description: string;
  useCase: string;
}

export const industries: Industry[] = [
  {
    id: "startups",
    title: "Startups & Tech",
    description: "Launch quickly with premium landing pages, custom web applications, and automated lead capture pipelines designed to validate and scale.",
    useCase: "Waitlists, interactive MVPs, and CRM setup."
  },
  {
    id: "healthcare",
    title: "Healthcare & Wellness",
    description: "Build patient trust with high-credibility websites, and streamline operations with automated booking, SMS reminders, and secure patient databases.",
    useCase: "Online booking, intake forms, and automated reminders."
  },
  {
    id: "restaurants",
    title: "Restaurants & Cafés",
    description: "Attract more local patrons through local SEO, digital menus, table reservation integrations, and automated customer notifications.",
    useCase: "Mobile-first menus, reservation systems, and local maps."
  },
  {
    id: "retail",
    title: "Retail & E-commerce",
    description: "Drive sales and retention with modern storefronts, inventory integrations, checkout optimizations, and automated cart abandonment sequences.",
    useCase: "Online stores, payment systems, and inventory sync."
  },
  {
    id: "education",
    title: "Education & E-learning",
    description: "Engage students and clients with modern portal architectures, class registration forms, resource libraries, and automated event reminders.",
    useCase: "Student portals, booking modules, and knowledge systems."
  },
  {
    id: "services",
    title: "Professional Services",
    description: "Elevate your authority (Consultants, Agencies, Legal) with structured case studies, search visibility, automated qualification, and CRM tracking.",
    useCase: "Quote calculators, scheduling, and lead databases."
  },
  {
    id: "realestate",
    title: "Real Estate",
    description: "Capture serious buyers and sellers with interactive property listings, high-speed map search, virtual tour embedding, and CRM routing.",
    useCase: "Listing boards, virtual viewing requests, and lead routing."
  },
  {
    id: "ngos",
    title: "NGOs & Nonprofits",
    description: "Drive impact with optimized donation landing pages, volunteer sign-up systems, impact reports, and transparent structured content.",
    useCase: "Donation integrations, volunteer registration, and resource lists."
  }
];
