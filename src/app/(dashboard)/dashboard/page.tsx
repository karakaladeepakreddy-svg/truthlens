'use client';

import { useState } from 'react';
import Link from 'next/link';
import { INITIAL_ALERTS, SCENARIO_MEDIA_ANALYSIS } from '@/lib/mock-data';

export default function DashboardPage() {
  const [alerts, setAlerts] = useState(INITIAL_ALERTS);
  const [activeSimulationStep, setActiveSimulationStep] = useState<number>(4);

  const simulationSteps = [
    { time: '10:00 AM', title: 'Adversarial Seed Post', desc: 'Synthetic dam breach video deployed by @NewsFlashExpress', status: 'Injected' },
    { time: '10:00:44 AM', title: 'Multilingual Bot Burst', desc: '12 accounts push Telugu/Hindi variants within 42 seconds', status: 'Amplified' },
    { time: '10:01:20 AM', title: 'Recycled 2018 Imagery', desc: 'Archival Kerala flood photo repurposed as Hyderabad highway', status: 'Laundered' },
    { time: '10:02:10 AM', title: 'Cloned IAS Voice Broadcast', desc: '28-sec synthetic voice note circulated to 42 WhatsApp groups', status: 'Escalated' },
    { time: '10:04:30 AM', title: 'TruthLens Multi-Sensor Rebuttal', desc: 'Automated PIB debunk + TG-SDMA live telemetry dispatched', status: 'Mitigated' }
  ];

  return (
    <div className="space-y-6">
      {/* Top Banner: Real-time Emergency Response Center */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-red-950/40 via-[#161b22] to-cyan-950/40 border border-red-500/40 p-6 shadow-2xl">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-mono">
              <span className="w-2 h-2 rounded-full bg-red-400 animate-ping"></span>
              ACTIVE CRITICAL MISINFORMATION CORRELATION EVENT
            </div>
            <h1 className="text-2xl lg:text-3xl font-extrabold tracking-tight text-white flex items-center gap-3">
              <span>Incident Response: Osman Sagar Dam Collapse Narrative</span>
              <span className="text-xs px-2.5 py-0.5 rounded-md bg-amber-500/20 text-amber-300 border border-amber-500/30 font-mono">
                Multimodal Threat
              </span>
            </h1>
            <p className="text-sm text-gray-300 max-w-3xl">
              Cross-correlating evidence across <strong className="text-cyan-300">12 coordinated botnet accounts</strong>, <strong className="text-red-300">1 cloned voice broadcast</strong>, <strong className="text-amber-300">1 recycled 2018 Kerala flood photo</strong>, and <strong className="text-indigo-300">3 languages (Telugu, Hindi, English)</strong> against authentic government telemetric sensors.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <Link
              href="/analyze"
              className="px-4 py-2.5 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-black font-bold text-sm shadow-lg shadow-cyan-500/25 transition-all flex items-center gap-2"
            >
              <span>🔍</span>
              <span>Launch Media Studio</span>
            </Link>
            <Link
              href="/network"
              className="px-4 py-2.5 rounded-lg bg-[#161b22] border border-[#30363d] hover:border-cyan-400/50 text-gray-200 text-sm font-medium transition-all flex items-center gap-2"
            >
              <span>🕸️</span>
              <span>Inspect Botnet (12)</span>
            </Link>
          </div>
        </div>
      </div>

      {/* 4 Core Verification Metric Counters (Categorized Confidence Scores) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Contradicted */}
        <div className="p-5 rounded-xl bg-[#161b22] border border-red-500/30 relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-1 bg-red-500"></div>
          <div className="flex items-center justify-between text-gray-400 text-xs font-mono uppercase">
            <span>Contradicted by Facts</span>
            <span className="text-red-400 text-base">🚫</span>
          </div>
          <div className="mt-2 flex items-baseline gap-2">
            <span className="text-3xl font-black text-red-400">18</span>
            <span className="text-xs text-red-400/80 font-mono">+12 in last 20m</span>
          </div>
          <p className="mt-1 text-xs text-gray-400">Directly rebutted by TG-SDMA live sensors & PIB</p>
        </div>

        {/* Misleading */}
        <div className="p-5 rounded-xl bg-[#161b22] border border-amber-500/30 relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-1 bg-amber-500"></div>
          <div className="flex items-center justify-between text-gray-400 text-xs font-mono uppercase">
            <span>Misleading / Recycled</span>
            <span className="text-amber-400 text-base">⚠️</span>
          </div>
          <div className="mt-2 flex items-baseline gap-2">
            <span className="text-3xl font-black text-amber-400">24</span>
            <span className="text-xs text-amber-400/80 font-mono">2018 flood media repurposed</span>
          </div>
          <p className="mt-1 text-xs text-gray-400">Genuine archival assets mapped to false timeline</p>
        </div>

        {/* Verified Authentic */}
        <div className="p-5 rounded-xl bg-[#161b22] border border-emerald-500/30 relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-1 bg-emerald-500"></div>
          <div className="flex items-center justify-between text-gray-400 text-xs font-mono uppercase">
            <span>Verified Official</span>
            <span className="text-emerald-400 text-base">✅</span>
          </div>
          <div className="mt-2 flex items-baseline gap-2">
            <span className="text-3xl font-black text-emerald-400">6</span>
            <span className="text-xs text-emerald-400/80 font-mono">District & PIB Telemetry</span>
          </div>
          <p className="mt-1 text-xs text-gray-400">Cryptographically signed & verified press briefs</p>
        </div>

        {/* Unverified Ingested */}
        <div className="p-5 rounded-xl bg-[#161b22] border border-cyan-500/30 relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-1 bg-cyan-500"></div>
          <div className="flex items-center justify-between text-gray-400 text-xs font-mono uppercase">
            <span>Unverified Queue</span>
            <span className="text-cyan-400 text-base">⏳</span>
          </div>
          <div className="mt-2 flex items-baseline gap-2">
            <span className="text-3xl font-black text-cyan-400">89</span>
            <span className="text-xs text-cyan-400/80 font-mono">Deep Learning pipeline queue</span>
          </div>
          <p className="mt-1 text-xs text-gray-400">Multi-modal feature extraction in progress</p>
        </div>
      </div>

      {/* Temporal Propagation & Incident Simulation Stepper */}
      <div className="rounded-xl bg-[#161b22] border border-[#30363d] p-5 space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#30363d] pb-3">
          <div>
            <h3 className="font-bold text-sm text-white flex items-center gap-2">
              <span>📈 Temporal Propagation Tracking & Crisis Stepper</span>
              <span className="text-xs font-mono text-cyan-400">10:00 AM Incident Timeline</span>
            </h3>
            <p className="text-xs text-gray-400">
              Tracking real-time viral velocity across botnet amplification vs official counter-mitigation
            </p>
          </div>
          <span className="text-xs font-mono text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-800/40">
            MITIGATION ACTIVE
          </span>
        </div>

        {/* Interactive Steps */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
          {simulationSteps.map((step, idx) => (
            <button
              key={idx}
              onClick={() => setActiveSimulationStep(idx)}
              className={`p-3 rounded-lg text-left transition-all border ${
                activeSimulationStep === idx
                  ? 'bg-cyan-950/40 border-cyan-400 text-cyan-200 shadow-md'
                  : 'bg-[#0d1117] border-[#30363d] text-gray-400 hover:text-white'
              }`}
            >
              <div className="flex items-center justify-between mb-1">
                <span className="text-[10px] font-mono font-bold text-cyan-400">{step.time}</span>
                <span className="text-[9px] font-mono px-1.5 py-0.2 rounded bg-gray-800 text-gray-300">
                  {step.status}
                </span>
              </div>
              <div className="font-bold text-xs text-gray-200 mb-1">{step.title}</div>
              <p className="text-[11px] text-gray-400 line-clamp-2 leading-relaxed">{step.desc}</p>
            </button>
          ))}
        </div>

        {/* Visual Propagation Velocity Curve */}
        <div className="p-4 rounded-lg bg-[#0d1117] border border-[#30363d] space-y-2">
          <div className="flex justify-between text-xs font-mono text-gray-400">
            <span>Viral Velocity: Shares / Min</span>
            <span className="text-red-400 font-bold">Peak: 850 shares/min at 10:03 AM → Drop to 45 shares/min after TruthLens rebuttal</span>
          </div>

          {/* Graphical timeline bars */}
          <div className="h-20 flex items-end gap-2 pt-2">
            {[
              { label: '10:00', bot: 20, org: 5, total: 25 },
              { label: '10:01', bot: 65, org: 15, total: 80 },
              { label: '10:02', bot: 85, org: 35, total: 120 },
              { label: '10:03', bot: 95, org: 55, total: 150 }, // PEAK
              { label: '10:04', bot: 80, org: 50, total: 130 },
              { label: '10:05 (Rebuttal)', bot: 40, org: 70, total: 110 },
              { label: '10:06', bot: 20, org: 85, total: 105 },
              { label: '10:08', bot: 10, org: 90, total: 100 },
              { label: '10:10', bot: 5, org: 95, total: 100 },
              { label: '10:14', bot: 2, org: 98, total: 100 },
            ].map((bar, i) => (
              <div key={i} className="flex-1 flex flex-col items-center gap-1 group relative">
                <div className="w-full flex flex-col justify-end h-16 rounded-sm overflow-hidden bg-gray-800">
                  <div
                    className="w-full bg-red-500/80 transition-all"
                    style={{ height: `${bar.bot}%` }}
                  ></div>
                  <div
                    className="w-full bg-emerald-500/80 transition-all"
                    style={{ height: `${bar.org * 0.4}%` }}
                  ></div>
                </div>
                <span className="text-[9px] font-mono text-gray-500">{bar.label}</span>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-between text-[11px] font-mono text-gray-400 pt-1">
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-sm bg-red-500 inline-block"></span>
                Botnet Amplification Velocity
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-sm bg-emerald-500 inline-block"></span>
                Verified Official Counter-Spread
              </span>
            </div>
            <span className="text-cyan-400">Viral Coefficient ($R_0$): 4.8 → 0.4 (Sub-critical)</span>
          </div>
        </div>
      </div>

      {/* Main Grid: Live Threat Alerts + Scenario Correlation Explorer */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left 2 Cols: Multimodal Forensic Inspection Cards */}
        <div className="lg:col-span-2 space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <span>🔬 Multi-Modal Forensic Corroboration</span>
              <span className="text-xs font-normal text-gray-400">
                (Cross-Modal Reasoning Engine)
              </span>
            </h2>
            <div className="text-xs text-cyan-400 font-mono">
              Live Feed: 420 events/sec
            </div>
          </div>

          <div className="space-y-4">
            {SCENARIO_MEDIA_ANALYSIS.map((item) => (
              <div
                key={item.id}
                className="rounded-xl bg-[#161b22] border border-[#30363d] hover:border-gray-600 transition-all p-5 space-y-4"
              >
                {/* Header Row */}
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#30363d] pb-3">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono px-2 py-0.5 rounded bg-gray-800 text-cyan-300">
                      {item.id}
                    </span>
                    <span className="text-xs font-semibold uppercase text-gray-400">
                      {item.mediaType}
                    </span>
                    <span className="text-xs text-gray-400">· {item.timestamp}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className={`text-xs font-bold px-2.5 py-0.5 rounded-full border ${
                      item.status === 'CONTRADICTED'
                        ? 'bg-red-500/10 text-red-400 border-red-500/30'
                        : 'bg-amber-500/10 text-amber-400 border-amber-500/30'
                    }`}>
                      {item.status}
                    </span>
                    <span className="text-xs font-mono bg-cyan-950/60 text-cyan-300 px-2 py-0.5 rounded border border-cyan-800/40">
                      Deepfake Risk: {item.deepfakeScore}%
                    </span>
                  </div>
                </div>

                {/* Title & Summary */}
                <div>
                  <h3 className="font-bold text-base text-gray-100">{item.title}</h3>
                  <p className="mt-1 text-sm text-gray-300 leading-relaxed">{item.summary}</p>
                </div>

                {/* Evidence Chain Preview */}
                {item.claimVerification && (
                  <div className="p-3.5 rounded-lg bg-[#0d1117] border border-[#30363d] space-y-2">
                    <div className="text-xs font-semibold text-gray-400 flex items-center justify-between">
                      <span className="flex items-center gap-1.5 text-cyan-400">
                        <span>⚖️</span>
                        <span>Evidence-Based Reasoning Chain (XAI)</span>
                      </span>
                      <span className="text-[11px] font-mono text-emerald-400">
                        Confidence: {item.confidenceScore}%
                      </span>
                    </div>

                    <div className="space-y-1.5">
                      {item.claimVerification.evidenceChain.map((step) => (
                        <div key={step.step} className="text-xs text-gray-300 flex items-start gap-2">
                          <span className="text-cyan-400 font-mono font-bold">[{step.step}]</span>
                          <div>
                            <span className="text-gray-400 font-semibold">{step.source}: </span>
                            <span>{step.finding}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Multilingual Spread Badges */}
                {item.multilingualVariants && (
                  <div className="flex flex-wrap items-center gap-2 pt-1">
                    <span className="text-xs text-gray-400 font-mono">LANG VARIANTS:</span>
                    {item.multilingualVariants.map((v) => (
                      <span
                        key={v.language}
                        className="text-xs px-2.5 py-1 rounded bg-[#0d1117] border border-[#30363d] text-gray-300 flex items-center gap-1.5 font-mono"
                      >
                        <span className="text-cyan-400 font-bold">{v.language}</span>
                        <span className="text-gray-400">({v.distributionCount} shares)</span>
                      </span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Right 1 Col: Live Alerts Ticker & System Propagation Telemetry */}
        <div className="space-y-6">
          {/* Active Incident Alerts */}
          <div className="rounded-xl bg-[#161b22] border border-[#30363d] p-5 space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="font-bold text-sm text-white flex items-center gap-2">
                <span>🔔 Live Intelligence Alerts</span>
                <span className="w-2 h-2 rounded-full bg-red-400 animate-pulse"></span>
              </h3>
              <span className="text-[11px] font-mono text-gray-400">3 ACTIVE</span>
            </div>

            <div className="space-y-3">
              {alerts.map((alert) => (
                <div
                  key={alert.id}
                  className="p-3 rounded-lg bg-[#0d1117] border border-gray-800 hover:border-gray-700 transition-colors space-y-1.5"
                >
                  <div className="flex items-center justify-between">
                    <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded font-mono ${
                      alert.severity === 'CRITICAL'
                        ? 'bg-red-500/20 text-red-400 border border-red-500/40'
                        : alert.severity === 'HIGH'
                        ? 'bg-amber-500/20 text-amber-400 border border-amber-500/40'
                        : 'bg-blue-500/20 text-blue-400 border border-blue-500/40'
                    }`}>
                      {alert.severity}
                    </span>
                    <span className="text-[11px] font-mono text-gray-400">{alert.timestamp}</span>
                  </div>
                  <div className="font-semibold text-xs text-gray-200">{alert.title}</div>
                  <p className="text-[11px] text-gray-400 line-clamp-2">{alert.description}</p>
                  <div className="flex items-center justify-between pt-1 text-[10px] font-mono text-gray-400">
                    <span>Region: {alert.affectedRegion}</span>
                    <span className="text-cyan-400">{alert.campaignCluster}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Multilingual Spread Distribution */}
          <div className="rounded-xl bg-[#161b22] border border-[#30363d] p-5 space-y-4">
            <h3 className="font-bold text-sm text-white flex items-center justify-between">
              <span>🌐 Multilingual Distribution Ratio</span>
              <span className="text-xs font-mono text-cyan-400">10,130 Posts</span>
            </h3>

            <div className="space-y-3">
              <div>
                <div className="flex justify-between text-xs mb-1 font-mono">
                  <span className="text-gray-300">Telugu (తెలుగు)</span>
                  <span className="text-cyan-400 font-bold">46.5%</span>
                </div>
                <div className="w-full h-2 rounded-full bg-[#0d1117] overflow-hidden">
                  <div className="h-full bg-cyan-400 rounded-full" style={{ width: '46.5%' }}></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs mb-1 font-mono">
                  <span className="text-gray-300">English</span>
                  <span className="text-blue-400 font-bold">32.2%</span>
                </div>
                <div className="w-full h-2 rounded-full bg-[#0d1117] overflow-hidden">
                  <div className="h-full bg-blue-400 rounded-full" style={{ width: '32.2%' }}></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs mb-1 font-mono">
                  <span className="text-gray-300">Hindi (हिन्दी)</span>
                  <span className="text-indigo-400 font-bold">21.3%</span>
                </div>
                <div className="w-full h-2 rounded-full bg-[#0d1117] overflow-hidden">
                  <div className="h-full bg-indigo-400 rounded-full" style={{ width: '21.3%' }}></div>
                </div>
              </div>
            </div>

            <div className="p-3 rounded-lg bg-[#0d1117] border border-[#30363d] text-xs text-gray-300 space-y-1">
              <div className="font-semibold text-gray-200">Coordinated Multi-Lingual Sync</div>
              <p className="text-[11px] text-gray-400">
                Translations across all 3 languages were published within <strong>82 seconds</strong> of the primary botnet seed post.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
