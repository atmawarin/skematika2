// Dummy blueprint data for UI development
export const dummyBlueprint = {
  id: "bp_2",
  userId: "user_1",
  type: "external" as const,
  status: "ready" as const,
  title: "GreenCycle: Smart Waste Management Platform",
  
  // Original wizard data
  wizardData: {
    customerType: "external",
    problem: "Cities struggle with inefficient waste collection routes and poor recycling rates, leading to overflowing bins and environmental waste.",
    location: "Indonesia",
    keyFeatures: [
      "AI-optimized collection routes",
      "Smart bin monitoring sensors", 
      "Citizen reporting app",
      "Recycling reward system"
    ],
    marketQuestion: "How does your city currently handle waste management and recycling programs?"
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
    blueprintId: "bp_2", 
    sectionType: "vision",
    title: "Vision",
    order: 1,
    status: "pending" as const,
    content: {
      title: "Vision",
      subtitle: "GreenCycle: Revolutionizing urban waste management through smart technology.",
      body: `<p>Start writing your vision here, or type "/" to insert templates...</p>`
    },
    aiGenerated: false,
    lastGenerated: new Date('2024-01-15')
  },
  {
    id: "market_opportunity",
    blueprintId: "bp_2",
    sectionType: "market_opportunity",
    title: "Market Opportunity",
    order: 2,
    status: "complete" as const,
    content: {
      title: "Market Opportunity",
      subtitle: "Waste management market analysis and growth potential",
      body: `<p>This section needs content. Type "/" to insert templates like Market Analysis...</p>`
    },
    aiGenerated: true,
    lastGenerated: new Date('2024-01-15')
  },
  {
    id: "opportunity",
    blueprintId: "bp_2",
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
    blueprintId: "bp_2", 
    sectionType: "business_model",
    title: "Business Model",
    order: 5,
    status: "complete" as const,
    content: {
      title: "Business Model",
      subtitle: "Revenue streams and sustainable monetization strategy",
      body: `<h2>Revenue Model Overview</h2>
<p>Elipsia operates on a project-based service model with three distinct tiers, designed to accommodate startups at different stages and funding levels.</p>

<h2>Primary Revenue Streams</h2>

<h3>1. MVP Development Packages</h3>
<ul>
<li><strong>Starter Package</strong>: $15,000 (Basic MVP + 30-day validation)</li>
<li><strong>Growth Package</strong>: $35,000 (Advanced MVP + 90-day market testing)</li>
<li><strong>Enterprise Package</strong>: $75,000 (Full platform + 6-month growth support)</li>
</ul>

<h3>2. Ongoing Success Partnerships</h3>
<ul>
<li>5-15% equity stake in high-potential startups</li>
<li>Revenue sharing for post-launch growth</li>
<li>Strategic advisory and mentorship services</li>
</ul>

<h3>3. AI Platform Licensing</h3>
<ul>
<li>SaaS subscription for development teams: $2,500/month</li>
<li>White-label licensing to agencies: $50,000/year</li>
<li>API access for enterprise integration: $10,000/month</li>
</ul>

<h2>Unit Economics</h2>
<ul>
<li>Average project value: $35,000</li>
<li>Gross margin: 65% (after AI infrastructure costs)</li>
<li>Customer acquisition cost: $3,500</li>
<li>Lifetime value: $125,000 (including follow-up projects)</li>
</ul>

<h2>Financial Projections (3-Year)</h2>
<ul>
<li>Year 1: $1.2M revenue (24 projects)</li>
<li>Year 2: $4.8M revenue (96 projects + platform)</li>
<li>Year 3: $12.5M revenue (200+ projects + licensing)</li>
</ul>

<h2>Monetization Strategy</h2>
<p>Focus on high-value, long-term partnerships rather than volume transactions. Target startups with $500K+ funding or established companies with innovation budgets exceeding $100K annually.</p>`
    },
    aiGenerated: false,
    lastGenerated: new Date('2024-01-15')
  },
  {
    id: "target_market",
    blueprintId: "bp_2",
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
    blueprintId: "bp_2",
    sectionType: "priority", 
    title: "Priority",
    order: 7,
    status: "complete" as const,
    content: {
      title: "Priority",
      subtitle: "Focus areas for early adoption",
      body: `<h2>Phase 1 Priorities (Months 1-6)</h2>

<h3>Product Development</h3>
<ul>
<li>Complete AI-powered prototyping engine</li>
<li>Build user feedback collection system</li>
<li>Develop automated testing framework</li>
<li>Create template library for common use cases</li>
</ul>

<h3>Market Entry</h3>
<ul>
<li>Secure 3 pilot clients in Jakarta startup ecosystem</li>
<li>Establish partnerships with key accelerators</li>
<li>Build case studies demonstrating 90-day delivery</li>
<li>Develop Indonesian market expertise database</li>
</ul>

<h3>Team Building</h3>
<ul>
<li>Recruit senior AI/ML engineers (2 positions)</li>
<li>Hire product designers with startup experience (2 positions)</li>
<li>Onboard business development manager</li>
<li>Establish advisory board with successful Indonesian founders</li>
</ul>

<h2>Phase 2 Priorities (Months 7-12)</h2>

<h3>Scaling Operations</h3>
<ul>
<li>Standardize delivery methodology</li>
<li>Implement quality assurance processes</li>
<li>Build client success management system</li>
<li>Develop pricing optimization models</li>
</ul>

<h3>Geographic Expansion</h3>
<ul>
<li>Research Bandung and Surabaya markets</li>
<li>Establish local partnerships in target cities</li>
<li>Adapt platform for regional business regulations</li>
<li>Build network of freelance specialists</li>
</ul>

<h2>Success Metrics</h2>
<ul>
<li>Client satisfaction score: &gt;8.5/10</li>
<li>Project delivery time: &lt;90 days average</li>
<li>Post-launch success rate: &gt;70% achieve initial traction</li>
<li>Revenue per project: $35K average</li>
</ul>`
    },
    aiGenerated: true,
    lastGenerated: new Date('2024-01-15')
  },
  {
    id: "growth_plan",
    blueprintId: "bp_2",
    sectionType: "growth_plan",
    title: "Growth Plan", 
    order: 8,
    status: "complete" as const,
    content: {
      title: "Growth Plan",
      subtitle: "Roadmap to expand market penetration",
      body: `<h2>Year 1: Foundation &amp; Validation</h2>

<h3>Q1-Q2: Market Entry</h3>
<ul>
<li>Launch with 3 pilot projects in Jakarta startup ecosystem</li>
<li>Establish partnerships with accelerators (Ideabox, Alpha JWC)</li>
<li>Build initial case studies and testimonials</li>
</ul>

<h3>Q3-Q4: Product-Market Fit</h3>
<ul>
<li>Scale to 24 projects annually</li>
<li>Refine AI development toolkit based on user feedback</li>
<li>Expand team to 12 specialists (developers, designers, strategists)</li>
</ul>

<h2>Year 2: Regional Expansion</h2>

<h3>Market Penetration</h3>
<ul>
<li>Enter Bandung, Surabaya, and Yogyakarta markets</li>
<li>Launch referral program targeting successful alumni</li>
<li>Achieve 96 projects annually across 4 cities</li>
</ul>

<h3>Product Evolution</h3>
<ul>
<li>Release self-service AI platform for smaller clients</li>
<li>Introduce white-label licensing for development agencies</li>
<li>Build strategic partnerships with major VCs and corporate innovation teams</li>
</ul>

<h2>Year 3: Platform Scaling</h2>

<h3>Regional Leadership</h3>
<ul>
<li>Expand to Singapore, Malaysia, and Thailand markets</li>
<li>Establish 200+ annual project capacity</li>
<li>Launch enterprise licensing program</li>
</ul>

<h3>Strategic Initiatives</h3>
<ul>
<li>Acquire complementary AI/development tools</li>
<li>Build venture capital fund for equity partnerships</li>
<li>Establish Elipsia Academy for developer training</li>
</ul>`
    },
    aiGenerated: true,
    lastGenerated: new Date('2024-01-15')
  },
  {
    id: "competitive_landscape",
    blueprintId: "bp_2",
    sectionType: "competitive_landscape",
    title: "Competitive Landscape", 
    order: 9,
    status: "complete" as const,
    content: {
      title: "Competitive Landscape",
      subtitle: "Benchmark incumbents and identify solution gaps",
      body: `<h2>Direct Competitors</h2>

<h3>Global Players</h3>
<p><strong>Bubble.io</strong></p>
<ul>
<li>Strengths: Large user base, extensive template library</li>
<li>Weaknesses: Limited AI integration, complex learning curve</li>
<li>Market position: $1.1B valuation, 3M+ users globally</li>
</ul>

<p><strong>OutSystems</strong></p>
<ul>
<li>Strengths: Enterprise focus, robust platform capabilities</li>
<li>Weaknesses: High cost ($75K+ annually), limited startup accessibility</li>
<li>Market position: $9.5B valuation, 500+ enterprise clients</li>
</ul>

<p><strong>Microsoft Power Platform</strong></p>
<ul>
<li>Strengths: Enterprise integration, Microsoft ecosystem</li>
<li>Weaknesses: Complex setup, requires technical expertise</li>
<li>Market position: Part of $200B+ Microsoft ecosystem</li>
</ul>

<h3>Regional Competition</h3>
<p><strong>Indonesian Development Agencies</strong></p>
<ul>
<li>50+ traditional agencies (GDP Venture, Refactory, Binar Academy)</li>
<li>Average project cost: $25K-100K</li>
<li>Timeline: 4-8 months for MVP</li>
<li>Limited AI integration and validation methodology</li>
</ul>

<h2>Indirect Competitors</h2>
<p><strong>Traditional Consulting</strong></p>
<ul>
<li>McKinsey Digital, BCG, Deloitte innovation labs</li>
<li>High cost ($150K+ projects), longer timelines (6-12 months)</li>
<li>Strong strategy but limited technical execution</li>
</ul>

<h2>Competitive Advantages</h2>
<ul>
<li><strong>Speed</strong>: 90-day MVP vs 6-month industry average</li>
<li><strong>Localization</strong>: Indonesian market expertise and payment integration</li>
<li><strong>AI-Native</strong>: Purpose-built for AI-accelerated development</li>
<li><strong>Validation Focus</strong>: Built-in user research and market testing</li>
<li><strong>Startup-Friendly</strong>: Equity partnerships and flexible pricing</li>
</ul>`
    },
    aiGenerated: true,
    lastGenerated: new Date('2024-01-15')
  },
  {
    id: "positioning",
    blueprintId: "bp_2",
    sectionType: "positioning",
    title: "Positioning & Differentiation",
    order: 10,
    status: "complete" as const,
    content: {
      title: "Positioning & Differentiation", 
      subtitle: "Unique selling proposition and competitive advantages",
      body: `<h2>Unique Value Proposition</h2>

<p><strong>"The only AI-powered MVP platform built specifically for Southeast Asian startups"</strong></p>

<p>Elipsia combines global best practices with local market expertise to deliver validated products in 90 days, not 6 months.</p>

<h2>Core Differentiators</h2>

<h3>1. AI-Accelerated Development</h3>
<ul>
<li>Proprietary AI toolkit reduces development time by 65%</li>
<li>Automated code generation with human oversight</li>
<li>Intelligent testing and optimization algorithms</li>
</ul>

<h3>2. Validation-First Methodology</h3>
<ul>
<li>Built-in user research and feedback loops</li>
<li>Predictive analytics for market fit assessment</li>
<li>Real-time pivot recommendations based on user data</li>
</ul>

<h3>3. Regional Market Expertise</h3>
<ul>
<li>Deep understanding of Indonesian consumer behavior</li>
<li>Local payment integration (QRIS, OVO, GoPay)</li>
<li>Bahasa Indonesia support and cultural adaptation</li>
<li>Regulatory compliance (Bank Indonesia, OJK)</li>
</ul>

<h3>4. Startup-Centric Business Model</h3>
<ul>
<li>Flexible pricing including equity partnerships</li>
<li>Mentorship and strategic advisory included</li>
<li>Post-launch growth support and scaling assistance</li>
</ul>

<h2>Positioning Statement</h2>

<p>For ambitious Southeast Asian founders who need to validate their ideas quickly, Elipsia is the AI-powered MVP development platform that transforms concepts into market-ready products in 90 days.</p>

<p>Unlike traditional agencies that focus on delivery, we focus on validation and market success.</p>

<h2>Brand Pillars</h2>
<ul>
<li><strong>Speed</strong>: Fastest path from idea to market</li>
<li><strong>Intelligence</strong>: AI-driven decisions at every step</li>
<li><strong>Partnership</strong>: Success-aligned business model</li>
<li><strong>Expertise</strong>: Local market knowledge meets global standards</li>
</ul>`
    },
    aiGenerated: true,
    lastGenerated: new Date('2024-01-15')
  },

  // Part II — Product Definition  
  {
    id: "user_personas",
    blueprintId: "bp_2",
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
    blueprintId: "bp_2",
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
    blueprintId: "bp_2",
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
    blueprintId: "bp_2",
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
    blueprintId: "bp_2",
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
    blueprintId: "bp_2",
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
    blueprintId: "bp_2",
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

  // Part III — Technical Specification
  {
    id: "frontend_stack",
    blueprintId: "bp_2",
    sectionType: "frontend_stack",
    title: "Front-end Stack",
    order: 19, 
    status: "pending" as const,
    content: {
      title: "Front-end Stack",
      subtitle: "Client-side technologies, frameworks, and libraries",
      body: `*This section is pending generation...*`
    },
    aiGenerated: false,
    lastGenerated: new Date('2024-01-15')
  },
  {
    id: "backend_stack",
    blueprintId: "bp_2",
    sectionType: "backend_stack",
    title: "Backend Stack",
    order: 20, 
    status: "pending" as const,
    content: {
      title: "Backend Stack",
      subtitle: "Server-side technologies, APIs, and data processing",
      body: `*This section is pending generation...*`
    },
    aiGenerated: false,
    lastGenerated: new Date('2024-01-15')
  },
  {
    id: "server_setup",
    blueprintId: "bp_2",
    sectionType: "server_setup",
    title: "Server Setup",
    order: 21, 
    status: "pending" as const,
    content: {
      title: "Server Setup",
      subtitle: "Infrastructure, hosting, and server configuration",
      body: `*This section is pending generation...*`
    },
    aiGenerated: false,
    lastGenerated: new Date('2024-01-15')
  },
  {
    id: "deployment_stack",
    blueprintId: "bp_2",
    sectionType: "deployment_stack",
    title: "Deployment Stack",
    order: 22, 
    status: "pending" as const,
    content: {
      title: "Deployment Stack",
      subtitle: "CI/CD pipelines, deployment automation, and monitoring",
      body: `*This section is pending generation...*`
    },
    aiGenerated: false,
    lastGenerated: new Date('2024-01-15')
  },
  {
    id: "deployment",
    blueprintId: "bp_2",
    sectionType: "deployment",
    title: "Deployment & CI/CD",
    order: 23,
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
    blueprintId: "bp_2",
    sectionType: "business_rules", 
    title: "Business Rules",
    order: 24,
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
    blueprintId: "bp_2",
    sectionType: "integration_catalog",
    title: "Integration Catalog",
    order: 25,
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
    blueprintId: "bp_2",
    sectionType: "database_schema",
    title: "Database Schema",
    order: 26,
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
    blueprintId: "bp_2", 
    sectionType: "security",
    title: "Security & Compliance",
    order: 27,
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
      'vision', 'market_opportunity', 'opportunity', 
      'business_model', 'target_market', 'priority', 'growth_plan', 
      'competitive_landscape', 'positioning'
    ].includes(s.sectionType))
  },
  {
    title: "Product Definition",
    sections: dummySections.filter(s => [
      'user_personas', 'user_roles', 'features', 'reference_research',
      'user_journeys', 'sitemaps', 'wireframes'
    ].includes(s.sectionType))
  },
  {
    title: "Technical Specification", 
    sections: dummySections.filter(s => [
      'frontend_stack', 'backend_stack', 'server_setup', 'deployment_stack', 'deployment', 'business_rules', 'integration_catalog',
      'database_schema', 'security'
    ].includes(s.sectionType))
  }
];