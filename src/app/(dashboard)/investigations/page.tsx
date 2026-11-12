'use client';

import { useState } from 'react';

export default function InvestigationsPage() {
  const [showDossierModal, setShowDossierModal] = useState<boolean>(false);

  return (
    <div className="space-y-6">
      {/* Header & Export Intelligence Briefing */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[#30363d] pb-5">
        <div>
          <div className="text-xs font-mono text-cyan-400">DOSSIER #TG-2026-NOV12-091</div>
          <h1 className="text-2xl font-black text-white flex items-center gap-2">
            <span>📋 Forensic Investigation & Provenance Traceability Report</span>
          </h1>
          <p className="text-sm text-gray-300">
            End-to-end evidence reconstruction for Law Enforcement & Disaster Response Authorities
          </p>
        </div>

        <button
          onClick={() => setShowDossierModal(true)}
          className="px-4 py-2.5 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-black font-bold text-xs font-mono flex items-center gap-2 transition-all shadow-lg shadow-cyan-500/20"
        >
          <span>📄</span>
          <span>View Official Agency Dossier</span>
        </button>
      </div>

      {/* Case Overview Summary Card */}
      <div className="p-6 rounded-xl bg-[#161b22] border border-[#30363d] space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#30363d] pb-3">
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono px-2 py-0.5 rounded bg-red-950 text-red-300 border border-red-800">
              CLASSIFICATION: CRITICAL PSYOP
            </span>
            <span className="text-xs text-gray-400 font-mono">Incident Target: Critical Water Infrastructure</span>
          </div>
          <span className="text-xs font-mono text-emerald-400">Verdict Confidence: 99.2% Provenance Certainty</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs font-mono">
          <div className="p-3 rounded bg-[#0d1117] border border-[#30363d]">
            <div className="text-gray-400">Origination Vector</div>
            <div className="text-sm font-bold text-gray-200 mt-1">Telegram Closed Channel + X Bot Burst</div>
          </div>
          <div className="p-3 rounded bg-[#0d1117] border border-[#30363d]">
            <div className="text-gray-400">Coordinated Accounts</div>
            <div className="text-sm font-bold text-red-400 mt-1">12 Identified (Syndicate-Delta)</div>
          </div>
          <div className="p-3 rounded bg-[#0d1117] border border-[#30363d]">
            <div className="text-gray-400">Debunk Broadcast Time</div>
            <div className="text-sm font-bold text-emerald-400 mt-1">4.2 Minutes from Ingestion</div>
          </div>
        </div>
      </div>

      {/* Timeline Reconstruction: The 10:00 AM Crisis Progression */}
      <div className="rounded-xl bg-[#161b22] border border-[#30363d] p-6 space-y-5">
        <h3 className="font-bold text-base text-white flex items-center gap-2">
          <span>⏱️ Chronological Incident Reconstruction Timeline</span>
          <span className="text-xs text-gray-400 font-normal font-mono">(Sync delta analysis)</span>
        </h3>

        <div className="relative border-l-2 border-cyan-500/40 ml-4 pl-6 space-y-6">
          {/* 10:00 AM */}
          <div className="relative">
            <div className="absolute -left-[31px] top-1 w-3.5 h-3.5 rounded-full bg-cyan-400 border-2 border-[#0a0a0f]"></div>
            <div className="text-xs font-mono text-cyan-400">10:00:12 AM — SEED POST DEPLOYED</div>
            <div className="font-bold text-sm text-gray-100 mt-0.5">Manipulated Dam Collapse Video Injected</div>
            <p className="text-xs text-gray-300 mt-1 leading-relaxed">
              Account <strong>@NewsFlashExpress</strong> published a 12-second clip depicting a catastrophic spillway breach with sensationalist captions. Video composite combined 2021 archival release with a GAN-rendered collapse wavefront.
            </p>
          </div>

          {/* 10:00:44 AM */}
          <div className="relative">
            <div className="absolute -left-[31px] top-1 w-3.5 h-3.5 rounded-full bg-red-400 border-2 border-[#0a0a0f]"></div>
            <div className="text-xs font-mono text-red-400">10:00:44 AM (+32s) — MULTI-BOT SYNCHRONIZATION</div>
            <div className="font-bold text-sm text-gray-100 mt-0.5">Telugu & Hindi Translations Broadcast Concurrently</div>
            <p className="text-xs text-gray-300 mt-1 leading-relaxed">
              Bots <strong>@TG_PulseBot_09</strong> and <strong>@DeshVaniAlerts</strong> pushed synthesized captions in Telugu and Hindi within 32 seconds, bypassing traditional single-language content filters.
            </p>
          </div>

          {/* 10:01:20 AM */}
          <div className="relative">
            <div className="absolute -left-[31px] top-1 w-3.5 h-3.5 rounded-full bg-amber-400 border-2 border-[#0a0a0f]"></div>
            <div className="text-xs font-mono text-amber-400">10:01:20 AM (+1m 08s) — RECYCLED 2018 FLOOD MEDIA INJECTED</div>
            <div className="font-bold text-sm text-gray-100 mt-0.5">Contextual Hijack of Kerala Flood Photography</div>
            <p className="text-xs text-gray-300 mt-1 leading-relaxed">
              Archival photograph from August 16, 2018 (Aluva, Kerala) circulated as &ldquo;Highway flooded near Outer Ring Road Hyderabad right now.&rdquo;
            </p>
          </div>

          {/* 10:02:10 AM */}
          <div className="relative">
            <div className="absolute -left-[31px] top-1 w-3.5 h-3.5 rounded-full bg-red-500 border-2 border-[#0a0a0f]"></div>
            <div className="text-xs font-mono text-red-400">10:02:10 AM (+1m 58s) — SYNTHETIC VOICE CLONE PAYLOAD</div>
            <div className="font-bold text-sm text-gray-100 mt-0.5">Cloned IAS District Collector Audio Broadcast</div>
            <p className="text-xs text-gray-300 mt-1 leading-relaxed">
              A 28-second cloned voice note of the District Collector ordering emergency evacuation of all downstream colonies was broadcast to 42 WhatsApp groups simultaneously.
            </p>
          </div>

          {/* 10:04:30 AM */}
          <div className="relative">
            <div className="absolute -left-[31px] top-1 w-3.5 h-3.5 rounded-full bg-emerald-400 border-2 border-[#0a0a0f]"></div>
            <div className="text-xs font-mono text-emerald-400">10:04:30 AM (+4m 18s) — TRUTHLENS AUTOMATED MITIGATION</div>
            <div className="font-bold text-sm text-gray-100 mt-0.5">Telemetry Cross-Check & PIB Counter-Debunk Dispatched</div>
            <p className="text-xs text-gray-300 mt-1 leading-relaxed">
              TruthLens correlated live IoT telemetry from TG-SDMA reservoir sensors (Level steady at 1,788.2 ft) and acoustic spectral analysis (14.5kHz vocoder cutoff), triggering automated fact-check bulletins across verified channels.
            </p>
          </div>
        </div>
      </div>

      {/* Forensic Evidence Corroboration Matrix */}
      <div className="rounded-xl bg-[#161b22] border border-[#30363d] p-6 space-y-4">
        <h3 className="font-bold text-base text-white">
          🛡️ Forensic Evidence Matrix & Ground-Truth Sensors
        </h3>

        <div className="overflow-x-auto">
          <table className="w-full text-xs text-left">
            <thead className="bg-[#0d1117] text-gray-400 font-mono border-b border-[#30363d]">
              <tr>
                <th className="p-3">Modality</th>
                <th className="p-3">Model / Technique</th>
                <th className="p-3">Observed Anomaly</th>
                <th className="p-3">Ground Truth Authority</th>
                <th className="p-3">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#30363d] font-mono text-gray-300">
              <tr>
                <td className="p-3 font-bold text-cyan-400">Video Asset</td>
                <td className="p-3">ViT + Optical Flow</td>
                <td className="p-3">Pixel shear in gate spillway at 0:04</td>
                <td className="p-3">TG-SDMA Reservoir CCTVs</td>
                <td className="p-3 text-red-400 font-bold">SYNTHETIC</td>
              </tr>
              <tr>
                <td className="p-3 font-bold text-purple-400">Audio Voice Note</td>
                <td className="p-3">Mel-Cepstral + Vocoder Analysis</td>
                <td className="p-3">14.5 kHz unnatural spectral cutoff</td>
                <td className="p-3">Collectorate Official Denial</td>
                <td className="p-3 text-red-400 font-bold">CLONED</td>
              </tr>
              <tr>
                <td className="p-3 font-bold text-amber-400">Highway Photo</td>
                <td className="p-3">Perceptual Hashing (pHash)</td>
                <td className="p-3">99.8% match to Aug 2018 Kerala event</td>
                <td className="p-3">Smart City CCTV ORR Cameras</td>
                <td className="p-3 text-amber-400 font-bold">RECYCLED</td>
              </tr>
              <tr>
                <td className="p-3 font-bold text-indigo-400">Text Claims</td>
                <td className="p-3">Groq Llama-3.3-70B RAG</td>
                <td className="p-3">Direct contradiction with telemetry</td>
                <td className="p-3">PIB Fact Check Bureau</td>
                <td className="p-3 text-red-400 font-bold">CONTRADICTED</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Official Agency Dossier Modal */}
      {showDossierModal && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-[#0d1117] border border-[#30363d] rounded-2xl max-w-2xl w-full p-6 space-y-6 shadow-2xl relative my-8">
            <button
              onClick={() => setShowDossierModal(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white text-lg font-bold"
            >
              ✕
            </button>

            {/* Official Report Header */}
            <div className="border-b border-gray-700 pb-4 text-center space-y-1">
              <div className="text-2xl">🇮🇳</div>
              <div className="text-xs font-mono font-bold tracking-widest text-cyan-400 uppercase">
                GOVERNMENT OF TELANGANA · STATE DISASTER MANAGEMENT AUTHORITY
              </div>
              <div className="text-lg font-black text-white">
                CYBER CRIME & MISINFORMATION FORENSIC INTELLIGENCE DOSSIER
              </div>
              <div className="text-[11px] font-mono text-gray-400">
                CASE REF: SEC/TG-SDMA/2026/DAM-091 · SECURITY LEVEL: CONFIDENTIAL
              </div>
            </div>

            {/* Content Sections */}
            <div className="space-y-4 text-xs font-mono text-gray-300">
              <div className="p-3 rounded bg-[#161b22] border border-gray-800 space-y-1">
                <span className="text-cyan-400 font-bold">EXECUTIVE SUMMARY:</span>
                <p className="text-gray-300 leading-relaxed">
                  On 12-Nov-2026 at 10:00:12 AM IST, an adversarial coordinated information operation was initiated targeting critical water infrastructure (Osman Sagar Reservoir). The campaign utilized a multi-stage attack payload consisting of a deepfake video composite, a cloned neural TTS voice note of the District Collector, an authentic 2018 flood photo recycled out of context, and synchronized botnet distribution in Telugu, Hindi, and English.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="p-3 rounded bg-[#161b22] border border-gray-800">
                  <div className="text-gray-400 text-[10px]">C2PA SIGNATURE STATUS</div>
                  <div className="text-red-400 font-bold mt-1">FORGED / ABSENT</div>
                </div>
                <div className="p-3 rounded bg-[#161b22] border border-gray-800">
                  <div className="text-gray-400 text-[10px]">PRIMARY SEED BOTNET</div>
                  <div className="text-red-400 font-bold mt-1">SYNDICATE-DELTA (12 ACCOUNTS)</div>
                </div>
              </div>

              <div className="p-3 rounded bg-[#161b22] border border-gray-800 space-y-1">
                <span className="text-emerald-400 font-bold">GROUND TRUTH SENSOR TELEMETRY:</span>
                <p className="text-gray-300">
                  TG-SDMA In-situ Reservoir Sensor #OS-04 confirms water level: 1,788.20 ft (Safe operating capacity: 1,790.00 ft). Zero structural displacement. Outflow is 0 cusecs.
                </p>
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center justify-between pt-4 border-t border-gray-800">
              <span className="text-[11px] font-mono text-gray-400">
                Generated by TruthLens Real-Time Intelligence Engine
              </span>
              <div className="flex gap-2">
                <button
                  onClick={() => window.print()}
                  className="px-4 py-2 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-black font-bold text-xs font-mono transition-colors"
                >
                  🖨️ Print / Save as PDF
                </button>
                <button
                  onClick={() => setShowDossierModal(false)}
                  className="px-4 py-2 rounded-lg bg-gray-800 hover:bg-gray-700 text-gray-200 text-xs font-mono"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
