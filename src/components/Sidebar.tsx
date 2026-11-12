'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface NavItem {
  name: string;
  href: string;
  icon: string;
  description: string;
  badge?: string;
  badgeColor?: string;
}

const NAV_ITEMS: NavItem[] = [
  { 
    name: 'Deepfake Detector', 
    href: '/analyze', 
    icon: '🔍', 
    description: 'Video, audio & image scanner',
    badge: 'Core', 
    badgeColor: 'bg-sky-500/10 text-sky-400 border-sky-500/20' 
  },
  { 
    name: 'Incident Dashboard', 
    href: '/dashboard', 
    icon: '📊', 
    description: 'Real-time threat monitoring'
  },
  { 
    name: 'Network Intelligence', 
    href: '/network', 
    icon: '🕸️', 
    description: 'Coordinated bot accounts',
    badge: '12 Bots', 
    badgeColor: 'bg-rose-500/10 text-rose-400 border-rose-500/20' 
  },
  { 
    name: 'Live Stream Ingestion', 
    href: '/feed', 
    icon: '⚡', 
    description: 'Social posts & viral claims',
    badge: 'Live', 
    badgeColor: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20' 
  },
  { 
    name: 'Forensic Dossiers', 
    href: '/investigations', 
    icon: '📋', 
    description: 'Case evidence & PDF export' 
  },
  { 
    name: 'Settings & Telemetry', 
    href: '/admin', 
    icon: '⚙️', 
    description: 'AI models & API keys' 
  },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-72 bg-[#0b0f19]/90 backdrop-blur-xl border-r border-slate-800/80 flex flex-col justify-between shrink-0 select-none min-h-screen">
      <div>
        {/* Brand Header */}
        <div className="p-5 border-b border-slate-800/80">
          <Link href="/analyze" className="flex items-center gap-3.5 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-sky-500 via-indigo-500 to-purple-600 p-[1.5px] shadow-lg shadow-sky-500/20">
              <div className="w-full h-full bg-[#0b0f19] rounded-[10px] flex items-center justify-center text-lg group-hover:scale-105 transition-transform">
                🛡️
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-base tracking-tight text-white">
                  TruthLens
                </span>
                <span className="text-[10px] px-1.5 py-0.2 rounded font-semibold bg-sky-500/10 text-sky-400 border border-sky-500/20">
                  AI Verifier
                </span>
              </div>
              <div className="text-[11px] text-slate-400 font-medium">
                Deepfake & Misinformation Intelligence
              </div>
            </div>
          </Link>
        </div>

        {/* Live Incident Status Pill */}
        <div className="mx-4 mt-4 p-3 rounded-xl bg-slate-900/80 border border-slate-800/90 shadow-sm space-y-1.5">
          <div className="flex items-center justify-between">
            <span className="flex items-center gap-2 text-xs font-semibold text-slate-200">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-rose-500"></span>
              </span>
              Active Incident Response
            </span>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-rose-500/10 text-rose-400 border border-rose-500/20">
              High Priority
            </span>
          </div>
          <p className="text-[11px] text-slate-400 leading-tight">
            Osman Sagar Dam Collapse Rumor & Synthetic Audio Evacuation Call
          </p>
        </div>

        {/* Navigation Links */}
        <nav className="p-3 space-y-1 mt-2">
          {NAV_ITEMS.map((item) => {
            const isActive = pathname === item.href || (item.href !== '/dashboard' && pathname?.startsWith(item.href));
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-medium transition-all group ${
                  isActive
                    ? 'bg-gradient-to-r from-sky-500/15 via-slate-800/60 to-transparent text-white border-l-2 border-sky-400 shadow-sm'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
                }`}
              >
                <div className="flex items-center gap-3 min-w-0">
                  <span className="text-base group-hover:scale-110 transition-transform">{item.icon}</span>
                  <div className="truncate">
                    <div className={`text-xs font-semibold ${isActive ? 'text-white' : 'text-slate-300'}`}>
                      {item.name}
                    </div>
                    <div className="text-[10px] text-slate-500 truncate">
                      {item.description}
                    </div>
                  </div>
                </div>

                {item.badge && (
                  <span className={`text-[10px] font-medium px-2 py-0.5 rounded-full border shrink-0 ${item.badgeColor}`}>
                    {item.badge}
                  </span>
                )}
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Footer System Telemetry */}
      <div className="p-4 border-t border-slate-800/80 bg-slate-900/40 space-y-2">
        <div className="flex items-center justify-between text-xs">
          <span className="text-slate-400">Groq Llama-3.3 Engine</span>
          <span className="text-emerald-400 font-semibold flex items-center gap-1.5 text-[11px]">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
            Online
          </span>
        </div>
        <div className="text-[10px] text-slate-500 flex items-center justify-between">
          <span>YUKTIK-2026 · PS11</span>
          <span className="font-medium text-slate-400">Team WARRIORS</span>
        </div>
      </div>
    </aside>
  );
}
