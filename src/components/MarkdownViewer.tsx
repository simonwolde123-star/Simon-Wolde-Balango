interface MarkdownViewerProps {
  markdown: string;
  onCopy: () => void;
  copied: boolean;
  onDownload: () => void;
}

export function MarkdownViewer({
  markdown,
  onCopy,
  copied,
  onDownload
}: MarkdownViewerProps) {
  const lines = markdown.split('\n');

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
      {/* Header Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded-t-xl bg-slate-900 border border-slate-800 border-b-0">
        <div>
          <div className="flex items-center gap-2">
            <span className="font-mono text-emerald-400 font-semibold text-sm">README.md</span>
            <span className="text-xs text-slate-400">· {lines.length} lines</span>
            <span className="text-xs text-slate-400">· {(new Blob([markdown]).size / 1024).toFixed(1)} KB</span>
          </div>
          <p className="text-xs text-slate-400 mt-0.5">
            Ready to paste directly into your GitHub repository: <span className="font-mono text-slate-300">simonwolde/simonwolde</span>
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={onDownload}
            className="px-3 py-1.5 text-xs font-medium text-slate-200 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-md transition-colors cursor-pointer flex items-center gap-1.5"
          >
            <svg className="w-3.5 h-3.5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            <span>Download .md</span>
          </button>

          <button
            onClick={onCopy}
            className="px-4 py-1.5 text-xs font-semibold text-slate-950 bg-emerald-400 hover:bg-emerald-300 rounded-md transition-colors cursor-pointer flex items-center gap-1.5 shadow-sm"
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
                <span>Copy Raw Markdown</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Code Container with Line Numbers */}
      <div className="rounded-b-xl border border-slate-800 bg-slate-950 overflow-hidden shadow-2xl">
        <div className="flex text-xs font-mono overflow-x-auto max-h-[750px]">
          {/* Line Numbers */}
          <div className="select-none py-4 px-3 text-right text-slate-600 bg-slate-900/60 border-r border-slate-800/80 shrink-0 font-mono text-[11px] leading-relaxed">
            {lines.map((_, i) => (
              <div key={i} className="h-5">
                {i + 1}
              </div>
            ))}
          </div>

          {/* Code Body */}
          <pre className="p-4 text-slate-200 leading-relaxed font-mono text-[11px] md:text-xs overflow-x-auto w-full select-text">
            <code>{markdown}</code>
          </pre>
        </div>
      </div>

      {/* How to publish notice */}
      <div className="mt-6 p-4 rounded-xl border border-slate-800 bg-slate-900/40 text-xs text-slate-400 flex items-start gap-3">
        <span className="text-emerald-400 text-base leading-none">💡</span>
        <div className="space-y-1">
          <p className="font-semibold text-slate-200">How to deploy this to your GitHub profile:</p>
          <ol className="list-decimal list-inside space-y-1 text-slate-400">
            <li>Create a new public GitHub repository with your exact username: <span className="font-mono text-emerald-300">simonwolde/simonwolde</span></li>
            <li>Initialize or create a file named <span className="font-mono text-emerald-300">README.md</span> in the repository root</li>
            <li>Click <strong>Copy Raw Markdown</strong> above and paste it into the file</li>
            <li>Commit the file to the <span className="font-mono text-emerald-300">main</span> branch — GitHub will automatically render it as your profile showcase!</li>
          </ol>
        </div>
      </div>
    </div>
  );
}
