import { ProfileData } from '../types/profile.ts';
import { initialProfileData } from '../data/defaultProfile.ts';

interface CustomizerPanelProps {
  data: ProfileData;
  onChange: (newData: ProfileData) => void;
  onReset: () => void;
}

export function CustomizerPanel({ data, onChange, onReset }: CustomizerPanelProps) {
  const updateField = <K extends keyof ProfileData>(key: K, value: ProfileData[K]) => {
    onChange({
      ...data,
      [key]: value
    });
  };

  const applyPreset = (preset: 'default' | 'cloud' | 'minimalist') => {
    if (preset === 'default') {
      onChange(initialProfileData);
    } else if (preset === 'cloud') {
      onChange({
        ...initialProfileData,
        title: 'Senior Software Engineer | Cloud Platforms, Node.js & Distributed Systems',
        tagline: 'Building fault-tolerant distributed web backends and automated multi-region Kubernetes & CI/CD architectures.',
        currentFocus: 'Microservice mesh architectures, Terraform IaC automation, and high-throughput Node.js streaming services.'
      });
    } else if (preset === 'minimalist') {
      onChange({
        ...initialProfileData,
        showStats: false,
        showStreak: false,
        showBadges: true,
        tagline: 'Designing resilient distributed applications with React, TypeScript, and Node.js.'
      });
    }
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8 space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-5">
        <div>
          <h2 className="text-xl font-bold text-white tracking-tight">
            Profile Customizer & Architecture Settings
          </h2>
          <p className="text-xs text-slate-400 mt-1">
            Update your profile parameters in real time. Changes immediately reflect in both the Live GitHub Preview and the raw README.md.
          </p>
        </div>

        {/* Preset Selector */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => applyPreset('default')}
            className="px-2.5 py-1 text-xs font-medium rounded bg-slate-900 border border-slate-800 hover:border-slate-700 text-slate-300 transition-colors cursor-pointer"
          >
            Staff SWE
          </button>
          <button
            onClick={() => applyPreset('cloud')}
            className="px-2.5 py-1 text-xs font-medium rounded bg-slate-900 border border-slate-800 hover:border-slate-700 text-slate-300 transition-colors cursor-pointer"
          >
            Cloud Platform
          </button>
          <button
            onClick={() => applyPreset('minimalist')}
            className="px-2.5 py-1 text-xs font-medium rounded bg-slate-900 border border-slate-800 hover:border-slate-700 text-slate-300 transition-colors cursor-pointer"
          >
            Minimalist
          </button>
          <button
            onClick={onReset}
            className="px-2.5 py-1 text-xs font-medium rounded bg-rose-950/40 border border-rose-800/60 hover:bg-rose-900/60 text-rose-300 transition-colors cursor-pointer"
          >
            Reset
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Personal Details */}
        <div className="p-5 rounded-xl border border-slate-800 bg-slate-900/60 space-y-4">
          <h3 className="text-sm font-semibold text-white border-b border-slate-800 pb-2">
            Personal & Role Information
          </h3>

          <div className="space-y-3 text-xs">
            <div>
              <label className="block text-slate-400 mb-1 font-medium">Full Name</label>
              <input
                type="text"
                value={data.fullName}
                onChange={(e) => updateField('fullName', e.target.value)}
                className="w-full bg-slate-950 border border-slate-800 rounded-md px-3 py-1.5 text-white focus:outline-none focus:border-emerald-500"
              />
            </div>

            <div>
              <label className="block text-slate-400 mb-1 font-medium">Professional Title</label>
              <input
                type="text"
                value={data.title}
                onChange={(e) => updateField('title', e.target.value)}
                className="w-full bg-slate-950 border border-slate-800 rounded-md px-3 py-1.5 text-white focus:outline-none focus:border-emerald-500"
              />
            </div>

            <div>
              <label className="block text-slate-400 mb-1 font-medium">Tagline / Mission Statement</label>
              <textarea
                rows={2}
                value={data.tagline}
                onChange={(e) => updateField('tagline', e.target.value)}
                className="w-full bg-slate-950 border border-slate-800 rounded-md px-3 py-1.5 text-white focus:outline-none focus:border-emerald-500"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-slate-400 mb-1 font-medium">GitHub Username</label>
                <input
                  type="text"
                  value={data.githubUsername}
                  onChange={(e) => updateField('githubUsername', e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-md px-3 py-1.5 text-white focus:outline-none focus:border-emerald-500 font-mono"
                />
              </div>

              <div>
                <label className="block text-slate-400 mb-1 font-medium">Email Contact</label>
                <input
                  type="email"
                  value={data.email}
                  onChange={(e) => updateField('email', e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-md px-3 py-1.5 text-white focus:outline-none focus:border-emerald-500"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-slate-400 mb-1 font-medium">Location</label>
                <input
                  type="text"
                  value={data.location}
                  onChange={(e) => updateField('location', e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-md px-3 py-1.5 text-white focus:outline-none focus:border-emerald-500"
                />
              </div>

              <div>
                <label className="block text-slate-400 mb-1 font-medium">Portfolio URL</label>
                <input
                  type="text"
                  value={data.portfolio}
                  onChange={(e) => updateField('portfolio', e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-md px-3 py-1.5 text-white focus:outline-none focus:border-emerald-500"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Feature & Display Toggles */}
        <div className="p-5 rounded-xl border border-slate-800 bg-slate-900/60 space-y-4">
          <h3 className="text-sm font-semibold text-white border-b border-slate-800 pb-2">
            README Sections & Display Toggles
          </h3>

          <div className="space-y-4 text-xs">
            <div className="flex items-center justify-between p-3 rounded-lg bg-slate-950 border border-slate-800">
              <div>
                <span className="font-semibold text-white block">Tech Stack Shields Badges</span>
                <span className="text-slate-400 text-[11px]">Display official technology badges at the top of your profile</span>
              </div>
              <input
                type="checkbox"
                checked={data.showBadges}
                onChange={(e) => updateField('showBadges', e.target.checked)}
                className="w-4 h-4 accent-emerald-500 rounded cursor-pointer"
              />
            </div>

            <div className="flex items-center justify-between p-3 rounded-lg bg-slate-950 border border-slate-800">
              <div>
                <span className="font-semibold text-white block">GitHub Stats & Top Languages</span>
                <span className="text-slate-400 text-[11px]">Embed dynamic github-readme-stats cards</span>
              </div>
              <input
                type="checkbox"
                checked={data.showStats}
                onChange={(e) => updateField('showStats', e.target.checked)}
                className="w-4 h-4 accent-emerald-500 rounded cursor-pointer"
              />
            </div>

            <div className="flex items-center justify-between p-3 rounded-lg bg-slate-950 border border-slate-800">
              <div>
                <span className="font-semibold text-white block">GitHub Contribution Streak Stats</span>
                <span className="text-slate-400 text-[11px]">Show streak statistics banner</span>
              </div>
              <input
                type="checkbox"
                checked={data.showStreak}
                onChange={(e) => updateField('showStreak', e.target.checked)}
                className="w-4 h-4 accent-emerald-500 rounded cursor-pointer"
              />
            </div>

            <div>
              <label className="block text-slate-400 mb-1 font-medium">Current Architectural Focus</label>
              <textarea
                rows={2}
                value={data.currentFocus}
                onChange={(e) => updateField('currentFocus', e.target.value)}
                className="w-full bg-slate-950 border border-slate-800 rounded-md px-3 py-1.5 text-white focus:outline-none focus:border-emerald-500"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Projects Editor */}
      <div className="p-5 rounded-xl border border-slate-800 bg-slate-900/60 space-y-4">
        <h3 className="text-sm font-semibold text-white border-b border-slate-800 pb-2">
          Featured Architecture Projects ({data.projects.length})
        </h3>

        <div className="space-y-4">
          {data.projects.map((project, index) => (
            <div key={project.id} className="p-4 rounded-lg bg-slate-950 border border-slate-800/80 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-emerald-400">Project 0{index + 1}</span>
                <span className="text-[11px] text-slate-500 font-mono">{project.id}</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
                <div>
                  <label className="block text-slate-400 mb-1">Project Name & Subtitle</label>
                  <input
                    type="text"
                    value={project.name}
                    onChange={(e) => {
                      const updated = [...data.projects];
                      updated[index] = { ...project, name: e.target.value };
                      updateField('projects', updated);
                    }}
                    className="w-full bg-slate-900 border border-slate-800 rounded px-2.5 py-1 text-white focus:outline-none focus:border-emerald-500"
                  />
                </div>

                <div>
                  <label className="block text-slate-400 mb-1">GitHub Repository URL</label>
                  <input
                    type="text"
                    value={project.repoUrl}
                    onChange={(e) => {
                      const updated = [...data.projects];
                      updated[index] = { ...project, repoUrl: e.target.value };
                      updateField('projects', updated);
                    }}
                    className="w-full bg-slate-900 border border-slate-800 rounded px-2.5 py-1 text-white focus:outline-none focus:border-emerald-500 font-mono"
                  />
                </div>
              </div>

              <div className="text-xs">
                <label className="block text-slate-400 mb-1">Architecture Description & Pattern</label>
                <input
                  type="text"
                  value={project.architecture}
                  onChange={(e) => {
                    const updated = [...data.projects];
                    updated[index] = { ...project, architecture: e.target.value };
                    updateField('projects', updated);
                  }}
                  className="w-full bg-slate-900 border border-slate-800 rounded px-2.5 py-1 text-white focus:outline-none focus:border-emerald-500"
                />
              </div>

              <div className="text-xs">
                <label className="block text-slate-400 mb-1">Key Engineering Metrics & SLA</label>
                <input
                  type="text"
                  value={project.metrics}
                  onChange={(e) => {
                    const updated = [...data.projects];
                    updated[index] = { ...project, metrics: e.target.value };
                    updateField('projects', updated);
                  }}
                  className="w-full bg-slate-900 border border-slate-800 rounded px-2.5 py-1 text-emerald-300 focus:outline-none focus:border-emerald-500 font-medium"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
