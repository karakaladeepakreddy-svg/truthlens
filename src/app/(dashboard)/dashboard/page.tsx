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
    <div className="space-y-6 max-w-7xl mx-auto">
      {/* Top Banner: TruthScan / Emergency Management Center */}
      <div className="relative overflow-hidden rounded-2xl glass-panel p-6 border-slate-800 shadow-xl space-y-4">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-400 text-xs font-semibold">
              <span className="w-2 h-2 rounded-full bg-rose-400 animate-pulse"></span>
              Emergency Misinformation Event Under Active Monitoring
            </div>
            <h1 className="text-2xl lg:text-3xl font-extrabold tracking-tight text-white flex items-center gap-3">
              <span>Incident Command: Osman Sagar Dam Collapse Narrative</span>
            </h1>
            <p className="text-sm text-slate-300 max-w-3xl leading-relaxed">
              Real-time cross-modal correlation across <strong className="text-sky-400">12 coordinated bot accounts</strong>, <strong className="text-rose-400">1 voice clone</strong>, <strong className="text-amber-400">1 recycled 2018 photograph</strong>, and <strong className="text-indigo-400">3 languages</strong> against authentic dam reservoir telemetry.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <Link
              href="/analyze"
              className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-sky-500 to-indigo-600 hover:from-sky-400 hover:to-indigo-500 text-slate-950 font-bold text-xs shadow-lg shadow-sky-500/20 transition-all flex items-center gap-2"
            >
              <span>🔍</span>
              <span>Open Authenticity Studio</span>
            </Link>
            <Link
              href="/network"
              className="px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700 hover:border-sky-400 text-slate-200 text-xs font-medium transition-all flex items-center gap-2"
            >
              <span>🕸️</span>
              <span>Inspect Botnet (12)</span>
            </Link>
          </div>
        </div>

        {/* Public Safety Reassurance Strip */}
        <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800/80 flex flex-wrap items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2">
            <span className="text-emerald-400 font-bold">✅ Reservoir Ground Truth:</span>
            <span className="text-slate-300">
              Osman Sagar level: <strong>1,788.2 ft</strong> (Safe threshold: 1,790 ft). Zero structural damage.
            </span>
          </div>
          <span className="text-[11px] font-mono text-sky-400 bg-slate-950 px-2 py-0.5 rounded border border-slate-800">
            Source: TG-SDMA Sensor #OS-04
          </span>
        </div>
      </div>

      {/* 4 Core Verification Metric Counters */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Contradicted */}
        <div className="p-5 rounded-2xl glass-panel relative overflow-hidden border-rose-500/30">
          <div className="flex items-center justify-between text-slate-400 text-xs font-medium">
            <span>Contradicted by Facts</span>
            <span className="text-rose-400 text-base">🚫</span>
          </div>
          <div className="mt-2 flex items-baseline gap-2">
            <span className="text-3xl font-black text-rose-400">18</span>
            <span className="text-xs text-rose-400/80">+12 in last 20m</span>
          </div>
          <p className="mt-1 text-xs text-slate-400">Refuted by live dam sensors & PIB Fact Check</p>
        </div>

        {/* Misleading */}
        <div className="p-5 rounded-2xl glass-panel relative overflow-hidden border-amber-500/30">
          <div className="flex items-center justify-between text-slate-400 text-xs font-medium">
            <span>Misleading / Recycled</span>
            <span className="text-amber-400 text-base">⚠️</span>
          </div>
          <div className="mt-2 flex items-baseline gap-2">
            <span className="text-3xl font-black text-amber-400">24</span>
            <span className="text-xs text-amber-400/80">2018 flood photo</span>
          </div>
          <p className="mt-1 text-xs text-slate-400">Authentic photo reused with false location claim</p>
        </div>

        {/* Verified Authentic */}
        <div className="p-5 rounded-2xl glass-panel relative overflow-hidden border-emerald-500/30">
          <div className="flex items-center justify-between text-slate-400 text-xs font-medium">
            <span>Verified Official</span>
            <span className="text-emerald-400 text-base">✅</span>
          </div>
          <div className="mt-2 flex items-baseline gap-2">
            <span className="text-3xl font-black text-emerald-400">6</span>
            <span className="text-xs text-emerald-400/80">Government Briefs</span>
          </div>
          <p className="mt-1 text-xs text-slate-400">Certified bulletins from District Collector & Police</p>
        </div>

        {/* Unverified Ingested */}
        <div className="p-5 rounded-2xl glass-panel relative overflow-hidden border-sky-500/30">
          <div className="flex items-center justify-between text-slate-400 text-xs font-medium">
            <span>Under AI Review</span>
            <span className="text-sky-400 text-base">⏳</span>
          </div>
          <div className="mt-2 flex items-baseline gap-2">
            <span className="text-3xl font-black text-sky-400">89</span>
            <span className="text-xs text-sky-400/80">Pipeline Queue</span>
          </div>
          <p className="mt-1 text-xs text-slate-400">Vision & Audio deep learning models evaluating</p>
        </div>
      </div>

      {/* Temporal Propagation & Incident Simulation Stepper */}
      <div className="rounded-2xl glass-panel p-6 space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800/80 pb-3">
          <div>
            <h3 className="font-bold text-base text-white flex items-center gap-2">
              <span>📈 How the Misinformation Spread Over Time</span>
            </h3>
            <p className="text-xs text-slate-400">
              Tracking viral velocity across coordinated bot amplification vs official counter-mitigation
            </p>
          </div>
          <span className="text-xs font-medium text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/20">
            Counter-Mitigation Active
          </span>
        </div>

        {/* Interactive Steps */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
          {simulationSteps.map((step, idx) => (
            <button
              key={idx}
              onClick={() => setActiveSimulationStep(idx)}
              className={`p-3.5 rounded-xl text-left transition-all border ${
                activeSimulationStep === idx
                  ? 'bg-slate-800 border-sky-400 text-white shadow-sm'
                  : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:text-white'
              }`}
            >
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-[11px] font-mono font-bold text-sky-400">{step.time}</span>
                <span className="text-[10px] px-1.5 py-0.2 rounded bg-slate-950 text-slate-300 font-medium">
                  {step.status}
                </span>
              </div>
              <div className="font-semibold text-xs text-slate-200 mb-1">{step.title}</div>
              <p className="text-[11px] text-slate-400 line-clamp-2 leading-relaxed">{step.desc}</p>
            </button>
          ))}
        </div>

        {/* Velocity Curve */}
        <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
          <div className="flex justify-between text-xs text-slate-400">
            <span>Viral Velocity (Shares / Minute)</span>
            <span className="text-rose-400 font-semibold">
              Peak: 850 shares/min at 10:03 AM → Drop to 45 shares/min after TruthLens rebuttal
            </span>
          </div>

          <div className="h-20 flex items-end gap-2 pt-2">
            {[
              { label: '10:00', bot: 20, org: 5 },
              { label: '10:01', bot: 65, org: 15 },
              { label: '10:02', bot: 85, org: 35 },
              { label: '10:03', bot: 95, org: 55 },
              { label: '10:04', bot: 80, org: 50 },
              { label: '10:05', bot: 40, org: 70 },
              { label: '10:06', bot: 20, org: 85 },
              { label: '10:08', bot: 10, org: 90 },
              { label: '10:10', bot: 5, org: 95 },
              { label: '10:14', bot: 2, org: 98 },
            ].map((bar, i) => (
              <div key={i} className="flex-1 flex flex-col items-center gap-1">
                <div className="w-full flex flex-col justify-end h-16 rounded-sm overflow-hidden bg-slate-900">
                  <div className="w-full bg-rose-500 transition-all" style={{ height: `${bar.bot}%` }}></div>
                  <div className="w-full bg-emerald-500 transition-all" style={{ height: `${bar.org * 0.4}%` }}></div>
                </div>
                <span className="text-[10px] text-slate-500">{bar.label}</span>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-between text-[11px] text-slate-400 pt-1">
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-sm bg-rose-500 inline-block"></span>
                Botnet Viral Surge
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-sm bg-emerald-500 inline-block"></span>
                Official Rebuttal Reach
              </span>
            </div>
            <span className="text-sky-400 font-medium">Reproduction Rate ($R_0$): 4.8 → 0.4 (Contained)</span>
          </div>
        </div>
      </div>

      {/* Bottom Grid: Multi-Modal Corroboration & Multilingual Spread */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-base font-bold text-white flex items-center gap-2">
              <span>🔬 Multi-Modal Cross-Referenced Evidence</span>
            </h2>
            <span className="text-xs text-sky-400 font-medium">420 events ingested / min</span>
          </div>

          <div className="space-y-4">
            {SCENARIO_MEDIA_ANALYSIS.map((item) => (
              <div
                key={item.id}
                className="rounded-2xl glass-panel p-5 space-y-4 hover:border-slate-700 transition-all"
              >
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-3">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono px-2 py-0.5 rounded bg-slate-900 text-sky-400 border border-slate-800">
                      {item.id}
                    </span>
                    <span className="text-xs font-semibold uppercase text-slate-400">
                      {item.mediaType}
                    </span>
                    <span className="text-xs text-slate-500">· {item.timestamp}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className={`text-xs font-bold px-2.5 py-0.5 rounded-full border ${
                      item.status === 'CONTRADICTED'
                        ? 'bg-rose-500/10 text-rose-400 border-rose-500/30'
                        : 'bg-amber-500/10 text-amber-400 border-amber-500/30'
                    }`}>
                      {item.status}
                    </span>
                    <span className="text-xs font-medium text-slate-300 bg-slate-900 px-2 py-0.5 rounded border border-slate-800">
                      Deepfake Risk: {item.deepfakeScore}%
                    </span>
                  </div>
                </div>

                <div>
                  <h3 className="font-bold text-base text-slate-100">{item.title}</h3>
                  <p className="mt-1 text-xs text-slate-300 leading-relaxed">{item.summary}</p>
                </div>

                {item.claimVerification && (
                  <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800/80 space-y-2">
                    <div className="text-xs font-semibold text-slate-400 flex items-center justify-between">
                      <span className="text-sky-400 flex items-center gap-1.5">
                        <span>⚖️</span>
                        <span>Ground-Truth Verification Chain (XAI)</span>
                      </span>
                      <span className="text-emerald-400 font-semibold text-[11px]">
                        Confidence: {item.confidenceScore}%
                      </span>
                    </div>

                    <div className="space-y-1.5">
                      {item.claimVerification.evidenceChain.map((step) => (
                        <div key={step.step} className="text-xs text-slate-300 flex items-start gap-2">
                          <span className="text-sky-400 font-bold font-mono">[{step.step}]</span>
                          <div>
                            <span className="text-slate-400 font-medium">{step.source}: </span>
                            <span>{step.finding}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Right 1 Col: Multilingual Spread */}
        <div className="space-y-6">
          <div className="rounded-2xl glass-panel p-5 space-y-4">
            <h3 className="font-bold text-sm text-white flex items-center justify-between">
              <span>🌐 Multilingual Distribution Ratio</span>
              <span className="text-xs text-sky-400 font-medium">10,130 Posts</span>
            </h3>

            <div className="space-y-3">
              <div>
                <div className="flex justify-between text-xs mb-1">
                  <span className="text-slate-300">Telugu (తెలుగు)</span>
                  <span className="text-sky-400 font-bold">46.5%</span>
                </div>
                <div className="w-full h-2 rounded-full bg-slate-900 overflow-hidden">
                  <div className="h-full bg-sky-400 rounded-full" style={{ width: '46.5%' }}></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs mb-1">
                  <span className="text-slate-300">English</span>
                  <span className="text-indigo-400 font-bold">32.2%</span>
                </div>
                <div className="w-full h-2 rounded-full bg-slate-900 overflow-hidden">
                  <div className="h-full bg-indigo-400 rounded-full" style={{ width: '32.2%' }}></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs mb-1">
                  <span className="text-slate-300">Hindi (हिन्दी)</span>
                  <span className="text-purple-400 font-bold">21.3%</span>
                </div>
                <div className="w-full h-2 rounded-full bg-slate-900 overflow-hidden">
                  <div className="h-full bg-purple-400 rounded-full" style={{ width: '21.3%' }}></div>
                </div>
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800 text-xs text-slate-300 space-y-1">
              <div className="font-semibold text-slate-200">Rapid Multi-Lingual Sync</div>
              <p className="text-[11px] text-slate-400 leading-relaxed">
                Translations across all 3 languages were published within <strong>82 seconds</strong> of the primary botnet seed post.
              </p>
            </div>
          </div>

          {/* Active Alerts */}
          <div className="rounded-2xl glass-panel p-5 space-y-4">
            <h3 className="font-bold text-sm text-white flex items-center justify-between">
              <span>🔔 Real-Time Incident Alerts</span>
              <span className="w-2 h-2 rounded-full bg-rose-400 animate-pulse"></span>
            </h3>

            <div className="space-y-3">
              {alerts.map((alert) => (
                <div key={alert.id} className="p-3 rounded-xl bg-slate-900/60 border border-slate-800 space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-rose-500/10 text-rose-400">
                      {alert.severity}
                    </span>
                    <span className="text-[10px] text-slate-400">{alert.timestamp}</span>
                  </div>
                  <div className="font-semibold text-xs text-slate-200">{alert.title}</div>
                  <p className="text-[11px] text-slate-400 leading-relaxed">{alert.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
