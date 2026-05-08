export interface CaseStudy {
  slug: string;
  industry: string;
  name: string;
  tagline: string;
  challenge: string;
  solution: string;
  outcome: string;
  metric: string;
  metricLabel: string;
  stack: string[];
  duration: string;
  year: string;
  quote?: { text: string; name: string; title: string };
}

export const CASES: CaseStudy[] = [
  {
    slug: "trading-infra",
    industry: "FinTech",
    name: "Real-Time Trading Infrastructure",
    tagline: "Zero-downtime migration of a $2.4B-daily-volume order management system.",
    challenge:
      "A mid-sized trading firm was running a legacy OMS built in 2009. It couldn't handle modern order volumes, had zero observability, and was hemorrhaging latency. Any downtime meant real financial loss.",
    solution:
      "We re-architected the core matching engine in Rust, replaced the message bus with a low-latency Kafka topology, and built a shadow-mode migration path so the old and new systems ran in parallel until confidence was established.",
    outcome:
      "Latency dropped 70%. The migration completed with zero unplanned downtime. The new system handles 3x the previous peak volume without breaking a sweat.",
    metric: "70%",
    metricLabel: "Latency reduction",
    stack: ["Rust", "Kafka", "PostgreSQL", "Kubernetes", "Prometheus"],
    duration: "6 months",
    year: "2024",
    quote: {
      text: "Forge didn't just deliver what we asked for. They told us when we were wrong and built what we actually needed. That kind of honesty is rare.",
      name: "Mira Okonkwo",
      title: "CTO, Aether Financial, Series B",
    },
  },
  {
    slug: "diagnostic-imaging",
    industry: "Healthcare AI",
    name: "Diagnostic Imaging Pipeline",
    tagline: "A CV model for radiology pre-screening, deployed across 14 hospital networks.",
    challenge:
      "Radiologists at a hospital network were overwhelmed by scan volume. Preliminary reads were being delayed by 48+ hours, directly impacting patient outcomes. Off-the-shelf models weren't accurate enough for clinical deployment.",
    solution:
      "We built a custom computer vision pipeline fine-tuned on the hospital's own historical data. The model triages incoming scans by urgency and flags anomalies for immediate radiologist review, integrating directly into existing PACS systems.",
    outcome:
      "94% model accuracy on the hold-out test set. Time-to-radiologist for high-priority scans dropped from 48 hours to under 4. Deployed across 14 networks in 6 months.",
    metric: "94%",
    metricLabel: "Model accuracy",
    stack: ["Python", "PyTorch", "TensorFlow", "AWS", "DICOM", "Docker"],
    duration: "8 months",
    year: "2023",
  },
  {
    slug: "cross-chain-liquidity",
    industry: "Web3 / DeFi",
    name: "Cross-Chain Liquidity Protocol",
    tagline: "A novel AMM with dynamic fee structures, audited and shipped with $80M TVL at launch.",
    challenge:
      "A DeFi team had a compelling AMM design but no in-house Solidity expertise capable of handling cross-chain mechanics at the level of security required for a public launch.",
    solution:
      "We designed and implemented the smart contract architecture, built the dynamic fee oracle, and coordinated a formal security audit. Every decision was documented and reviewed with the founding team before going on-chain.",
    outcome:
      "$80M TVL at launch. Zero critical vulnerabilities found in audit. The protocol has been running without incident for 12 months.",
    metric: "$80M",
    metricLabel: "TVL at launch",
    stack: ["Solidity", "Hardhat", "Foundry", "Ethereum", "The Graph", "TypeScript"],
    duration: "5 months",
    year: "2024",
    quote: {
      text: "Four months from kickoff to mainnet. I've never seen a team ship a DeFi protocol that fast without cutting corners.",
      name: "Sarah Chen",
      title: "Founder, QuantumLP",
    },
  },
  {
    slug: "analytics-dashboard",
    industry: "SaaS",
    name: "Multi-Tenant Analytics Dashboard",
    tagline: "A white-label analytics platform built from scratch for a B2B SaaS company.",
    challenge:
      "A B2B SaaS company needed a white-label analytics solution that could serve hundreds of enterprise tenants from a single codebase, with per-tenant data isolation and custom branding.",
    solution:
      "We built a multi-tenant Next.js application backed by a row-level security PostgreSQL schema. Tenant customization is handled via a configuration layer, not code forks. Performance is consistent regardless of tenant data size.",
    outcome:
      "400+ active enterprise tenants on a single codebase. Zero data isolation incidents. Onboarding a new tenant takes minutes, not days.",
    metric: "400+",
    metricLabel: "Active tenants",
    stack: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "Vercel", "Redis"],
    duration: "4 months",
    year: "2024",
  },
  {
    slug: "contract-parser",
    industry: "AI / ML",
    name: "Natural Language Contract Parser",
    tagline: "LLM pipeline that extracts structured data from legal documents in under 5 minutes.",
    challenge:
      "A legal tech company was spending 3 hours per contract on manual data extraction. The variance in document format made rules-based parsing unreliable. They needed something that could handle real-world document messiness.",
    solution:
      "We built an LLM pipeline using structured output extraction and a multi-pass verification strategy. The system handles PDFs, scanned documents, and handwritten annotations with confidence scoring on every extracted field.",
    outcome:
      "97% extraction accuracy on the validation set. Manual review time dropped from 3 hours to 4 minutes per contract. The system processes 500+ contracts per day in production.",
    metric: "97%",
    metricLabel: "Extraction accuracy",
    stack: ["Python", "OpenAI", "LangChain", "PostgreSQL", "FastAPI", "AWS"],
    duration: "3 months",
    year: "2025",
  },
  {
    slug: "kyc-verification",
    industry: "FinTech",
    name: "KYC Verification Engine",
    tagline: "Automated identity verification integrating 6 data providers at 12K daily verifications.",
    challenge:
      "A fintech startup was manually processing KYC verifications with a 2-day turnaround. As they scaled, the process didn't. Compliance required multiple data provider integrations, and the existing vendor solution was too slow and too expensive.",
    solution:
      "We built a custom KYC orchestration engine that routes verification requests across 6 data providers based on cost, speed, and jurisdiction rules. The system handles fallbacks automatically and logs every decision for audit.",
    outcome:
      "Processes 12,000 verifications daily with a 99.3% uptime SLA. Average verification time under 90 seconds. Cost per verification dropped 60% versus the previous vendor.",
    metric: "12K",
    metricLabel: "Daily verifications",
    stack: ["Node.js", "TypeScript", "PostgreSQL", "Redis", "Docker", "AWS"],
    duration: "4 months",
    year: "2023",
    quote: {
      text: "They caught a critical race condition in our trading engine before we went live. That alone paid for the engagement.",
      name: "Arjun Mehta",
      title: "VP Engineering, NovaPay",
    },
  },
];

export function getCaseBySlug(slug: string): CaseStudy | undefined {
  return CASES.find((c) => c.slug === slug);
}

export function getAllSlugs(): string[] {
  return CASES.map((c) => c.slug);
}
