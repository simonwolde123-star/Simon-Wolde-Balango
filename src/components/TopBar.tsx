interface TopBarProps {
  activeTab: 'preview' | 'raw' | 'architecture' | 'customizer';
  setActiveTab: (tab: 'preview' | 'raw' | 'architecture' | 'customizer') => void;
  onCopy: () => void;
  copied: boolean;
  onDownload: () => void;
}

export function TopBar({
  activeTab,
  setActiveTab,
  onCopy,
  copied,
  onDownload
}: TopBarProps) {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-800 bg-slate-950/90 backdrop-blur-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-8 px-6 py-3.5">
        {/* Zone 1: Single text element wordmark */}
        <div className="flex items-center gap-3 shrink-0">
          <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 font-mono font-bold text-sm">
            SW
          </div>
          <span className="text-base font-bold tracking-tight text-white whitespace-nowrap shrink-0">
            Simon Wolde · Profile README Studio
          </span>
        </div>

        {/* Zone 2: 4-5 clean single-line text navigation links */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-300">
          <button
            onClick={() => setActiveTab('preview')}
            className={`whitespace-nowrap shrink-0 transition-colors py-1 cursor-pointer ${
              activeTab === 'preview'
                ? 'text-emerald-400 border-b-2 border-emerald-400 font-semibold'
                : 'hover:text-white'
            }`}
          >
            Live GitHub Preview
          </button>
          <button
            onClick={() => setActiveTab('raw')}
            className={`whitespace-nowrap shrink-0 transition-colors py-1 cursor-pointer ${
              activeTab === 'raw'
                ? 'text-emerald-400 border-b-2 border-emerald-400 font-semibold'
                : 'hover:text-white'
            }`}
          >
            Raw Markdown (.md)
          </button>
          <button
            onClick={() => setActiveTab('architecture')}
            className={`whitespace-nowrap shrink-0 transition-colors py-1 cursor-pointer ${
              activeTab === 'architecture'
                ? 'text-emerald-400 border-b-2 border-emerald-400 font-semibold'
                : 'hover:text-white'
            }`}
          >
            Cloud & CI/CD Pipeline
          </button>
          <button
            onClick={() => setActiveTab('customizer')}
            className={`whitespace-nowrap shrink-0 transition-colors py-1 cursor-pointer ${
              activeTab === 'customizer'
                ? 'text-emerald-400 border-b-2 border-emerald-400 font-semibold'
                : 'hover:text-white'
            }`}
          >
            Customize Profile
          </button>
        </nav>

        {/* Zone 3: 1 primary action */}
        <div className="flex items-center gap-2.5 shrink-0">
          <button
            onClick={onDownload}
            title="Download README.md file"
            className="hidden sm:inline-flex px-3 py-1.5 text-xs font-medium text-slate-300 bg-slate-900 border border-slate-700/80 rounded-md hover:bg-slate-800 hover:text-white transition-colors whitespace-nowrap shrink-0 cursor-pointer"
          >
            Download .md
          </button>
          <button
            onClick={onCopy}
            className="px-4 py-1.5 text-xs font-semibold text-slate-950 bg-emerald-400 rounded-md hover:bg-emerald-300 transition-colors whitespace-nowrap shrink-0 shadow-sm shadow-emerald-500/20 cursor-pointer flex items-center gap-1.5"
          >
            {copied ? (
              <>
                <svg className="w-3.5 h-3.5 text-slate-950" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                </svg>
                <span>Copied to Clipboard!</span>
              </>
            ) : (
              <>
                <svg className="w-3.5 h-3.5 text-slate-950" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" />
                </svg>
                <span>Copy README.md</span>
              </>
            )}
          </button>
        </div>
      </div>
    </header>
  );
}
