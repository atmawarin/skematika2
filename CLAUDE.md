# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Quick Reference

### Common Commands
- `npm run dev` - Start development server
- `npx prisma studio` - Open database GUI
- `npm run lint` - Check code quality
- `npm run type-check` - Verify TypeScript
- `vercel --prod` - Deploy to production

### Key Technologies
- **Stack**: Next.js 15 + React 19 + TypeScript + tRPC + Prisma + Neon
- **Auth**: Clerk (international) + Midtrans (Indonesian payments)
- **AI**: GPT-5/GPT-4 Turbo for blueprint generation
- **Deploy**: Vercel (zero-config)

## Development Workflow

### Task Planning
- Before starting any feature, create a detailed implementation plan in `claude/tasks/YYYYMMDD-feature-name.md`
- Include: implementation steps, technical approach reasoning, specific tasks breakdown
- Example: `claude/tasks/20240818-payment-integration.md`

### Progress Tracking
- Update the task file as you work, documenting completed steps
- After each major milestone, append a detailed description of changes made
- Include any architectural decisions or deviations from the original plan
- This ensures clear handover and progress visibility

### File Naming Convention
- Task files: `YYYYMMDD-descriptive-name.md` 
- Feature branches: `feature/descriptive-name`
- Component files: PascalCase (e.g., `BlueprintWizard.tsx`)
- Utility files: camelCase (e.g., `paymentUtils.ts`)

### AI Development Workflow

#### Devin.ai Integration
- **Complex Features**: Use Devin for multi-file implementations (payment flows, AI integrations)
- **Task Handoff**: Provide detailed specs in `claude/tasks/` for Devin execution
- **Code Generation**: Devin excels at tRPC procedures, Prisma schemas, component libraries
- **Testing**: Devin can implement comprehensive test suites with Vitest

#### CodeRabbit PR Review Process
1. **Implementation**: Complete feature development
2. **PR Creation**: Push to feature branch, create pull request
3. **Automated Review**: CodeRabbit analyzes code for:
   - Security vulnerabilities (payment handling, API keys)
   - Performance issues (React re-renders, database queries)
   - Type safety (tRPC/Prisma consistency)
   - Architecture patterns (component structure, state management)
4. **Feedback Integration**: Address CodeRabbit suggestions
5. **Merge**: Deploy to production via Vercel 

## Technical Specification
Most teams waste weeks drafting blueprints manually — scattered research, inconsistent formats, and unclear priorities lead to costly misalignment later. Founders and product managers often don’t know the right questions to ask, skipping over essentials like competitor analysis or monetization. The result is rework, delays, and wasted budget.

Skematika solves this by providing an AI-powered Blueprint Wizard that guides users step by step, auto-fills research insights, and generates export-ready Business and Product Plans. It ensures clarity, speed, and consistency from day one — cutting weeks of manual effort into a process that takes minutes.

#### Target Audience
Skematika is built for founders, product managers, and innovation leaders who need to move fast from idea to execution. These users often juggle multiple priorities and lack the time or expertise to draft comprehensive blueprints. They need a system that ensures structure, captures insights, and produces investor-ready documentation without slowing them down.

It also serves consulting and product development teams who want to streamline discovery workshops and provide clients with consistent, professional-grade outputs. Instead of starting from scratch, Skematika accelerates alignment and frees experts to focus on strategy and execution rather than documentation.


#### User
Clients (External Users) – Startup founders, business owners, or corporate innovation managers who want to quickly generate structured Business and Product Plans. They use the wizard to define ideas, validate assumptions, and produce export-ready documents.

Internal Teams (Consultants & Product Specialists) – Your own team members who refine the AI-generated blueprint, add strategic insights, and deliver polished outputs to clients. For them, Skematika acts as both a starting point and a productivity multiplier.

### Product Definition
#### Features/Epic
##### Clients 
- As a client, I want a guided blueprint wizard so I can provide inputs step by step without confusion.
- As a client, I want AI-powered autofill to complete the blueprint section by section
- As a client, I want an editable blueprint dashboard so I can refine and customize my generated blueprint.
- As a client, I want to export and share my blueprint in PDF or MD so I can present it to stakeholders and investors.
- As a client, I want to save and resume my project so I can complete the process in multiple sessions.
- As a client, I want to invite team members so we can collaborate on refining the blueprint together.
- As a client, I want the system to highlight missing sections or weak areas so I know where to improve.
- As a client, I want an option to book a consultation with experts so I can sharpen my blueprint further.
- As a client, I want to buy credits so I can unlock the ability to edit or generate a new business blueprint.

##### Admin
- As an admin, I want to manage client accounts and access so I can control who is using the platform.
- As an admin, I want to configure the blueprint structure and AI prompts so outputs stay consistent and high-quality.
- As an admin, I want to review and edit client blueprints so I can provide professional refinement when needed.
- As an admin, I want to set and manage pricing so each blueprint has a clear one-time payment model.
- As an admin, I want to view payment history and generate revenue reports so I can track business performance.
- As an admin, I want to monitor system health and AI response quality so I can detect and resolve issues quickly.
- As an admin, I want to track consultation bookings so I can assign the right expert to support clients.
- As an admin, I want to analyze usage data and client feedback so I can improve the platform experience.


#### User Journey of the App (Mermaid Flow)
```
flowchart TD
    %% ENTRY
    A[Landing / Homepage] --> B[Start Your Blueprint CTA]
    
    %% WIZARD (No Auth Required)
    B --> G["Blueprint Wizard (Typeform-style)"]
    G --> G1["Step 1: Customer Type<br/>Is this for external customers/clients<br/>or internal operations?"]
    G1 --> G2["Step 2: Core Problem<br/>What problem are you solving?"]
    G2 --> G3["Step 3: Location<br/>Where will you operate?"]
    G3 -->|External Path| G4A["Step 4A: Customer Focus<br/>(AI generates based on external product)"]
    G3 -->|Internal Path| G4B["Step 4B: Operations Focus<br/>(AI generates based on internal tool)"]
    G4A --> G5A["Step 5A: Market Question<br/>(Based on Step 4A answer)"]
    G4B --> G5B["Step 5B: Efficiency Question<br/>(Based on Step 4B answer)"]
    G5A --> G6["Step 6: Review & Complete"]
    G5B --> G6
    G6 --> G7["AI Generation: Preview Blueprint"]
    
    %% PREVIEW WITH PAYWALL
    G7 --> H["Blueprint Preview (50% of ALL pages visible)"]
    H --> H1["Show: First half of every section<br/>Executive Summary (50%)<br/>Market Analysis (50%)<br/>Financial Projections (50%)<br/>Implementation Plan (50%)"]
    H --> H2["Hidden: Second half of ALL sections<br/>Complete details cut off mid-content<br/>Key insights and conclusions locked"]
    H --> I{"Want Full Access?"}
    I -->|No| I1["Save Preview<br/>Email Capture for Later"]
    I -->|Yes| J{Logged in?}
    
    %% AUTH & PAYMENT GATE
    J -->|No| J1[Register / Sign In]
    J1 --> K[Payment Gate]
    J -->|Yes| K
    K --> L["One-Time Payment<br/>Unlock Full Blueprint Access"]
    L -->|Success| M["Access Granted: Full Blueprint"]
    L -->|Fail / Retry| L
    
    %% FULL DASHBOARD & EDIT
    M --> N["Full Blueprint Dashboard (Editable)"]
    N --> N1["All Sections Unlocked"]
    N --> N2["Invite Collaborators (optional)"]
    N --> O{Need Expert Review?}
    O -->|Yes| P[Book Consultation]
    P --> P1["Assign Consultant • Annotate & Refine"]
    P1 --> N
    O -->|No| Q[Finalize Blueprint]
    
    %% EXPORT & SHARE
    Q --> R["Export Options<br/>PDF • Markdown • Slide Deck"]
    R --> S[Share with Team/Stakeholders]
    
    %% LOOP-BACKS
    N -->|Continue Editing| N
    S --> T[Start New Project]
    I1 --> T
```



#### Design System
- Base framework: TailwindCSS + Shadcn/ui (modular, scalable, modern components).
- Component library: Cards, form inputs, wizard steps, progress indicators, dashboards.
- UI principle: Full-width workspace with clear hierarchy (sidebar for navigation, content focus area).
- Accessibility: WCAG 2.1 AA compliance baseline.

#### Style Guidelines
- Swiss style design. Editorial / magazine style. 
- Minimalist & Editorial: Layouts feel like magazine spreads — oversized headings, clean grids, generous whitespace.
- Monochrome-first: White and light-gray backgrounds with black/dark gray text. Subtle dotted patterns or grayscale textures add depth without clutter.
- Component structure: Content in card-like blocks, thin dividers, and subtle shadows for hierarchy.
- Screenshot-first visuals: Real product UIs showcased in clean mockups instead of heavy illustrations.
- Make sure all button has a hover state and hover effect. 



#### Animation Patterns
- Subtle fades & slides between sections; transitions should feel natural, not flashy.
- Microinteractions (hover states, input highlights, CTA button ripple/underline).
- Editorial feel: Like a page turning — animations should give a sense of flow, not playfulness.
- Loading states: Skeleton loaders and subtle spinners in monochrome style.


#### Typography
Primary font: Inter for that bold, modern Swiss-style look.

#### Color
Background: Pure White #FFFFFF
Text: Black #000000 and Dark Gray #111827
Borders/Dividers: Light Gray #E5E7EB
Accent: #E6F0F2
Overall feel: 90% monochrome, 10% accent.

#### Brand Tone
Concise: Sentences are stripped of filler.
Neutral but warm: Factual, not hyped — but never robotic.
Directive: Prompts guide the user with clarity.
Swiss-inspired: Functional, structured, objective.

#### Language/Copy
Instead of saying:
"Our platform allows you to easily manage your blueprint projects with a set of advanced tools designed to help you get clarity and structure for your business ideas."

Say:
"Manage your blueprint. Get clarity and structure for your business ideas."

Instead of saying:
"Please fill out the following form to help us better understand your business needs and tailor a solution that works for you."

Say (Synetica style):
"Answer a few questions. We’ll tailor the solution to your needs."


### Technical Specification
#### Technology Stack
- **Frontend Framework**: Next.js 15 + React 19 with TypeScript
- **Styling**: Tailwind CSS v4 + Shadcn/ui components
- **API Layer**: tRPC for full-stack type safety
- **Database**: Neon PostgreSQL with Prisma ORM
- **Authentication**: Clerk (social providers, email/phone)
- **Payment Processing**: 
  - Clerk Billing + Stripe for international users
  - Midtrans for Indonesian market (QRIS, bank transfers, e-wallets)
- **AI Integration**: GPT-5 (fallback to GPT-4 Turbo) for blueprint generation
- **File Storage**: Vercel Blob for exports and document storage
- **Email**: Resend for transactional emails
- **Analytics**: Vercel Analytics for performance and usage tracking

#### Integration Catalog
- **Clerk**: Authentication, user management, and international billing
- **Midtrans API**: Indonesian payment methods via tRPC procedures
- **OpenAI API**: GPT-5/GPT-4 Turbo for blueprint content generation
- **Vercel Blob**: File storage for PDF exports and user uploads
- **Resend**: Email notifications and user communications

#### Library Dependencies
- **UI Components**: @shadcn/ui, @radix-ui/react-*
- **API**: @trpc/server, @trpc/client, @trpc/next
- **Forms**: react-hook-form, zod for validation
- **State Management**: Zustand for client state
- **Database**: @prisma/client, prisma
- **Auth**: @clerk/nextjs
- **Payments**: midtrans-client
- **AI**: openai
- **PDF Generation**: @react-pdf/renderer
- **File Upload**: @vercel/blob

#### Deployment & CI/CD
- **Hosting**: Vercel (Next.js optimized, zero config)
- **Database**: Neon PostgreSQL (serverless, Vercel integration)
- **CDN**: Vercel Edge Network (global)
- **Environment**: Production, Preview, Development branches
- **CI/CD**: Vercel Git integration with GitHub Actions
- **Code Review**: CodeRabbit AI-powered PR reviews
- **Commit Standards**: Conventional Commits with Husky git hooks
- **Testing**: Vitest + Testing Library for unit tests
- **Analytics**: Vercel Analytics (built-in performance monitoring)




## Development Commands

### Setup & Installation
```bash
# Initial setup
npm install
npx prisma generate
npx prisma db push

# Environment setup
cp .env.example .env.local
# Configure: DATABASE_URL, CLERK_SECRET_KEY, OPENAI_API_KEY, MIDTRANS_SERVER_KEY
```

### Development
```bash
# Start development server
npm run dev

# Database operations
npx prisma studio          # Database GUI
npx prisma db push         # Push schema changes
npx prisma generate        # Regenerate client
npx prisma migrate dev     # Create migration
```

### Code Quality
```bash
# Type checking
npm run type-check

# Linting
npm run lint
npm run lint:fix

# Testing
npm run test
npm run test:watch
npm run test:coverage
```

### Testing
```bash
# Run unit tests
npm run test
npm run test:watch
npm run test:coverage

# Run e2e tests
npm run test:e2e
```

### Build & Deploy
```bash
# Build for production
npm run build

# Deploy to Vercel
vercel --prod
```

### Commit & Review Workflow
```bash
# Conventional commits (enforced by husky)
git commit -m "feat(wizard): add step validation"
git commit -m "fix(payments): handle midtrans webhook errors"

# Push triggers CodeRabbit PR review
git push origin feature/payment-integration
```

## Architecture Overview

### Project Structure
```
├── src/
│   ├── app/                 # Next.js 15 app router
│   ├── components/          # Reusable UI components
│   ├── lib/                 # Utilities, configs, clients
│   ├── server/              # tRPC routers and procedures
│   └── types/               # TypeScript type definitions
├── prisma/                  # Database schema and migrations
├── claude/tasks/            # Implementation planning docs
└── public/                  # Static assets
```

### Key Architectural Decisions

#### Database Schema
- **Users**: Managed by Clerk, metadata stored in Prisma for billing
- **Blueprints**: Core entity with status, payment tracking
- **Payments**: Transaction records for both Stripe and Midtrans
- **Consultations**: Expert review bookings and annotations

#### API Design
- **tRPC**: Type-safe procedures for all client-server communication
- **Clerk Webhooks**: User lifecycle and billing events
- **Payment Webhooks**: Midtrans/Stripe payment confirmations
- **AI Integration**: Streamed responses for blueprint generation

#### State Management
- **Server State**: TanStack Query with tRPC integration
- **Client State**: Zustand for UI state and form data
- **Form State**: React Hook Form with Zod validation

---

## Appendix: Business Context

> Detailed business requirements and user stories are below. This context helps understand the product vision but prioritize the Technical Specification section above for development guidance.

### Vision
Skematika provides an AI-powered Blueprint Wizard that guides users step-by-step to generate export-ready Business and Product Plans, cutting weeks of manual effort into minutes.

### Target Users
- **External Clients**: Startup founders, business owners, corporate innovation managers
- **Internal Teams**: Consultants and product specialists who refine and deliver outputs

### Core Features
- Guided blueprint wizard with step-by-step inputs
- AI-powered content generation and autofill
- Editable dashboard for blueprint refinement
- PDF/Markdown export capabilities
- Payment integration (Midtrans QRIS + Stripe)
- Expert consultation booking system