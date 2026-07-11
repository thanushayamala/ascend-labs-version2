export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export const faqs: FAQItem[] = [
  {
    id: "q1",
    question: "What types of businesses do you work with?",
    answer: "We primarily partner with startups, professional services, healthcare clinics, retail brands, restaurants, real estate firms, and educational or nonprofit organizations. If you are an ambitious business ready to transition from manual, disconnected operations to modern, scalable systems, we are built for you."
  },
  {
    id: "q2",
    question: "How long does a typical project take?",
    answer: "Project timelines depend entirely on scope. A premium marketing website or landing page structure takes 2 to 4 weeks. Intermediate workflow automations or CRM setups typically take 3 to 6 weeks. Complete custom web applications or advanced AI integrations can span 6 to 12 weeks. We map out clear, transparent milestones during strategizing so you always know what to expect."
  },
  {
    id: "q3",
    question: "Do you only build websites?",
    answer: "No. While premium, high-converting websites are a core pillar of our work, we specialize in building full growth systems. This includes custom web applications, workflow automations, CRM configurations, search engine optimization (SEO/AEO), and voice-capable AI calling agents. We build whatever technology is required to help your business operate and scale."
  },
  {
    id: "q4",
    question: "Can you automate our existing business processes?",
    answer: "Yes, this is one of our primary services. We analyze your manual processes (such as copy-pasting data, sending repetitive email follow-ups, or handling bookings manually) and replace them with secure, automated background flows. This allows your team to focus on higher-value operations."
  },
  {
    id: "q5",
    question: "Can you integrate with our existing tools?",
    answer: "Yes. We prioritize connecting and optimizing the tools you already use (like Google Workspace, Slack, Salesforce, HubSpot, Stripe, WhatsApp Business, and standard databases). We build secure integrations using official APIs and services like n8n or custom backend microservices."
  },
  {
    id: "q6",
    question: "Do you provide ongoing support after launch?",
    answer: "Yes. Our relationship does not end at deployment. We offer ongoing maintenance, monitoring, security updates, and performance optimization plans. We also help you analyze your user data, SEO metrics, and lead conversions to continually improve the system."
  },
  {
    id: "q7",
    question: "How much does a project cost?",
    answer: "Our projects are custom-scoped based on your business objectives and complexity. Website builds or automations typically start at $3,000, while complex custom software or integrated AI platforms are larger engagements. We provide a detailed project proposal with fixed pricing before any work begins, ensuring no hidden surprises."
  },
  {
    id: "q8",
    question: "How do we get started?",
    answer: "The best first step is to book a Free Strategy Call. During this 30-minute call, we will discuss your current business operations, your growth goals, and identify where modern technology can make the biggest impact. We will follow up with a tailormade strategy roadmap for your business."
  }
];
