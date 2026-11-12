'use client';

import { useState, useEffect } from 'react';

export function Navbar() {
  const [time, setTime] = useState<string>('10:14:32 AM');
  const [selectedLanguage, setSelectedLanguage] = useState<'All' | 'English' | 'Hindi' | 'Telugu'>('All');

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      setTime(now.toLocaleTimeString());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <header className="h-16 border-b border-slate-800/80 bg-[#0b0f19]/80 backdrop-blur-xl sticky top-0 z-30 px-6 flex items-center justify-between">
      {/* Active Incident Badge */}
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-2.5 px-3.5 py-1.5 rounded-lg bg-slate-900/90 border border-slate-800 shadow-sm">
          <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse"></span>
          <span className="text-xs text-slate-400 font-medium">Incident Monitor:</span>
          <span className="text-xs font-semibold text-slate-100">
            Osman Sagar Dam Breach Rumor
          </span>
          <span className="text-[10px] px-1.5 py-0.2 rounded bg-rose-500/10 text-rose-400 border border-rose-500/20 font-medium">
            Cross-Modal Threat
          </span>
        </div>
      </div>

      {/* Right Controls */}
      <div className="flex items-center gap-4">
        {/* Multilingual Selector */}
        <div className="flex items-center gap-1 bg-slate-900/90 border border-slate-800 rounded-lg p-1 text-xs shadow-sm">
          <span className="text-slate-400 px-2 text-[11px] font-medium">Language:</span>
          {(['All', 'English', 'Hindi', 'Telugu'] as const).map((lang) => (
            <button
              key={lang}
              onClick={() => setSelectedLanguage(lang)}
              className={`px-2.5 py-1 rounded-md text-xs font-medium transition-all ${
                selectedLanguage === lang
                  ? 'bg-sky-500 text-slate-950 font-semibold shadow-sm'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              {lang === 'Hindi' ? 'हिन्दी' : lang === 'Telugu' ? 'తెలుగు' : lang}
            </button>
          ))}
        </div>

        {/* Real-time Clock */}
        <div className="hidden md:flex items-center gap-2 bg-slate-900/90 border border-slate-800 px-3 py-1.5 rounded-lg text-xs font-mono text-slate-300 shadow-sm">
          <span className="text-sky-400">⏱️</span>
          <span>{time}</span>
        </div>

        {/* User Badge */}
        <div className="flex items-center gap-3 pl-3 border-l border-slate-800">
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-sky-500 to-indigo-600 flex items-center justify-center text-xs font-bold text-white shadow-sm ring-2 ring-slate-800">
            W
          </div>
          <div className="hidden sm:block text-left">
            <div className="text-xs font-semibold text-slate-200">Team WARRIORS</div>
            <div className="text-[10px] text-emerald-400 font-medium">SecOps Verifier</div>
          </div>
        </div>
      </div>
    </header>
  );
}
