import { ProfileData } from '../types/profile.ts';

interface GitHubPreviewProps {
  data: ProfileData;
  onSelectProject?: (projectId: string) => void;
}

export function GitHubPreview({ data }: GitHubPreviewProps) {
  return (
    <div className="w-full bg-[#0d1117] text-[#c9d1d9] min-h-screen font-sans border-t border-slate-800">
      {/* GitHub Top Sub-navigation */}
      <div className="border-b border-[#30363d] bg-[#010409]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center gap-6 overflow-x-auto py-3 text-sm">
            <div className="flex items-center gap-2 text-white font-semibold border-b-2 border-[#f78166] pb-2 -mb-3 px-1">
              <svg className="w-4 h-4 text-slate-400" viewBox="0 0 16 16" fill="currentColor">
                <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-6.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13z" />
              </svg>
              <span>Overview</span>
            </div>
            <div className="flex items-center gap-2 text-[#8b949e] hover:text-[#c9d1d9] pb-2 -mb-3 px-1 cursor-pointer">
              <span>Repositories</span>
              <span className="bg-[#30363d] text-[#c9d1d9] text-xs px-2 py-0.5 rounded-full font-mono">24</span>
            </div>
            <div className="flex items-center gap-2 text-[#8b949e] hover:text-[#c9d1d9] pb-2 -mb-3 px-1 cursor-pointer">
              <span>Projects</span>
            </div>
            <div className="flex items-center gap-2 text-[#8b949e] hover:text-[#c9d1d9] pb-2 -mb-3 px-1 cursor-pointer">
              <span>Packages</span>
            </div>
            <div className="flex items-center gap-2 text-[#8b949e] hover:text-[#c9d1d9] pb-2 -mb-3 px-1 cursor-pointer">
              <span>Stars</span>
              <span className="bg-[#30363d] text-[#c9d1d9] text-xs px-2 py-0.5 rounded-full font-mono">318</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main GitHub Content Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column: Profile Sidebar */}
          <div className="lg:col-span-4 xl:col-span-3 space-y-5">
            {/* Avatar & Identifiers */}
            <div className="flex lg:flex-col items-center lg:items-start gap-4">
              <div className="relative group shrink-0">
                <div className="w-24 h-24 lg:w-64 lg:h-64 rounded-full border border-[#30363d] bg-gradient-to-br from-slate-800 to-slate-900 overflow-hidden flex items-center justify-center shadow-xl">
                  <span className="text-4xl lg:text-7xl font-bold tracking-tight text-emerald-400 font-mono">
                    {data.fullName.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div className="absolute bottom-2 right-2 hidden lg:flex items-center justify-center w-8 h-8 rounded-full bg-[#21262d] border border-[#30363d] text-emerald-400">
                  ⚡
                </div>
              </div>

              <div className="space-y-1">
                <h1 className="text-2xl font-bold text-white tracking-tight">{data.fullName}</h1>
                <p className="text-lg text-[#8b949e] font-light">@{data.githubUsername}</p>
              </div>
            </div>

            {/* Bio */}
            <p className="text-sm text-[#c9d1d9] leading-relaxed">
              {data.tagline}
            </p>

            {/* Profile Action Button */}
            <button className="w-full py-1.5 px-3 bg-[#21262d] hover:bg-[#30363d] border border-[#30363d] rounded-md text-xs font-semibold text-[#c9d1d9] transition-colors">
              Edit Profile (Readme Preview Mode)
            </button>

            {/* Metadata links */}
            <div className="space-y-2 text-xs text-[#8b949e] pt-2 border-t border-[#21262d]">
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 shrink-0 text-[#8b949e]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>{data.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 shrink-0 text-[#8b949e]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href={`mailto:${data.email}`} className="text-[#58a6ff] hover:underline truncate">
                  {data.email}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 shrink-0 text-[#8b949e]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                </svg>
                <a href={data.portfolio} target="_blank" rel="noreferrer" className="text-[#58a6ff] hover:underline truncate">
                  {data.portfolio}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 shrink-0 text-[#8b949e]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
                <a href={data.linkedin} target="_blank" rel="noreferrer" className="text-[#58a6ff] hover:underline truncate">
                  {data.linkedin.replace('https://', '')}
                </a>
              </div>
            </div>

            {/* Highlights */}
            <div className="pt-3 border-t border-[#21262d] text-xs space-y-1.5">
              <div className="text-[#8b949e] font-semibold mb-1">Highlights</div>
              <div className="flex items-center gap-2 text-[#c9d1d9]">
                <span className="text-amber-400">★</span>
                <span>Pro Member & Open Source Contributor</span>
              </div>
              <div className="flex items-center gap-2 text-[#c9d1d9]">
                <span className="text-emerald-400">✔</span>
                <span>Verified Clean Architecture Advocate</span>
              </div>
            </div>
          </div>

          {/* Right Column: Pinned Repositories & README Container */}
          <div className="lg:col-span-8 xl:col-span-9 space-y-8">
            
            {/* Pinned Projects Section */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <h2 className="text-sm font-semibold text-[#c9d1d9]">Pinned Architecture Repositories</h2>
                <span className="text-xs text-[#8b949e]">Customize pins</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {data.projects.slice(0, 4).map((project) => (
                  <div
                    key={project.id}
                    className="p-4 rounded-md border border-[#30363d] bg-[#0d1117] hover:border-[#8b949e] transition-colors flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-start justify-between gap-2 mb-1.5">
                        <div className="flex items-center gap-1.5">
                          <svg className="w-4 h-4 text-[#8b949e] shrink-0" viewBox="0 0 16 16" fill="currentColor">
                            <path d="M2 2.5A2.5 2.5 0 0 1 4.5 0h8.75a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1 0-1.5h1.75v-2h-8a1 1 0 0 0-.714 1.7.75.75 0 1 1-1.072 1.05A2.495 2.495 0 0 1 2 11.5v-9zm10.5-1h-8a1 1 0 0 0-1 1v6.708A2.486 2.486 0 0 1 4.5 9h8V1.5z" />
                          </svg>
                          <a
                            href={project.repoUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="font-semibold text-sm text-[#58a6ff] hover:underline"
                          >
                            {project.name.split('—')[0].trim()}
                          </a>
                        </div>
                        <span className="text-[10px] text-[#8b949e] border border-[#30363d] rounded-full px-1.5 py-0.5">
                          Public
                        </span>
                      </div>

                      <p className="text-xs text-[#8b949e] line-clamp-2 mb-3 leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    <div className="pt-2 border-t border-[#21262d] flex items-center justify-between text-xs text-[#8b949e]">
                      <div className="flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-[#3178c6] inline-block" />
                        <span>TypeScript / React</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="flex items-center gap-1">
                          <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.75.75 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25z" />
                          </svg>
                          {project.stars || 120}
                        </span>
                        <span className="flex items-center gap-1">
                          <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M5 3.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0zm0 2.122a2.25 2.25 0 1 0-1.5 0v.878A2.25 2.25 0 0 0 5.75 8.5h4.5A2.25 2.25 0 0 0 12.5 6.25v-.878a2.25 2.25 0 1 0-1.5 0v.878a.75.75 0 0 1-.75.75h-4.5A.75.75 0 0 1 5 6.25v-.878z" />
                          </svg>
                          {project.forks || 24}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* README.md Rendered Box */}
            <div className="rounded-md border border-[#30363d] bg-[#0d1117] overflow-hidden">
              {/* README File Header */}
              <div className="px-4 py-2.5 bg-[#161b22] border-b border-[#30363d] flex items-center justify-between text-xs text-[#8b949e]">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-[#c9d1d9] font-medium">{data.githubUsername} / README.md</span>
                </div>
                <div className="flex items-center gap-4">
                  <span>Rendering Markdown</span>
                  <span className="text-emerald-400 font-mono">100% Validated</span>
                </div>
              </div>

              {/* Rendered Document Body */}
              <article className="p-6 md:p-8 space-y-8 text-[#c9d1d9] leading-relaxed text-sm md:text-base">
                
                {/* Profile Header */}
                <div className="border-b border-[#21262d] pb-6 space-y-3">
                  <h1 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
                    Hi there, I'm {data.fullName} 👋
                  </h1>
                  <h2 className="text-lg md:text-xl font-medium text-[#58a6ff]">
                    {data.title}
                  </h2>
                  <p className="text-sm md:text-base text-[#8b949e]">
                    {data.tagline}
                  </p>

                  {/* Tech stack badges */}
                  {data.showBadges && (
                    <div className="pt-2 flex flex-wrap gap-1.5">
                      <span className="px-2 py-1 text-xs font-mono font-medium rounded bg-[#20232A] text-[#61DAFB] border border-[#61DAFB]/20">
                        React 19
                      </span>
                      <span className="px-2 py-1 text-xs font-mono font-medium rounded bg-[#339933]/20 text-[#68d391] border border-[#339933]/40">
                        Node.js
                      </span>
                      <span className="px-2 py-1 text-xs font-mono font-medium rounded bg-[#3178C6]/20 text-[#63b3ed] border border-[#3178C6]/40">
                        TypeScript
                      </span>
                      <span className="px-2 py-1 text-xs font-mono font-medium rounded bg-black text-white border border-slate-700">
                        Next.js
                      </span>
                      <span className="px-2 py-1 text-xs font-mono font-medium rounded bg-[#4169E1]/20 text-[#90cdf4] border border-[#4169E1]/40">
                        PostgreSQL
                      </span>
                      <span className="px-2 py-1 text-xs font-mono font-medium rounded bg-[#2496ED]/20 text-[#76e4f7] border border-[#2496ED]/40">
                        Docker
                      </span>
                      <span className="px-2 py-1 text-xs font-mono font-medium rounded bg-[#232F3E] text-[#FF9900] border border-[#FF9900]/30">
                        AWS Multi-AZ
                      </span>
                      <span className="px-2 py-1 text-xs font-mono font-medium rounded bg-[#844FBA]/20 text-[#d6bcfa] border border-[#844FBA]/40">
                        Terraform IaC
                      </span>
                      <span className="px-2 py-1 text-xs font-mono font-medium rounded bg-[#2088FF]/20 text-[#90cdf4] border border-[#2088FF]/40">
                        GitHub Actions
                      </span>
                    </div>
                  )}
                </div>

                {/* Architecture & Engineering Standards */}
                <div className="space-y-4">
                  <h2 className="text-xl md:text-2xl font-bold text-white flex items-center gap-2 border-b border-[#21262d] pb-2">
                    <span>⚡</span>
                    <span>Engineering Philosophy & Architecture Standards</span>
                  </h2>
                  <p className="text-sm text-[#8b949e]">
                    I architect and deliver web applications where <strong>maintainability</strong>, <strong>scalability</strong>, and <strong>user experience</strong> intersect. Rather than treating frontend and backend as isolated silos, I apply holistic distributed system patterns across the full software lifecycle.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                    {data.architecturalPillars.map((pillar, idx) => (
                      <div key={idx} className="p-4 rounded border border-[#30363d] bg-[#161b22]/50 space-y-1.5">
                        <h4 className="text-sm font-semibold text-white flex items-center gap-1.5">
                          <span className="text-emerald-400">▹</span>
                          <span>{pillar.title}</span>
                        </h4>
                        <p className="text-xs text-[#8b949e] leading-relaxed">
                          {pillar.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Featured Projects Deep Dive */}
                <div className="space-y-6">
                  <h2 className="text-xl md:text-2xl font-bold text-white flex items-center gap-2 border-b border-[#21262d] pb-2">
                    <span>🚀</span>
                    <span>Recent Featured Projects</span>
                  </h2>

                  <div className="space-y-6">
                    {data.projects.map((project, index) => (
                      <div
                        key={project.id}
                        className="p-5 rounded-md border border-[#30363d] bg-[#161b22]/30 space-y-3"
                      >
                        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                          <h3 className="text-base font-bold text-[#58a6ff]">
                            0{index + 1}. {project.name}
                          </h3>
                          <div className="flex items-center gap-3 text-xs text-[#8b949e]">
                            <a href={project.repoUrl} target="_blank" rel="noreferrer" className="text-[#58a6ff] hover:underline">
                              Source Code ↗
                            </a>
                            <span aria-hidden="true">·</span>
                            <a href={project.liveUrl} target="_blank" rel="noreferrer" className="text-[#58a6ff] hover:underline">
                              Live System ↗
                            </a>
                          </div>
                        </div>

                        <p className="text-xs md:text-sm text-[#c9d1d9] leading-relaxed">
                          {project.description}
                        </p>

                        <div className="space-y-1.5 text-xs">
                          <div>
                            <span className="text-[#8b949e] font-semibold">Architecture Pattern: </span>
                            <span className="text-[#c9d1d9]">{project.architecture}</span>
                          </div>
                          <div>
                            <span className="text-[#8b949e] font-semibold">Tech Stack: </span>
                            <span className="font-mono text-emerald-300">
                              {project.techStack.join(' · ')}
                            </span>
                          </div>
                          <div className="p-2 rounded bg-[#090d13] border border-[#21262d]">
                            <span className="text-emerald-400 font-semibold">Key Metric & Engineering Impact: </span>
                            <span className="text-white font-medium">{project.metrics}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Core Technical Skills Matrix */}
                <div className="space-y-4">
                  <h2 className="text-xl md:text-2xl font-bold text-white flex items-center gap-2 border-b border-[#21262d] pb-2">
                    <span>🛠️</span>
                    <span>Core Technical Skills Matrix</span>
                  </h2>

                  <div className="overflow-x-auto rounded border border-[#30363d]">
                    <table className="w-full text-left text-xs border-collapse">
                      <thead>
                        <tr className="bg-[#161b22] border-b border-[#30363d] text-[#c9d1d9]">
                          <th className="py-2.5 px-4 font-semibold w-1/3">Domain</th>
                          <th className="py-2.5 px-4 font-semibold">Technologies, Frameworks & Standards</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-[#21262d]">
                        {data.skillCategories.map((cat, idx) => (
                          <tr key={idx} className="hover:bg-[#161b22]/30">
                            <td className="py-2.5 px-4 font-medium text-white">{cat.category}</td>
                            <td className="py-2.5 px-4 text-[#8b949e]">
                              <span className="font-mono text-xs text-[#c9d1d9]">
                                {cat.skills.map(s => s.name).join(' · ')}
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Cloud Infrastructure & Resiliency */}
                <div className="space-y-4">
                  <h2 className="text-xl md:text-2xl font-bold text-white flex items-center gap-2 border-b border-[#21262d] pb-2">
                    <span>☁️</span>
                    <span>Cloud Infrastructure & Resiliency Architecture</span>
                  </h2>
                  <p className="text-sm text-[#8b949e]">
                    High-level web software requires infrastructure that matches application rigor. My cloud deployments follow immutable infrastructure principles, multi-region redundancy, and minimal blast radius design:
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 rounded border border-[#30363d] bg-[#161b22]/40 space-y-2">
                      <h4 className="text-xs font-semibold uppercase tracking-wider text-emerald-400">
                        Compute & Cloud Topology ({data.cloudInfra.provider})
                      </h4>
                      <ul className="text-xs text-[#8b949e] space-y-1 list-disc list-inside">
                        {data.cloudInfra.services.map((s, idx) => (
                          <li key={idx} className="leading-relaxed">{s}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="p-4 rounded border border-[#30363d] bg-[#161b22]/40 space-y-2">
                      <h4 className="text-xs font-semibold uppercase tracking-wider text-emerald-400">
                        Containerization & Packaging
                      </h4>
                      <ul className="text-xs text-[#8b949e] space-y-1 list-disc list-inside">
                        {data.cloudInfra.containerization.map((c, idx) => (
                          <li key={idx} className="leading-relaxed">{c}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="p-4 rounded border border-[#30363d] bg-[#161b22]/40 space-y-2">
                      <h4 className="text-xs font-semibold uppercase tracking-wider text-emerald-400">
                        Infrastructure as Code (IaC)
                      </h4>
                      <ul className="text-xs text-[#8b949e] space-y-1 list-disc list-inside">
                        {data.cloudInfra.iac.map((i, idx) => (
                          <li key={idx} className="leading-relaxed">{i}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="p-4 rounded border border-[#30363d] bg-[#161b22]/40 space-y-2">
                      <h4 className="text-xs font-semibold uppercase tracking-wider text-emerald-400">
                        Telemetry & Observability
                      </h4>
                      <ul className="text-xs text-[#8b949e] space-y-1 list-disc list-inside">
                        {data.cloudInfra.monitoring.map((m, idx) => (
                          <li key={idx} className="leading-relaxed">{m}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* CI/CD Pipeline & Automated Quality Gates */}
                <div className="space-y-4">
                  <h2 className="text-xl md:text-2xl font-bold text-white flex items-center gap-2 border-b border-[#21262d] pb-2">
                    <span>🔄</span>
                    <span>CI/CD Pipeline & Automated Quality Gates</span>
                  </h2>
                  <p className="text-sm text-[#8b949e]">
                    Every code change moves through an automated delivery pipeline designed to catch regressions, security vulnerabilities, and performance degradation before reaching production.
                  </p>

                  {/* Flow Steps Strip */}
                  <div className="p-4 rounded bg-[#010409] border border-[#30363d] overflow-x-auto">
                    <div className="flex items-center gap-2 text-xs font-mono min-w-max">
                      <span className="px-2 py-1 bg-[#21262d] text-white rounded">git push / PR</span>
                      <span className="text-[#8b949e]">→</span>
                      <span className="px-2 py-1 bg-blue-900/40 text-blue-300 border border-blue-700/50 rounded">Lint & Typecheck</span>
                      <span className="text-[#8b949e]">→</span>
                      <span className="px-2 py-1 bg-emerald-900/40 text-emerald-300 border border-emerald-700/50 rounded">Unit & Integration Tests</span>
                      <span className="text-[#8b949e]">→</span>
                      <span className="px-2 py-1 bg-purple-900/40 text-purple-300 border border-purple-700/50 rounded">Docker Build</span>
                      <span className="text-[#8b949e]">→</span>
                      <span className="px-2 py-1 bg-amber-900/40 text-amber-300 border border-amber-700/50 rounded">Trivy Security Scan</span>
                      <span className="text-[#8b949e]">→</span>
                      <span className="px-2 py-1 bg-cyan-900/40 text-cyan-300 border border-cyan-700/50 rounded">E2E Smoke Tests</span>
                      <span className="text-[#8b949e]">→</span>
                      <span className="px-2 py-1 bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 rounded font-semibold">Blue/Green Deploy</span>
                    </div>
                  </div>

                  {/* Stages Table */}
                  <div className="overflow-x-auto rounded border border-[#30363d]">
                    <table className="w-full text-left text-xs border-collapse">
                      <thead>
                        <tr className="bg-[#161b22] border-b border-[#30363d] text-[#c9d1d9]">
                          <th className="py-2 px-3 font-semibold">Stage</th>
                          <th className="py-2 px-3 font-semibold">Tooling</th>
                          <th className="py-2 px-3 font-semibold">Scope</th>
                          <th className="py-2 px-3 font-semibold">Automated Guardrail</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-[#21262d]">
                        {data.ciCdSteps.map((step, idx) => (
                          <tr key={idx} className="hover:bg-[#161b22]/30">
                            <td className="py-2.5 px-3 font-semibold text-white whitespace-nowrap">
                              Stage {idx + 1}: {step.title}
                            </td>
                            <td className="py-2.5 px-3 font-mono text-[#58a6ff] whitespace-nowrap">
                              {step.tool}
                            </td>
                            <td className="py-2.5 px-3 text-[#8b949e]">{step.description}</td>
                            <td className="py-2.5 px-3 text-emerald-300 italic">{step.guardrail}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* GitHub Analytics Widgets */}
                {data.showStats && (
                  <div className="space-y-4">
                    <h2 className="text-xl md:text-2xl font-bold text-white flex items-center gap-2 border-b border-[#21262d] pb-2">
                      <span>📊</span>
                      <span>Engineering Analytics & Activity</span>
                    </h2>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="p-4 rounded border border-[#30363d] bg-[#0d1117] flex flex-col justify-between">
                        <div className="text-xs text-[#8b949e] mb-2 font-mono flex items-center justify-between">
                          <span>GitHub Stats Card Simulation</span>
                          <span className="text-emerald-400">Live API Link</span>
                        </div>
                        <div className="space-y-2 py-2">
                          <div className="flex justify-between text-xs">
                            <span className="text-[#8b949e]">Total Commits (2026):</span>
                            <span className="font-mono text-white">1,482</span>
                          </div>
                          <div className="flex justify-between text-xs">
                            <span className="text-[#8b949e]">Total PRs Merged:</span>
                            <span className="font-mono text-white">218</span>
                          </div>
                          <div className="flex justify-between text-xs">
                            <span className="text-[#8b949e]">Repositories Contributed:</span>
                            <span className="font-mono text-white">34</span>
                          </div>
                          <div className="flex justify-between text-xs">
                            <span className="text-[#8b949e]">Global Stargazers:</span>
                            <span className="font-mono text-white">540</span>
                          </div>
                        </div>
                        <div className="pt-2 border-t border-[#21262d] text-[11px] text-[#8b949e] font-mono">
                          Generated via github-readme-stats
                        </div>
                      </div>

                      <div className="p-4 rounded border border-[#30363d] bg-[#0d1117] flex flex-col justify-between">
                        <div className="text-xs text-[#8b949e] mb-2 font-mono flex items-center justify-between">
                          <span>Top Languages</span>
                          <span className="text-emerald-400">Production Code</span>
                        </div>
                        <div className="space-y-2 py-2">
                          <div>
                            <div className="flex justify-between text-xs mb-1">
                              <span className="text-white">TypeScript</span>
                              <span className="font-mono text-[#8b949e]">54.2%</span>
                            </div>
                            <div className="w-full bg-[#21262d] h-1.5 rounded-full overflow-hidden">
                              <div className="bg-[#3178c6] h-full" style={{ width: '54.2%' }} />
                            </div>
                          </div>
                          <div>
                            <div className="flex justify-between text-xs mb-1">
                              <span className="text-white">JavaScript / Node.js</span>
                              <span className="font-mono text-[#8b949e]">28.6%</span>
                            </div>
                            <div className="w-full bg-[#21262d] h-1.5 rounded-full overflow-hidden">
                              <div className="bg-[#f1e05a] h-full" style={{ width: '28.6%' }} />
                            </div>
                          </div>
                          <div>
                            <div className="flex justify-between text-xs mb-1">
                              <span className="text-white">HCL (Terraform) & Docker</span>
                              <span className="font-mono text-[#8b949e]">17.2%</span>
                            </div>
                            <div className="w-full bg-[#21262d] h-1.5 rounded-full overflow-hidden">
                              <div className="bg-[#844fba] h-full" style={{ width: '17.2%' }} />
                            </div>
                          </div>
                        </div>
                        <div className="pt-2 border-t border-[#21262d] text-[11px] text-[#8b949e] font-mono">
                          Calculated across public repositories
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Connect Section */}
                <div className="border-t border-[#21262d] pt-6 space-y-3">
                  <h2 className="text-xl font-bold text-white flex items-center gap-2">
                    <span>📬</span>
                    <span>Connect & Collaborate</span>
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 text-xs">
                    <a
                      href={data.linkedin}
                      target="_blank"
                      rel="noreferrer"
                      className="p-3 rounded border border-[#30363d] bg-[#161b22] hover:border-[#58a6ff] transition-colors block text-center font-medium text-[#58a6ff]"
                    >
                      💼 LinkedIn Profile
                    </a>
                    <a
                      href={data.portfolio}
                      target="_blank"
                      rel="noreferrer"
                      className="p-3 rounded border border-[#30363d] bg-[#161b22] hover:border-[#58a6ff] transition-colors block text-center font-medium text-[#58a6ff]"
                    >
                      🌐 Tech Portfolio
                    </a>
                    <a
                      href={`mailto:${data.email}`}
                      className="p-3 rounded border border-[#30363d] bg-[#161b22] hover:border-[#58a6ff] transition-colors block text-center font-medium text-[#58a6ff]"
                    >
                      📧 Email Inquiries
                    </a>
                    <a
                      href={`https://github.com/${data.githubUsername}`}
                      target="_blank"
                      rel="noreferrer"
                      className="p-3 rounded border border-[#30363d] bg-[#161b22] hover:border-[#58a6ff] transition-colors block text-center font-medium text-[#58a6ff]"
                    >
                      🐙 GitHub Profile
                    </a>
                  </div>
                  <p className="text-center text-xs text-[#8b949e] pt-4">
                    Engineered with precision for maintainability, reliability, and scale.
                  </p>
                </div>

              </article>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}
