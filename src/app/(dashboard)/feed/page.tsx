'use client';

import { useState, useEffect } from 'react';
import { RECENT_SOCIAL_POSTS } from '@/lib/mock-data';
import { SocialPost } from '@/types';
import Link from 'next/link';

export default function FeedPage() {
  const [posts, setPosts] = useState<SocialPost[]>(RECENT_SOCIAL_POSTS);
  const [filterPlatform, setFilterPlatform] = useState<string>('All');
  const [filterLanguage, setFilterLanguage] = useState<string>('All');
  const [filterStatus, setFilterStatus] = useState<string>('All');
  const [isSimulatingLive, setIsSimulatingLive] = useState<boolean>(true);

  // Live simulation: dynamically add synthetic incoming posts
  useEffect(() => {
    if (!isSimulatingLive) return;

    const interval = setInterval(() => {
      const simulatedIncoming: SocialPost[] = [
        {
          id: `POST-${Date.now().toString().slice(-4)}`,
          author: 'Telangana Flash News',
          handle: `@TG_FlashBot_${Math.floor(Math.random() * 90 + 10)}`,
          avatar: '🤖',
          platform: 'Telegram',
          timestamp: 'Just now',
          content: 'తాజా వార్త: ఉస్మాన్ సాగర్ డ్యామ్ వద్ద నీటిమట్టం ప్రమాదకర స్థాయికి చేరింది. అధికారులు అప్రమత్తం.',
          language: 'Telugu',
          status: 'CONTRADICTED',
          shares: Math.floor(Math.random() * 800 + 100),
          likes: Math.floor(Math.random() * 90 + 5),
          botScore: 98,
          flaggedReason: 'Rapid bot network amplifier detected matching Syndicate-Delta fingerprint'
        },
        {
          id: `POST-${Date.now().toString().slice(-4)}`,
          author: 'Citizen Fact Watcher',
          handle: '@TruthSeekerHyd',
          avatar: '🧐',
          platform: 'X (Twitter)',
          timestamp: 'Just now',
          content: 'Please verify before forwarding: The dam video circulating on WhatsApp is from 2021 normal release, not a collapse. TG-SDMA has confirmed all dams are safe.',
          language: 'English',
          status: 'VERIFIED',
          shares: 420,
          likes: 890,
          botScore: 0,
          flaggedReason: 'Citizen counter-misinformation broadcast'
        }
      ];

      const randomPick = simulatedIncoming[Math.floor(Math.random() * simulatedIncoming.length)];
      setPosts((prev) => [randomPick, ...prev.slice(0, 19)]);
    }, 9000);

    return () => clearInterval(interval);
  }, [isSimulatingLive]);

  const filteredPosts = posts.filter((p) => {
    if (filterPlatform !== 'All' && !p.platform.includes(filterPlatform)) return false;
    if (filterLanguage !== 'All' && p.language !== filterLanguage) return false;
    if (filterStatus !== 'All' && p.status !== filterStatus) return false;
    return true;
  });

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[#30363d] pb-5">
        <div>
          <h1 className="text-2xl font-black text-white flex items-center gap-2">
            <span>⚡ Real-Time Social Media Ingestion Stream</span>
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping"></span>
          </h1>
          <p className="text-sm text-gray-300">
            Multi-platform ingestion monitor listening to X, Telegram, WhatsApp Webhooks & YouTube Streams
          </p>
        </div>

        {/* Live Simulation Toggle */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => setIsSimulatingLive(!isSimulatingLive)}
            className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold flex items-center gap-2 border transition-all ${
              isSimulatingLive
                ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30'
                : 'bg-gray-800 text-gray-400 border-gray-700'
            }`}
          >
            <span className={`w-2 h-2 rounded-full ${isSimulatingLive ? 'bg-emerald-400 animate-pulse' : 'bg-gray-500'}`}></span>
            {isSimulatingLive ? 'STREAMING ACTIVE' : 'STREAM PAUSED'}
          </button>
        </div>
      </div>

      {/* Filter Toolbar */}
      <div className="flex flex-wrap items-center justify-between gap-3 p-4 rounded-xl bg-[#161b22] border border-[#30363d]">
        <div className="flex flex-wrap items-center gap-3">
          {/* Platform Filter */}
          <div className="flex items-center gap-1 text-xs">
            <span className="text-gray-400 font-mono">PLATFORM:</span>
            {['All', 'X', 'Telegram', 'WhatsApp'].map((plat) => (
              <button
                key={plat}
                onClick={() => setFilterPlatform(plat)}
                className={`px-2.5 py-1 rounded text-xs transition-colors ${
                  filterPlatform === plat
                    ? 'bg-cyan-500/20 text-cyan-300 font-bold border border-cyan-500/40'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                {plat}
              </button>
            ))}
          </div>

          <div className="h-4 w-[1px] bg-gray-700"></div>

          {/* Language Filter */}
          <div className="flex items-center gap-1 text-xs">
            <span className="text-gray-400 font-mono">LANG:</span>
            {['All', 'Telugu', 'Hindi', 'English'].map((lang) => (
              <button
                key={lang}
                onClick={() => setFilterLanguage(lang)}
                className={`px-2.5 py-1 rounded text-xs transition-colors ${
                  filterLanguage === lang
                    ? 'bg-indigo-500/20 text-indigo-300 font-bold border border-indigo-500/40'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                {lang}
              </button>
            ))}
          </div>
        </div>

        {/* Verification Status Filter */}
        <div className="flex items-center gap-1 text-xs">
          <span className="text-gray-400 font-mono">VERDICT:</span>
          {['All', 'CONTRADICTED', 'MISLEADING', 'VERIFIED'].map((st) => (
            <button
              key={st}
              onClick={() => setFilterStatus(st)}
              className={`px-2 py-0.5 rounded text-[11px] font-mono transition-colors ${
                filterStatus === st
                  ? 'bg-gray-200 text-black font-bold'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              {st}
            </button>
          ))}
        </div>
      </div>

      {/* Stream Feed Cards */}
      <div className="space-y-3">
        {filteredPosts.map((post) => (
          <div
            key={post.id}
            className={`p-4 rounded-xl bg-[#161b22] border transition-all ${
              post.status === 'CONTRADICTED'
                ? 'border-red-500/30 hover:border-red-500/60'
                : post.status === 'MISLEADING'
                ? 'border-amber-500/30 hover:border-amber-500/60'
                : 'border-emerald-500/30 hover:border-emerald-500/60'
            }`}
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#30363d] pb-2.5 mb-3">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-[#0d1117] border border-[#30363d] flex items-center justify-center text-sm">
                  {post.avatar}
                </div>
                <div>
                  <div className="font-bold text-xs text-gray-200 flex items-center gap-1.5">
                    <span>{post.author}</span>
                    <span className="text-gray-400 font-normal font-mono">{post.handle}</span>
                  </div>
                  <div className="text-[10px] text-gray-500 font-mono">
                    {post.platform} · {post.timestamp}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-[#0d1117] text-cyan-300 border border-cyan-800/40">
                  {post.language}
                </span>

                <span className={`text-[11px] font-bold px-2 py-0.5 rounded-full border ${
                  post.status === 'CONTRADICTED'
                    ? 'bg-red-500/10 text-red-400 border-red-500/30'
                    : post.status === 'MISLEADING'
                    ? 'bg-amber-500/10 text-amber-400 border-amber-500/30'
                    : 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30'
                }`}>
                  {post.status}
                </span>

                {post.botScore > 70 && (
                  <span className="text-[10px] font-mono font-bold px-1.5 py-0.5 rounded bg-red-950 text-red-300 border border-red-800">
                    BOT ({post.botScore}%)
                  </span>
                )}
              </div>
            </div>

            {/* Post Content */}
            <p className="text-sm text-gray-100 font-sans leading-relaxed mb-3">
              {post.content}
            </p>

            {/* AI Flagging Rationale & Quick Action */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-2 border-t border-[#30363d] text-xs">
              <div className="text-gray-400 flex items-center gap-1.5">
                <span className="text-cyan-400 font-bold font-mono">ANALYSIS:</span>
                <span className="text-gray-300">{post.flaggedReason}</span>
              </div>

              <div className="flex items-center gap-3 shrink-0">
                <span className="text-[11px] font-mono text-gray-400">
                  🔁 {post.shares.toLocaleString()} shares · ❤️ {post.likes.toLocaleString()}
                </span>
                <Link
                  href="/analyze"
                  className="px-2.5 py-1 rounded bg-[#0d1117] hover:bg-cyan-950 text-cyan-300 border border-cyan-800/40 text-[11px] font-mono transition-colors"
                >
                  Verify in Studio →
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

