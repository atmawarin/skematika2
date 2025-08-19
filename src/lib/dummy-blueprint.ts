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
  // Overview Group
  {
    id: "section_1",
    blueprintId: "bp_1", 
    sectionType: "overview",
    title: "Overview",
    order: 1,
    status: "complete" as const,
    content: {
      title: "Executive Summary",
      subtitle: "Elipsia: We help founders validate ideas with AI-accelerated MVPs in 90 days.",
      body: `Elipsia is an AI-first software company headquartered in Yogyakarta, Indonesia, specializing in the blueprinting, building, and testing of software projects utilizing advanced artificial intelligence technologies. We cater primarily to technology startups and enterprises seeking agile and efficient AI integration from the conceptual phase through deployment. Our unique approach accelerates project development and product validation, enabling clients to rapidly prototype and test data-centric solutions to ensure market fit and viability.

The global market for rapid application development is experiencing unprecedented growth, driven by the increasing demand for faster time-to-market and the democratization of software development. In Indonesia's emerging tech ecosystem, Elipsia positions itself as a catalyst for innovation, bridging the gap between ambitious ideas and market-ready solutions.

Our proprietary platform combines automated code generation, intelligent user feedback collection, and predictive analytics to reduce MVP development time from months to weeks. This approach has proven particularly valuable for Indonesian startups navigating the competitive Southeast Asian market, where speed and agility determine success.`
    },
    aiGenerated: true,
    lastGenerated: new Date('2024-01-15')
  },
  {
    id: "section_2", 
    blueprintId: "bp_1",
    sectionType: "swot",
    title: "SWOT Analysis", 
    order: 2,
    status: "complete" as const,
    content: {
      title: "SWOT Analysis",
      subtitle: "Strategic positioning assessment for Elipsia's market entry",
      body: `## Strengths
• **AI-First Methodology**: Proprietary algorithms that accelerate development cycles by 70%
• **Local Market Expertise**: Deep understanding of Indonesian startup ecosystem and regulatory environment
• **Technical Excellence**: Team with proven track record in AI/ML implementations
• **Cost Advantage**: 40% lower development costs compared to international alternatives

## Weaknesses  
• **Limited Brand Recognition**: New entrant competing against established players
• **Resource Constraints**: Small team may struggle with scaling operations
• **Technology Dependency**: Heavy reliance on third-party AI services and infrastructure

## Opportunities
• **Growing Indonesian Tech Market**: $40B projected market size by 2025
• **Government Digital Transformation**: National initiatives supporting tech innovation
• **Regional Expansion**: Southeast Asian markets with similar development patterns
• **Partnership Potential**: Integration opportunities with local accelerators and VCs

## Threats
• **International Competition**: Well-funded global players entering Indonesian market  
• **Technology Disruption**: Rapid AI advancement could obsolete current approaches
• **Regulatory Changes**: Evolving data protection and AI governance requirements
• **Economic Volatility**: Market downturns affecting startup funding and demand`
    },
    aiGenerated: true,
    lastGenerated: new Date('2024-01-15')
  },
  {
    id: "section_3",
    blueprintId: "bp_1", 
    sectionType: "business_models",
    title: "Business Models",
    order: 3,
    status: "generating" as const,
    content: {
      title: "Business Models",
      subtitle: "Revenue streams and monetization strategy",
      body: `*This section is being generated...*`
    },
    aiGenerated: false,
    lastGenerated: new Date('2024-01-15')
  },
  
  // Market Research Group
  {
    id: "section_4",
    blueprintId: "bp_1",
    sectionType: "industry_overview", 
    title: "Market Research",
    order: 4,
    status: "complete" as const,
    content: {
      title: "Industry Overview", 
      subtitle: "Rapid application development and AI-assisted software creation landscape",
      body: `The rapid application development (RAD) industry has evolved significantly with the integration of artificial intelligence, creating new opportunities for accelerated software creation. The global low-code development platform market is projected to grow from $13.2 billion in 2023 to $65.3 billion by 2028, representing a CAGR of 37.8%.

## Market Drivers

**Digital Transformation Acceleration**: Organizations worldwide are prioritizing digital initiatives, with 89% of companies having adopted or planning to adopt a digital-first business strategy. This creates massive demand for faster development cycles.

**Developer Shortage**: The global shortage of software developers (estimated 85 million by 2030) is driving demand for AI-assisted development tools that can bridge the skills gap.

**AI Maturation**: Advanced language models and automated code generation have reached commercial viability, enabling sophisticated development assistance previously unavailable.

## Indonesian Context

Indonesia's digital economy is projected to reach $315 billion by 2025, with over 2,000 active startups requiring rapid development solutions. The local market presents unique opportunities:

- **Government Support**: Indonesia's "Making Indonesia 4.0" initiative allocates $15B for digital transformation
- **Growing Tech Talent**: 200,000+ IT professionals with increasing AI/ML expertise  
- **Regional Hub Potential**: Strategic location for Southeast Asian expansion

## Technology Trends

**AI-First Development**: Integration of GPT-5 and specialized coding models enabling 80% faster initial development
**No-Code/Low-Code Adoption**: 65% of large enterprises plan to implement low-code solutions by 2025
**Edge AI Deployment**: Local processing capabilities reducing latency and data privacy concerns`
    },
    aiGenerated: true,
    lastGenerated: new Date('2024-01-16')
  },
  {
    id: "section_5",
    blueprintId: "bp_1",
    sectionType: "target_audience",
    title: "Target Audience", 
    order: 5,
    status: "complete" as const,
    content: {
      title: "Target Audience",
      subtitle: "Primary customer segments and their characteristics",
      body: `## Primary Segment: Early-Stage Startups

**Demographics**: Tech founders aged 25-40 with 2-8 years industry experience, typically holding technical or product management backgrounds. Located primarily in Jakarta, Bandung, Yogyakarta, and Surabaya.

**Pain Points**:
• Limited technical resources for rapid prototyping
• Uncertainty about market fit before significant investment  
• Pressure to demonstrate progress to investors quickly
• Need for data-driven validation of assumptions

**Buying Behavior**: Value speed and cost-efficiency over enterprise features. Prefer pay-as-you-go models with ability to scale. Decision makers are typically founders or technical co-founders.

## Secondary Segment: Digital Transformation Teams

**Demographics**: Innovation teams within established Indonesian corporations (banking, retail, manufacturing) tasked with modernizing operations and customer experiences.

**Pain Points**:
• Legacy system integration challenges
• Long approval cycles for new technology adoption
• Need to demonstrate ROI quickly for experimental projects
• Skill gaps in AI/ML implementation

**Buying Behavior**: Require enterprise-grade security and compliance features. Prefer pilot programs before full commitment. Decision involves multiple stakeholders including CTO, CDO, and procurement teams.

## Market Size Analysis

**Total Addressable Market (TAM)**: $2.1B - All Indonesian businesses requiring digital solutions
**Serviceable Addressable Market (SAM)**: $340M - Tech startups and digital transformation teams  
**Serviceable Obtainable Market (SOM)**: $34M - Early adopters of AI-assisted development tools

**Customer Acquisition Strategy**:
- Developer community engagement through technical workshops
- Partnership with local accelerators (Block71, 1982 Ventures)
- Content marketing targeting CTO and founder communities
- Freemium model for initial user acquisition`
    },
    aiGenerated: true,
    lastGenerated: new Date('2024-01-16')
  },
  {
    id: "section_6", 
    blueprintId: "bp_1",
    sectionType: "competitor_analysis",
    title: "Competitor Analysis",
    order: 6, 
    status: "pending" as const,
    content: {
      title: "Competitor Analysis",
      subtitle: "Competitive landscape and positioning strategy", 
      body: `*This section is pending generation...*`
    },
    aiGenerated: false,
    lastGenerated: new Date('2024-01-15')
  }
];

export const sectionGroups = [
  {
    title: "Overview", 
    sections: dummySections.filter(s => s.sectionType.startsWith('overview') || ['swot', 'business_models'].includes(s.sectionType))
  },
  {
    title: "Market Research",
    sections: dummySections.filter(s => ['industry_overview', 'target_audience', 'competitor_analysis'].includes(s.sectionType))
  },
  {
    title: "Products & Services", 
    sections: [] // Will be populated later
  }
];