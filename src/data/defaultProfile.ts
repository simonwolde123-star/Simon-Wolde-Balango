import { ProfileData } from '../types/profile.ts';

export const initialProfileData: ProfileData = {
  fullName: 'Simon Wolde',
  title: 'Software Engineer | Scalable Web Systems & Cloud Architecture',
  tagline: 'Engineering high-throughput, user-centric web applications with React, Node.js, and automated cloud pipelines.',
  githubUsername: 'simonwolde',
  email: 'simonwolde123@gmail.com',
  linkedin: 'https://linkedin.com/in/simonwolde',
  portfolio: 'https://simonwolde.dev',
  location: 'San Francisco, CA / Remote',
  yearsOfExperience: '5+',
  status: 'Open to High-Impact Full-Stack & Systems Engineering Roles',
  currentFocus: 'Distributed event-driven backends, micro-frontends, edge caching, and automated GitOps CI/CD.',
  
  architecturalPillars: [
    {
      title: 'Domain-Driven Design & Clean Architecture',
      description: 'Strict separation of domain logic, use-cases, and infrastructure adapters ensuring codebase testability, zero tight-coupling, and long-term maintainability.'
    },
    {
      title: 'High-Throughput Node.js Concurrency',
      description: 'Event-loop optimization, backpressure handling in Streams, asynchronous worker pools, and Redis Pub/Sub for sub-50ms p99 response times.'
    },
    {
      title: 'Resilient Frontend & Core Web Vitals',
      description: 'React 19 concurrent features, modular component hierarchies, optimistic UI updates, zero layout shifts, and sub-100ms Interaction to Next Paint (INP).'
    },
    {
      title: 'GitOps & Zero-Downtime Infrastructure',
      description: 'Terraform declarative infrastructure as code, multi-stage Docker builds, and automated blue/green rolling deployments with canary safety gates.'
    }
  ],

  skillCategories: [
    {
      category: 'Frontend Engineering',
      iconName: 'Layout',
      skills: [
        { name: 'React 19', level: 'Core' },
        { name: 'TypeScript', level: 'Core' },
        { name: 'Next.js (App Router)', level: 'Advanced' },
        { name: 'Tailwind CSS', level: 'Core' },
        { name: 'Zustand / Redux Toolkit', level: 'Advanced' },
        { name: 'TanStack Query', level: 'Advanced' },
        { name: 'WebSockets & SSE', level: 'Advanced' },
        { name: 'Core Web Vitals', level: 'Advanced' }
      ]
    },
    {
      category: 'Backend & Distributed Systems',
      iconName: 'Server',
      skills: [
        { name: 'Node.js (Runtime & Streams)', level: 'Core' },
        { name: 'Express / NestJS', level: 'Core' },
        { name: 'PostgreSQL / Prisma / Drizzle', level: 'Core' },
        { name: 'Redis (Caching & Pub/Sub)', level: 'Advanced' },
        { name: 'Apache Kafka / RabbitMQ', level: 'Proficient' },
        { name: 'GraphQL & RESTful APIs', level: 'Core' },
        { name: 'gRPC & Protocol Buffers', level: 'Proficient' },
        { name: 'Microservices & Event-Driven', level: 'Advanced' }
      ]
    },
    {
      category: 'Cloud Infrastructure & DevOps',
      iconName: 'Cloud',
      skills: [
        { name: 'Docker (Multi-Stage Builds)', level: 'Core' },
        { name: 'Kubernetes (K8s Deployments)', level: 'Proficient' },
        { name: 'AWS (ECS, Lambda, S3, RDS, CloudFront)', level: 'Advanced' },
        { name: 'Google Cloud Platform (Cloud Run, GKE)', level: 'Advanced' },
        { name: 'Terraform (IaC Modules)', level: 'Advanced' },
        { name: 'Nginx & Reverse Proxies', level: 'Advanced' }
      ]
    },
    {
      category: 'CI/CD, Testing & Observability',
      iconName: 'GitBranch',
      skills: [
        { name: 'GitHub Actions Workflows', level: 'Core' },
        { name: 'Jest & Vitest Unit Testing', level: 'Core' },
        { name: 'Playwright E2E Integration', level: 'Advanced' },
        { name: 'Trivy / Snyk Vulnerability Scans', level: 'Advanced' },
        { name: 'Datadog & Sentry APM', level: 'Advanced' },
        { name: 'Prometheus & Grafana', level: 'Proficient' }
      ]
    }
  ],

  projects: [
    {
      id: 'proj-1',
      name: 'NexusFlow — Distributed Real-Time Collaborative Workspace',
      description: 'High-performance interactive collaborative workspace platform supporting simultaneous document canvas synchronization, conflict resolution, and granular permissions.',
      architecture: 'Event-driven pub/sub architecture utilizing Node.js cluster processes, Redis Streams for sub-30ms state broadcast, and optimistic client-side CRDTs in React 19.',
      techStack: ['React 19', 'TypeScript', 'Node.js', 'Redis Streams', 'PostgreSQL', 'Docker', 'AWS ECS'],
      metrics: 'Handles 15,000+ simultaneous active WebSocket connections; zero data race conditions; 99.99% uptime.',
      repoUrl: 'https://github.com/simonwolde/nexus-flow',
      liveUrl: 'https://nexusflow-demo.simonwolde.dev',
      stars: 184,
      forks: 32
    },
    {
      id: 'proj-2',
      name: 'PulseTelemetry — High-Throughput Stream Analytics & Metrics Engine',
      description: 'Mission-critical telemetry aggregation pipeline processing high-frequency client metric events with real-time anomaly detection and visual dashboard analytics.',
      architecture: 'CQRS pattern separating command ingest from query projections. Node.js stream workers ingest batches to Kafka, persisting to time-series storage with cached Redis aggregations.',
      techStack: ['Node.js', 'Express', 'React', 'Kafka', 'ClickHouse', 'Tailwind CSS', 'Grafana'],
      metrics: 'Ingests 45,000 events/sec with p99 ingest latency under 45ms; reduced dashboard render delay by 74%.',
      repoUrl: 'https://github.com/simonwolde/pulse-telemetry',
      liveUrl: 'https://pulse-telemetry.simonwolde.dev',
      stars: 142,
      forks: 21
    },
    {
      id: 'proj-3',
      name: 'CloudOps Sentinel — Declarative GitOps Multi-Region CI/CD Pipeline',
      description: 'Automated deployment orchestrator that provisions ephemeral preview environments on pull requests and manages canary rollouts across multi-region Kubernetes clusters.',
      architecture: 'Custom GitHub Actions automation orchestrator leveraging Terraform Cloud modules, Docker container builds with image layer caching, and automated health probing gates.',
      techStack: ['GitHub Actions', 'Terraform', 'Docker', 'AWS EKS', 'Node.js CLI', 'Datadog API'],
      metrics: 'Decreased team build-to-production deployment duration from 38 mins to 4.2 mins; 100% automated rollback on 5xx threshold triggers.',
      repoUrl: 'https://github.com/simonwolde/cloudops-sentinel',
      liveUrl: 'https://sentinel-docs.simonwolde.dev',
      stars: 96,
      forks: 14
    },
    {
      id: 'proj-4',
      name: 'AuraStore Micro-Frontend — Enterprise Modular E-Commerce Core',
      description: 'Decomposed enterprise storefront utilizing Module Federation, allowing autonomous feature teams to deploy cart, catalog, and checkout independently.',
      architecture: 'Webpack Module Federation + Next.js App Router with shared state bus, edge API gateway caching via Cloudflare Workers, and server-side streaming render.',
      techStack: ['React', 'Next.js', 'TypeScript', 'Node.js', 'GraphQL Gateway', 'Tailwind CSS', 'Redis'],
      metrics: 'Lighthouse score: 98/100, Time to Interactive: 0.8s, zero cross-team deployment blockers across 4 distributed teams.',
      repoUrl: 'https://github.com/simonwolde/aurastore-mfe',
      liveUrl: 'https://aurastore.simonwolde.dev',
      stars: 118,
      forks: 19
    }
  ],

  cloudInfra: {
    provider: 'Multi-Cloud',
    services: [
      'AWS ECS & Fargate (Containerized microservices)',
      'Google Cloud Run (Serverless micro-backends & edge webhooks)',
      'AWS S3 + CloudFront CDN (Global static distribution & edge TLS)',
      'Amazon RDS PostgreSQL (Multi-AZ replication & automated snapshots)',
      'ElastiCache Redis (In-memory caching layer & session store)'
    ],
    containerization: [
      'Multi-stage Docker builds minimizing production image footprint (<80MB)',
      'Non-root container user execution for hardened container security',
      'Immutable container tags with Git commit SHA digest verification'
    ],
    orchestration: [
      'Kubernetes Deployment manifests with Horizontal Pod Autoscaling (HPA)',
      'Ingress Controllers with automated Let’s Encrypt TLS renewal',
      'ConfigMaps & Kubernetes Secrets decoupled from codebase'
    ],
    iac: [
      'Modular Terraform configurations for reproducible VPC, subnet, and cluster topologies',
      'Remote state locking via AWS S3 and DynamoDB state backend',
      'Automated `terraform plan` execution and dry-run linting in pull requests'
    ],
    monitoring: [
      'Datadog / Prometheus metrics scraping for p50, p95, p99 API latencies',
      'Distributed tracing with OpenTelemetry across distributed services',
      'Structured JSON logging with correlation IDs for cross-service request traceability'
    ]
  },

  ciCdSteps: [
    {
      title: 'Lint & Static Analysis',
      tool: 'ESLint, Prettier & TypeScript Compiler',
      description: 'Strict type validation (`tsc --noEmit`), AST linting, and circular dependency checks on every Git commit.',
      guardrail: 'Blocks PR merge on any type warning or formatting drift.'
    },
    {
      title: 'Automated Unit & Integration Testing',
      tool: 'Vitest, Jest & Supertest',
      description: 'Parallel test suite execution with mock external services, in-memory DB instances, and >85% code coverage threshold.',
      guardrail: 'Stops workflow immediately if any test fails or coverage drops below benchmark.'
    },
    {
      title: 'Container Build & Vulnerability Scan',
      tool: 'Docker Buildx & Trivy / Snyk',
      description: 'Multi-stage build leveraging GitHub Actions cache for layer reuse; security vulnerability scanning of base OS packages and npm packages.',
      guardrail: 'Rejects images with CVE severity HIGH or CRITICAL.'
    },
    {
      title: 'Infrastructure Verification & Preview Env',
      tool: 'Terraform & Cloud Run / AWS ECS',
      description: 'Generates speculative Terraform plans and provisions isolated PR preview URL for team acceptance testing.',
      guardrail: 'Automatic cleanup on PR merge or branch close.'
    },
    {
      title: 'End-to-End Smoke Tests',
      tool: 'Playwright Headless',
      description: 'Automated user journey validations (authentication, data persistence, checkout / transaction flows) against preview deployment.',
      guardrail: 'Zero flake policy; enforces idempotent state cleanup.'
    },
    {
      title: 'Zero-Downtime Production Deployment',
      tool: 'Blue/Green Rolling Deployment & Health Probes',
      description: 'Traffic switched gradually (10% -> 50% -> 100%) with continuous p99 latency and error rate evaluation.',
      guardrail: 'Instant automated rollback to previous stable digest if 5xx error rate exceeds 0.5%.'
    }
  ],

  showStats: true,
  showStreak: true,
  showBadges: true,
  themeStyle: 'github-dark'
};
