// Dummy blueprint data for UI development
export const dummyBlueprint = {
  id: "bp_1",
  userId: "user_1",
  type: "external" as const,
  status: "ready" as const,
  title: "Elipsia: AI-Accelerated MVP Platform",
  
  // Original wizard data
  wizardData: {
    customerType: "external",
    problem: "Founders spend months building MVPs that may not validate their core assumptions, wasting time and resources before learning what customers actually want.",
    location: "Indonesia",
    keyFeatures: [
      "AI-powered rapid prototyping",
      "Built-in user feedback loops", 
      "One-click deployment",
      "Smart analytics integration"
    ],
    marketQuestion: "How do you currently validate your product ideas before building?"
  },
  
  createdAt: new Date('2024-01-15'),
  updatedAt: new Date('2024-01-20'),
  lastEditedAt: new Date('2024-01-20'),
  version: 1
};

export const dummySections = [
  // Part I — Business Context
  {
    id: "vision",
    blueprintId: "bp_1", 
    sectionType: "vision",
    title: "Vision",
    order: 1,
    status: "complete" as const,
    content: {
      title: "Vision",
      subtitle: "Elipsia: We help founders validate ideas with AI-accelerated MVPs in 90 days.",
      body: `Elipsia is an AI-first software company headquartered in Yogyakarta, Indonesia, specializing in the blueprinting, building, and testing of software projects utilizing advanced artificial intelligence technologies. We cater primarily to technology startups and enterprises seeking agile and efficient AI integration from the conceptual phase through deployment. Our unique approach accelerates project development and product validation, enabling clients to rapidly prototype and test data-centric solutions to ensure market fit and viability.`
    },
    aiGenerated: true,
    lastGenerated: new Date('2024-01-15')
  },
  {
    id: "market_opportunity",
    blueprintId: "bp_1",
    sectionType: "market_opportunity",
    title: "Market Opportunity",
    order: 2,
    status: "complete" as const,
    content: {
      title: "Market Opportunity",
      subtitle: "Industry trends and digital transformation potential",
      body: `The global market for rapid application development is experiencing unprecedented growth, driven by the increasing demand for faster time-to-market and the democratization of software development. In Indonesia's emerging tech ecosystem, Elipsia positions itself as a catalyst for innovation, bridging the gap between ambitious ideas and market-ready solutions.`
    },
    aiGenerated: true,
    lastGenerated: new Date('2024-01-15')
  },
  {
    id: "market_research",
    blueprintId: "bp_1",
    sectionType: "market_research",
    title: "Market Research", 
    order: 3,
    status: "complete" as const,
    content: {
      title: "Market Research",
      subtitle: "Pain points, market size analysis, and opportunity assessment",
      body: `## Pain Points
• Limited technical resources for rapid prototyping
• Uncertainty about market fit before significant investment
• Pressure to demonstrate progress to investors quickly

## Market Size (TAM, SAM, SOM)
• **TAM**: $2.1B - All Indonesian businesses requiring digital solutions
• **SAM**: $340M - Tech startups and digital transformation teams  
• **SOM**: $34M - Early adopters of AI-assisted development tools`
    },
    aiGenerated: true,
    lastGenerated: new Date('2024-01-16')
  },
  {
    id: "opportunity",
    blueprintId: "bp_1",
    sectionType: "opportunity", 
    title: "Opportunity",
    order: 4,
    status: "complete" as const,
    content: {
      title: "Opportunity",
      subtitle: "How the product addresses unmet needs and creates differentiation",
      body: `Our proprietary platform combines automated code generation, intelligent user feedback collection, and predictive analytics to reduce MVP development time from months to weeks. This approach has proven particularly valuable for Indonesian startups navigating the competitive Southeast Asian market, where speed and agility determine success.`
    },
    aiGenerated: true,
    lastGenerated: new Date('2024-01-15')
  },
  {
    id: "business_model",
    blueprintId: "bp_1", 
    sectionType: "business_model",
    title: "Business Model",
    order: 5,
    status: "generating" as const,
    content: {
      title: "Business Model",
      subtitle: "Revenue streams and sustainable monetization strategy",
      body: `*This section is being generated...*`
    },
    aiGenerated: false,
    lastGenerated: new Date('2024-01-15')
  },
  {
    id: "target_market",
    blueprintId: "bp_1",
    sectionType: "target_market",
    title: "Target Market",
    order: 6,
    status: "complete" as const,
    content: {
      title: "Target Market",
      subtitle: "Customer segmentation and key needs analysis",
      body: `## Primary Segment: Early-Stage Startups
Tech founders aged 25-40 with 2-8 years industry experience, typically holding technical or product management backgrounds. Located primarily in Jakarta, Bandung, Yogyakarta, and Surabaya.

## Secondary Segment: Digital Transformation Teams  
Innovation teams within established Indonesian corporations tasked with modernizing operations and customer experiences.`
    },
    aiGenerated: true,
    lastGenerated: new Date('2024-01-16')
  },
  {
    id: "priority",
    blueprintId: "bp_1",
    sectionType: "priority", 
    title: "Priority",
    order: 7,
    status: "pending" as const,
    content: {
      title: "Priority",
      subtitle: "Focus areas for early adoption",
      body: `*This section is pending generation...*`
    },
    aiGenerated: false,
    lastGenerated: new Date('2024-01-15')
  },
  {
    id: "growth_plan",
    blueprintId: "bp_1",
    sectionType: "growth_plan",
    title: "Growth Plan", 
    order: 8,
    status: "pending" as const,
    content: {
      title: "Growth Plan",
      subtitle: "Roadmap to expand market penetration",
      body: `*This section is pending generation...*`
    },
    aiGenerated: false,
    lastGenerated: new Date('2024-01-15')
  },
  {
    id: "competitive_landscape",
    blueprintId: "bp_1",
    sectionType: "competitive_landscape",
    title: "Competitive Landscape", 
    order: 9,
    status: "pending" as const,
    content: {
      title: "Competitive Landscape",
      subtitle: "Benchmark incumbents and identify solution gaps",
      body: `*This section is pending generation...*`
    },
    aiGenerated: false,
    lastGenerated: new Date('2024-01-15')
  },
  {
    id: "positioning",
    blueprintId: "bp_1",
    sectionType: "positioning",
    title: "Positioning & Differentiation",
    order: 10,
    status: "pending" as const,
    content: {
      title: "Positioning & Differentiation", 
      subtitle: "Unique selling proposition and competitive advantages",
      body: `*This section is pending generation...*`
    },
    aiGenerated: false,
    lastGenerated: new Date('2024-01-15')
  },

  // Part II — Product Definition  
  {
    id: "user_personas",
    blueprintId: "bp_1",
    sectionType: "user_personas",
    title: "User Personas",
    order: 11,
    status: "complete" as const,
    content: {
      title: "User Personas",
      subtitle: "Profiles of external users with needs and behaviors",
      body: `## Startup Founder Persona
**Demographics**: Tech founder, age 28-35, technical background
**Goals**: Validate product-market fit quickly, secure funding
**Pain Points**: Limited resources, time pressure, technical uncertainty
**Behavior**: Data-driven decisions, prefers lean methodologies`
    },
    aiGenerated: true,
    lastGenerated: new Date('2024-01-16')
  },
  {
    id: "user_roles",
    blueprintId: "bp_1",
    sectionType: "user_roles",
    title: "User Roles",
    order: 12,
    status: "pending" as const,
    content: {
      title: "User Roles",
      subtitle: "System interactions and permissions for each role",
      body: `*This section is pending generation...*`
    },
    aiGenerated: false,
    lastGenerated: new Date('2024-01-15')
  },
  {
    id: "features",
    blueprintId: "bp_1",
    sectionType: "features",
    title: "Features (Epic-Level)",
    order: 13,
    status: "pending" as const,
    content: {
      title: "Features (Epic-Level Breakdown)",
      subtitle: "Feature groups per role linked to user needs",
      body: `*This section is pending generation...*`
    },
    aiGenerated: false,
    lastGenerated: new Date('2024-01-15')
  },
  {
    id: "reference_research", 
    blueprintId: "bp_1",
    sectionType: "reference_research",
    title: "Reference Research",
    order: 14,
    status: "pending" as const,
    content: {
      title: "Reference Research",
      subtitle: "Case studies and successful product examples",
      body: `*This section is pending generation...*`
    },
    aiGenerated: false,
    lastGenerated: new Date('2024-01-15')
  },
  {
    id: "user_journeys",
    blueprintId: "bp_1",
    sectionType: "user_journeys", 
    title: "User Journeys",
    order: 15,
    status: "pending" as const,
    content: {
      title: "User Journeys (Flow Diagram)",
      subtitle: "How each persona interacts from onboarding to completion",
      body: `*This section is pending generation...*`
    },
    aiGenerated: false,
    lastGenerated: new Date('2024-01-15')
  },
  {
    id: "sitemaps",
    blueprintId: "bp_1",
    sectionType: "sitemaps",
    title: "Sitemaps", 
    order: 16,
    status: "pending" as const,
    content: {
      title: "Sitemaps",
      subtitle: "Navigation and information architecture",
      body: `*This section is pending generation...*`
    },
    aiGenerated: false,
    lastGenerated: new Date('2024-01-15')
  },
  {
    id: "wireframes",
    blueprintId: "bp_1",
    sectionType: "wireframes",
    title: "Wireframes (Consult)",
    order: 17,
    status: "pending" as const,
    content: {
      title: "Wireframes (Consult)",
      subtitle: "Early low-fidelity sketches for stakeholder alignment",
      body: `*This section is pending generation...*`
    },
    aiGenerated: false,
    lastGenerated: new Date('2024-01-15')
  },
  {
    id: "design_system",
    blueprintId: "bp_1",
    sectionType: "design_system",
    title: "Design System",
    order: 18,
    status: "pending" as const,
    content: {
      title: "Design System", 
      subtitle: "Typography, style, and brand tone guidelines",
      body: `*This section is pending generation...*`
    },
    aiGenerated: false,
    lastGenerated: new Date('2024-01-15')
  },

  // Part III — Technical Specification
  {
    id: "technology_stack",
    blueprintId: "bp_1",
    sectionType: "technology_stack",
    title: "Technology Stack",
    order: 19, 
    status: "pending" as const,
    content: {
      title: "Technology Stack (High Level)",
      subtitle: "Frontend, backend, and server infrastructure choices",
      body: `*This section is pending generation...*`
    },
    aiGenerated: false,
    lastGenerated: new Date('2024-01-15')
  },
  {
    id: "deployment",
    blueprintId: "bp_1",
    sectionType: "deployment",
    title: "Deployment & CI/CD",
    order: 20,
    status: "pending" as const,
    content: {
      title: "Deployment & CI/CD",
      subtitle: "Automated build, testing, and release processes",
      body: `*This section is pending generation...*`
    },
    aiGenerated: false,
    lastGenerated: new Date('2024-01-15')
  },
  {
    id: "business_rules",
    blueprintId: "bp_1",
    sectionType: "business_rules", 
    title: "Business Rules",
    order: 21,
    status: "pending" as const,
    content: {
      title: "Business Rules (Per Page/Module)",
      subtitle: "Operational constraints and functional logic",
      body: `*This section is pending generation...*`
    },
    aiGenerated: false,
    lastGenerated: new Date('2024-01-15')
  },
  {
    id: "integration_catalog",
    blueprintId: "bp_1",
    sectionType: "integration_catalog",
    title: "Integration Catalog",
    order: 22,
    status: "pending" as const,
    content: {
      title: "Integration Catalog",
      subtitle: "Third-party tools and APIs for integration",
      body: `*This section is pending generation...*`
    },
    aiGenerated: false,
    lastGenerated: new Date('2024-01-15')
  },
  {
    id: "database_schema",
    blueprintId: "bp_1",
    sectionType: "database_schema",
    title: "Database Schema",
    order: 23,
    status: "pending" as const,
    content: {
      title: "Database Schema (Core Entities)",
      subtitle: "High-level data entities, attributes, and relationships",
      body: `*This section is pending generation...*`
    },
    aiGenerated: false,
    lastGenerated: new Date('2024-01-15')
  },
  {
    id: "security",
    blueprintId: "bp_1", 
    sectionType: "security",
    title: "Security & Compliance",
    order: 24,
    status: "pending" as const,
    content: {
      title: "Security & Compliance Baseline",
      subtitle: "Standards and protection mechanisms (GDPR, PCI DSS)",
      body: `*This section is pending generation...*`
    },
    aiGenerated: false,
    lastGenerated: new Date('2024-01-15')
  }
];

export const sectionGroups = [
  {
    title: "Business Context", 
    sections: dummySections.filter(s => [
      'vision', 'market_opportunity', 'market_research', 'opportunity', 
      'business_model', 'target_market', 'priority', 'growth_plan', 
      'competitive_landscape', 'positioning'
    ].includes(s.sectionType))
  },
  {
    title: "Product Definition",
    sections: dummySections.filter(s => [
      'user_personas', 'user_roles', 'features', 'reference_research',
      'user_journeys', 'sitemaps', 'wireframes', 'design_system'
    ].includes(s.sectionType))
  },
  {
    title: "Technical Specification", 
    sections: dummySections.filter(s => [
      'technology_stack', 'deployment', 'business_rules', 'integration_catalog',
      'database_schema', 'security'
    ].includes(s.sectionType))
  }
];