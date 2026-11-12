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
    <header className="h-16 border-b border-[#30363d] bg-[#0d1117]/80 backdrop-blur-md sticky top-0 z-30 px-6 flex items-center justify-between">
      {/* Active Incident Title */}
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-2 px-3 py-1 rounded-md bg-[#161b22] border border-[#30363d]">
          <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse"></span>
          <span className="text-xs text-gray-300 font-medium">Incident #YK-091:</span>
          <span className="text-xs font-semibold text-cyan-300">
            Osman Sagar Dam Breach & Coordinated Evacuation Panic
          </span>
        </div>
      </div>

      {/* Center/Right Controls */}
      <div className="flex items-center gap-4">
        {/* Multilingual Selector */}
        <div className="flex items-center gap-1.5 bg-[#161b22] border border-[#30363d] rounded-lg p-1 text-xs">
          <span className="text-gray-400 px-2 text-[11px] font-mono">LANG:</span>
          {(['All', 'English', 'Hindi', 'Telugu'] as const).map((lang) => (
            <button
              key={lang}
              onClick={() => setSelectedLanguage(lang)}
              className={`px-2.5 py-1 rounded text-xs transition-colors ${
                selectedLanguage === lang
                  ? 'bg-cyan-500/20 text-cyan-300 font-semibold border border-cyan-500/40'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              {lang === 'Hindi' ? 'हिन्दी' : lang === 'Telugu' ? 'తెలుగు' : lang}
            </button>
          ))}
        </div>

        {/* Real-time Clock & System Telemetry */}
        <div className="hidden md:flex items-center gap-2 bg-[#161b22] border border-[#30363d] px-3 py-1.5 rounded-lg text-xs font-mono text-gray-300">
          <span className="text-cyan-400">⏱️</span>
          <span>{time}</span>
        </div>

        {/* System Operator Badge */}
        <div className="flex items-center gap-2.5 pl-2 border-l border-[#30363d]">
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-cyan-600 to-indigo-600 flex items-center justify-center text-xs font-bold text-white shadow-sm">
            W
          </div>
          <div className="hidden sm:block text-left">
            <div className="text-xs font-medium text-gray-200">Team WARRIORS</div>
            <div className="text-[10px] text-emerald-400 font-mono">SEC-OP ANALYST</div>
          </div>
        </div>
      </div>
    </header>
  );
}

