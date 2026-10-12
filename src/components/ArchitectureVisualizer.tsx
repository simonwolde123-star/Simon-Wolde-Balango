import { useState } from 'react';
import { CiCdStep, CloudInfrastructure } from '../types/profile.ts';

interface ArchitectureVisualizerProps {
  ciCdSteps: CiCdStep[];
  cloudInfra: CloudInfrastructure;
}

export function ArchitectureVisualizer({
  ciCdSteps,
  cloudInfra
}: ArchitectureVisualizerProps) {
  const [selectedStep, setSelectedStep] = useState<number>(0);
  const [activeView, setActiveView] = useState<'cicd' | 'cloud'>('cicd');

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 space-y-8">
      {/* Visualizer Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-5">
        <div>
          <h2 className="text-xl font-bold text-white tracking-tight">
            Cloud Infrastructure & CI/CD Pipeline Architecture
          </h2>
          <p className="text-xs text-slate-400 mt-1">
            Enterprise software engineering practices powering high availability, automated safety gates, and zero-downtime deployment.
          </p>
        </div>

        {/* View Switcher Button Group */}
        <div className="flex items-center gap-1 p-1 bg-slate-900 border border-slate-800 rounded-lg shrink-0">
          <button
            onClick={() => setActiveView('cicd')}
            className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors cursor-pointer ${
              activeView === 'cicd'
                ? 'bg-slate-800 text-emerald-400 font-semibold shadow-sm'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            CI/CD Pipeline Gates
          </button>
          <button
            onClick={() => setActiveView('cloud')}
            className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors cursor-pointer ${
              activeView === 'cloud'
                ? 'bg-slate-800 text-emerald-400 font-semibold shadow-sm'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Cloud System Topology
          </button>
        </div>
      </div>

      {activeView === 'cicd' ? (
        <div className="space-y-6">
          {/* Pipeline Ribbon Flow */}
          <div className="p-6 rounded-xl border border-slate-800 bg-slate-900/50 space-y-4">
            <div className="flex items-center justify-between text-xs text-slate-400">
              <span className="font-semibold text-slate-200">Continuous Integration & Continuous Delivery Workflow</span>
              <span>Click a stage to inspect architecture details</span>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
              {ciCdSteps.map((step, idx) => {
                const isSelected = selectedStep === idx;
                return (
                  <button
                    key={idx}
                    onClick={() => setSelectedStep(idx)}
                    className={`p-3 rounded-lg border text-left transition-all cursor-pointer relative overflow-hidden flex flex-col justify-between ${
                      isSelected
                        ? 'border-emerald-500/80 bg-emerald-950/20 shadow-md shadow-emerald-500/10'
                        : 'border-slate-800 bg-slate-900/80 hover:border-slate-700'
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="text-[10px] font-mono text-slate-500">
                          0{idx + 1}
                        </span>
                        {isSelected && (
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                        )}
                      </div>
                      <h4 className={`text-xs font-semibold leading-snug ${isSelected ? 'text-emerald-300' : 'text-slate-200'}`}>
                        {step.title}
                      </h4>
                    </div>
                    <span className="text-[10px] font-mono text-slate-400 truncate mt-2">
                      {step.tool.split(',')[0]}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Selected Stage Deep-Dive Card */}
          {ciCdSteps[selectedStep] && (
            <div className="p-6 rounded-xl border border-slate-800 bg-slate-900/80 space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800 pb-3">
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 font-mono text-xs font-semibold border border-emerald-500/20">
                    STAGE 0{selectedStep + 1}
                  </span>
                  <h3 className="text-base font-bold text-white">
                    {ciCdSteps[selectedStep].title}
                  </h3>
                </div>
                <div className="text-xs font-mono text-slate-400">
                  Tooling: <span className="text-emerald-400">{ciCdSteps[selectedStep].tool}</span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                <div className="space-y-2">
                  <h5 className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
                    Pipeline Execution Scope
                  </h5>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {ciCdSteps[selectedStep].description}
                  </p>
                </div>

                <div className="p-4 rounded-lg bg-slate-950 border border-slate-800/80 space-y-1.5">
                  <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400">
                    <svg className="w-4 h-4 text-emerald-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                    <span>Automated Security & Reliability Guardrail</span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed font-mono">
                    {ciCdSteps[selectedStep].guardrail}
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      ) : (
        /* Cloud System Topology View */
        <div className="space-y-6">
          <div className="p-6 rounded-xl border border-slate-800 bg-slate-900/50 space-y-6">
            <div>
              <h3 className="text-base font-bold text-white">
                Multi-Tier Distributed Cloud Architecture
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                Zero single-point-of-failure topology configured via modular Terraform infrastructure code.
              </p>
            </div>

            {/* Architecture Node Diagram */}
            <div className="p-6 rounded-xl bg-slate-950 border border-slate-800/80 space-y-6">
              {/* Layer 1: Edge & Ingress */}
              <div className="space-y-2">
                <span className="text-[11px] font-mono text-emerald-400 uppercase tracking-wider">
                  01. Edge & Content Delivery Layer
                </span>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  <div className="p-3 rounded-lg border border-slate-800 bg-slate-900/80">
                    <div className="text-xs font-bold text-white">AWS CloudFront / Edge CDN</div>
                    <div className="text-[11px] text-slate-400 mt-1">Global TLS termination & static asset caching</div>
                  </div>
                  <div className="p-3 rounded-lg border border-slate-800 bg-slate-900/80">
                    <div className="text-xs font-bold text-white">AWS Route 53 / Anycast DNS</div>
                    <div className="text-[11px] text-slate-400 mt-1">Latency-based routing with automated health probes</div>
                  </div>
                  <div className="p-3 rounded-lg border border-slate-800 bg-slate-900/80">
                    <div className="text-xs font-bold text-white">AWS WAF & DDoS Shield</div>
                    <div className="text-[11px] text-slate-400 mt-1">Rate limiting, SQLi & XSS boundary filtering</div>
                  </div>
                </div>
              </div>

              {/* Layer 2: Compute & App Clusters */}
              <div className="space-y-2">
                <span className="text-[11px] font-mono text-emerald-400 uppercase tracking-wider">
                  02. Containerized Application Compute Layer
                </span>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div className="p-3 rounded-lg border border-slate-800 bg-slate-900/80">
                    <div className="text-xs font-bold text-white">Node.js API Microservices (ECS / Cloud Run)</div>
                    <div className="text-[11px] text-slate-400 mt-1">
                      Stateless Docker containers, Horizontal Pod Autoscaling (HPA), non-root execution.
                    </div>
                  </div>
                  <div className="p-3 rounded-lg border border-slate-800 bg-slate-900/80">
                    <div className="text-xs font-bold text-white">React & Next.js Frontend Cluster</div>
                    <div className="text-[11px] text-slate-400 mt-1">
                      Server-side rendering, streaming HTML, Core Web Vitals optimized edge rendering.
                    </div>
                  </div>
                </div>
              </div>

              {/* Layer 3: Persistence & Caching */}
              <div className="space-y-2">
                <span className="text-[11px] font-mono text-emerald-400 uppercase tracking-wider">
                  03. Data Persistence & Real-Time Caching
                </span>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  <div className="p-3 rounded-lg border border-slate-800 bg-slate-900/80">
                    <div className="text-xs font-bold text-white">PostgreSQL Multi-AZ (RDS)</div>
                    <div className="text-[11px] text-slate-400 mt-1">Automated failover replica, indexed query plans</div>
                  </div>
                  <div className="p-3 rounded-lg border border-slate-800 bg-slate-900/80">
                    <div className="text-xs font-bold text-white">Redis Cluster (ElastiCache)</div>
                    <div className="text-[11px] text-slate-400 mt-1">Session store, token revocation & Pub/Sub stream bus</div>
                  </div>
                  <div className="p-3 rounded-lg border border-slate-800 bg-slate-900/80">
                    <div className="text-xs font-bold text-white">Kafka / Async Message Queue</div>
                    <div className="text-[11px] text-slate-400 mt-1">Decoupled worker queues & telemetry event ingestion</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Infrastructure Specs Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 rounded-lg border border-slate-800 bg-slate-900/50 space-y-2">
                <h4 className="text-xs font-semibold text-white">Terraform Infrastructure as Code</h4>
                <ul className="text-xs text-slate-400 space-y-1 list-disc list-inside">
                  {cloudInfra.iac.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="p-4 rounded-lg border border-slate-800 bg-slate-900/50 space-y-2">
                <h4 className="text-xs font-semibold text-white">Telemetry & APM Observability</h4>
                <ul className="text-xs text-slate-400 space-y-1 list-disc list-inside">
                  {cloudInfra.monitoring.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
