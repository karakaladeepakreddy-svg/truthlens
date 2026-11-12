'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface NavItem {
  name: string;
  href: string;
  icon: string;
  badge?: string;
  badgeColor?: string;
}

const NAV_ITEMS: NavItem[] = [
  { name: 'Threat Dashboard', href: '/dashboard', icon: '📊' },
  { name: 'Media Analysis Studio', href: '/analyze', icon: '🔍', badge: 'AI Live', badgeColor: 'bg-cyan-500/20 text-cyan-300 border-cyan-500/40' },
  { name: 'Network Intelligence', href: '/network', icon: '🕸️', badge: '12 Bots', badgeColor: 'bg-red-500/20 text-red-300 border-red-500/40' },
  { name: 'Real-Time Stream', href: '/feed', icon: '⚡', badge: 'Live', badgeColor: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40' },
  { name: 'Forensic Dossiers', href: '/investigations', icon: '📋' },
  { name: 'Admin & System Config', href: '/admin', icon: '⚙️' },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 bg-[#0d1117] border-r border-[#30363d] flex flex-col justify-between shrink-0 select-none min-h-screen">
      <div>
        {/* Brand Header */}
        <div className="p-5 border-b border-[#30363d] flex items-center justify-between">
          <Link href="/dashboard" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 via-blue-600 to-violet-600 p-[1px] shadow-lg shadow-cyan-500/20">
              <div className="w-full h-full bg-[#0a0a0f] rounded-[11px] flex items-center justify-center font-black text-xl text-cyan-400 group-hover:scale-105 transition-transform">
                🛡️
              </div>
            </div>
            <div>
              <div className="font-extrabold text-base tracking-wide bg-gradient-to-r from-cyan-400 via-blue-300 to-indigo-300 bg-clip-text text-transparent">
                TruthLens
              </div>
              <div className="text-[10px] font-mono uppercase tracking-widest text-gray-400">
                WARRIORS · PS11
              </div>
            </div>
          </Link>
        </div>

        {/* Live Threat Status Indicator */}
        <div className="mx-4 mt-4 p-3 rounded-lg bg-[#161b22] border border-red-500/30 flex items-center justify-between shadow-inner">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-500"></span>
            </span>
            <span className="text-xs font-semibold text-red-300 tracking-wide">THREAT LEVEL: HIGH</span>
          </div>
          <span className="text-[11px] font-mono text-gray-400 bg-red-950/60 px-1.5 py-0.5 rounded border border-red-800/40">
            DAM CRIME
          </span>
        </div>

        {/* Navigation Links */}
        <nav className="p-3 space-y-1.5 mt-2">
          {NAV_ITEMS.map((item) => {
            const isActive = pathname === item.href || (item.href !== '/dashboard' && pathname?.startsWith(item.href));
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center justify-between px-3.5 py-2.5 rounded-lg text-sm font-medium transition-all ${
                  isActive
                    ? 'bg-gradient-to-r from-cyan-950/60 via-[#161b22] to-transparent text-cyan-300 border-l-2 border-cyan-400 shadow-sm'
                    : 'text-gray-300 hover:text-white hover:bg-[#161b22]/70'
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className="text-lg">{item.icon}</span>
                  <span>{item.name}</span>
                </div>
                {item.badge && (
                  <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full border ${item.badgeColor}`}>
                    {item.badge}
                  </span>
                )}
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Footer Info */}
      <div className="p-4 border-t border-[#30363d] bg-[#0a0a0f]/60 space-y-2">
        <div className="text-[11px] text-gray-400 flex items-center justify-between">
          <span>Groq Llama-3.3 Engine</span>
          <span className="text-emerald-400 flex items-center gap-1 font-mono">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block"></span>
            READY
          </span>
        </div>
        <div className="text-[10px] text-gray-500 font-mono">
          YUKTIK-2026 · CSE(AI&ML) KMIT
        </div>
      </div>
    </aside>
  );
}

