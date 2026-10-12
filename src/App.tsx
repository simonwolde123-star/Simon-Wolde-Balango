/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useMemo } from 'react';
import { initialProfileData } from './data/defaultProfile.ts';
import { ProfileData } from './types/profile.ts';
import { generateMarkdown } from './utils/markdownGenerator.ts';
import { TopBar } from './components/TopBar.tsx';
import { GitHubPreview } from './components/GitHubPreview.tsx';
import { MarkdownViewer } from './components/MarkdownViewer.tsx';
import { ArchitectureVisualizer } from './components/ArchitectureVisualizer.tsx';
import { CustomizerPanel } from './components/CustomizerPanel.tsx';

export default function App() {
  const [profileData, setProfileData] = useState<ProfileData>(initialProfileData);
  const [activeTab, setActiveTab] = useState<'preview' | 'raw' | 'architecture' | 'customizer'>('preview');
  const [copied, setCopied] = useState(false);

  const markdownContent = useMemo(() => {
    return generateMarkdown(profileData);
  }, [profileData]);

  const handleCopy = async () => {
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(markdownContent);
      } else {
        const textarea = document.createElement('textarea');
        textarea.value = markdownContent;
        textarea.style.position = 'fixed';
        textarea.style.opacity = '0';
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
      }
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const handleDownload = () => {
    const blob = new Blob([markdownContent], { type: 'text/markdown;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'README.md';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const handleReset = () => {
    setProfileData(initialProfileData);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans">
      {/* 3-Zone Top Navigation Bar */}
      <TopBar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onCopy={handleCopy}
        copied={copied}
        onDownload={handleDownload}
      />

      {/* Main Viewport Content */}
      <main className="flex-1">
        {activeTab === 'preview' && (
          <GitHubPreview data={profileData} />
        )}

        {activeTab === 'raw' && (
          <MarkdownViewer
            markdown={markdownContent}
            onCopy={handleCopy}
            copied={copied}
            onDownload={handleDownload}
          />
        )}

        {activeTab === 'architecture' && (
          <ArchitectureVisualizer
            ciCdSteps={profileData.ciCdSteps}
            cloudInfra={profileData.cloudInfra}
          />
        )}

        {activeTab === 'customizer' && (
          <CustomizerPanel
            data={profileData}
            onChange={setProfileData}
            onReset={handleReset}
          />
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-900 bg-slate-950/80 py-6 px-6 text-xs text-slate-500">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span>Simon Wolde</span>
            <span aria-hidden="true">·</span>
            <span>Software Engineer</span>
            <span aria-hidden="true">·</span>
            <span>React & Node.js Scalable Architecture</span>
          </div>

          <div className="flex items-center gap-4 text-slate-400">
            <button
              onClick={() => setActiveTab('preview')}
              className="hover:text-emerald-400 transition-colors cursor-pointer"
            >
              GitHub Preview
            </button>
            <button
              onClick={() => setActiveTab('raw')}
              className="hover:text-emerald-400 transition-colors cursor-pointer"
            >
              Raw Markdown
            </button>
            <button
              onClick={handleCopy}
              className="text-emerald-400 hover:text-emerald-300 font-medium transition-colors cursor-pointer"
            >
              {copied ? 'Copied!' : 'Copy README.md'}
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}
