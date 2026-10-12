import { ProfileData } from '../types/profile.ts';

export function generateMarkdown(data: ProfileData): string {
  const badgeTheme = data.themeStyle === 'github-dark' ? 'black' : 'lightgrey';
  
  const techBadges = [
    '![React](https://img.shields.io/badge/React_19-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)',
    '![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)',
    '![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)',
    '![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)',
    '![PostgreSQL](https://img.shields.io/badge/PostgreSQL-4169E1?style=for-the-badge&logo=postgresql&logoColor=white)',
    '![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)',
    '![AWS](https://img.shields.io/badge/AWS-232F3E?style=for-the-badge&logo=amazonwebservices&logoColor=FF9900)',
    '![Terraform](https://img.shields.io/badge/Terraform-844FBA?style=for-the-badge&logo=terraform&logoColor=white)',
    '![GitHub Actions](https://img.shields.io/badge/GitHub_Actions-2088FF?style=for-the-badge&logo=githubactions&logoColor=white)',
  ].join(' ');

  const projectsMarkdown = data.projects
    .map(
      (p, i) => `### 0${i + 1}. [${p.name}](${p.repoUrl})
${p.description}

- **Architecture:** ${p.architecture}
- **Tech Stack:** ${p.techStack.map(t => `\`${t}\``).join(' · ')}
- **Engineering Impact:** **${p.metrics}**
- **Links:** [Source Code](${p.repoUrl}) | [Live System Preview](${p.liveUrl})

---`
    )
    .join('\n\n');

  const skillsMarkdown = data.skillCategories
    .map((category) => {
      const skillsList = category.skills
        .map((s) => `\`${s.name}\``)
        .join(' · ');
      return `| **${category.category}** | ${skillsList} |`;
    })
    .join('\n');

  const cicdTable = data.ciCdSteps
    .map(
      (step, idx) =>
        `| **Stage ${idx + 1}: ${step.title}** | \`${step.tool}\` | ${step.description} | *${step.guardrail}* |`
    )
    .join('\n');

  const infraServices = data.cloudInfra.services.map(s => `- ${s}`).join('\n');
  const infraContainer = data.cloudInfra.containerization.map(s => `- ${s}`).join('\n');
  const infraIaC = data.cloudInfra.iac.map(s => `- ${s}`).join('\n');
  const infraMonitoring = data.cloudInfra.monitoring.map(s => `- ${s}`).join('\n');

  const md = `# Hi there, I'm ${data.fullName} 👋
### ${data.title}

<p align="left">
  ${data.tagline}
</p>

${data.showBadges ? `\n<p align="left">\n  ${techBadges}\n</p>\n` : ''}

---

## ⚡ Engineering Philosophy & Architecture Standards

I architect and deliver web applications where **maintainability**, **scalability**, and **user experience** intersect. Rather than treating frontend and backend as isolated silos, I apply holistic distributed system patterns across the full software lifecycle.

${data.architecturalPillars
  .map(
    (pillar) => `### ▹ ${pillar.title}
${pillar.description}`
  )
  .join('\n\n')}

---

## 🚀 Recent Featured Projects

${projectsMarkdown}

---

## 🛠️ Core Technical Skills Matrix

| Domain | Technologies, Frameworks & Standards |
| :--- | :--- |
${skillsMarkdown}

---

## ☁️ Cloud Infrastructure & Resiliency Architecture

High-level web software requires infrastructure that matches application rigor. My cloud deployments follow immutable infrastructure principles, multi-region redundancy, and minimal blast radius design:

### Compute & Cloud Topology (${data.cloudInfra.provider})
${infraServices}

### Containerization & Packaging
${infraContainer}

### Infrastructure as Code (IaC)
${infraIaC}

### Telemetry & Observability
${infraMonitoring}

---

## 🔄 CI/CD Pipeline & Automated Quality Gates

Every code change moves through an automated delivery pipeline designed to catch regressions, security vulnerabilities, and performance degradation before reaching production.

\`\`\`mermaid
flowchart LR
    A[git push / PR] --> B[Lint & Static Typing]
    B --> C[Unit & Integration Tests]
    C --> D[Docker Multi-Stage Build]
    D --> E[Trivy Security Scan]
    E --> F[Ephemeral Preview Env]
    F --> G[Playwright E2E Tests]
    G --> H[Blue/Green Production Rollout]
    H --> I[Canary Health Checks]
\`\`\`

| Stage | Tooling | Scope | Automated Guardrail |
| :--- | :--- | :--- | :--- |
${cicdTable}

---

${
  data.showStats
    ? `## 📊 Engineering Analytics & Activity

<p align="center">
  <img src="https://github-readme-stats.vercel.app/api?username=${data.githubUsername}&show_icons=true&theme=github_dark&hide_border=true&count_private=true" alt="${data.fullName}'s GitHub Stats" width="48%" />
  <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=${data.githubUsername}&layout=compact&theme=github_dark&hide_border=true" alt="Top Languages" width="48%" />
</p>

${
  data.showStreak
    ? `<p align="center">
  <img src="https://github-readme-streak-stats.herokuapp.com/?user=${data.githubUsername}&theme=github_dark&hide_border=true" alt="GitHub Streak" width="98%" />
</p>`
    : ''
}

---`
    : ''
}

## 📬 Connect & Collaborate

- 💼 **LinkedIn:** [${data.linkedin}](${data.linkedin})
- 🌐 **Portfolio:** [${data.portfolio}](${data.portfolio})
- 📧 **Direct Inquiries:** [${data.email}](mailto:${data.email})
- 📍 **Location:** ${data.location}
- 🎯 **Current Focus:** ${data.currentFocus}

<p align="center">
  <sub>Engineered with precision for maintainability, reliability, and scale.</sub>
</p>
`;

  return md;
}
